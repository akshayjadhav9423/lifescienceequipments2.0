import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration optimized for generic deployment (GitHub Pages, Netlify, etc.)
export default defineConfig({
  plugins: [react()],
  // Using relative base path ('./') ensures assets load correctly regardless of the subdirectory
  // This fixes issues when deploying to https://username.github.io/repo-name/
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
});