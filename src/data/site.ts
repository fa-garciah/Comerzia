/**
 * Única fuente de verdad del contenido de Comerzia.
 *
 * Procedencia (ver CONTENT.md):
 *  - slogan, valores, mercado y llamado a la acción: la ficha de la empresa
 *  - enfoque, los cuatro servicios y el embudo: observaciones del cliente del
 *    29-sep-2026 (desarrollo y continuidad de cuentas y canales)
 *  - el resto está redactado para Comerzia a partir de ese enfoque
 *
 * No hay cifras, fechas, clientes, testimonios ni certificaciones: el sitio no
 * afirma lo que el negocio no ha confirmado. Los datos que faltan (razón
 * social, domicilio, teléfono, correo con dominio) quedan en `null` hasta la
 * segunda fase; el sitio los oculta en vez de mostrar datos provisionales.
 */
export const site = {
  name: "Comerzia",
  /** PENDIENTE (segunda fase): razón social confirmada por el cliente */
  legalName: null as string | null,
  slogan: "Conexiones comerciales que generan nuevas oportunidades",
  cta: "Conecta con nuevos mercados",
  description:
    "Comerzia desarrolla y da continuidad a cuentas y canales comerciales: desarrollo de cuentas, seguimiento de oportunidades, continuidad comercial y expansión de canales.",
  locale: "es-MX",
  url: "https://comerzia.mx",
  /** PENDIENTE (segunda fase): correo con el dominio propio. Mientras sea null, sólo hay formulario. */
  email: null as string | null,
  /** PENDIENTE (segunda fase): teléfono. `phoneHref` sin espacios, p. ej. "+525512345678". */
  phone: null as string | null,
  phoneHref: null as string | null,
  /** PENDIENTE (segunda fase): domicilio para el aviso de privacidad */
  address: null as string | null,
};

export const nav = [
  { label: "Servicios", href: "/servicios/" },
  { label: "Nosotros", href: "/nosotros/" },
  { label: "Contacto", href: "/contacto/" },
] as const;

/**
 * Los cuatro servicios que pidió el cliente. Comerzia entra después del primer
 * contacto: no hace prospección en frío ni apertura de mercado.
 */
export const services = [
  {
    slug: "desarrollo-de-cuentas",
    n: "01",
    title: "Desarrollo de cuentas",
    summary:
      "Trazamos con tu equipo un plan para cada cuenta clave: qué te compra hoy, qué más podría comprarte y quién lo decide.",
    body:
      "Una cuenta abierta todavía no es una cuenta desarrollada. Revisamos con tu equipo cada cliente que vale la pena hacer crecer, identificamos a las personas que intervienen en la compra y acordamos contigo los pasos para ampliar la relación: nuevas líneas, nuevas sucursales o nuevos volúmenes.",
    includes: [
      "Revisión de las cuentas que ya atiendes",
      "Mapa de contactos y de quién decide la compra",
      "Plan de desarrollo por cuenta, acordado contigo",
      "Revisión periódica del plan con tu equipo",
    ],
  },
  {
    slug: "seguimiento-de-oportunidades",
    n: "02",
    title: "Seguimiento de oportunidades",
    summary:
      "Cada oportunidad abierta tiene un siguiente paso, un responsable y una fecha, para que ninguna se enfríe entre una reunión y otra.",
    body:
      "Las oportunidades se pierden más por falta de seguimiento que por falta de interés. Llevamos el registro de cada una, acompañamos las propuestas y cotizaciones que emite tu empresa y documentamos las condiciones que se van hablando para que tú las apruebes.",
    includes: [
      "Registro de oportunidades por cuenta",
      "Siguiente paso, responsable y fecha para cada una",
      "Acompañamiento de propuestas y cotizaciones de tu empresa",
      "Condiciones documentadas para tu aprobación",
    ],
  },
  {
    slug: "continuidad-comercial",
    n: "03",
    title: "Continuidad comercial",
    summary:
      "Después del cierre seguimos presentes: pedidos, ajustes y recompras, para que la primera venta se convierta en una relación estable.",
    body:
      "El trabajo no termina con el primer pedido. Damos seguimiento a lo acordado, atendemos los ajustes que pide cada cliente y te avisamos a tiempo de recompras y renovaciones, para que la cuenta no dependa de que alguien se acuerde.",
    includes: [
      "Seguimiento a pedidos y acuerdos vigentes",
      "Atención a ajustes y cambios de condiciones",
      "Aviso oportuno de recompras y renovaciones",
      "Reporte del estado de cada cuenta para tu equipo",
    ],
  },
  {
    slug: "expansion-de-canales",
    n: "04",
    title: "Expansión de canales",
    summary:
      "Llevamos lo que ya vendes a nuevos canales, partiendo de las cuentas y los productos que hoy funcionan mejor.",
    body:
      "Cuando una cuenta y un producto ya funcionan, el siguiente paso es replicarlos. Analizamos contigo por qué canales vendes hoy, cuáles vale la pena sumar y cómo incorporarlos sin descuidar a los clientes que ya tienes.",
    includes: [
      "Análisis de los canales por los que vendes hoy",
      "Canales nuevos a evaluar con tu equipo",
      "Plan de incorporación de cada canal",
      "Seguimiento del canal hasta que opere con regularidad",
    ],
  },
] as const;

/** Mercado de la ficha. Cada uno es una zona del mapa de alcance. */
export const markets = [
  {
    slug: "comercializadoras",
    title: "Comercializadoras",
    body: "Más profundidad en las cuentas que ya atienden y nuevos canales para su catálogo.",
  },
  {
    slug: "distribuidores",
    title: "Distribuidores",
    body: "Atención constante a sus puntos de venta y nuevas rutas para crecer su red.",
  },
  {
    slug: "industria",
    title: "Industria",
    body: "Continuidad con quienes compran su producción y nuevos canales para colocarla.",
  },
  {
    slug: "proveedores",
    title: "Proveedores",
    body: "Relaciones de abastecimiento que se sostienen pedido tras pedido y suman líneas.",
  },
] as const;

/** El embudo que pidió el cliente, tal cual y en este orden. */
export const route = [
  {
    n: "01",
    title: "Cuenta objetivo",
    body: "Elegimos contigo las cuentas con más espacio para crecer, entre las que ya atiendes o acabas de abrir.",
  },
  {
    n: "02",
    title: "Oportunidad",
    body: "Detectamos en cada cuenta lo que hoy no te compra y podría comprarte: otra línea, otra sucursal, otro volumen.",
  },
  {
    n: "03",
    title: "Seguimiento",
    body: "Cada oportunidad avanza con un siguiente paso, un responsable y una fecha, y tú ves su estado en todo momento.",
  },
  {
    n: "04",
    title: "Cierre",
    body: "Documentamos las condiciones para tu aprobación. La aceptación y el compromiso comercial son siempre de tu empresa.",
  },
  {
    n: "05",
    title: "Desarrollo de cuenta",
    body: "Tras el cierre, la cuenta vuelve al plan: nuevos pedidos, recompras y el siguiente canal donde crecer.",
  },
] as const;

export const about = {
  intro:
    "Abrir una cuenta es sólo el principio. Comerzia se encarga de lo que sigue: desarrollarla, dar seguimiento a cada oportunidad, sostener la relación después del cierre y llevar lo que vendes a nuevos canales.",
  mission:
    "Dar continuidad a las relaciones comerciales de nuestros clientes: desarrollar cada cuenta después del primer contacto, sostener el seguimiento de sus oportunidades y abrir nuevos canales para lo que ya venden.",
  vision:
    "Ser la opción a la que recurren las empresas cuando quieren que sus cuentas crezcan con orden y que sus canales se amplíen sin perder el seguimiento.",
} as const;

/** Los cuatro valores de la ficha. */
export const values = [
  {
    title: "Confianza",
    body: "Lo que se habla con tus clientes queda documentado y a la vista de tu empresa. Ninguna condición se compromete sin tu aprobación.",
  },
  {
    title: "Seguimiento",
    body: "Cada cuenta y cada oportunidad tienen un responsable, un siguiente paso y una fecha. Nada se queda en el aire después de una reunión.",
  },
  {
    title: "Agilidad",
    body: "Atendemos los cambios de cada cuenta —un pedido nuevo, un ajuste de condiciones, un canal que se abre— en cuanto ocurren.",
  },
  {
    title: "Servicio",
    body: "Atendemos a tus clientes con el cuidado con que lo harías tú: la relación es de tu empresa y nuestro trabajo es hacerla crecer.",
  },
] as const;

/** Frases propias de Comerzia; sustituyen a las citas genéricas del espejo. */
export const quotes = {
  home: "El primer pedido abre la cuenta. El seguimiento es lo que la hace crecer.",
  services:
    "Las condiciones, la facturación y los cobros quedan siempre entre tu empresa y tus clientes. Nosotros documentamos, damos seguimiento y desarrollamos la cuenta.",
} as const;

export const contactIntro =
  "Cuéntanos qué vendes, a quién le vendes hoy y dónde quieres crecer. Te respondemos para agendar una primera conversación.";
