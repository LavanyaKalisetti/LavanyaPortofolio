import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the site works at any URL
  // (https://user.github.io/ or https://user.github.io/repo-name/)
  base: './',
});
