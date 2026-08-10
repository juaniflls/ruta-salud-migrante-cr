export type CondicionMigratoria =
  | 'Solicitante de refugio'
  | 'Refugiado'
  | 'Migrante regular permanente'
  | 'Migrante sin trámite o temporal';

export type GuiaCondicion = {
  reglaId: string;
  rutaId: string;

  titulo: string;
  emoji: string;

  descripcion: string;

  aplicaSi: string[];
  noAplicaSi: string[];

  tramites: string[];
  subtramites: string[];
};

export const GUIAS_CONDICION: Record<
  CondicionMigratoria,
  GuiaCondicion
> = {
  'Solicitante de refugio': {
    reglaId: 'RGL001',
    rutaId: 'RUT001',

    titulo: 'Soy solicitante de refugio',
    emoji: '🛡️',

    descripcion:
      'Si usted tuvo que salir de su país porque su vida, su libertad o su seguridad estaban en riesgo y solicitó protección internacional en Costa Rica, es probable que sea una persona solicitante de refugio. Esta condición aplica desde el momento en que presenta formalmente su solicitud de refugio ante la Dirección General de Migración y Extranjería, mientras las autoridades analizan su caso y toman una decisión.',

    aplicaSi: [
      'Presentó una solicitud de refugio en Costa Rica.',
      'Tiene un Carné de Solicitante de Refugio o un documento provisional emitido por Migración.',
      'Su solicitud todavía está siendo estudiada y aún no ha recibido una resolución definitiva.',
    ],

    noAplicaSi: [
      'Ya recibió la aprobación oficial como persona refugiada.',
      'Tiene otra categoría migratoria, como residencia, permiso especial o DIMEX por otra categoría.',
      'Nunca ha presentado una solicitud de refugio.',
    ],

    tramites: [
      '🪪 DIMEX',
      '🏠 REFUGIO',
    ],

    subtramites: [
      'DIMEX sin retirar',
      'Duplicado de DIMEX por robo o extravío (Aún Vigente)',
      'Solicitud de refugio por primera vez',
      'Renovación de Carné de Solicitante de Refugio',
      'Entrevista de elegibilidad',
    ],
  },

  Refugiado: {
    reglaId: 'RGL002',
    rutaId: 'RUT002',

    titulo: 'Soy una persona refugiada',
    emoji: '🕊️',

    descripcion:
      'Si el Estado costarricense ya analizó su solicitud y reconoció oficialmente que usted cumple con los requisitos para recibir protección internacional, entonces su condición migratoria es la de persona refugiada. Esto significa que ya cuenta con una resolución favorable de refugio y puede realizar diferentes trámites relacionados con su documentación y permanencia en Costa Rica.',

    aplicaSi: [
      'Ya recibió una resolución aprobando su solicitud de refugio.',
      'Fue reconocido oficialmente como persona refugiada.',
      'Debe tramitar o renovar su DIMEX como persona refugiada.',
    ],

    noAplicaSi: [
      'Su solicitud de refugio todavía está en proceso.',
      'Nunca ha presentado una solicitud de refugio.',
      'Tiene otra categoría migratoria distinta al refugio.',
    ],

    tramites: [
      '⚖️ REGULARIZACIÓN MIGRATORIA',
      '🪪 DIMEX',
      '🏠 REFUGIO',
    ],

    subtramites: [
      'Requisitos Generales regularización',
      'Cambio de Categoría',
      'Regularización de Residencia Permanente',
      'DIMEX sin retirar',
      'Duplicado de DIMEX por robo o extravío (Aún Vigente)',
      'Documentación por primera vez DIMEX de personas refugiadas',
      'Renovación de DIMEX de personas refugiadas',
      'Refugio por extensión',
      'Regularización de Trabajadores Temporales',
      'Regularización de Personas Extranjeras Dependientes de Estudiantes',
      'Regularización de Persona Apátrida',
      'Regularización de Persona Asilada',
      'Regularización de Categoría Especial por razones de humanidad',
      'Regularización de Otras categorías Especiales',
      'Regularización Categorías Temporales (Solamente en Línea)',
      'Regularización Categorías Especiales (Opciones en Línea)',
    ],
  },

  'Migrante regular permanente': {
    reglaId: 'RGL003',
    rutaId: 'RUT003',

    titulo:
      'Soy una persona migrante con condición regular (residencia permanente)',
    emoji: '🪪',

    descripcion:
      'Esta condición corresponde a las personas extranjeras que ya cuentan con una residencia aprobada en Costa Rica y poseen un estatus migratorio regular. Generalmente, estas personas ya disponen de un DIMEX vigente emitido por la Dirección General de Migración y Extranjería y deben realizar únicamente los trámites necesarios para mantener su condición migratoria al día.',

    aplicaSi: [
      'Tiene una residencia permanente aprobada.',
      'Cuenta con un DIMEX vigente o necesita renovarlo.',
      'Su situación migratoria ya se encuentra regularizada.',
    ],

    noAplicaSi: [
      'Está solicitando refugio.',
      'Su residencia aún no ha sido aprobada.',
      'Se encuentra en condición migratoria irregular o aún no ha iniciado ningún trámite.',
    ],

    tramites: [
      '🪪 DIMEX',
    ],

    subtramites: [
      'DIMEX sin retirar',
      'Renovación (Información Importante)',
      'Renovación DIMEX Residencia Permanente',
      'Duplicado de DIMEX por robo o extravío (Aún Vigente)',
      'Renovación DIMEX de Trabajador de Ocupación Específica – POR CUENTA PROPIA',
      'Renovación DIMEX de Trabajador de Ocupación Específica – PERSONA FÍSICA',
      'Renovación DIMEX de Categoría Especial de Estudiante',
    ],
  },

  'Migrante sin trámite o temporal': {
    reglaId: 'RGL004',
    rutaId: 'RUT004',

    titulo:
      'Aún no he iniciado mi trámite migratorio o tengo una condición temporal',
    emoji: '🌎',

    descripcion:
      'Esta opción está dirigida a las personas que todavía no han regularizado completamente su situación migratoria en Costa Rica o que cuentan con una condición temporal que requiere completar algún trámite antes de poder acceder a otros servicios. Si aún debe iniciar un proceso ante la Dirección General de Migración y Extranjería o necesita completar un trámite para regularizar su permanencia en el país, esta es probablemente la opción correcta.',

    aplicaSi: [
      'Aún no ha iniciado un trámite migratorio.',
      'Su situación migratoria todavía no está regularizada.',
      'Debe realizar primero un proceso de regularización antes de solicitar el aseguramiento.',
    ],

    noAplicaSi: [
      'Ya cuenta con una residencia permanente aprobada.',
      'Ya fue reconocido oficialmente como persona refugiada.',
      'Actualmente es solicitante de refugio con expediente activo.',
    ],

    tramites: [
      '⚖️ REGULARIZACIÓN MIGRATORIA',
      '🪪 DIMEX',
    ],

    subtramites: [
      'Requisitos Generales regularización',
      'Cambio de Categoría',
      'Regularización de Residencia Permanente',
      'Documentación por Primera vez',
      'DIMEX sin retirar',
      'Renovación (Información Importante)',
      'Duplicado de DIMEX por robo o extravío (Aún Vigente)',
      'Renovación DIMEX de Residencia Temporal por Cónyuge Costarricense',
      'Renovación DIMEX de Residencia Temporal como Inversionista y Dependientes',
      'Renovación DIMEX de Residencia Temporal como Pensionado y Dependientes',
      'Renovación DIMEX de Residencia Temporal como Religioso y Dependientes',
      'Renovación DIMEX de Residencia Temporal como Rentista y Dependientes',
      'Renovación DIMEX de Residencia Temporal como Trabajador de Empresa Registrada y Dependientes',
      'Regularización de Trabajadores Temporales',
      'Regularización de Personas Extranjeras Dependientes de Estudiantes',
      'Regularización de Persona Apátrida',
      'Regularización de Persona Asilada',
      'Regularización de Categoría Especial por razones de humanidad',
      'Regularización de Otras categorías Especiales',
      'Regularización Categorías Temporales (Solamente en Línea)',
      'Regularización Categorías Especiales (Opciones en Línea)',
    ],
  },
};

export function obtenerGuiaCondicion(
  condicion: string | undefined
): GuiaCondicion | null {
  if (!condicion) {
    return null;
  }

  if (condicion in GUIAS_CONDICION) {
    return GUIAS_CONDICION[
      condicion as CondicionMigratoria
    ];
  }

  return null;
}