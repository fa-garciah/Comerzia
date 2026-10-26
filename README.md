# Comerzia — comerzia.mx

Sitio de **Comerzia** (Empresa OP 3): desarrollo y continuidad de cuentas y canales comerciales.
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
| textos, servicios, embudo, mercados, valores, frases | `src/data/site.ts` |
| correo, teléfono, razón social, domicilio (hoy `null`, segunda fase) | `src/data/site.ts` → `site` |
| colores y tipografía | `src/styles/tokens.css` |
| mapa de alcance por zonas | `src/components/ReachMap.astro` |
| embudo en escalera (portada) | `src/components/AscentRoute.astro` |
| formulario (Netlify Forms, nombre `contacto`) | `src/islands/ContactForm.svelte` |
| fotografías (Unsplash) | `src/assets/photos/` · componente `src/components/Photo.astro` |

Páginas: `/`, `/servicios/`, `/nosotros/`, `/contacto/`, `/aviso-de-privacidad/`, `404`.

## Marca

- Verde bosque `#14452F` (marca, bandas oscuras) y lima `#C9E265` (ruta, zona
  activa, llamado a la acción). La lima nunca se usa como texto sobre fondo claro
  (contraste 1.4:1); sobre el bosque llega a 7.5:1.
- Syne (titulares) y Manrope (texto), autoalojadas vía `@fontsource-variable` (licencia OFL).
- **Ruta ascendente**: el logotipo, las barras de los eyebrows, la escalera del
  embudo y las barras de las cabeceras interiores repiten la misma subida.
- **Mapa de alcance por zonas**: cuatro cuadrantes = los cuatro mercados; cuatro
  anillos = los cuatro servicios, de la cuenta (centro) a los canales (borde). No
  representa geografía (ver `CONTENT.md`).

## Antes de publicar

1. Razón social, domicilio, correo con dominio propio y teléfono en `src/data/site.ts`
   (segunda fase; ver `CONTENT.md`). No usar datos provisionales que parezcan reales.
2. Aviso de privacidad validado por el área legal del cliente (hoy dice «versión preliminar»).
3. Netlify: activar **Forms → Form detection** en el sitio y configurar a quién llegan las
   notificaciones del formulario `contacto`. En `npm run dev` el envío falla (no hay Netlify).
4. Fotos reales en `src/assets/photos/` y quitar la etiqueta «Imagen ilustrativa» de `Photo.astro`.
5. `PUBLIC_ALLOW_INDEX=1` en `.env`: mientras no esté, el sitio sale con `noindex`.

Despliegue: `netlify.toml` listo (`npm run build`, publica `dist/`).
