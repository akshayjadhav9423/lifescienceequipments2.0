import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration for deployment to https://akshayjadhav9423.github.io/lifescienceequipments2.0/
export default defineConfig({
  plugins: [react()],
  base: '/lifescienceequipments2.0/',
});