import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
// import netlify from '@netlify/vite-plugin-tanstack-start' <-- Pode deixar assim ou apagar essa linha também

const config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    // netlify(),  <--- COLOQUE AS DUAS BARRAS // AQUI NA FRENTE
    tanstackStart(),
    viteReact(),
  ],
})

export default config