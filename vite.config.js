import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` matters for GitHub Pages.
//   - Custom domain or <user>.github.io repo  ->  '/'
//   - Project repo (user.github.io/apeira)    ->  '/apeira/'
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
