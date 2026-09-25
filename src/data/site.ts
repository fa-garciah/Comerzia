/**
 * Única fuente de verdad del contenido de Comerzia.
 *
 * Procedencia (ver CONTENT.md):
 *  - servicios, mercados, slogan y llamado a la acción: la ficha de la empresa
 *  - misión, visión, valores, citas, proceso y texto del formulario: el sitio
 *    espejo dpoligonal.mx, adaptados a Comerzia y al trato de usted
 *
 * No hay cifras, fechas, clientes ni coberturas: ninguna viene de la ficha ni
 * del espejo, y el sitio no afirma lo que el negocio no ha confirmado.
 */
export const site = {
  name: "Comerzia",
  /** placeholder — sustituir por la razón social real */
  legalName: "Comerzia",
  slogan: "Conexiones comerciales que generan nuevas oportunidades",
  cta: "Conecte con nuevos mercados",
  description:
    "Comerzia es una firma de intermediación comercial: prospección, intermediación y seguimiento para comercializadoras, distribuidores, industria y proveedores.",
  locale: "es-MX",
  url: "https://comerzia.mx",
  /** placeholder — sustituir por el correo real */
  email: "contacto@comerzia.mx",
  /** placeholder — sustituir por el teléfono real */
  phone: "+52 55 0000 0000",
  phoneHref: "+525500000000",
} as const;

export const nav = [
  { label: "Servicios", href: "/servicios/" },
  { label: "Nosotros", href: "/nosotros/" },
  { label: "Contacto", href: "/contacto/" },
] as const;

/** Los tres servicios de la ficha, en el orden en que ocurren. */
export const services = [
  {
    slug: "prospeccion",
    n: "01",
    title: "Prospección comercial",
    summary:
      "Identificamos a los prospectos clave para su producto o servicio y establecemos contacto directo con quienes deciden la compra.",
    body:
      "Antes de negociar hay que saber con quién. Definimos junto con usted el perfil del cliente y las zonas de mercado a trabajar, y abrimos la conversación con compradores, distribuidores y puntos de venta que de verdad pueden comprar lo que usted ofrece.",
    includes: [
      "Perfil del cliente y zonas de mercado a trabajar",
      "Contacto directo con prospectos clave",
      "Presentación de su propuesta comercial",
      "Reuniones con quienes deciden la compra",
    ],
  },
  {
    slug: "intermediacion",
    n: "02",
    title: "Intermediación comercial",
    summary:
      "Negociamos a nombre de su empresa bajo reglas de comercialización claras y agilizamos el proceso hasta el cierre de la venta.",
    body:
      "Somos el puente entre quien vende y quien compra. Negociamos las condiciones, dejamos por escrito las reglas bajo las que se va a comercializar y coordinamos a ambas partes para que el cierre llegue sin malentendidos.",
    includes: [
      "Negociación de condiciones comerciales",
      "Reglas de comercialización por escrito",
      "Coordinación entre comprador y vendedor",
      "Acompañamiento hasta el cierre",
    ],
  },
  {
    slug: "seguimiento",
    n: "03",
    title: "Seguimiento comercial",
    summary:
      "Después del cierre seguimos presentes, para que la primera venta se convierta en una relación comercial continua.",
    body:
      "Desde el primer contacto hasta la entrega final. Damos seguimiento a pedidos y acuerdos, atendemos los ajustes que pida cada cuenta y detectamos las siguientes oportunidades dentro de la misma cartera.",
    includes: [
      "Seguimiento de pedidos y acuerdos",
      "Atención a ajustes y nuevas condiciones",
      "Estado de cada cuenta, a la vista",
      "Nuevas oportunidades en la misma cartera",
    ],
  },
] as const;

/** Mercado de la ficha. Cada uno es una zona del mapa de alcance. */
export const markets = [
  {
    slug: "comercializadoras",
    title: "Comercializadoras",
    body: "Nuevos compradores y canales para el catálogo que ya mueven.",
  },
  {
    slug: "distribuidores",
    title: "Distribuidores",
    body: "Marcas que sumar a su red y puntos de venta donde colocarlas.",
  },
  {
    slug: "industria",
    title: "Industria",
    body: "Salida para su producción hacia quienes la comercializan y la usan.",
  },
  {
    slug: "proveedores",
    title: "Proveedores",
    body: "Acceso a las empresas que buscan abastecerse de lo que usted suministra.",
  },
] as const;

/**
 * La secuencia que el espejo describía en sus casos: contacto con prospectos
 * clave → negociación → reglas de comercialización → cierre. Aquí es la ruta.
 */
export const route = [
  {
    n: "01",
    title: "Prospectos clave",
    body: "Contacto directo con los prospectos que pueden comprar lo que usted vende.",
  },
  {
    n: "02",
    title: "Negociación",
    body: "Negociamos las condiciones comerciales a nombre de su empresa.",
  },
  {
    n: "03",
    title: "Reglas claras",
    body: "Reglas de comercialización por escrito, antes de que haya malentendidos.",
  },
  {
    n: "04",
    title: "Cierre y seguimiento",
    body: "Agilizamos el cierre y seguimos presentes después de la venta.",
  },
] as const;

export const about = {
  intro:
    "Adaptamos nuestros servicios a las necesidades específicas de cada cliente, con soluciones a la medida y asesoría estratégica en todas las etapas del desarrollo comercial.",
  mission:
    "Satisfacer las necesidades de nuestros clientes y fidelizarlos, impulsando acciones que contribuyan al desarrollo de su negocio y obteniendo los mejores resultados para la empresa y sus colaboradores, con calidad y excelencia en el servicio.",
  vision:
    "Ser un referente en intermediación comercial a nivel nacional e internacional, reconocido por el valor añadido que aportamos en cada conexión entre quien vende y quien compra.",
} as const;

export const values = [
  {
    title: "Calidad",
    body: "La calidad del servicio es nuestra prioridad. Nos esforzamos por ofrecer una experiencia excepcional.",
  },
  {
    title: "Profesionalismo",
    body: "El profesionalismo no es solo una habilidad: es una actitud que se refleja en cada aspecto de nuestro trabajo.",
  },
  {
    title: "Compromiso",
    body: "Su satisfacción es nuestro mayor logro, y trabajamos para alcanzarla en cada paso del camino.",
  },
  {
    title: "Confianza",
    body: "La confianza en nuestro servicio es nuestro compromiso central, y trabajamos todos los días para mantenerla.",
  },
] as const;

/** Citas del espejo, adaptadas. */
export const quotes = {
  home: "Buscamos la satisfacción continua de nuestros clientes con un servicio que exceda sus expectativas y una adaptación competitiva en el mercado.",
  services:
    "Somos una empresa creada para dar soluciones a la comercialización de productos de manera eficaz y eficiente.",
  about:
    "Desde el primer contacto hasta la entrega final, nos comprometemos a superar sus expectativas.",
} as const;

export const contactIntro =
  "Será un placer atenderle. Déjenos sus datos y un especialista se pondrá en contacto con usted.";
