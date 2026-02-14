import type { Manifold, ManifoldToplevel, Mesh } from 'manifold-3d';
import * as THREE from 'three';

/**
 * Gridfinity Base Generator
 *
 * Generates Gridfinity-compatible base meshes procedurally.
 * Uses the CrossSection extrude approach from Manifold 3D.
 *
 * Gridfinity base profile (cross-section from bottom to top):
 * 1. Flat bottom
 * 2. Small chamfer (0.8mm × 0.8mm at 45°)
 * 3. Small vertical wall (~1.8mm)
 * 4. Larger chamfer (2.15mm × 2.15mm at 45°)
 * 5. Flat top that meets the model bottom
 *
 * Total base height: ~4.75mm
 */

// Gridfinity dimensions (mm)
export const GRID_UNIT = 42; // mm per grid unit
export const CLEARANCE = 0.25; // mm clearance from grid boundary
export const BASE_UNIT = GRID_UNIT - 2 * CLEARANCE; // actual base size per unit

// Base profile dimensions
export const CHAMFER_SMALL = 0.8; // mm - bottom chamfer
export const WALL_HEIGHT = 1.8; // mm - vertical wall section
export const CHAMFER_LARGE = 2.15; // mm - top chamfer
export const PROFILE_HEIGHT = CHAMFER_SMALL + WALL_HEIGHT + CHAMFER_LARGE; // 4.75mm - stacking profile only
export const BRIDGE_HEIGHT = 2.25; // mm - solid platform on top of profile
export const BASE_HEIGHT = PROFILE_HEIGHT + BRIDGE_HEIGHT; // 7.0mm - total base height

// Corner radius for the base
export const CORNER_RADIUS = 3.75; // mm - exterior corner radius

// Magnet hole dimensions
export const MAGNET_DIAMETER = 6.5; // mm
export const MAGNET_DEPTH = 2.4; // mm
export const MAGNET_OFFSET = 4.8; // mm from edge of unit to center of magnet

// Screw hole dimensions (M3)
export const SCREW_DIAMETER = 3.0; // mm (M3)
export const SCREW_DEPTH = 6.0; // mm — through the full base height minus a thin floor

// Fitting mode tolerance
export const FIT_TOLERANCE = 2.0; // mm - if overhang ≤ this, round UP

export type FitMode = 'inside' | 'outside' | 'custom';

export interface GridfinityConfig {
  gridX: number; // number of grid units in X
  gridY: number; // number of grid units in Y
  offsetX: number; // X offset in mm
  offsetY: number; // Y offset in mm
  magnets: boolean; // include magnet holes
  screws: boolean; // include M3 screw holes
}

/**
 * Calculate how many grid units fit in the given dimensions
 * with optional fit mode
 */
export function calculateGridUnits(
  widthX: number,
  widthY: number,
  mode: FitMode = 'inside'
): { gridX: number; gridY: number } {
  if (mode === 'outside') {
    return {
      gridX: Math.max(1, Math.ceil(widthX / GRID_UNIT)),
      gridY: Math.max(1, Math.ceil(widthY / GRID_UNIT)),
    };
  }

  // "inside" mode with tolerance
  const rawX = widthX / GRID_UNIT;
  const rawY = widthY / GRID_UNIT;

  // If overhang per side is small enough, round up
  const floorX = Math.floor(rawX);
  const floorY = Math.floor(rawY);
  const overhangX = ((rawX - floorX) * GRID_UNIT) / 2; // per side
  const overhangY = ((rawY - floorY) * GRID_UNIT) / 2;

  const gridX =
    overhangX > 0 && overhangX <= FIT_TOLERANCE ? floorX + 1 : Math.max(1, floorX);
  const gridY =
    overhangY > 0 && overhangY <= FIT_TOLERANCE ? floorY + 1 : Math.max(1, floorY);

  return { gridX, gridY };
}

/**
 * Generate the Gridfinity base profile as a 2D polygon (for revolution/extrusion).
 * This returns the profile points for one grid unit base,
 * as a rounded-rectangle cross-section with the stepped profile.
 *
 * The profile is defined in the XY plane, to be used with Manifold's
 * CrossSection and extrude.
 */

// Number of segments for rounded corners
const CORNER_SEGMENTS = 16;

/**
 * Generate points for a rounded rectangle
 */
function roundedRectPoints(
  width: number,
  height: number,
  radius: number,
  segments: number = CORNER_SEGMENTS
): [number, number][] {
  const points: [number, number][] = [];
  const hw = width / 2;
  const hh = height / 2;
  const r = Math.min(radius, hw, hh);

  // Generate quarter arc for each corner
  for (let corner = 0; corner < 4; corner++) {
    const cx = corner === 0 || corner === 3 ? hw - r : -(hw - r);
    const cy = corner === 0 || corner === 1 ? hh - r : -(hh - r);
    const startAngle = (corner * Math.PI) / 2;

    for (let i = 0; i <= segments; i++) {
      const angle = startAngle + (i * Math.PI) / (2 * segments);
      points.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
    }
  }

  return points;
}

/**
 * Generate one unit base at the origin using the hull approach.
 * Hulls thin slabs at different Z heights to create clean chamfer geometry.
 */
function generateUnitBase(wasm: ManifoldToplevel): Manifold {
  const { CrossSection, Manifold } = wasm;

  // manifold-3d@3.3.2 exposes static helpers after wasm.setup(), including:
  // - Manifold.hull([a, b])
  // - Manifold.union([...])
  // - Manifold.difference([...])
  // Using batch statics is also more stable than repeated chained instance ops.

  // Profile widths at each Z level (base widens from bottom to top)
  const w_bottom = BASE_UNIT - 2 * (CHAMFER_SMALL + CHAMFER_LARGE); // ~35.6mm
  const w_mid = BASE_UNIT - 2 * CHAMFER_LARGE; // ~37.2mm
  const w_top = BASE_UNIT; // 41.5mm

  // Absolute offset corner radii (inset from outer radius)
  const totalInset_bottom = CHAMFER_SMALL + CHAMFER_LARGE; // 2.95mm
  const totalInset_mid = CHAMFER_LARGE; // 2.15mm
  const r_bottom = Math.max(0.1, CORNER_RADIUS - totalInset_bottom); // 3.75 - 2.95 = 0.8mm
  const r_mid = Math.max(0.1, CORNER_RADIUS - totalInset_mid); // 3.75 - 2.15 = 1.6mm
  const r_top = CORNER_RADIUS;

  // Z heights
  const z1 = CHAMFER_SMALL; // 0.8mm
  const z2 = CHAMFER_SMALL + WALL_HEIGHT; // 2.6mm
  const z3 = PROFILE_HEIGHT; // 4.75mm

  const SLAB = 0.01; // thin slab for hull endpoints

  // Create cross-sections at each profile level
  const csBottom = new CrossSection([roundedRectPoints(w_bottom, w_bottom, r_bottom)]);
  const csMid = new CrossSection([roundedRectPoints(w_mid, w_mid, r_mid)]);
  const csTop = new CrossSection([roundedRectPoints(w_top, w_top, r_top)]);

  // Thin slabs at each Z level
  const slabBottom = csBottom.extrude(SLAB);
  const slabZ1 = csMid.extrude(SLAB).translate([0, 0, z1]);
  const slabZ2 = csMid.extrude(SLAB).translate([0, 0, z2]);
  const slabZ3 = csTop.extrude(SLAB).translate([0, 0, z3]);

  // Section 1: Small chamfer (hull bottom → z1)
  // USE: Manifold.hull([slab1, slab2]) for convex hull between slabs
  const section1 = Manifold.hull([slabBottom, slabZ1]);

  // Section 2: Vertical wall (constant-width extrusion z1 → z2)
  const section2 = csMid.extrude(z2 - z1).translate([0, 0, z1]);

  // Section 3: Large chamfer (hull z2 → z3)
  // USE: Manifold.hull([slab1, slab2]) for convex hull between slabs
  const section3 = Manifold.hull([slabZ2, slabZ3]);

  // Clean up intermediates
  csBottom.delete();
  csMid.delete();
  csTop.delete();
  slabBottom.delete();
  slabZ1.delete();
  slabZ2.delete();
  slabZ3.delete();

  const unitBase = Manifold.union([section1, section2, section3]);
  section1.delete();
  section2.delete();
  section3.delete();

  return unitBase;
}

/**
 * Generate the complete Gridfinity base mesh for the given grid configuration.
 * Creates one template unit base, then translates and unions copies for each cell.
 */
export async function generateGridfinityBase(
  wasm: ManifoldToplevel,
  config: GridfinityConfig
): Promise<Manifold> {
  const { Manifold } = wasm;

  wasm.setCircularSegments(32);

  // Build one template base at origin
  const templateBase = generateUnitBase(wasm);
  const unitBases: Manifold[] = [];

  for (let gx = 0; gx < config.gridX; gx++) {
    for (let gy = 0; gy < config.gridY; gy++) {
      const centerX = config.offsetX + (gx - (config.gridX - 1) / 2) * GRID_UNIT;
      const centerY = config.offsetY + (gy - (config.gridY - 1) / 2) * GRID_UNIT;

      let unitBase = templateBase.translate([centerX, centerY, 0]);

      // Corner positions for magnet/screw holes (same positions for both)
      const inset = MAGNET_OFFSET;
      const corners: [number, number][] = [
        [centerX - GRID_UNIT / 2 + inset, centerY - GRID_UNIT / 2 + inset],
        [centerX + GRID_UNIT / 2 - inset, centerY - GRID_UNIT / 2 + inset],
        [centerX - GRID_UNIT / 2 + inset, centerY + GRID_UNIT / 2 - inset],
        [centerX + GRID_UNIT / 2 - inset, centerY + GRID_UNIT / 2 - inset],
      ];

      // Add magnet holes if requested
      if (config.magnets) {
        const magnetRadius = MAGNET_DIAMETER / 2;

        // IMPORTANT: do a single batch difference per unit. Repeated sequential
        // subtract/delete can yield invalid WASM handles (“indirect call to null”)
        // for multi-unit grids.
        const holes = corners.map(([mx, my]) =>
          Manifold.cylinder(MAGNET_DEPTH, magnetRadius, magnetRadius, 24, false).translate([
            mx,
            my,
            0,
          ])
        );
        const withHoles = Manifold.difference([unitBase, ...holes]);
        unitBase.delete();
        unitBase = withHoles;
        holes.forEach((h) => h.delete());
      }

      // Add screw holes if requested (concentric with magnet positions)
      if (config.screws) {
        const screwHoles: Manifold[] = [];
        const screwRadius = SCREW_DIAMETER / 2;

        for (const [mx, my] of corners) {
          const hole = Manifold.cylinder(
            SCREW_DEPTH,
            screwRadius,
            screwRadius,
            16
          ).translate([mx, my, 0]);
          screwHoles.push(hole);
        }

        const withScrews = Manifold.difference([unitBase, ...screwHoles]);
        unitBase.delete();
        unitBase = withScrews;

        for (const h of screwHoles) {
          h.delete();
        }
      }

      unitBases.push(unitBase);
    }
  }

  templateBase.delete();

  let profileUnion: Manifold;
  if (unitBases.length === 1) {
    profileUnion = unitBases[0];
  } else {
    profileUnion = Manifold.union(unitBases);
    for (const ub of unitBases) {
      ub.delete();
    }
  }

  // Generate the bridge platform that spans the full multi-unit footprint
  const bridgeWidth = config.gridX * GRID_UNIT - 2 * CLEARANCE;
  const bridgeDepth = config.gridY * GRID_UNIT - 2 * CLEARANCE;
  const { CrossSection } = wasm;
  const bridgeCS = new CrossSection([
    roundedRectPoints(bridgeWidth, bridgeDepth, CORNER_RADIUS),
  ]);
  const bridgeSlab = bridgeCS.extrude(BRIDGE_HEIGHT).translate(
    [config.offsetX, config.offsetY, PROFILE_HEIGHT]
  );
  bridgeCS.delete();

  const fullBase = Manifold.union([profileUnion, bridgeSlab]);
  profileUnion.delete();
  bridgeSlab.delete();

  return fullBase;
}

/**
 * Convert Three.js BufferGeometry to Manifold Mesh
 */
export function geometryToManifoldMesh(
  geometry: THREE.BufferGeometry,
  wasm: ManifoldToplevel
): Mesh {
  const { Mesh } = wasm;

  const posAttr = geometry.getAttribute('position');
  const index = geometry.getIndex();

  let vertProperties: Float32Array;
  let triVerts: Uint32Array;

  if (index) {
    const positions = posAttr.array as Float32Array;
    vertProperties = new Float32Array(positions.length);
    vertProperties.set(positions);
    triVerts = new Uint32Array(index.array);
  } else {
    const positions = posAttr.array as Float32Array;
    const numVerts = posAttr.count;
    if (numVerts % 3 !== 0) {
      throw new Error('Invalid geometry: vertex count is not divisible by 3');
    }
    vertProperties = new Float32Array(positions.length);
    vertProperties.set(positions);
    triVerts = new Uint32Array(numVerts);
    for (let i = 0; i < numVerts; i++) {
      triVerts[i] = i;
    }
  }

  const mesh = new Mesh({
    numProp: 3,
    vertProperties,
    triVerts,
  });

  // Note: Mesh is a plain data container in these bindings; it has no merge().
  return mesh;
}

/**
 * Convert a Manifold mesh back to Three.js-compatible arrays
 */
export function manifoldMeshToArrays(mesh: Mesh): {
  positions: Float32Array;
  indices: Uint32Array;
} {
  const vertProperties = mesh.vertProperties;
  const triVerts = mesh.triVerts;
  const numProp = mesh.numProp;

  const numVerts = vertProperties.length / numProp;
  const positions = new Float32Array(numVerts * 3);
  for (let i = 0; i < numVerts; i++) {
    positions[i * 3] = vertProperties[i * numProp];
    positions[i * 3 + 1] = vertProperties[i * numProp + 1];
    positions[i * 3 + 2] = vertProperties[i * numProp + 2];
  }

  return { positions, indices: new Uint32Array(triVerts) };
}
