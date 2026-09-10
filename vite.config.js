import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // Project page lives at /deco-design-pvc-panels/ on GitHub Pages.
  base: command === 'build' ? '/deco-design-pvc-panels/' : '/',
  plugins: [react()],
  server: {
    port: 5178,
    host: true,
  },
}))
