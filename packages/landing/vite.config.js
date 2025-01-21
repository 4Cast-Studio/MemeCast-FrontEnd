import postcssMediaMinMax from '@csstools/postcss-media-minmax';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: [
        'crypto',
        'stream',
        'util',
      ],
    }),
    tsconfigPaths(), // Resolve imports using tsconfig.json baseUrl.
    react(),
    checker({
      typescript: true, // Perform type checking.
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(), // Add vendor prefixes to CSS rules.
        postcssMediaMinMax(), // Support CSS Media Queries Level 4. Allow range query for older iOS Safari.
      ],
    },
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 8 * 1024, // Azure CDN only compresses files smaller than 8MB.
  },
  server: {
    port: 3000,
    open: true,
  },
});
