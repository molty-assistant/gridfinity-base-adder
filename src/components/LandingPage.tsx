import type { ReactNode } from 'react';

interface LandingPageProps {
  children: ReactNode;
  wasmReady: boolean;
  appVersion: string;
}

const featureHighlights = [
  {
    title: 'Fast browser workflow',
    description: 'Upload STL, add a Gridfinity base, preview in 3D, and download in minutes.',
  },
  {
    title: 'No installs or accounts',
    description: 'Everything runs client-side in your browser. Your models stay on your machine.',
  },
  {
    title: 'Spec-aligned dimensions',
    description: 'Generates 7mm Gridfinity bases with optional magnet and screw holes.',
  },
  {
    title: 'Fit controls that matter',
    description: 'Auto-detect footprint, switch fit mode, and fine-tune orientation and offsets.',
  },
  {
    title: 'Works with existing models',
    description: 'Turn downloaded holders, bins, and organizers into Gridfinity-compatible prints.',
  },
];

const howToSteps = [
  'Upload your STL file and check the auto-detected footprint.',
  'Pick fit mode, orientation, and optional magnet or screw holes.',
  'Generate the base, preview it, then download the final STL.',
];

const faqItems = [
  {
    question: 'Does this upload my STL to a server?',
    answer: 'No. STL parsing and base generation happen in your browser using WebAssembly.',
  },
  {
    question: 'Can I use both magnets and screws?',
    answer: 'Yes. The screw hole is concentric with the magnet hole so both can be enabled together.',
  },
  {
    question: 'What if boolean union fails on my model?',
    answer: 'The app can export a compatibility-mode STL with overlapping solids that most slicers can merge.',
  },
  {
    question: 'What models work best?',
    answer: 'Watertight manifold meshes work best. If a model is non-manifold, repair it first in a mesh tool.',
  },
  {
    question: 'Can I adjust where the base sits?',
    answer: 'Yes. Use bottom-face orientation, placement mode, grid size, and X/Y offset to control alignment.',
  },
];

export default function LandingPage({ children, wasmReady, appVersion }: LandingPageProps) {
  return (
    <div id="top" className="min-h-screen bg-gray-950 text-gray-100">
      <header className="sticky top-0 z-40 border-b border-gray-800/80 bg-gray-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="text-lg">🔲</span>
            <span className="text-sm font-semibold tracking-tight sm:text-base">Gridfinity Base Adder</span>
          </a>

          <nav className="ml-2 hidden items-center gap-3 text-xs text-gray-400 md:flex">
            <a href="#features" className="hover:text-gray-200 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-gray-200 transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-gray-200 transition-colors">FAQ</a>
            <a href="#tool" className="hover:text-gray-200 transition-colors">Tool</a>
          </nav>

          <a
            href="#tool"
            className="ml-auto rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Launch Tool
          </a>

          <span className="hidden rounded border border-gray-700 px-2 py-0.5 font-mono text-[10px] text-gray-400 sm:inline">
            v{appVersion}
          </span>
          {!wasmReady && <span className="text-[11px] text-yellow-400 animate-pulse">Loading engine…</span>}
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-14 px-4 py-10 sm:space-y-16 sm:px-6 sm:py-12">
        <section id="hero" className="scroll-mt-24">
          <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 px-6 py-8 sm:px-8 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="mb-3 inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-300">
                  Gridfinity STL Converter
                </p>
                <h1 className="text-3xl font-black tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">
                  Add Gridfinity bases to existing STL files in your browser.
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
                  Convert holders, organizers, and custom models into Gridfinity-compatible prints without CAD remixes.
                  Keep your workflow fast with auto-fit sizing, 3D preview, and one-click STL export.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#tool"
                    className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    Start Converting STL
                  </a>
                  <a
                    href="#how-it-works"
                    className="rounded-xl border border-gray-700 px-4 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:border-gray-500 hover:text-white"
                  >
                    See 3-Step Workflow
                  </a>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <a href="#features" className="rounded-md border border-gray-800 bg-gray-900 px-2.5 py-1 text-gray-300 hover:text-white">
                    Why this tool
                  </a>
                  <a href="#faq" className="rounded-md border border-gray-800 bg-gray-900 px-2.5 py-1 text-gray-300 hover:text-white">
                    Common questions
                  </a>
                  <a href="#tool" className="rounded-md border border-gray-800 bg-gray-900 px-2.5 py-1 text-gray-300 hover:text-white">
                    Jump to app
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Best For</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-200">
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    Existing STL organizers from Printables or Thingiverse
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    Tool holders and trays that need Gridfinity compatibility
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    Rapid test-fit iterations before slicing
                  </li>
                </ul>
                <p className="mt-4 rounded-lg border border-emerald-800/60 bg-emerald-950/30 px-3 py-2 text-xs leading-5 text-emerald-300">
                  Privacy-friendly: your STL never leaves your browser session.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-24">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-100">Feature Highlights</h2>
              <p className="mt-1 text-sm text-gray-400">High-impact capabilities for practical Gridfinity conversions.</p>
            </div>
            <a href="#tool" className="text-xs text-blue-400 hover:text-blue-300">Open tool</a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featureHighlights.map((feature) => (
              <article key={feature.title} className="rounded-xl border border-gray-800 bg-gray-900/60 p-4">
                <h3 className="text-sm font-semibold text-gray-100">{feature.title}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-400">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-100">How It Works</h2>
            <p className="mt-1 text-sm text-gray-400">Simple process from upload to print-ready STL.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {howToSteps.map((step, index) => (
              <article key={step} className="rounded-xl border border-gray-800 bg-gray-900/60 p-4">
                <p className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/20 text-xs font-bold text-blue-300">
                  {index + 1}
                </p>
                <p className="text-sm leading-6 text-gray-200">{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tool" className="scroll-mt-24">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-100">Interactive Tool</h2>
              <p className="mt-1 text-sm text-gray-400">Upload your STL, configure options, and export the combined model.</p>
            </div>
            <a href="#faq" className="text-xs text-blue-400 hover:text-blue-300">Need help?</a>
          </div>
          {children}
        </section>

        <section id="faq" className="scroll-mt-24">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-100">FAQ</h2>
              <p className="mt-1 text-sm text-gray-400">Answers to common conversion and printing questions.</p>
            </div>
            <a href="#top" className="text-xs text-blue-400 hover:text-blue-300">Back to top</a>
          </div>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-xl border border-gray-800 bg-gray-900/60 p-4">
                <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-gray-100">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm leading-6 text-gray-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Gridfinity Base Adder: fast STL-to-Gridfinity conversion in the browser.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#tool" className="hover:text-gray-200 transition-colors">Launch Tool</a>
            <a href="#features" className="hover:text-gray-200 transition-colors">Features</a>
            <a href="#faq" className="hover:text-gray-200 transition-colors">FAQ</a>
            <a href="/gridfinity-base-adder/sitemap.xml" className="hover:text-gray-200 transition-colors">Sitemap</a>
            <a
              href="https://github.com/kennetek/gridfinity-rebuilt-openscad"
              className="hover:text-gray-200 transition-colors"
              rel="noreferrer"
            >
              Gridfinity Spec
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
