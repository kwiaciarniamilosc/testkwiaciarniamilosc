import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import markdownPreview from 'vite-plugin-markdown-preview';

export default defineConfig({
  plugins: [
    react(),
    markdownPreview()
  ],
  base: '/testkwiaciarniamilosc.pl/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});