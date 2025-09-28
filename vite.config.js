import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [svelte()],
  server: { port: 3000, strictPort: true },
  resolve: {
    alias: {
        '@assets': path.resolve(__dirname, './src/lib/assets'),
        '@components': path.resolve(__dirname, './src/lib/components'),
    }
  }
});