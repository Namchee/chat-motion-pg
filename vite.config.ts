
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import icons from 'unplugin-icons/vite';
import unocss from 'unocss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), unocss(), icons({ compiler: 'jsx', jsx: 'react' })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
