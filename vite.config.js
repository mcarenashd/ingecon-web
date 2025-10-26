import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  base: '/ingecon-web/',   // 👈 importante para rutas y assets en Pages
})