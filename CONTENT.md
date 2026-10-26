# Procedencia del contenido

Regla: **el sitio no afirma nada que no venga de la ficha o de las observaciones del cliente.**
Ni cifras, ni fechas, ni clientes, ni testimonios, ni certificaciones, ni cobertura geográfica.

Última revisión: observaciones del cliente del **29-sep-2026** (pestaña «Comerzia» del Excel).

## Enfoque

Comerzia desarrolla y administra **cuentas y canales comerciales**: entra *después* del primer
contacto (seguimiento, continuidad de oportunidades, expansión de canales). La apertura de mercado
y el primer contacto no son de Comerzia; ningún texto debe sonar a prospección en frío.

El sitio se presenta como empresa independiente: no menciona a otras empresas del cliente, a un
grupo ni al sitio espejo.

## De la ficha y las observaciones

| en el sitio | dato |
|---|---|
| nombre y dominio | Comerzia · comerzia.mx |
| slogan (título del hero) | «Conexiones comerciales que generan nuevas oportunidades» |
| llamado a la acción | «Conecta con nuevos mercados» (de ahí el tuteo en todo el sitio) |
| los cuatro servicios | desarrollo de cuentas, seguimiento de oportunidades, continuidad comercial, expansión de canales |
| el embudo (portada y Servicios) | Cuenta objetivo → Oportunidad → Seguimiento → Cierre → Desarrollo de cuenta |
| los cuatro valores | Confianza, Seguimiento, Agilidad, Servicio |
| las cuatro zonas del mapa | comercializadoras, distribuidores, industria, proveedores |
| marca | #14452F + #C9E265, Syne + Manrope, ruta ascendente, mapa de alcance por zonas |

Misión, visión, descripciones de servicios, valores y mercados están redactados para Comerzia a
partir de ese enfoque. Ya no se usa texto del sitio espejo.

## Qué se quitó a propósito

- **Frases genéricas** del espejo: «Buscamos la satisfacción continua…», «superar sus
  expectativas», «de manera eficaz y eficiente», la misión de «satisfacer y fidelizar». Pedido
  explícito del cliente.
- **Prospección e intermediación** como servicios: eso es apertura de mercado, no Comerzia.
- **Correo y teléfono**: eran placeholders con apariencia real. Sólo queda el formulario.
- **Casos de éxito, certificaciones (REPSE, STPS, ISO), sectores financieros**: no son de Comerzia.
- **Fondos de terceros**: ningún texto dice que Comerzia reciba, administre o transfiera dinero.
  En Servicios se aclara que facturación y cobros van directo entre el cliente y sus clientes.
  Ojo con «cuentas»: siempre en el sentido de cuentas comerciales (clientes), nunca bancarias.
- **Negociación a nombre del cliente**: el cierre dice que la aceptación y el compromiso
  comercial son siempre del cliente.

## Pendientes de segunda fase

En `src/data/site.ts` están en `null`; el sitio los oculta o los marca en vez de inventarlos:

| dato | dónde se nota hoy |
|---|---|
| razón social (`legalName`) | aviso de privacidad, recuadro «Razón social por confirmar»; el pie usa el nombre comercial |
| domicilio (`address`) | aviso de privacidad, recuadro «domicilio por confirmar» |
| correo con dominio (`email`) | contacto y pie sólo muestran el formulario; el aviso remite al formulario para ARCO |
| teléfono (`phone`, `phoneHref`) | no aparece |
| fotos reales | las de banco llevan la etiqueta «Imagen ilustrativa» |
| aviso revisado por el área legal | el aviso dice «Versión preliminar, pendiente de validación legal» |

Al llenar un dato en `site.ts` aparece solo en contacto, pie y aviso.

## Fotografías

Genéricas, de Unsplash (Unsplash License: uso comercial libre, sin atribución
obligatoria). Están en `src/assets/photos/`; Astro las sirve en AVIF/WebP. Todas llevan
«Imagen ilustrativa» (`Photo.astro`) hasta que el cliente entregue las propias.

| archivo | dónde | origen |
|---|---|---|
| `reunion.jpg` | Inicio, «Nuestro enfoque» | https://unsplash.com/photos/KdeqA3aTnBY |
| `almacen.jpg` | Inicio, «Mercado» | https://unsplash.com/photos/sczNLg6rrhQ |
| `acuerdo.jpg` | Nosotros, bajo el encabezado | https://unsplash.com/photos/qFSQFSmfZkA |

Para cambiar una, reemplace el archivo con el mismo nombre.
