import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/WAPLabs/lab11/communication/dist_lab11/',
  plugins: [react()],
})
