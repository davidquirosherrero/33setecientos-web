// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://33setecientos.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/page-404') &&
        !page.includes('/gracias') &&
        !page.includes('/aviso-legal') &&
        !page.includes('/politica-privacidad'),
    }),
  ],
  // Rutas que deben generarse como HTML estático
  trailingSlash: 'always',
});
