import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/me/',  // Updated to match your repository name
  server: {
    port: 3000
  }
}) 