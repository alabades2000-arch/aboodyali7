import { defineConfig } from 'vite';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// قراءة متغيرات البيئة
const port = Number(process.env.PORT) || 5173;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  server: {
    port,
    host: '0.0.0.0', // للسماح بالاتصالات من أجهزة أخرى
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'terser',
  },
  base,
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
