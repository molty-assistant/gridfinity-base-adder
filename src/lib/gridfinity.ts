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
export const BASE_HEIGHT = CHAMFER_SMALL + WALL_HEIGHT + CHAMFER_LARGE; // ~4.75mm

// Corner radius for the base
export const CORNER_RADIUS = 3.75; // mm - exterior corner radius

// Magnet hole dimensions
export const MAGNET_DIAMETER = 6.0; // mm
export const MAGNET_DEPTH = 2.0; // mm
export const MAGNET_OFFSET = 4.8; // mm from edge of unit to center of magnet

// Fitting mode tolerance
export const FIT_TOLERANCE = 2.0; // mm - if overhang ≤ this, round UP

export type FitMode = 'inside' | 'outside' | 'custom';

export interface GridfinityConfig {
  gridX: number; // number of grid units in X
  gridY: number; // number of grid units in Y
  offsetX: number; // X offset in mm
  offsetY: number; // Y offset in mm
  magnets: boolean; // include magnet holes
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
  const overhangX = (rawX - floorX) * GRID_UNIT / 2; // per side
  const overhangY = (rawY - floorY) * GRID_UNIT / 2;

  const gridX = overhangX > 0 && overhangX <= FIT_TOLERANCE ? floorX + 1 : Math.max(1, floorX);
  const gridY = overhangY > 0 && overhangY <= FIT_TOLERANCE ? floorY + 1 : Math.max(1, floorY);

  // If zero units fit inside, auto-suggest outside
  if (gridX === 0 || gridY === 0) {
    return calculateGridUnits(widthX, widthY, 'outside');
  }

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
 * Generate the base mesh for a single grid unit using Manifold primitives.
 * Uses the stepped profile approach - builds the base as layered extrusions.
 */
export async function generateGridfinityBase(
  wasm: any,
  config: GridfinityConfig
): Promise<any> {
  const { Manifold, CrossSection } = wasm;

  // Set circular segments for quality
  wasm.setCircularSegments(32);

  const unitBases: any[] = [];

  for (let gx = 0; gx < config.gridX; gx++) {
    for (let gy = 0; gy < config.gridY; gy++) {
      const centerX =
        config.offsetX + (gx - (config.gridX - 1) / 2) * GRID_UNIT;
      const centerY =
        config.offsetY + (gy - (config.gridY - 1) / 2) * GRID_UNIT;

      // Build the stepped profile for one unit base
      const w0 = BASE_UNIT - 2 * (CHAMFER_SMALL + CHAMFER_LARGE); // bottom tip
      const w1 = BASE_UNIT - 2 * CHAMFER_LARGE; // after small chamfer
      const w3 = BASE_UNIT; // after large chamfer (full width at top)

      const z0 = 0;
      const z1 = CHAMFER_SMALL; // 0.8mm
      const z2 = z1 + WALL_HEIGHT; // 2.6mm
      const z3 = z2 + CHAMFER_LARGE; // 4.75mm

      const cr0 = Math.max(0.5, CORNER_RADIUS - (w3 - w0) / 2);
      const cr1 = Math.max(0.5, CORNER_RADIUS - (w3 - w1) / 2);

      const cs0 = new CrossSection(
        [roundedRectPoints(w0, w0, cr0)] as any
      );
      const section1 = cs0.extrude(
        z1 - z0,
        0,
        0,
        [w1 / w0, w1 / w0] as any
      );

      const cs1 = new CrossSection(
        [roundedRectPoints(w1, w1, cr1)] as any
      );
      const section2 = cs1
        .extrude(z2 - z1)
        .translate([0, 0, z1] as any);

      const section3 = cs1
        .extrude(z3 - z2, 0, 0, [w3 / w1, w3 / w1] as any)
        .translate([0, 0, z2] as any);

      cs0.delete();
      cs1.delete();

      // Union all sections
      let unitBase = Manifold.union([section1, section2, section3]);

      // Translate to grid position
      unitBase = unitBase.translate([centerX, centerY, 0] as any);

      // Add magnet holes if requested
      if (config.magnets) {
        const magnetHoles: any[] = [];
        const magnetRadius = MAGNET_DIAMETER / 2;
        const inset = MAGNET_OFFSET;

        const corners = [
          [centerX - GRID_UNIT / 2 + inset, centerY - GRID_UNIT / 2 + inset],
          [centerX + GRID_UNIT / 2 - inset, centerY - GRID_UNIT / 2 + inset],
          [centerX - GRID_UNIT / 2 + inset, centerY + GRID_UNIT / 2 - inset],
          [centerX + GRID_UNIT / 2 - inset, centerY + GRID_UNIT / 2 - inset],
        ];

        for (const [mx, my] of corners) {
          const hole = Manifold.cylinder(
            MAGNET_DEPTH,
            magnetRadius,
            magnetRadius,
            32
          ).translate([mx, my, 0] as any);
          magnetHoles.push(hole);
        }

        unitBase = Manifold.difference([unitBase, ...magnetHoles]);

        for (const h of magnetHoles) {
          h.delete();
        }
      }

      unitBases.push(unitBase);

      section1.delete();
      section2.delete();
      section3.delete();
    }
  }

  const fullBase =
    unitBases.length === 1
      ? unitBases[0]
      : Manifold.union(unitBases);

  if (unitBases.length > 1) {
    for (const ub of unitBases) {
      ub.delete();
    }
  }

  return fullBase;
}

/**
 * Convert Three.js BufferGeometry to Manifold Mesh
 */
export function geometryToManifoldMesh(
  geometry: any,
  wasm: any
): any {
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

  mesh.merge();

  return mesh;
}

/**
 * Convert a Manifold mesh back to Three.js-compatible arrays
 */
export function manifoldMeshToArrays(mesh: any): {
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
