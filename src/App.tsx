import { useState, useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { Manifold as WasmManifold } from 'manifold-3d';
import FileUpload from './components/FileUpload';
import FileInfoBar from './components/FileInfoBar';
import Viewport from './components/Viewport';
import Controls from './components/Controls';
import Toast from './components/Toast';
import LandingPage from './components/LandingPage';
import type { BasePlacement, OrientationAxis } from './components/Controls';
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
import {
  hasShareParams,
  decodeShareParams,
  encodeShareParams,
  buildShareUrl,
} from './lib/shareUrl';
import type { ShareableConfig } from './lib/shareUrl';

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

interface MeshArrays {
  positions: Float32Array;
  indices: Uint32Array;
}

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  return String(err);
}

function geometryToArrays(geometry: THREE.BufferGeometry): MeshArrays {
  const posAttr = geometry.getAttribute('position');
  if (!posAttr) {
    throw new Error('Geometry has no position attribute');
  }

  const positions = new Float32Array(posAttr.array.length);
  positions.set(posAttr.array as ArrayLike<number>);

  const index = geometry.getIndex();
  if (index) {
    return {
      positions,
      indices: new Uint32Array(index.array as ArrayLike<number>),
    };
  }

  const indices = new Uint32Array(posAttr.count);
  for (let i = 0; i < posAttr.count; i++) {
    indices[i] = i;
  }
  return { positions, indices };
}

function combineMeshArrays(parts: MeshArrays[]): MeshArrays {
  const totalPositions = parts.reduce((sum, p) => sum + p.positions.length, 0);
  const totalIndices = parts.reduce((sum, p) => sum + p.indices.length, 0);

  const positions = new Float32Array(totalPositions);
  const indices = new Uint32Array(totalIndices);

  let positionOffset = 0;
  let indexOffset = 0;
  let vertexOffset = 0;

  for (const part of parts) {
    positions.set(part.positions, positionOffset);

    for (let i = 0; i < part.indices.length; i++) {
      indices[indexOffset + i] = part.indices[i] + vertexOffset;
    }

    positionOffset += part.positions.length;
    indexOffset += part.indices.length;
    vertexOffset += part.positions.length / 3;
  }

  return { positions, indices };
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

  // Parse URL share params once on mount (before any other state init)
  const [urlInit] = useState<{ config: Partial<ShareableConfig> | null; error: boolean }>(() => {
    if (!hasShareParams(window.location.search)) return { config: null, error: false };
    try {
      return { config: decodeShareParams(window.location.search), error: false };
    } catch {
      return { config: null, error: true };
    }
  });
  const u = urlInit.config;

  const [originalGeometry, setOriginalGeometry] =
    useState<THREE.BufferGeometry | null>(null);
  const [baseGeometry, setBaseGeometry] =
    useState<THREE.BufferGeometry | null>(null);
  const [combinedGeometry, setCombinedGeometry] =
    useState<THREE.BufferGeometry | null>(null);
  const [modelDims, setModelDims] = useState<ModelDims | null>(null);
  const [filename, setFilename] = useState<string>('');
  const [triangleCount, setTriangleCount] = useState(0);

  const [gridX, setGridX] = useState(u?.gridX ?? 1);
  const [gridY, setGridY] = useState(u?.gridY ?? 1);
  const [offsetX, setOffsetX] = useState(u?.offsetX ?? 0);
  const [offsetY, setOffsetY] = useState(u?.offsetY ?? 0);
  const [magnets, setMagnets] = useState(u?.magnets ?? true);
  const [screws, setScrews] = useState(u?.screws ?? false);
  const [activeCells, setActiveCells] = useState<Set<string>>(u?.activeCells ?? new Set());
  const [fitMode, setFitMode] = useState<FitMode>(u?.fitMode ?? 'inside');
  const [orientation, setOrientation] = useState<OrientationAxis>(u?.orientation ?? '-z');
  const [placement, setPlacement] = useState<BasePlacement>(u?.placement ?? 'outside');
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

  // Show toast if URL params were present on load
  useEffect(() => {
    if (urlInit.error) {
      setToast({ message: '⚠️ Could not read share link — using defaults.', type: 'info' });
    } else if (urlInit.config) {
      setToast({ message: '🔗 Settings loaded from share link.', type: 'info' });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Silently update URL whenever settings change
  useEffect(() => {
    const config: ShareableConfig = {
      gridX, gridY, offsetX, offsetY, fitMode, magnets, screws, orientation, placement, activeCells,
    };
    const params = encodeShareParams(config);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  }, [gridX, gridY, offsetX, offsetY, fitMode, magnets, screws, orientation, placement, activeCells]);

  // Ko-fi floating widget
  useEffect(() => {
    const scriptId = 'kofi-overlay-widget-script';
    const containerId = 'kofi-sidebar-widget';

    const drawWidget = () => {
      if (window.__kofiOverlayInit) return;
      const overlay = window.kofiWidgetOverlay;
      if (!overlay || typeof overlay.draw !== 'function') return;
      if (!document.getElementById(containerId)) return;

      overlay.draw('lightscout', {
        type: 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#00b9fe',
        'floating-chat.donateButton.text-color': '#fff',
      }, containerId);
      window.__kofiOverlayInit = true;
    };

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing) {
      if (window.kofiWidgetOverlay) {
        drawWidget();
      } else {
        existing.addEventListener('load', drawWidget, { once: true });
      }
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.async = true;
    script.onload = drawWidget;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
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
        // Dispose previous uploaded geometry to avoid GPU memory leaks.
        if (rawGeometryRef.current) rawGeometryRef.current.dispose();

        const rawGeo = parseSTL(buffer);
        rawGeometryRef.current = rawGeo;

        // Count triangles
        const posAttr = rawGeo.getAttribute('position');
        const indexAttr = rawGeo.index;
        const triCount = indexAttr ? indexAttr.count / 3 : posAttr.count / 3;
        setTriangleCount(Math.round(triCount));

        const { geometry, dims } = applyOrientation(rawGeo, orientation);

        setOriginalGeometry((prev) => {
          prev?.dispose();
          return geometry;
        });
        setModelDims(dims);
        setFilename(name);

        const units = calculateGridUnits(dims.width, dims.depth, fitMode);
        setGridX(units.gridX);
        setGridY(units.gridY);
        setPlacement('outside');
        setActiveCells(new Set());

        // Reset previous results
        setBaseGeometry((prev) => {
          prev?.dispose();
          return null;
        });
        setCombinedGeometry((prev) => {
          prev?.dispose();
          return null;
        });
        combinedDataRef.current = null;
        setOffsetX(0);
        setOffsetY(0);
      } catch (err: unknown) {
        console.error('Failed to parse STL:', err);
        setError(`Failed to parse STL file: ${getErrorMessage(err)}`);
      }
    },
    [applyOrientation, orientation, fitMode]
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
    setPlacement('outside');
    setActiveCells(new Set());
    setError(null);
  }, [originalGeometry, baseGeometry, combinedGeometry]);

  // Handle orientation change
  const handleOrientationChange = useCallback((axis: OrientationAxis) => {
    if (!rawGeometryRef.current) return;

    setOrientation(axis);
    const { geometry, dims } = applyOrientation(rawGeometryRef.current, axis);

    setOriginalGeometry((prev) => {
      prev?.dispose();
      return geometry;
    });
    setModelDims(dims);

    // Recalculate grid for new orientation (preserves custom mode values)
    recalcGrid(dims, fitMode);

    // Reset results
    setBaseGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    setCombinedGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    combinedDataRef.current = null;
    setOffsetX(0);
    setOffsetY(0);
  }, [applyOrientation, fitMode, recalcGrid]);

  // Handle fit mode change
  const handleFitModeChange = useCallback((mode: FitMode) => {
    setFitMode(mode);
    if (modelDims) {
      recalcGrid(modelDims, mode);
    }
    // Reset results and active cells
    setBaseGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    setCombinedGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    combinedDataRef.current = null;
    setActiveCells(new Set());
  }, [modelDims, recalcGrid]);

  // Handle toggling individual grid cells (for custom mode)
  const handleToggleCell = useCallback((x: number, y: number) => {
    setActiveCells((prev) => {
      const next = new Set(prev);
      const key = `${x},${y}`;
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
    // Reset geometry when cells change
    setBaseGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    setCombinedGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    combinedDataRef.current = null;
  }, []);

  // Reset active cells when grid dimensions change in custom mode
  const handleGridXChange = useCallback((value: number) => {
    setGridX(value);
    if (fitMode === 'custom') {
      setActiveCells(new Set());
    }
    setBaseGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    setCombinedGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    combinedDataRef.current = null;
  }, [fitMode]);

  const handleGridYChange = useCallback((value: number) => {
    setGridY(value);
    if (fitMode === 'custom') {
      setActiveCells(new Set());
    }
    setBaseGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    setCombinedGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    combinedDataRef.current = null;
  }, [fitMode]);

  const handlePlacementChange = useCallback((value: BasePlacement) => {
    setPlacement(value);
    setBaseGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    setCombinedGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    combinedDataRef.current = null;
  }, []);

  const handleCopyShareLink = useCallback(() => {
    const config: ShareableConfig = {
      gridX, gridY, offsetX, offsetY, fitMode, magnets, screws, orientation, placement, activeCells,
    };
    const url = buildShareUrl(config);
    navigator.clipboard.writeText(url).then(() => {
      setToast({ message: '🔗 Share link copied to clipboard!', type: 'success' });
    }).catch(() => {
      setToast({ message: '❌ Failed to copy link to clipboard.', type: 'error' });
    });
  }, [gridX, gridY, offsetX, offsetY, fitMode, magnets, screws, orientation, placement, activeCells]);

  // Generate the base and union it with the model
  const handleGenerate = useCallback(async () => {
    if (!originalGeometry || !wasmReady) return;

    setIsProcessing(true);
    setError(null);
    setCombinedGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    setBaseGeometry((prev) => {
      prev?.dispose();
      return null;
    });
    combinedDataRef.current = null;

    let baseManifold: WasmManifold | null = null;
    let modelManifold: WasmManifold | null = null;
    let combined: WasmManifold | null = null;

    try {
      const wasm = await initManifold();

      const config = {
        gridX,
        gridY,
        offsetX,
        offsetY,
        magnets,
        screws,
        activeCells: fitMode === 'custom' && activeCells.size > 0 ? activeCells : undefined,
      };

      baseManifold = await generateGridfinityBase(wasm, config);

      const baseMesh = baseManifold.getMesh();
      const baseArrays = manifoldMeshToArrays(baseMesh);

      const baseGeo = new THREE.BufferGeometry();
      baseGeo.setAttribute(
        'position',
        new THREE.BufferAttribute(baseArrays.positions, 3)
      );
      baseGeo.setIndex(new THREE.BufferAttribute(baseArrays.indices, 1));
      baseGeo.computeVertexNormals();

      // Match preview placement to final boolean placement.
      if (placement === 'outside') {
        baseGeo.translate(0, 0, -BASE_HEIGHT);
      }
      setBaseGeometry(baseGeo);

      const shiftedGeometry = originalGeometry.clone();
      if (placement === 'outside') {
        shiftedGeometry.translate(0, 0, BASE_HEIGHT);
      }

      const modelMesh = geometryToManifoldMesh(shiftedGeometry, wasm);

      try {
        modelManifold = new wasm.Manifold(modelMesh);
      } catch (meshErr: unknown) {
        console.warn(
          'Model is not manifold, trying to fix...',
          getErrorMessage(meshErr)
        );

        // Fallback: keep model + base as overlapping solids (no boolean).
        // Many slicers can union overlapping volumes at slice time.
        const modelArrays = geometryToArrays(shiftedGeometry);
        const fallbackArrays = combineMeshArrays([modelArrays, baseArrays]);
        const fallbackGeo = new THREE.BufferGeometry();
        fallbackGeo.setAttribute(
          'position',
          new THREE.BufferAttribute(fallbackArrays.positions, 3)
        );
        fallbackGeo.setIndex(new THREE.BufferAttribute(fallbackArrays.indices, 1));
        fallbackGeo.computeVertexNormals();

        setCombinedGeometry(fallbackGeo);
        combinedDataRef.current = fallbackArrays;
        setError(
          'Boolean union failed on this STL, so compatibility mode was used (model + base exported together as overlapping solids). Most slicers merge these automatically.'
        );
        setToast({
          message: '⚠️ Used compatibility mode for this STL',
          type: 'info',
        });
        return;
      } finally {
        shiftedGeometry.dispose();
      }

      // Boolean union
      const modelVolume = modelManifold.volume();
      combined = modelManifold.add(baseManifold);
      const combinedVolume = combined.volume();

      if (placement === 'inside' && Math.abs(combinedVolume - modelVolume) < 1) {
        setError(
          'Inside mode added almost no new volume. This model is likely mostly solid at that face. Try Turn Into Box, or rotate Bottom Face to an interior-facing side.'
        );
        setToast({
          message: '⚠️ Inside mode had minimal effect on this STL',
          type: 'info',
        });
      }

      const resultMesh = combined.getMesh();
      const resultArrays = manifoldMeshToArrays(resultMesh);

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
      setToast({ message: '✅ Base generated! Preview below.', type: 'success' });
    } catch (err: unknown) {
      console.error('Generation failed:', err);
      setError(`Generation failed: ${getErrorMessage(err)}`);
      setToast({ message: '❌ Generation failed. Check error details.', type: 'error' });
    } finally {
      combined?.delete();
      modelManifold?.delete();
      baseManifold?.delete();
      setIsProcessing(false);
    }
  }, [originalGeometry, wasmReady, gridX, gridY, offsetX, offsetY, magnets, screws, placement, fitMode, activeCells]);

  // Download the combined STL
  const handleDownload = useCallback(() => {
    if (!combinedDataRef.current) return;

    const { positions, indices } = combinedDataRef.current;
    const buffer = exportSTL(positions, indices);

    const baseName = filename.replace(/\.stl$/i, '');
    downloadSTL(buffer, `${baseName}_gridfinity_${gridX}x${gridY}.stl`);
  }, [filename, gridX, gridY]);

  return (
    <LandingPage wasmReady={wasmReady} appVersion={__APP_VERSION__}>
      {/* Toast notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onDismiss={() => setToast(null)}
        />
      )}

      <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 shadow-2xl shadow-black/30">
        {/* Mobile layout: sidebar (upload + controls) first, viewport second */}
        {/* Desktop layout: viewport (left) + sidebar (right), upload in sidebar top */}
        <div className="flex flex-col lg:min-h-[740px] lg:flex-row">

          {/* Left side: Viewport */}
          <div className="order-2 flex min-h-[420px] flex-1 flex-col lg:order-1 lg:min-h-0">
            <div className="flex-1 p-3 sm:p-4">
              <div className="h-full min-h-[360px] overflow-hidden rounded-xl border border-gray-800">
                <Viewport
                  originalGeometry={originalGeometry}
                  baseGeometry={baseGeometry}
                  combinedGeometry={combinedGeometry}
                  gridX={gridX}
                  gridY={gridY}
                  offsetX={offsetX}
                  offsetY={offsetY}
                  placement={placement}
                  activeCells={activeCells}
                />
              </div>
            </div>
          </div>

          {/* Sidebar / Controls */}
          <div className="order-1 max-h-[740px] w-full overflow-y-auto border-b border-gray-800 lg:order-2 lg:w-80 lg:border-b-0 lg:border-l xl:w-96">
            <div className="space-y-3 p-3 lg:p-4">

              {/* File upload — always top of sidebar */}
              <div>
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
                <div className="flex items-center gap-3 rounded-xl border border-blue-700/30 bg-blue-950/30 p-3">
                  <div className="relative h-8 w-8 shrink-0">
                    <svg className="h-8 w-8 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24">
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
                <div className="rounded-xl border border-red-800 bg-red-950/50 p-3 text-xs text-red-300">
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
                placement={placement}
                modelDims={modelDims}
                hasModel={!!originalGeometry}
                hasBase={!!baseGeometry}
                hasCombined={!!combinedGeometry}
                isProcessing={isProcessing}
                filename={filename}
                activeCells={activeCells}
                onGridXChange={handleGridXChange}
                onGridYChange={handleGridYChange}
                onOffsetXChange={setOffsetX}
                onOffsetYChange={setOffsetY}
                onMagnetsChange={setMagnets}
                onScrewsChange={setScrews}
                onFitModeChange={handleFitModeChange}
                onOrientationChange={handleOrientationChange}
                onPlacementChange={handlePlacementChange}
                onGenerate={handleGenerate}
                onDownload={handleDownload}
                onToggleCell={handleToggleCell}
                onCopyShareLink={handleCopyShareLink}
              />

              <div id="kofi-sidebar-widget" className="kofi-sidebar-widget" />
            </div>
          </div>
        </div>
      </div>
    </LandingPage>
  );
}

export default App;
