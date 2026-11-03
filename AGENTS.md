## Accesibilidad — Contraste de color (WCAG AA)

El objetivo es ≥4.5:1 para texto normal y ≥3:1 para texto grande (≥24px o ≥18.67px bold).

### Paleta y contrastes calculados

| Combinación | Ratio | Pasa |
|---|---|---|
| `--navy` (#1A2B6B) sobre `--teal` (#4DC9B0) | 6.43:1 | ✓ |
| `--navy` sobre `--light` (#F4F6FB) | 12.16:1 | ✓ |
| `--navy` sobre `--white` (#ffffff) | 13.11:1 | ✓ |
| `--teal` sobre `--navy` | 6.43:1 | ✓ |
| `--white` sobre `--navy` | 13.11:1 | ✓ |
| `--teal` sobre `--light` | 1.89:1 | ✗ |
| `--teal` sobre `--white` | 1.88:1 | ✗ |
| `--grey` (#6B7280) sobre `--white` | 4.93:1 | ✓ |

### Reglas para nuevos componentes

**`opacity` en texto sobre fondos de color**
Usar `opacity` en un elemento de texto mezcla el color del texto con el fondo, reduciendo el contraste real. En concreto:
- `color: var(--navy); opacity: 0.8` sobre fondo teal baja el ratio de 6.43 a **4.38:1** (falla).
- Nunca usar `opacity` para "suavizar" texto sobre fondos de color. Usar un color sólido equivalente o simplemente omitir el opacity.

**`btn-outline` fuera de secciones oscuras**
La clase `.btn-outline` usa `color: var(--teal)` que falla sobre fondos claros:
- En `.section--light` o sobre `--white`: añadir `.section--light .btn-outline { color: var(--navy); border-color: var(--navy); }` o equivalente en `global.css`.
- En `.section--teal`: usar override inline `style="color:var(--navy);border-color:var(--navy)"` o CSS contextual.
- `.btn-outline` sin override solo funciona en `.section--navy` o fondos oscuros.

**Texto semitransparente en el footer**
El pie de página tiene fondo `--navy`. Opacidades mínimas seguras sobre navy para texto pequeño (≤0.9rem):
- `rgba(255,255,255,0.55)` → 5.06:1 ✓ (mínimo)
- `rgba(255,255,255,0.6)` → 5.69:1 ✓ (recomendado para copyright)
- `rgba(255,255,255,0.4)` → 3.38:1 ✗ (no usar para texto pequeño)

**Verificación antes de cada push**
Comprobar con la pestaña Accessibility de Lighthouse en Chrome DevTools (F12 → Lighthouse → Accessibility) o con [PageSpeed Insights](https://pagespeed.web.dev/).

---

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
