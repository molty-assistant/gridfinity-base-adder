/**
 * Manifold 3D WASM initialization and CSG operations
 */

import Module from 'manifold-3d';

let wasmInstance: any = null;

/**
 * Initialize the Manifold WASM module
 */
export async function initManifold(): Promise<any> {
  if (wasmInstance) return wasmInstance;

  wasmInstance = await Module();
  wasmInstance.setup();
  return wasmInstance;
}

/**
 * Get the initialized WASM instance (throws if not initialized)
 */
export function getManifold(): any {
  if (!wasmInstance) {
    throw new Error('Manifold WASM not initialized. Call initManifold() first.');
  }
  return wasmInstance;
}
