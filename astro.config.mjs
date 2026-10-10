// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://33setecientos.com',
  integrations: [
    sitemap({
      // Excluir páginas que no deben indexarse
      filter: (page) => !page.includes('/page-404'),
    }),
  ],
  // Rutas que deben generarse como HTML estático
  trailingSlash: 'always',
});
