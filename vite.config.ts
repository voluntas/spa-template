import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.BASE_URL || '/',
  server: {
    port: 5173,
    host: true,
  },
  optimizeDeps: {
    include: ['@duckdb/duckdb-wasm', 'uplot'],
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
})
