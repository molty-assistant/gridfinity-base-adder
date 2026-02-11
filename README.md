# 🔲 Gridfinity Base Adder

**Add Gridfinity-compatible bases to any STL model — entirely in your browser.**

👉 **[Try it now →](https://molty-assistant.github.io/gridfinity-base-adder/)**

Upload an STL → configure the grid → generate a combined model with a spec-compliant Gridfinity base → download and print.

No install. No account. No file uploads to any server. Everything runs client-side.

---

## What It Does

Got a tool holder, organiser, or mount STL from Thingiverse/Printables that you want to make Gridfinity-compatible? Upload it here. The tool generates a proper Gridfinity base underneath your model and unions them into a single printable STL.

**This is NOT a Gridfinity generator** — it's an adder. It takes models you already have and makes them work with the Gridfinity ecosystem.

## Features

### Core
- **STL Upload** — Drag & drop or click to upload any STL file
- **Auto Grid Detection** — Calculates how many 42mm grid units fit your model
- **CSG Boolean Union** — Real geometry operations via Manifold 3D (WASM)
- **STL Export** — Download the combined model as binary STL, ready to slice

### Grid Configuration
- **3 Fitting Modes** — Fit Inside, Fit Outside, or Custom grid dimensions
- **Orientation Override** — 6-direction buttons to rotate your model (change which face becomes the bottom)
- **X/Y Offset Sliders** — Fine-tune model position on the grid
- **Grid Overlay** — Visual 42mm grid showing active and inactive cells

### Gridfinity Spec Compliance
- **7mm base height** — 4.75mm stepped profile + 2.25mm bridge platform
- **Proper chamfer profile** — 0.8mm small chamfer → 1.8mm wall → 2.15mm large chamfer
- **Correct corner radii** — 3.75mm exterior, absolute offset at each profile level (0.8mm at bottom)
- **6.5mm magnet holes** — 2.4mm deep, spec-compliant clearance for 6×2mm magnets
- **M3 screw holes** — 3mm diameter, 6mm deep, concentric with magnet positions
- **0.25mm clearance** from grid boundary

All dimensions follow the community standard from [kennetek/gridfinity-rebuilt-openscad](https://github.com/kennetek/gridfinity-rebuilt-openscad).

### UX
- **Mobile-friendly** — Responsive layout, collapsible controls, touch-optimised
- **Empty state** — Helpful onboarding with use case suggestions
- **File info bar** — Shows filename, triangle count, and dimensions
- **Toast notifications** — Visual feedback for generation success/failure
- **Copy settings** — Share your configuration on Reddit/Printables
- **3D preview** — Orbit controls with auto-fit camera
- **100% client-side** — Your files never leave your machine

## How It Works

1. Upload an STL file
2. The app parses the geometry and auto-detects the model footprint
3. Choose a fitting mode and adjust grid units if needed
4. Optionally change orientation, offset, or toggle magnet/screw holes
5. Click **Generate Base** — creates a Gridfinity base and performs a CSG union
6. Preview the result in 3D, then **Download STL**

## Tech Stack

- **React 19** + **TypeScript**
- **Three.js** — 3D viewport, STL parsing, orbit controls
- **Manifold 3D** — WASM-powered CSG boolean operations (hull + union + difference)
- **Tailwind CSS v4** — Styling
- **Vite** — Build tool
- **GitHub Pages** — Hosting (static, no server)

## Development

```bash
npm install
npm run dev    # Start dev server on localhost:5173
npm run build  # Production build → dist/
```

### Test STL Generator

Generate test models for validation:

```bash
node test-stls/generate-test-models.cjs
# Creates 10 test STLs: boxes, cylinders, L-bracket, various sizes
```

## FAQ

**Q: Does this work with any STL file?**
A: It works with manifold (watertight) meshes. If your STL has mesh errors, the tool will suggest repair options (Microsoft 3D Builder, Meshmixer — both free).

**Q: Can I use magnet holes AND screw holes at the same time?**
A: Yes! They're concentric — the screw hole goes through the center of the magnet hole.

**Q: Is this accurate enough to print?**
A: The base dimensions follow the community standard spec. We recommend printing a test piece to verify fit with your specific printer/baseplate combination.

**Q: Why 7mm base height?**
A: 4.75mm is the stepped stacking profile (chamfers + wall). The remaining 2.25mm is the bridge platform that connects multi-unit bases and provides a solid floor for the model. Together = 7mm, matching the community standard.

## Contributing

Issues and PRs welcome. The core CSG logic is in `src/lib/gridfinity.ts`.

## License

MIT
