import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/me/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].mjs',
        chunkFileNames: 'assets/[name].[hash].mjs',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    manifest: true,
    sourcemap: true
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
}) 