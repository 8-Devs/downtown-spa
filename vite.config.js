import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path matches the GitHub Pages repo name so absolute asset URLs resolve
// to https://8-devs.github.io/downtown-spa/assets/... when deployed.
// Build output goes to docs/ so GitHub Pages can serve it from /docs on main.
export default defineConfig({
  plugins: [react()],
  base: '/downtown-spa/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  server: { port: 5173, open: true }
})
