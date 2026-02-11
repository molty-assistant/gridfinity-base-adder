#!/usr/bin/env node
/**
 * Generate test STL files for Gridfinity Base Adder validation.
 * Creates various shapes and sizes to test edge cases.
 * 
 * Usage: node generate-test-models.js
 * Output: test-stls/*.stl
 */

const fs = require('fs');
const path = require('path');

const outDir = __dirname;

function writeBinarySTL(filename, triangles) {
  const numTri = triangles.length;
  const bufSize = 80 + 4 + numTri * 50;
  const buf = Buffer.alloc(bufSize);
  
  // Header
  buf.write('Binary STL - Test model for Gridfinity Base Adder', 0, 80);
  buf.writeUInt32LE(numTri, 80);
  
  let offset = 84;
  for (const tri of triangles) {
    const [v1, v2, v3] = tri;
    // Compute normal
    const e1 = [v2[0]-v1[0], v2[1]-v1[1], v2[2]-v1[2]];
    const e2 = [v3[0]-v1[0], v3[1]-v1[1], v3[2]-v1[2]];
    const nx = e1[1]*e2[2] - e1[2]*e2[1];
    const ny = e1[2]*e2[0] - e1[0]*e2[2];
    const nz = e1[0]*e2[1] - e1[1]*e2[0];
    const len = Math.sqrt(nx*nx + ny*ny + nz*nz) || 1;
    
    buf.writeFloatLE(nx/len, offset); offset += 4;
    buf.writeFloatLE(ny/len, offset); offset += 4;
    buf.writeFloatLE(nz/len, offset); offset += 4;
    
    for (const v of [v1, v2, v3]) {
      buf.writeFloatLE(v[0], offset); offset += 4;
      buf.writeFloatLE(v[1], offset); offset += 4;
      buf.writeFloatLE(v[2], offset); offset += 4;
    }
    buf.writeUInt16LE(0, offset); offset += 2;
  }
  
  const filePath = path.join(outDir, filename);
  fs.writeFileSync(filePath, buf);
  console.log(`  ✅ ${filename} (${numTri} triangles, ${(bufSize/1024).toFixed(1)} KB)`);
}

// Generate a box (6 faces × 2 triangles = 12 triangles)
function makeBox(w, d, h, cx=0, cy=0, cz=0) {
  const hw = w/2, hd = d/2;
  const x0 = cx-hw, x1 = cx+hw;
  const y0 = cy-hd, y1 = cy+hd;
  const z0 = cz, z1 = cz+h;
  
  return [
    // Bottom
    [[x0,y0,z0],[x1,y1,z0],[x1,y0,z0]],
    [[x0,y0,z0],[x0,y1,z0],[x1,y1,z0]],
    // Top
    [[x0,y0,z1],[x1,y0,z1],[x1,y1,z1]],
    [[x0,y0,z1],[x1,y1,z1],[x0,y1,z1]],
    // Front
    [[x0,y0,z0],[x1,y0,z0],[x1,y0,z1]],
    [[x0,y0,z0],[x1,y0,z1],[x0,y0,z1]],
    // Back
    [[x0,y1,z0],[x1,y1,z1],[x1,y1,z0]],
    [[x0,y1,z0],[x0,y1,z1],[x1,y1,z1]],
    // Left
    [[x0,y0,z0],[x0,y0,z1],[x0,y1,z1]],
    [[x0,y0,z0],[x0,y1,z1],[x0,y1,z0]],
    // Right
    [[x1,y0,z0],[x1,y1,z1],[x1,y0,z1]],
    [[x1,y0,z0],[x1,y1,z0],[x1,y1,z1]],
  ];
}

// Generate a cylinder (approximate with segments)
function makeCylinder(radius, height, segments=24, cx=0, cy=0) {
  const tris = [];
  for (let i = 0; i < segments; i++) {
    const a1 = (i / segments) * Math.PI * 2;
    const a2 = ((i+1) / segments) * Math.PI * 2;
    const x1 = cx + radius * Math.cos(a1);
    const y1 = cy + radius * Math.sin(a1);
    const x2 = cx + radius * Math.cos(a2);
    const y2 = cy + radius * Math.sin(a2);
    
    // Bottom fan
    tris.push([[cx,cy,0],[x2,y2,0],[x1,y1,0]]);
    // Top fan
    tris.push([[cx,cy,height],[x1,y1,height],[x2,y2,height]]);
    // Side quads
    tris.push([[x1,y1,0],[x2,y2,0],[x2,y2,height]]);
    tris.push([[x1,y1,0],[x2,y2,height],[x1,y1,height]]);
  }
  return tris;
}

// L-shaped bracket
function makeLBracket(outerW, outerD, wallThick, height) {
  const tris = [];
  // Two boxes forming an L
  tris.push(...makeBox(outerW, wallThick, height, 0, -(outerD-wallThick)/2));
  tris.push(...makeBox(wallThick, outerD-wallThick, height, -(outerW-wallThick)/2, wallThick/2));
  return tris;
}

console.log('Generating test STL files for Gridfinity Base Adder...\n');

// 1. Small box — fits in 1×1 grid
writeBinarySTL('test-small-box-30x30x20.stl', makeBox(30, 30, 20));

// 2. Medium box — fits in 1×2 grid
writeBinarySTL('test-medium-box-40x80x30.stl', makeBox(40, 80, 30));

// 3. Large box — 3×2 grid
writeBinarySTL('test-large-box-120x80x50.stl', makeBox(120, 80, 50));

// 4. Tiny box — edge case: very small model
writeBinarySTL('test-tiny-box-10x10x5.stl', makeBox(10, 10, 5));

// 5. Cylinder — round model, tests non-rectangular footprint
writeBinarySTL('test-cylinder-r20-h40.stl', makeCylinder(20, 40, 32));

// 6. Tall thin cylinder — tests orientation usefulness
writeBinarySTL('test-tall-cylinder-r10-h100.stl', makeCylinder(10, 100, 24));

// 7. Wide flat box — tests wide footprints
writeBinarySTL('test-wide-flat-200x200x10.stl', makeBox(200, 200, 10));

// 8. Rectangular box — non-square footprint, 2×3 grid
writeBinarySTL('test-rect-box-80x120x40.stl', makeBox(80, 120, 40));

// 9. Off-center box — model not centered at origin
writeBinarySTL('test-offset-box-40x40x30.stl', makeBox(40, 40, 30, 50, 50, 10));

// 10. L-bracket — more complex shape
writeBinarySTL('test-l-bracket-60x60x30.stl', makeLBracket(60, 60, 10, 30));

console.log(`\n✅ Generated 10 test STL files in ${outDir}`);
console.log('\nTest matrix:');
console.log('  1. Small box (1×1 grid)');
console.log('  2. Medium box (1×2 grid)');
console.log('  3. Large box (3×2 grid)');
console.log('  4. Tiny box (very small edge case)');
console.log('  5. Cylinder (round footprint)');
console.log('  6. Tall thin cylinder (orientation test)');
console.log('  7. Wide flat box (large footprint)');
console.log('  8. Rectangular box (non-square 2×3)');
console.log('  9. Off-center box (not at origin)');
console.log('  10. L-bracket (complex shape)');
