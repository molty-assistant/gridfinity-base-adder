/**
 * Manifold 3D WASM initialization and CSG operations
 */

import Module from 'manifold-3d';
import type { ManifoldToplevel } from 'manifold-3d';

let wasmInstance: ManifoldToplevel | null = null;

/**
 * Initialize the Manifold WASM module
 */
export async function initManifold(): Promise<ManifoldToplevel> {
  if (wasmInstance) return wasmInstance;

  wasmInstance = await Module();
  // setup() exists in most builds, but guard for compatibility
  if (typeof wasmInstance.setup === 'function') {
    wasmInstance.setup();
  }
  return wasmInstance;
}

/**
 * Get the initialized WASM instance (throws if not initialized)
 */
export function getManifold(): ManifoldToplevel {
  if (!wasmInstance) {
    throw new Error('Manifold WASM not initialized. Call initManifold() first.');
  }
  return wasmInstance;
}
