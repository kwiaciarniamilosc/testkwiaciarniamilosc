import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import markdownPreview from 'vite-plugin-markdown-preview';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    markdownPreview(),
    compression({ algorithm: 'brotliCompress' })  // Enables Brotli compression
  ],
  base: '/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
  },
});
