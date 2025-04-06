// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio-ReactJs/', // 👈 this must match your repo name
  plugins: [react()],
})
