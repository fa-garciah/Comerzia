# Procedencia del contenido

Regla: **el sitio no afirma nada que no venga de la ficha o del sitio espejo.**
Ni cifras, ni fechas, ni clientes, ni cobertura geográfica.

Espejo: **dpoligonal.mx** (Desarrolladora Poligonal, en baja). Texto revisado en
vivo el 2026-09-24; coincide con la captura en `../Poligonal/RECON/raw/`.

## De la ficha

| en el sitio | dato |
|---|---|
| nombre y dominio | Comerzia · comerzia.mx |
| los tres servicios | prospección, intermediación y seguimiento comercial |
| las cuatro zonas del mapa | comercializadoras, distribuidores, industria, proveedores |
| slogan (título del hero) | «Conexiones comerciales que generan nuevas oportunidades» |
| llamado a la acción | «Conecte con nuevos mercados» |
| marca | #14452F + #C9E265, Syne + Manrope, ruta ascendente, mapa de alcance por zonas |

## Del espejo, adaptado (trato de usted, Comerzia en lugar de Poligonal)

| en el sitio | origen en dpoligonal.mx |
|---|---|
| texto del hero y «Nuestra firma» | «Creamos conexiones estratégicas…» y el bloque «Nuestra firma» |
| «Comerzia es su socio de negocio» | «Poligonal es tu socio de negocio» |
| los cuatro pasos de la ruta | la secuencia de sus casos: prospectos clave → negociación → reglas de comercialización → cierre |
| misión | «Nuestra empresa» → Misión, casi literal |
| visión | reescrita: la original hablaba de ser «proveedor global de elementos normalizados», que no corresponde a una intermediaria |
| los cuatro valores | Calidad, Profesionalismo, Compromiso, Confianza |
| las tres citas | portada, «Servicios» y «Nuestra empresa» |
| campos del formulario | nombre, apellido, empresa, cargo, correo, teléfono, servicio de interés |

## Qué se dejó fuera a propósito

- **Casos de éxito**: son trabajos de Poligonal; atribuírselos a Comerzia sería inventarlos.
- **Certificaciones** (REPSE, STPS, ISO): afirmación falsa para otra empresa.
- **Sectores financieros** del espejo (fondos, banca privada…): la ficha define otro mercado.
- **Fotografías del espejo**: no son nuestras; se usan fotos libres de Unsplash (abajo).

## Placeholders

`contacto@comerzia.mx`, `+52 55 0000 0000`, razón social «Comerzia» y el aviso de
privacidad. Todos están marcados en `src/data/site.ts` y en la página del aviso.

## Fotografías

Genéricas, de Unsplash (Unsplash License: uso comercial libre, sin atribución
obligatoria). Están en `src/assets/photos/`; Astro las sirve en AVIF/WebP.

| archivo | dónde | origen |
|---|---|---|
| `reunion.jpg` | Inicio, «Nuestra firma» | https://unsplash.com/photos/KdeqA3aTnBY |
| `almacen.jpg` | Inicio, «Mercado» | https://unsplash.com/photos/sczNLg6rrhQ |
| `acuerdo.jpg` | Nosotros, bajo el encabezado | https://unsplash.com/photos/qFSQFSmfZkA |

Para cambiar una, reemplace el archivo con el mismo nombre.
