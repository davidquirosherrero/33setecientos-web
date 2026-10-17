# 33setecientos — Web

Sitio web de la agencia 33setecientos.  
**Stack:** Astro v7 (HTML estático) + Vercel · **Coste de hosting:** 0 €

> Migrado en octubre 2026 desde WordPress + Elementor en Webempresa (140 €/año).  
> El sitio anterior sigue activo en Webempresa solo para el correo electrónico.

---

## Arquitectura

| Capa | Tecnología | Notas |
|---|---|---|
| Framework | Astro v7 | Genera HTML estático, sin JS en servidor |
| Hosting | Vercel (free) | CDN global, deploy automático desde `main` |
| Dominio | Squarespace (registrar) | A `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com` |
| Formularios | Web3Forms | Sin backend propio; entrega al email de la agencia |
| Analítica | GTM-MRS2VN3V + GA4 (400561613) | Consentimiento via CookieBanner |
| Blog | Astro Content Collections | Posts en Markdown en `src/content/blog/` |
| Redirects | `vercel.json` | 301 para todas las URLs antiguas de WordPress |
| Email | Webempresa (mantenido aparte) | MX records sin tocar; 4 cuentas activas |

---

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

---

## Estructura

```
src/
  components/     # Header, Footer, SEO, CookieBanner, ServiceIcon
  content/
    blog/         # Posts del blog en Markdown (.md)
  layouts/        # BaseLayout.astro, BlogPostLayout.astro
  pages/          # Una página = un archivo .astro → una URL
    index.astro                          # Home
    contacto.astro                       # Formulario (Web3Forms)
    gracias.astro                        # Confirmación de envío
    blog-marketing-luarca.astro          # Listado del blog
    [...slug].astro                      # Posts individuales
    servicios-marketing/                 # Landing de servicios
    marketing-digital-*.astro            # Landings geográficas
    valdes-en-datos.astro                # Informe Valdés (iframe)
    aviso-legal.astro
    politica-privacidad.astro
  styles/
    global.css    # Design tokens + utilidades globales
public/
  images/         # Logos, imágenes
  fonts/          # Inter self-hosted (GDPR: sin llamadas a Google Fonts)
  valdes-en-datos.html  # Informe interactivo (antes en WP uploads)
vercel.json       # Redirects 301 + security headers + cache headers
```

---

## Blog — añadir un post

1. Crear `src/content/blog/slug-del-post.md`
2. Añadir frontmatter:
```md
---
title: "Título del artículo"
description: "Meta description (~155 caracteres)"
pubDate: 2026-10-17
draft: false
---
```
3. Push a `main` → Vercel despliega automáticamente.

La URL del post será `https://33setecientos.com/slug-del-post/` (igual que en WordPress, sin necesidad de redirect).

---

## Variables de entorno

| Variable | Descripción | Dónde configurar |
|---|---|---|
| `PUBLIC_WEB3FORMS_KEY` | Clave Web3Forms para formularios | Vercel → Settings → Environment Variables |

Las credenciales van en `.claude/settings.local.json` como `env`. Ese archivo es local, nunca se hace push.

---

## Deploy

Conectado a GitHub (`main` branch). Cada push despliega automáticamente en Vercel (~30 segundos).  
Dominio activo: **33setecientos.com**

---

## Redirects WordPress → Astro

`vercel.json` contiene 301 permanentes para todas las rutas del WordPress anterior:
- `/wp-admin`, `/wp-login.php`, `/wp-content/` → `/`
- `/feed/`, `/category/`, `/tag/`, `/author/`, `/2023/` → `/blog-marketing-luarca/`
- `/servicios` → `/servicios-marketing/`
- `/blog` → `/blog-marketing-luarca/`
- `/politica-privacidad-2/` → `/politica-privacidad/`
- `/sitemap_index.xml` → `/sitemap-index.xml`

Los posts individuales no necesitan redirect: WordPress usaba `/slug/` y Astro también.
