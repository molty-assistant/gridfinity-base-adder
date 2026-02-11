import { useState, useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FileUpload from './components/FileUpload';
import FileInfoBar from './components/FileInfoBar';
import Viewport from './components/Viewport';
import Controls from './components/Controls';
import Toast from './components/Toast';
import type { OrientationAxis } from './components/Controls';
import { parseSTL, getModelDimensions, exportSTL, downloadSTL } from './lib/stl';
import { initManifold } from './lib/manifold';
import {
  calculateGridUnits,
  generateGridfinityBase,
  geometryToManifoldMesh,
  manifoldMeshToArrays,
  BASE_HEIGHT,
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
 */
function getOrientationMatrix(axis: OrientationAxis): THREE.Matrix4 {
  const mat = new THREE.Matrix4();
  switch (axis) {
    case '-z':
      return mat;
    case '+z':
      return mat.makeRotationX(Math.PI);
    case '+x':
      return mat.makeRotationY(-Math.PI / 2);
    case '-x':
      return mat.makeRotationY(Math.PI / 2);
    case '+y':
      return mat.makeRotationX(Math.PI / 2);
    case '-y':
      return mat.makeRotationX(-Math.PI / 2);
    default:
      return mat;
  }
}

function App() {
  const rawGeometryRef = useRef<THREE.BufferGeometry | null>(null);

  const [originalGeometry, setOriginalGeometry] =
    useState<THREE.BufferGeometry | null>(null);
  const [baseGeometry, setBaseGeometry] =
    useState<THREE.BufferGeometry | null>(null);
  const [combinedGeometry, setCombinedGeometry] =
    useState<THREE.BufferGeometry | null>(null);
  const [modelDims, setModelDims] = useState<ModelDims | null>(null);
  const [filename, setFilename] = useState<string>('');
  const [triangleCount, setTriangleCount] = useState(0);

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
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

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

  const applyOrientation = useCallback((rawGeo: THREE.BufferGeometry, axis: OrientationAxis): {
    geometry: THREE.BufferGeometry;
    dims: ModelDims;
  } => {
    const geo = rawGeo.clone();
    const rotMatrix = getOrientationMatrix(axis);
    geo.applyMatrix4(rotMatrix);
    geo.computeBoundingBox();
    const rawDims = getModelDimensions(geo);
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

  const recalcGrid = useCallback((dims: ModelDims, mode: FitMode) => {
    if (mode === 'custom') return;
    const units = calculateGridUnits(dims.width, dims.depth, mode);
    setGridX(units.gridX);
    setGridY(units.gridY);
  }, []);

  // Handle STL file upload
  const handleFileLoaded = useCallback(
    (buffer: ArrayBuffer, name: string) => {
      setError(null);
      try {
        if (rawGeometryRef.current) rawGeometryRef.current.dispose();
        originalGeometry?.dispose();
        baseGeometry?.dispose();
        combinedGeometry?.dispose();

        const rawGeo = parseSTL(buffer);
        rawGeometryRef.current = rawGeo;

        // Count triangles
        const posAttr = rawGeo.getAttribute('position');
        const indexAttr = rawGeo.index;
        const triCount = indexAttr ? indexAttr.count / 3 : posAttr.count / 3;
        setTriangleCount(Math.round(triCount));

        const { geometry, dims } = applyOrientation(rawGeo, orientation);

        setOriginalGeometry(geometry);
        setModelDims(dims);
        setFilename(name);

        const units = calculateGridUnits(dims.width, dims.depth, fitMode);
        setGridX(units.gridX);
        setGridY(units.gridY);

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

  // Handle removing the file
  const handleRemoveFile = useCallback(() => {
    if (rawGeometryRef.current) {
      rawGeometryRef.current.dispose();
      rawGeometryRef.current = null;
    }
    originalGeometry?.dispose();
    baseGeometry?.dispose();
    combinedGeometry?.dispose();

    setOriginalGeometry(null);
    setBaseGeometry(null);
    setCombinedGeometry(null);
    setModelDims(null);
    setFilename('');
    setTriangleCount(0);
    combinedDataRef.current = null;
    setOffsetX(0);
    setOffsetY(0);
    setOrientation('-z');
    setError(null);
  }, [originalGeometry, baseGeometry, combinedGeometry]);

  // Handle orientation change
  const handleOrientationChange = useCallback((axis: OrientationAxis) => {
    if (!rawGeometryRef.current) return;

    originalGeometry?.dispose();
    baseGeometry?.dispose();
    combinedGeometry?.dispose();

    setOrientation(axis);
    const { geometry, dims } = applyOrientation(rawGeometryRef.current, axis);

    setOriginalGeometry(geometry);
    setModelDims(dims);

    const units = calculateGridUnits(dims.width, dims.depth, fitMode);
    setGridX(units.gridX);
    setGridY(units.gridY);

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

      const config = {
        gridX,
        gridY,
        offsetX,
        offsetY,
        magnets,
        screws,
      };

      const baseManifold = await generateGridfinityBase(wasm, config);

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

      const combined = modelManifold.add(baseManifold);

      const resultMesh = combined.getMesh();
      const resultArrays = manifoldMeshToArrays(resultMesh);
      resultMesh.delete();

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

      combined.delete();
      modelManifold.delete();
      baseManifold.delete();

      // Show success toast
      setToast({ message: '✅ Base generated! Preview below.', type: 'success' });
    } catch (err: any) {
      console.error('Generation failed:', err);
      setError(`Generation failed: ${err.message}`);
      setToast({ message: '❌ Generation failed. Check error details.', type: 'error' });
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
    <div className="min-h-screen flex flex-col bg-gray-950">
      {/* Toast notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onDismiss={() => setToast(null)}
        />
      )}

      {/* Header */}
      <header className="border-b border-gray-800 px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="text-xl">🔲</div>
          <div>
            <h1 className="text-lg font-bold text-gray-100">
              Gridfinity Base Adder
            </h1>
            <p className="text-xs text-gray-500 hidden sm:block">
              Add Gridfinity-compatible bases to any STL model
            </p>
          </div>
          {!wasmReady && (
            <span className="ml-auto text-xs text-yellow-500 animate-pulse">
              Loading engine…
            </span>
          )}
        </div>
      </header>

      {/* Mobile layout: upload → viewport → controls (top to bottom) */}
      {/* Desktop layout: viewport (left) + sidebar (right), upload in sidebar top */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

        {/* Left side: Upload (mobile only) + Viewport */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* File upload — top on mobile, hidden on desktop (moved to sidebar) */}
          <div className="lg:hidden p-3 pb-0">
            {filename ? (
              <FileInfoBar
                filename={filename}
                triangleCount={triangleCount}
                dimensions={modelDims}
                onRemove={handleRemoveFile}
              />
            ) : (
              <FileUpload
                onFileLoaded={handleFileLoaded}
                disabled={!wasmReady || isProcessing}
              />
            )}
          </div>

          {/* Viewport */}
          <div className="flex-1 p-3 min-h-0">
            <div className="h-full rounded-xl border border-gray-800 overflow-hidden">
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
        </div>

        {/* Sidebar / Controls */}
        <div className="w-full lg:w-80 xl:w-96 border-t lg:border-t-0 lg:border-l border-gray-800 overflow-y-auto">
          <div className="p-3 lg:p-4 space-y-3">

            {/* File upload — desktop only (in sidebar) */}
            <div className="hidden lg:block">
              {filename ? (
                <FileInfoBar
                  filename={filename}
                  triangleCount={triangleCount}
                  dimensions={modelDims}
                  onRemove={handleRemoveFile}
                />
              ) : (
                <FileUpload
                  onFileLoaded={handleFileLoaded}
                  disabled={!wasmReady || isProcessing}
                />
              )}
            </div>

            {/* Processing indicator */}
            {isProcessing && (
              <div className="bg-blue-950/30 border border-blue-700/30 rounded-xl p-3 flex items-center gap-3">
                <div className="relative w-8 h-8 shrink-0">
                  <svg className="animate-spin w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-300">Generating base…</div>
                  <div className="text-xs text-blue-400/60">Boolean union in progress</div>
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="p-3 rounded-xl bg-red-950/50 border border-red-800 text-xs text-red-300">
                {error}
              </div>
            )}

            {/* Controls */}
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
              filename={filename}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
