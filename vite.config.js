import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {esbuildCommonjs} from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps:{
    esbuildOptions:{
      plugins:[
        esbuildCommonjs(['quagga', 'react-scripts', 'react-dom'])
      ]
    }
  },
  server: {
    port: process.env.PORT || 5173,
  },
});
