import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base to '/' for root deployment on World4you.
  // Change to '/subfolder/' if deploying into a subdirectory.
  base: '/',
  build: {
    outDir: 'dist',
    // Inline assets smaller than 4 KB to reduce HTTP requests.
    assetsInlineLimit: 4096,
  },
})
