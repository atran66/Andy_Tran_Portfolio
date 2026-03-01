import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Andy_Tran_Portfolio/",
  plugins: [react()],
})
