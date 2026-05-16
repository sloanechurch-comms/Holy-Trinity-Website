import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5173,
    open: false,
    host: true,
    watch: {
      // Polling is required for HMR through Docker bind mounts on Mac.
      usePolling: true,
      interval: 300,
    },
    hmr: {
      // Tell HMR clients to connect back to the host on the same port.
      host: 'localhost',
      clientPort: 5173,
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'sanity-studio': ['sanity', '@sanity/vision', '@sanity/scheduled-publishing'],
          'motion': ['framer-motion'],
        },
      },
    },
  },
});
