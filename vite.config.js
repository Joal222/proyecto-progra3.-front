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
    host: '0.0.0.0'
  },
});
