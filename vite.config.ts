import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function getAppVersion(): string {
  return process.env.npm_package_version ?? '0'
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
