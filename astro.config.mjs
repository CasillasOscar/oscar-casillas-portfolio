// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://casillasoscar.github.io',
  base: '/oscar-casillas-portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});