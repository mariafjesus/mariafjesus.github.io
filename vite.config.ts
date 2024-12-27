import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mariafjesus.github.io/', // Set this to your repository name
  plugins: [react()],
});
