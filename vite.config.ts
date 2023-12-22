import { svelte } from '@sveltejs/vite-plugin-svelte'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), react()],
})
