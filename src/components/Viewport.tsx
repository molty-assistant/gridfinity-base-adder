import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GRID_UNIT } from '../lib/gridfinity';
import EmptyState from './EmptyState';

interface ViewportProps {
  originalGeometry: THREE.BufferGeometry | null;
  baseGeometry: THREE.BufferGeometry | null;
  combinedGeometry: THREE.BufferGeometry | null;
  gridX: number;
  gridY: number;
  offsetX: number;
  offsetY: number;
}

export default function Viewport({
  originalGeometry,
  baseGeometry,
  combinedGeometry,
  gridX,
  gridY,
  offsetX,
  offsetY,
}: ViewportProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    originalMesh: THREE.Mesh | null;
    baseMesh: THREE.Mesh | null;
    combinedMesh: THREE.Mesh | null;
    gridOverlay: THREE.Group | null;
    bgGrid: THREE.GridHelper | null;
    animId: number;
  } | null>(null);

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x0a0a0f, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      10000
    );
    camera.position.set(100, 100, 100);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.target.set(0, 0, 0);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight1.position.set(100, 200, 100);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8888ff, 0.5);
    dirLight2.position.set(-100, -50, -100);
    scene.add(dirLight2);

    // Background grid helper
    const bgGrid = new THREE.GridHelper(200, 20, 0x333333, 0x222222);
    bgGrid.rotation.x = Math.PI / 2; // rotate to XY plane
    scene.add(bgGrid);

    const state = {
      renderer,
      scene,
      camera,
      controls,
      originalMesh: null as THREE.Mesh | null,
      baseMesh: null as THREE.Mesh | null,
      combinedMesh: null as THREE.Mesh | null,
      gridOverlay: null as THREE.Group | null,
      bgGrid,
      animId: 0,
    };
    sceneRef.current = state;

    // Animation loop
    const animate = () => {
      state.animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(state.animId);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
      sceneRef.current = null;
    };
  }, []);

  // Helper to fit camera to objects
  const fitCamera = useCallback((objects: THREE.Object3D[]) => {
    const state = sceneRef.current;
    if (!state) return;

    const box = new THREE.Box3();
    for (const obj of objects) {
      box.expandByObject(obj);
    }

    if (box.isEmpty()) return;

    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = state.camera.fov * (Math.PI / 180);
    const distance = (maxDim / 2) / Math.tan(fov / 2) * 1.5;

    state.controls.target.copy(center);
    state.camera.position.set(
      center.x + distance * 0.6,
      center.y + distance * 0.6,
      center.z + distance * 0.6
    );
    state.camera.lookAt(center);
    state.controls.update();

    // Update background grid
    if (state.bgGrid) {
      state.scene.remove(state.bgGrid);
      state.bgGrid.dispose();
    }
    const gridSize = Math.ceil(maxDim * 2 / 42) * 42;
    const gridDivisions = Math.ceil(gridSize / 42);
    const newGrid = new THREE.GridHelper(
      gridSize,
      gridDivisions,
      0x444444,
      0x282828
    );
    newGrid.rotation.x = Math.PI / 2;
    newGrid.position.set(center.x, center.y, 0);
    state.scene.add(newGrid);
    state.bgGrid = newGrid;
  }, []);

  // Build grid overlay showing active cells
  const buildGridOverlay = useCallback((gx: number, gy: number, ox: number, oy: number): THREE.Group => {
    const group = new THREE.Group();

    // Draw active cells as filled translucent quads
    for (let ix = 0; ix < gx; ix++) {
      for (let iy = 0; iy < gy; iy++) {
        const cx = ox + (ix - (gx - 1) / 2) * GRID_UNIT;
        const cy = oy + (iy - (gy - 1) / 2) * GRID_UNIT;

        // Filled cell
        const cellGeom = new THREE.PlaneGeometry(GRID_UNIT - 1, GRID_UNIT - 1);
        const cellMat = new THREE.MeshBasicMaterial({
          color: 0x22cc66,
          transparent: true,
          opacity: 0.12,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
        const cellMesh = new THREE.Mesh(cellGeom, cellMat);
        cellMesh.position.set(cx, cy, 0.05);
        group.add(cellMesh);

        // Cell border
        const borderPoints = [
          new THREE.Vector3(cx - GRID_UNIT / 2, cy - GRID_UNIT / 2, 0.1),
          new THREE.Vector3(cx + GRID_UNIT / 2, cy - GRID_UNIT / 2, 0.1),
          new THREE.Vector3(cx + GRID_UNIT / 2, cy + GRID_UNIT / 2, 0.1),
          new THREE.Vector3(cx - GRID_UNIT / 2, cy + GRID_UNIT / 2, 0.1),
          new THREE.Vector3(cx - GRID_UNIT / 2, cy - GRID_UNIT / 2, 0.1),
        ];
        const borderGeom = new THREE.BufferGeometry().setFromPoints(borderPoints);
        const borderMat = new THREE.LineBasicMaterial({
          color: 0x22cc66,
          transparent: true,
          opacity: 0.5,
        });
        const borderLine = new THREE.Line(borderGeom, borderMat);
        group.add(borderLine);
      }
    }

    // Add a few extra "inactive" cells around the edges for context
    const extraRange = 1;
    for (let ix = -extraRange; ix < gx + extraRange; ix++) {
      for (let iy = -extraRange; iy < gy + extraRange; iy++) {
        // Skip active cells
        if (ix >= 0 && ix < gx && iy >= 0 && iy < gy) continue;

        const cx = ox + (ix - (gx - 1) / 2) * GRID_UNIT;
        const cy = oy + (iy - (gy - 1) / 2) * GRID_UNIT;

        const borderPoints = [
          new THREE.Vector3(cx - GRID_UNIT / 2, cy - GRID_UNIT / 2, 0.05),
          new THREE.Vector3(cx + GRID_UNIT / 2, cy - GRID_UNIT / 2, 0.05),
          new THREE.Vector3(cx + GRID_UNIT / 2, cy + GRID_UNIT / 2, 0.05),
          new THREE.Vector3(cx - GRID_UNIT / 2, cy + GRID_UNIT / 2, 0.05),
          new THREE.Vector3(cx - GRID_UNIT / 2, cy - GRID_UNIT / 2, 0.05),
        ];
        const borderGeom = new THREE.BufferGeometry().setFromPoints(borderPoints);
        const borderMat = new THREE.LineDashedMaterial({
          color: 0x888888,
          transparent: true,
          opacity: 0.2,
          dashSize: 3,
          gapSize: 3,
        });
        const borderLine = new THREE.Line(borderGeom, borderMat);
        borderLine.computeLineDistances();
        group.add(borderLine);
      }
    }

    return group;
  }, []);

  // Update grid overlay when params change
  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;

    // Remove old overlay
    if (state.gridOverlay) {
      state.scene.remove(state.gridOverlay);
      state.gridOverlay.traverse((child) => {
        if (child instanceof THREE.Mesh || child instanceof THREE.Line) {
          child.geometry.dispose();
          if (child.material instanceof THREE.Material) {
            child.material.dispose();
          }
        }
      });
      state.gridOverlay = null;
    }

    // Only show grid overlay if we have a model loaded
    if (!originalGeometry && !combinedGeometry) return;

    const overlay = buildGridOverlay(gridX, gridY, offsetX, offsetY);
    state.scene.add(overlay);
    state.gridOverlay = overlay;
  }, [gridX, gridY, offsetX, offsetY, originalGeometry, combinedGeometry, buildGridOverlay]);

  // Update meshes when geometries change
  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;

    // Remove old meshes
    if (state.originalMesh) {
      state.scene.remove(state.originalMesh);
      state.originalMesh.geometry.dispose();
      (state.originalMesh.material as THREE.Material).dispose();
      state.originalMesh = null;
    }
    if (state.baseMesh) {
      state.scene.remove(state.baseMesh);
      state.baseMesh.geometry.dispose();
      (state.baseMesh.material as THREE.Material).dispose();
      state.baseMesh = null;
    }
    if (state.combinedMesh) {
      state.scene.remove(state.combinedMesh);
      state.combinedMesh.geometry.dispose();
      (state.combinedMesh.material as THREE.Material).dispose();
      state.combinedMesh = null;
    }

    const objectsToFit: THREE.Object3D[] = [];

    if (combinedGeometry) {
      // Show combined result
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0x4488ff,
        metalness: 0.1,
        roughness: 0.4,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(combinedGeometry, mat);
      state.scene.add(mesh);
      state.combinedMesh = mesh;
      objectsToFit.push(mesh);
    } else {
      // Show original + base separately
      if (originalGeometry) {
        const mat = new THREE.MeshPhysicalMaterial({
          color: 0x88aacc,
          metalness: 0.1,
          roughness: 0.4,
          side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(originalGeometry, mat);
        state.scene.add(mesh);
        state.originalMesh = mesh;
        objectsToFit.push(mesh);
      }

      if (baseGeometry) {
        const mat = new THREE.MeshPhysicalMaterial({
          color: 0x44cc66,
          metalness: 0.1,
          roughness: 0.4,
          transparent: true,
          opacity: 0.7,
          side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(baseGeometry, mat);
        state.scene.add(mesh);
        state.baseMesh = mesh;
        objectsToFit.push(mesh);
      }
    }

    if (objectsToFit.length > 0) {
      fitCamera(objectsToFit);
    }
  }, [originalGeometry, baseGeometry, combinedGeometry, fitCamera]);

  const isEmpty = !originalGeometry && !baseGeometry && !combinedGeometry;

  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[600px] rounded-xl overflow-hidden bg-gray-950">
      <div ref={containerRef} className="w-full h-full" />
      {isEmpty && <EmptyState />}
    </div>
  );
}
