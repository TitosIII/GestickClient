import { defineConfig, optimizeDeps } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:process.env.PORT || 5173
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
