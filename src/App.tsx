import { useState, useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FileUpload from './components/FileUpload';
import Viewport from './components/Viewport';
import Controls from './components/Controls';
import type { OrientationAxis } from './components/Controls';
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
import type { FitMode } from './lib/gridfinity';

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

/**
 * Build a rotation matrix that brings the chosen face to become -Z (bottom).
 * The default orientation is -Z facing down (no rotation needed).
 */
function getOrientationMatrix(axis: OrientationAxis): THREE.Matrix4 {
  const mat = new THREE.Matrix4();
  switch (axis) {
    case '-z': // default — no rotation
      return mat;
    case '+z': // flip upside down — rotate 180° around X
      return mat.makeRotationX(Math.PI);
    case '+x': // right face down — rotate -90° around Y
      return mat.makeRotationY(-Math.PI / 2);
    case '-x': // left face down — rotate +90° around Y
      return mat.makeRotationY(Math.PI / 2);
    case '+y': // back face down — rotate +90° around X
      return mat.makeRotationX(Math.PI / 2);
    case '-y': // front face down — rotate -90° around X
      return mat.makeRotationX(-Math.PI / 2);
    default:
      return mat;
  }
}

function App() {
  // Raw uploaded geometry (before orientation)
  const rawGeometryRef = useRef<THREE.BufferGeometry | null>(null);

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
  const [screws, setScrews] = useState(false);
  const [fitMode, setFitMode] = useState<FitMode>('inside');
  const [orientation, setOrientation] = useState<OrientationAxis>('-z');
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

  /**
   * Apply orientation to raw geometry: rotate, center XY, place bottom at Z=0
   */
  const applyOrientation = useCallback((rawGeo: THREE.BufferGeometry, axis: OrientationAxis): {
    geometry: THREE.BufferGeometry;
    dims: ModelDims;
  } => {
    const geo = rawGeo.clone();

    // Apply orientation rotation
    const rotMatrix = getOrientationMatrix(axis);
    geo.applyMatrix4(rotMatrix);
    geo.computeBoundingBox();

    const rawDims = getModelDimensions(geo);

    // Center on XY and place bottom at Z=0
    geo.translate(-rawDims.centerX, -rawDims.centerY, -rawDims.minZ);
    geo.computeBoundingBox();

    const dims = getModelDimensions(geo);

    return {
      geometry: geo,
      dims: {
        width: dims.width,
        depth: dims.depth,
        height: dims.height,
        minX: dims.minX,
        maxX: dims.maxX,
        minY: dims.minY,
        maxY: dims.maxY,
        minZ: dims.minZ,
        maxZ: dims.maxZ,
        centerX: dims.centerX,
        centerY: dims.centerY,
      },
    };
  }, []);

  /**
   * Recalculate grid units based on current dimensions and fit mode
   */
  const recalcGrid = useCallback((dims: ModelDims, mode: FitMode) => {
    if (mode === 'custom') return; // don't auto-change in custom mode
    const units = calculateGridUnits(dims.width, dims.depth, mode);
    setGridX(units.gridX);
    setGridY(units.gridY);
  }, []);

  // Handle STL file upload
  const handleFileLoaded = useCallback(
    (buffer: ArrayBuffer, name: string) => {
      setError(null);
      try {
        // Dispose old geometries to prevent memory leaks
        if (rawGeometryRef.current) rawGeometryRef.current.dispose();
        originalGeometry?.dispose();
        baseGeometry?.dispose();
        combinedGeometry?.dispose();

        const rawGeo = parseSTL(buffer);
        rawGeometryRef.current = rawGeo;

        const { geometry, dims } = applyOrientation(rawGeo, orientation);

        setOriginalGeometry(geometry);
        setModelDims(dims);
        setFilename(name);

        // Auto-calculate grid units
        const units = calculateGridUnits(dims.width, dims.depth, fitMode);
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
    [applyOrientation, orientation, fitMode, originalGeometry, baseGeometry, combinedGeometry]
  );

  // Handle orientation change
  const handleOrientationChange = useCallback((axis: OrientationAxis) => {
    if (!rawGeometryRef.current) return;

    // Dispose old geometries to prevent memory leaks
    originalGeometry?.dispose();
    baseGeometry?.dispose();
    combinedGeometry?.dispose();

    setOrientation(axis);
    const { geometry, dims } = applyOrientation(rawGeometryRef.current, axis);

    setOriginalGeometry(geometry);
    setModelDims(dims);

    // Recalculate grid for new orientation
    const units = calculateGridUnits(dims.width, dims.depth, fitMode);
    setGridX(units.gridX);
    setGridY(units.gridY);

    // Reset results
    setBaseGeometry(null);
    setCombinedGeometry(null);
    combinedDataRef.current = null;
    setOffsetX(0);
    setOffsetY(0);
  }, [applyOrientation, fitMode, originalGeometry, baseGeometry, combinedGeometry]);

  // Handle fit mode change
  const handleFitModeChange = useCallback((mode: FitMode) => {
    setFitMode(mode);
    if (modelDims) {
      recalcGrid(modelDims, mode);
    }
    // Reset results
    setBaseGeometry(null);
    setCombinedGeometry(null);
    combinedDataRef.current = null;
  }, [modelDims, recalcGrid]);

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
        screws,
      };

      const baseManifold = await generateGridfinityBase(wasm, config);

      // Convert base to Three.js geometry for preview
      const baseMesh = baseManifold.getMesh();
      const baseArrays = manifoldMeshToArrays(baseMesh);
      baseMesh.delete();

      const baseGeo = new THREE.BufferGeometry();
      baseGeo.setAttribute(
        'position',
        new THREE.BufferAttribute(baseArrays.positions, 3)
      );
      baseGeo.setIndex(new THREE.BufferAttribute(baseArrays.indices, 1));
      baseGeo.computeVertexNormals();
      setBaseGeometry(baseGeo);

      // Now convert original model to Manifold
      // Shift the model UP by the base height so the base sits underneath
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
        modelMesh.delete();
        setError(
          'The uploaded model has mesh errors (non-manifold geometry). Try repairing it with Microsoft 3D Builder (free, Windows) or Meshmixer (free) before uploading. Most STL repair tools can fix this automatically.'
        );
        setIsProcessing(false);
        baseManifold.delete();
        return;
      }
      modelMesh.delete();

      // Boolean union
      const combined = modelManifold.add(baseManifold);

      // Get result mesh
      const resultMesh = combined.getMesh();
      const resultArrays = manifoldMeshToArrays(resultMesh);
      resultMesh.delete();

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
  }, [originalGeometry, wasmReady, gridX, gridY, offsetX, offsetY, magnets, screws]);

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
              gridX={gridX}
              gridY={gridY}
              offsetX={offsetX}
              offsetY={offsetY}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 p-4 lg:pl-0 border-t lg:border-t-0 lg:border-l border-gray-800 overflow-y-auto max-h-screen">
          <Controls
            gridX={gridX}
            gridY={gridY}
            offsetX={offsetX}
            offsetY={offsetY}
            magnets={magnets}
            screws={screws}
            fitMode={fitMode}
            orientation={orientation}
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
            onScrewsChange={setScrews}
            onFitModeChange={handleFitModeChange}
            onOrientationChange={handleOrientationChange}
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
