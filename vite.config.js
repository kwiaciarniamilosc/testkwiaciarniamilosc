import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import markdownPreview from 'vite-plugin-markdown-preview';
import compression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // 📝 Markdown Preview
    markdownPreview(),
    // 🔥 Gzip & Brotli Compression
    compression({
      algorithm: 'brotliCompress',
    }),
    // 📱 Progressive Web App (PWA)
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Kwiaciarnia Miłość',
        short_name: 'Kwiaciarnia',
        description: 'Najlepsza kwiaciarnia w Warszawie - Mokotów.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ff3366',
        start_url: '/testkwiaciarniamilosc.pl/',
        scope: '/testkwiaciarniamilosc.pl/',
        icons: [
          {
            src: '/testkwiaciarniamilosc.pl/assets/images/logo/favicon.ico',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  // 🌐 Base URL - Updated for GitHub Pages
  base: '/testkwiaciarniamilosc.pl/',
  // 🏗️ Optimized Build Configuration
  build: {
    assetsDir: 'assets',
    minify: 'terser',
    rollupOptions: {
      input: {
        main: './index.html', // ✅ Ensures index.html is built
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
  // 🌍 Define Server Configuration
  server: {
    port: 3000,
    open: true,
  },
});
