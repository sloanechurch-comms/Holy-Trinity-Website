import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
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
    // manualChunks only apply to the client bundle. vite-react-ssg
    // externalises react/react-dom in the SSR build, so adding them
    // to manualChunks there triggers EXTERNAL_MODULES_CANNOT_BE_INCLUDED.
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'sanity-studio': ['sanity', '@sanity/vision', '@sanity/scheduled-publishing'],
              'motion': ['framer-motion'],
            },
          },
        },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: false,
    // Studio is an interactive app that must boot client-side. Filter it
    // out so vite-react-ssg never tries to pre-render /admin.
    includedRoutes(paths) {
      return paths.filter((p) => !p.startsWith('/admin'));
    },
  },
}));
