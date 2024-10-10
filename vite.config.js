import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import path from 'path'

export default defineConfig({
  plugins: [vue2()],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  build: {
    // outDir: path.resolve(__dirname, '../www/output'), // for output outside of project root
    outDir: 'out',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        entryFileNames: 'app.js',
        assetFileNames: 'app.css'
      }
    }
  }
})