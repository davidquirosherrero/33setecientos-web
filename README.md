# 33setecientos — Web

Sitio web de la agencia 33setecientos.  
**Stack:** Astro + Vercel · **Coste de hosting:** 0 €

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
  components/     # Header, Footer, SEO, CookieBanner, etc.
  content/
    blog/         # Posts del blog en Markdown
  layouts/        # BaseLayout, BlogPostLayout
  pages/          # Rutas → HTML estático
  styles/         # global.css (design tokens)
public/
  images/         # Logos, hero, servicios
  fonts/          # Inter self-hosted
vercel.json       # Redirects 301 + security headers + cache headers
```

## Variables de entorno

| Variable | Descripción |
|---|---|
| `PUBLIC_WEB3FORMS_KEY` | Clave de acceso Web3Forms para los formularios de contacto |

## Deploy

Conectado a GitHub (`main` branch). Cada push despliega automáticamente en Vercel.  
Dominio: **33setecientos.com**
