import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'node:child_process'

function getAppVersion(): string {
  const pkgVersion = process.env.npm_package_version ?? '0.0.0'
  try {
    const gitSha = execSync('git rev-parse --short HEAD').toString().trim()
    return `${pkgVersion}-${gitSha}`
  } catch {
    return pkgVersion
  }
}

export default defineConfig({
  base: '/gridfinity-base-adder/',
  define: {
    __APP_VERSION__: JSON.stringify(getAppVersion()),
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    exclude: ['manifold-3d']
  },
  worker: {
    format: 'es'
  }
})
