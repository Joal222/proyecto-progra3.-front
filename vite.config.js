import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['jwt-decode'],
  },
  build: {
    outDir: 'dist',
  },
  preview: {
    port: 5000,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://proyecto-progra3.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
