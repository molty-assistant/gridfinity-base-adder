# 🔲 Gridfinity Base Adder

Add Gridfinity-compatible bases to any STL model — entirely in your browser.

## What It Does

Upload any 3D model (STL), and this tool will:
1. **Analyse** the model's footprint and calculate grid coverage
2. **Generate** a proper Gridfinity base with the stepped interlock profile
3. **Union** the base with your model using boolean CSG
4. **Export** the combined result as a downloadable STL

No CAD skills required. No server — everything runs client-side.

## Why?

There are 10,000+ 3D models on Printables and Thingiverse that would be perfect for Gridfinity, but don't have compatible bases. This tool solves that with one click.

## Gridfinity Base Spec

The generated base follows the Gridfinity specification:
- **42mm × 42mm** grid units
- Stepped/chamfered interlock profile (~4.75mm total height)
- 0.25mm clearance from grid boundaries
- Optional 6mm magnet holes at unit corners
- Proper corner radii

## Tech Stack

- **React + TypeScript** (Vite)
- **Three.js** — 3D viewport with orbit controls
- **Manifold 3D** (WASM) — boolean CSG operations
- **Tailwind CSS** — styling

## Development

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

Output goes to `dist/`.

## License

MIT
