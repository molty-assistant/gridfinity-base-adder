import { useState, useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FileUpload from './components/FileUpload';
import Viewport from './components/Viewport';
import Controls from './components/Controls';
import { parseSTL, getModelDimensions, exportSTL, downloadSTL } from './lib/stl';
import { initManifold } from './lib/manifold';
import {
  calculateGridUnits,
  generateGridfinityBase,
  geometryToManifoldMesh,
  manifoldMeshToArrays,
  BASE_HEIGHT,
  GRID_UNIT,
} from './lib/gridfinity';

interface ModelDims {
  width: number;
  depth: number;
  height: number;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
  centerX: number;
  centerY: number;
}

function App() {
  const [originalGeometry, setOriginalGeometry] =
    useState<THREE.BufferGeometry | null>(null);
  const [baseGeometry, setBaseGeometry] =
    useState<THREE.BufferGeometry | null>(null);
  const [combinedGeometry, setCombinedGeometry] =
    useState<THREE.BufferGeometry | null>(null);
  const [modelDims, setModelDims] = useState<ModelDims | null>(null);
  const [filename, setFilename] = useState<string>('');

  const [gridX, setGridX] = useState(1);
  const [gridY, setGridY] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [magnets, setMagnets] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [wasmReady, setWasmReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Store combined mesh data for export
  const combinedDataRef = useRef<{
    positions: Float32Array;
    indices: Uint32Array;
  } | null>(null);

  // Initialize Manifold WASM on mount
  useEffect(() => {
    initManifold()
      .then(() => setWasmReady(true))
      .catch((err) => {
        console.error('Failed to init Manifold:', err);
        setError('Failed to initialize 3D engine. Please refresh the page.');
      });
  }, []);

  // Handle STL file upload
  const handleFileLoaded = useCallback(
    (buffer: ArrayBuffer, name: string) => {
      setError(null);
      try {
        const geometry = parseSTL(buffer);
        const dims = getModelDimensions(geometry);

        // Center the model on XY and place bottom at z=0
        geometry.translate(-dims.centerX, -dims.centerY, -dims.minZ);
        geometry.computeBoundingBox();

        const updatedDims = getModelDimensions(geometry);

        setOriginalGeometry(geometry);
        setModelDims({
          width: updatedDims.width,
          depth: updatedDims.depth,
          height: updatedDims.height,
          minX: updatedDims.minX,
          maxX: updatedDims.maxX,
          minY: updatedDims.minY,
          maxY: updatedDims.maxY,
          minZ: updatedDims.minZ,
          maxZ: updatedDims.maxZ,
          centerX: updatedDims.centerX,
          centerY: updatedDims.centerY,
        });
        setFilename(name);

        // Auto-calculate grid units
        const units = calculateGridUnits(updatedDims.width, updatedDims.depth);
        setGridX(units.gridX);
        setGridY(units.gridY);

        // Reset previous results
        setBaseGeometry(null);
        setCombinedGeometry(null);
        combinedDataRef.current = null;
        setOffsetX(0);
        setOffsetY(0);
      } catch (err: any) {
        console.error('Failed to parse STL:', err);
        setError(`Failed to parse STL file: ${err.message}`);
      }
    },
    []
  );

  // Generate the base and union it with the model
  const handleGenerate = useCallback(async () => {
    if (!originalGeometry || !wasmReady) return;

    setIsProcessing(true);
    setError(null);
    setCombinedGeometry(null);
    setBaseGeometry(null);
    combinedDataRef.current = null;

    try {
      const wasm = await initManifold();

      // Generate base mesh
      const config = {
        gridX,
        gridY,
        offsetX,
        offsetY,
        magnets,
      };

      const baseManifold = await generateGridfinityBase(wasm, config);

      // Convert base to Three.js geometry for preview
      const baseMesh = baseManifold.getMesh();
      const baseArrays = manifoldMeshToArrays(baseMesh);

      const baseGeo = new THREE.BufferGeometry();
      baseGeo.setAttribute(
        'position',
        new THREE.BufferAttribute(baseArrays.positions, 3)
      );
      baseGeo.setIndex(new THREE.BufferAttribute(baseArrays.indices, 1));
      baseGeo.computeVertexNormals();
      setBaseGeometry(baseGeo);

      // Now convert original model to Manifold
      // We need to shift the model UP by the base height so the base sits underneath
      const shiftedGeometry = originalGeometry.clone();
      shiftedGeometry.translate(0, 0, BASE_HEIGHT);

      const modelMesh = geometryToManifoldMesh(shiftedGeometry, wasm);
      shiftedGeometry.dispose();

      let modelManifold: any;
      try {
        modelManifold = new wasm.Manifold(modelMesh);
      } catch (meshErr: any) {
        console.warn(
          'Model is not manifold, trying to fix...',
          meshErr.message
        );
        // Try to union the model with itself (sometimes helps)
        // Or just use the base alone
        setError(
          'Warning: The uploaded model is not watertight/manifold. The base was generated but could not be merged. Try a different STL file.'
        );

        // Show just the base
        setIsProcessing(false);
        baseManifold.delete();
        return;
      }

      // Boolean union
      const combined = modelManifold.add(baseManifold);

      // Get result mesh
      const resultMesh = combined.getMesh();
      const resultArrays = manifoldMeshToArrays(resultMesh);

      // Create Three.js geometry
      const combinedGeo = new THREE.BufferGeometry();
      combinedGeo.setAttribute(
        'position',
        new THREE.BufferAttribute(resultArrays.positions, 3)
      );
      combinedGeo.setIndex(
        new THREE.BufferAttribute(resultArrays.indices, 1)
      );
      combinedGeo.computeVertexNormals();

      setCombinedGeometry(combinedGeo);
      combinedDataRef.current = resultArrays;

      // Clean up Manifold objects
      combined.delete();
      modelManifold.delete();
      baseManifold.delete();
    } catch (err: any) {
      console.error('Generation failed:', err);
      setError(`Generation failed: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  }, [originalGeometry, wasmReady, gridX, gridY, offsetX, offsetY, magnets]);

  // Download the combined STL
  const handleDownload = useCallback(() => {
    if (!combinedDataRef.current) return;

    const { positions, indices } = combinedDataRef.current;
    const buffer = exportSTL(positions, indices);

    const baseName = filename.replace(/\.stl$/i, '');
    downloadSTL(buffer, `${baseName}_gridfinity_${gridX}x${gridY}.stl`);
  }, [filename, gridX, gridY]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="text-xl">🔲</div>
          <div>
            <h1 className="text-lg font-bold text-gray-100">
              Gridfinity Base Adder
            </h1>
            <p className="text-xs text-gray-500">
              Add Gridfinity-compatible bases to any STL model
            </p>
          </div>
          {!wasmReady && (
            <span className="ml-auto text-xs text-yellow-500 animate-pulse">
              Loading 3D engine...
            </span>
          )}
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Viewport */}
        <div className="flex-1 p-4">
          <div className="h-full min-h-[400px] lg:min-h-[600px] rounded-xl border border-gray-800 overflow-hidden">
            <Viewport
              originalGeometry={originalGeometry}
              baseGeometry={baseGeometry}
              combinedGeometry={combinedGeometry}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-72 p-4 lg:pl-0 border-t lg:border-t-0 lg:border-l border-gray-800">
          <Controls
            gridX={gridX}
            gridY={gridY}
            offsetX={offsetX}
            offsetY={offsetY}
            magnets={magnets}
            modelDims={modelDims}
            hasModel={!!originalGeometry}
            hasBase={!!baseGeometry}
            hasCombined={!!combinedGeometry}
            isProcessing={isProcessing}
            onGridXChange={setGridX}
            onGridYChange={setGridY}
            onOffsetXChange={setOffsetX}
            onOffsetYChange={setOffsetY}
            onMagnetsChange={setMagnets}
            onGenerate={handleGenerate}
            onDownload={handleDownload}
          />

          {error && (
            <div className="mt-4 p-3 rounded-lg bg-red-950/50 border border-red-800 text-xs text-red-300">
              {error}
            </div>
          )}

          <div className="mt-6 text-xs text-gray-600 space-y-1">
            <p>Grid unit: {GRID_UNIT}mm × {GRID_UNIT}mm</p>
            <p>Base height: {BASE_HEIGHT.toFixed(1)}mm</p>
            <p>All processing runs in your browser.</p>
          </div>
        </div>
      </div>

      {/* File upload footer */}
      <div className="p-4 border-t border-gray-800">
        <FileUpload
          onFileLoaded={handleFileLoaded}
          disabled={!wasmReady || isProcessing}
        />
        {filename && (
          <p className="mt-2 text-xs text-gray-500 text-center">
            Loaded: {filename}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
