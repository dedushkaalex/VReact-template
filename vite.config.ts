import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import {
  fileURLToPath,
  URL,
} from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components/', import.meta.url)) },
      { find: '@constants', replacement: fileURLToPath(new URL('./src/constants/', import.meta.url)) },
      { find: '@core', replacement: fileURLToPath(new URL('./src/core/', import.meta.url)) },
      { find: '@styles', replacement: fileURLToPath(new URL('./src/styles/', import.meta.url)) },
      { find: '@layout', replacement: fileURLToPath(new URL('./src/layout/', import.meta.url)) },
      { find: '@screens', replacement: fileURLToPath(new URL('./src/screens/', import.meta.url)) },
      { find: '@api', replacement: fileURLToPath(new URL('./src/api/', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets/', import.meta.url)) },
    ],
  },
});
