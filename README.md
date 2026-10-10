# 33setecientos — Web

Sitio web de la agencia 33setecientos.  
**Stack:** Astro + Cloudflare Pages · **Coste de hosting:** 0 €

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

## Estructura

```
src/
  components/     # Header, Footer, SEO, etc.
  content/
    blog/         # Posts del blog en Markdown
  layouts/        # BaseLayout, BlogPostLayout
  pages/          # Rutas → HTML estático
  styles/         # global.css (design tokens)
public/
  _redirects      # Redirects Cloudflare Pages
  _headers        # Response headers
  fonts/          # Inter self-hosted
  images/         # Logos, hero, servicios
```

## Añadir un post al blog

Crear `src/content/blog/YYYY-MM-DD-slug.md` con este frontmatter:

```markdown
---
title: "Título del artículo"
description: "Meta description (150–160 caracteres)"
pubDate: 2026-11-01
heroImage: /images/blog/nombre-imagen.jpg
tags: [marketing, luarca]
---

Contenido en Markdown...
```

El slug de la URL será el nombre del fichero sin la fecha y sin `.md`.  
Ejemplo: `2026-11-01-marketing-otono-luarca.md` → `/marketing-otono-luarca/`

## Deploy

Cada push a `main` despliega automáticamente en Cloudflare Pages.  
Preview URL: `https://33setecientos-web.pages.dev`  
Producción: `https://33setecientos.com` (tras el cambio DNS)

## Decisiones de arquitectura

- **Astro** sobre WordPress: Lighthouse 90+ garantizado, sin plugins, blog en Markdown
- **Cloudflare Pages** sobre Webempresa: CDN global, free tier, 0 €/año
- **Inter self-hosted** vía `@fontsource/inter`: elimina petición DNS a Google Fonts
- **Schema en HTML estático**: no depende de GTM ni JS para los rich results
- **`_redirects` nativo**: solo 1 redirect necesario (`/politica-privacidad-2/`)
