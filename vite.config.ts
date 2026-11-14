import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://sakshishah-dev.github.io/portfolio/ (GitHub Pages project site)
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
