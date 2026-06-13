import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: './', // <-- UBAH BAGIAN INI MENJADI ARTIKEL TITIK DAN GARIS MIRING
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), '.'),
    },
  },
})