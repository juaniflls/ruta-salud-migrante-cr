export type TramitePrincipal = {
  id: string;
  nombre: string;
  emoji: string;
  titulo: string;
  descripcion: string;
  aplicaPara: string[];
  sirvePara?: string[];
  resultado?: string[];
  importante: string[];
};

export const TRAMITES_PRINCIPALES: Record<string, TramitePrincipal> = {
  DIMEX: {
    id: 'recQoOpNPjaJWipNg',

    nombre: 'DIMEX',

    emoji: '🪪',

    titulo: 'Documento de Identidad Migratorio para Extranjeros (DIMEX)',

    descripcion:
      'El DIMEX es el documento oficial de identificación para personas extranjeras en Costa Rica. Se entrega una vez que la persona cuenta con una categoría migratoria aprobada y funciona como documento oficial de identificación dentro del país. En términos prácticos, es similar a una cédula de identidad para personas migrantes.',

    aplicaPara: [
      'Personas que ya cuentan con una categoría migratoria aprobada.',
      'Personas que completaron exitosamente su proceso migratorio correspondiente.',
    ],

    sirvePara: [
      'Identificarse oficialmente en Costa Rica.',
      'Acceder a servicios de salud.',
      'Realizar trámites bancarios, administrativos y legales.',
      'Gestionar servicios institucionales que requieren identificación oficial.',
    ],

    resultado: [
      'Documento de Identidad Migratorio para Extranjeros (DIMEX).',
    ],

    importante: [
      'No puede obtenerse sin una categoría migratoria aprobada.',
      'Es un documento clave para múltiples trámites dentro del país.',
      'Puede ser necesario para acceder plenamente a servicios como el aseguramiento ante la CCSS.',
    ],
  },

  REFUGIO: {
    id: 'recwCIDRAxZn2JFrn',

    nombre: 'REFUGIO',

    emoji: '🏠',

    titulo: 'Proceso de refugio',

    descripcion:
      'El refugio es un mecanismo de protección internacional para personas que no pueden regresar de forma segura a su país de origen. Puede estar relacionado con persecución, violencia o riesgos por motivos como raza, religión, nacionalidad, género, opiniones políticas o pertenencia a un grupo social determinado.',

    aplicaPara: [
      'Personas que enfrentan riesgos graves en su país de origen.',
      'Personas que temen persecución, violencia o amenazas a su seguridad.',
    ],

    sirvePara: [
      'Solicitar protección internacional en Costa Rica.',
      'Mantener protección legal mientras la solicitud es analizada.',
    ],

    resultado: [
      'Protección contra deportación mientras se estudia la solicitud.',
      'Posible reconocimiento oficial como persona refugiada.',
    ],

    importante: [
      'El refugio no es un proceso general de regularización migratoria.',
      'No todas las personas migrantes califican para esta figura.',
      'Es un mecanismo de protección internacional, no una categoría migratoria ordinaria.',
    ],
  },

  'REGULARIZACIÓN MIGRATORIA': {
    id: 'recUH2SjydrCrDdmf',

    nombre: 'REGULARIZACIÓN MIGRATORIA',

    emoji: '⚖️',

    titulo: 'Regularización migratoria',

    descripcion:
      'La regularización migratoria es el proceso que permite a una persona extranjera solicitar autorización para vivir legalmente en Costa Rica. Implica identificar la categoría migratoria que mejor se ajuste a su situación, por ejemplo trabajo, estudio, vínculo familiar u otras, y presentar la solicitud correspondiente ante la Dirección General de Migración y Extranjería.',

    aplicaPara: [
      'Personas migrantes que desean residir legalmente en Costa Rica.',
      'Personas que aún no cuentan con una categoría migratoria aprobada.',
      'Personas refugiadas que quieran optar por una condición migratoria regular.',
    ],

    sirvePara: [
      'Pasar de una condición migratoria irregular o temporal a una situación migratoria regular.',
      'Solicitar una categoría migratoria acorde con la situación de la persona.',
    ],

    resultado: [
      'Una categoría migratoria aprobada, como residencia temporal, residencia permanente u otra categoría aplicable.',
    ],

    importante: [
      'No aplica como sustituto del proceso de refugio para personas solicitantes de refugio.',
      'Suele ser un paso necesario antes de acceder a otros trámites migratorios.',
      'Puede ser fundamental para avanzar posteriormente hacia el aseguramiento ante la CCSS.',
    ],
  },
};

export function obtenerTramitePrincipal(
  nombre: string | undefined
): TramitePrincipal | null {
  if (!nombre) {
    return null;
  }

  const limpio = nombre
    .replace('🪪', '')
    .replace('🏠', '')
    .replace('⚖️', '')
    .trim();

  return TRAMITES_PRINCIPALES[limpio] ?? null;
}