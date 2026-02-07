# 🔲 Gridfinity Base Adder

Add Gridfinity-compatible bases to any STL model — entirely in your browser.

Upload an STL → configure the grid → generate a combined model with a Gridfinity base → download.

## Features

- **STL Upload** — Drag & drop or click to upload any STL file
- **Auto Grid Detection** — Automatically calculates how many 42mm grid units fit your model
- **3 Fitting Modes:**
  - **Fit Inside** — Maximum grid units that fit within the model footprint
  - **Fit Outside** — Grid units that encompass the entire model
  - **Custom** — Manually set grid dimensions
- **Orientation Override** — 6-direction buttons to rotate the model and change which face becomes the bottom
- **Grid Overlay** — Visual 42mm grid on the bottom plane showing active and inactive cells
- **X/Y Offset Sliders** — Reposition the grid under the model
- **Magnet Holes** — Optional 6mm magnet holes in each grid unit corner
- **Accurate Base Profile** — Stepped Gridfinity base with chamfers and wall sections
- **CSG Union** — Uses Manifold 3D (WASM) for real boolean operations
- **STL Export** — Download the combined model as binary STL
- **100% Client-Side** — All processing runs in your browser, no server needed

## Gridfinity Spec

- Grid unit: **42mm × 42mm**
- Base height: **~4.75mm** (0.8mm chamfer + 1.8mm wall + 2.15mm chamfer)
- Corner radius: **3.75mm**
- Clearance: **0.25mm** from grid boundary

## Tech Stack

- **React** + **TypeScript**
- **Three.js** — 3D viewport with orbit controls
- **Manifold 3D** — WASM-powered CSG boolean operations
- **Tailwind CSS v4** — Styling
- **Vite** — Build tool

## Development

```bash
npm install
npm run dev    # Start dev server
npm run build  # Production build
```

## How It Works

1. Upload an STL file
2. The app parses the geometry and auto-detects the model footprint
3. Choose a fitting mode (Inside/Outside/Custom) and adjust grid units
4. Optionally change orientation, offset, or toggle magnet holes
5. Click "Generate Base" — the app creates a Gridfinity base profile and performs a CSG union with your model
6. Download the result as an STL file ready for slicing

## License

MIT
