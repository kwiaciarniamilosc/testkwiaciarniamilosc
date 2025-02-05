import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import markdownPreview from 'vite-plugin-markdown-preview';
import compression from 'vite-plugin-compression';
import sitemap from 'vite-plugin-sitemap';
import { VitePWA } from 'vite-plugin-pwa';

// 🚀 Define Base URL
const BASE_URL = 'https://www.kwiaciarniamilosc.pl';

export default defineConfig({
  plugins: [
    react(),

    // 📝 Markdown Preview (You had this already)
    markdownPreview(),

    // 🗺️ Sitemap & Robots.txt for SEO
    sitemap({
      hostname: BASE_URL,
      readable: true, // Makes the sitemap more human-readable
      generateRobotsTxt: true, // Auto-generates robots.txt
    }),


    // 🔥 Gzip & Brotli Compression (Improves Speed & Performance)
    compression({
      algorithm: 'brotliCompress', // Brotli provides better compression than Gzip
    }),

    // 📱 Progressive Web App (PWA) for Offline Caching & Speed
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Kwiaciarnia Miłość',
        short_name: 'Kwiaciarnia',
        description: 'Najlepsza kwiaciarnia w Warszawie - Mokotów.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ff3366',
        icons: [
          {
            src: '/assets/images/logo/favicon.ico',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    }),
  ],
  
  // 🌐 Base URL
  base: '/',

  // 🏗️ Optimized Build Configuration
  build: {
    assetsDir: 'assets',
    minify: 'terser', // Minifies JS & CSS for faster loading
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
/*************  ✨ Codeium Command ⭐  *************/
        /**
         * Rollup manual chunking to separate node_modules
         * into separate chunks.
         *
         * @param {string} id - The ID of the module.
         * @returns {string} The chunk name.
         */
/******  f3984fed-c4a4-46c7-bb50-1656ad5d3940  *******/
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
    port: 3000, // Change if needed
    open: true, // Opens browser on start
  },
});
