import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        global: 'global.html',
        tecnologia: 'tecnologia.html',
        deportes: 'deportes.html',
        politica: 'politica.html'
      }
    }
  },
  server: {
    open: true
  }
});