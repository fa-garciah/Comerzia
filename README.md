# Comerzia — comerzia.mx

Sitio de **Comerzia** (Empresa OP 3), firma de intermediación comercial.
Astro 7 estático + una isla Svelte (formulario de contacto). Sin analítica ni rastreo.

```bash
npm install
npm run dev      # http://localhost:4321  (el preview del editor usa 4331)
npm run build    # genera dist/
npm run check    # tipos y plantillas
```

## Mapa de contenido

| qué cambiar | dónde |
|---|---|
| textos, servicios, mercados, valores, citas | `src/data/site.ts` |
| correo, teléfono, razón social (hoy placeholders) | `src/data/site.ts` → `site` |
| colores y tipografía | `src/styles/tokens.css` |
| mapa de alcance por zonas | `src/components/ReachMap.astro` |
| ruta ascendente (Cómo trabajamos) | `src/components/AscentRoute.astro` |
| formulario | `src/islands/ContactForm.svelte` |
| fotografías (Unsplash) | `src/assets/photos/` · componente `src/components/Photo.astro` |

Páginas: `/`, `/servicios/`, `/nosotros/`, `/contacto/`, `/aviso-de-privacidad/`, `404`.

## Marca

- Verde bosque `#14452F` (marca, bandas oscuras) y lima `#C9E265` (ruta, zona
  activa, llamado a la acción). La lima nunca se usa como texto sobre fondo claro
  (contraste 1.4:1); sobre el bosque llega a 7.5:1.
- Syne (titulares) y Manrope (texto), autoalojadas vía `@fontsource-variable` (licencia OFL).
- **Ruta ascendente**: el logotipo, las barras de los eyebrows, la escalera de
  «Cómo trabajamos» y las barras de las cabeceras interiores repiten la misma subida.
- **Mapa de alcance por zonas**: cuatro cuadrantes = los cuatro mercados; tres
  anillos = los tres servicios. No representa geografía (ver `CONTENT.md`).

## Antes de publicar

1. Correo, teléfono y razón social reales en `src/data/site.ts`.
2. Aviso de privacidad redactado para la empresa (hoy es un ejemplo, y lo dice en la página).
3. Si se quiere que el formulario envíe sin abrir el cliente de correo, conectar un
   backend (Netlify Forms, Formspree…) en `ContactForm.svelte`.
4. `PUBLIC_ALLOW_INDEX=1` en `.env`: mientras no esté, el sitio sale con `noindex`.

Despliegue: `netlify.toml` listo (`npm run build`, publica `dist/`).
