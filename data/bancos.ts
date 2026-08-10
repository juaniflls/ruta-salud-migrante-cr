export type Banco = {
  nombre: string;
  modalidad: string;
  requisitos: string;
  pasos: string;
  extranjeros: string;
  observaciones: string;
  abrirCuenta: string;
  informacion: string;
  telefono: string;
  whatsapp: string;
};

export const BANCOS: Banco[] = [
  {
    nombre: '🟢🔵 Banco Nacional de Costa Rica (BN)',
    modalidad:
      'Cuenta de Expediente Simplificada (CES). Disponible en colones o dólares. La CES tipo 1 contempla personas extranjeras no residentes; la tipo 2 contempla personas mayores de edad con DIDI o DIMEX.',
    requisitos:
      'Documento de identificación vigente; para personas extranjeras, DIMEX, DIDI o pasaporte con permanencia al día según corresponda; teléfono móvil; correo electrónico; formulario de datos personales.',
    pasos:
      'Ingrese al portal Hágase cliente, complete sus datos, seleccione la cuenta disponible según su documento, solicite la tarjeta y siga las indicaciones del banco para activación o retiro.',
    extranjeros:
      'Personas extranjeras residentes pueden solicitar cuentas por canales habilitados según su documento. Personas extranjeras no residentes deben gestionar la CES tipo 1 y presentarse personalmente en una oficina.',
    observaciones:
      'La cuenta con tarjeta nueva puede crearse inicialmente inactiva hasta retirar la tarjeta. Existen límites mensuales de depósitos según el tipo de CES.',
    abrirCuenta: 'https://hagasecliente.bnenlinea.com/',
    informacion: 'https://www.bncr.fi.cr/',
    telefono: '2212-2000',
    whatsapp: 'https://wa.me/50686397270',
  },
  {
    nombre: '🟣🟠 Banco Popular y de Desarrollo Comunal (BP)',
    modalidad:
      'Cuenta Transaccional. Cuenta de ahorro a la vista en colones o dólares, con tarjeta de débito y acceso a servicios digitales.',
    requisitos:
      'Información personal actualizada, documento de identificación vigente aceptado por el banco, datos de contacto e información sobre actividad económica, ingresos y origen de fondos cuando corresponda.',
    pasos:
      'Complete la solicitud de cliente nuevo, espere las indicaciones del banco, reúna los documentos solicitados y formalice la cuenta en una oficina comercial.',
    extranjeros:
      'La página pública no detalla todos los documentos migratorios admitidos. Se recomienda confirmar directamente con el Banco Popular qué documento acepta para el caso particular.',
    observaciones:
      'La solicitud puede iniciarse en línea, pero la formalización normalmente se completa de forma presencial.',
    abrirCuenta: 'https://www.bancopopular.fi.cr/solicitud-cliente-nuevo-prod/',
    informacion: 'https://www.bancopopular.fi.cr/ahorro/',
    telefono: '2202-2020',
    whatsapp: 'https://wa.me/50685022020',
  },
  {
    nombre: '🔵🔴 Banco de Costa Rica (BCR)',
    modalidad:
      'Cuenta de Ahorro 100% Digital para personas que cumplen los requisitos biométricos. Puede abrirse en colones o dólares e incluye tarjeta de débito digital.',
    requisitos:
      'Para la ruta digital: mayoría de edad, cédula física vigente, dispositivo con cámara y correo electrónico. Para apertura presencial, el banco contempla residencia, DIMEX, DIDI o pasaporte según el caso, además de evidencia de ingresos u origen de fondos.',
    pasos:
      'En la ruta digital, complete el formulario, valide identidad mediante biometría, firme la documentación y cree sus accesos digitales. La ruta presencial requiere reunir documentos y acudir a una oficina.',
    extranjeros:
      'El proceso 100% digital publicado exige cédula física. Personas extranjeras pueden requerir atención presencial según el documento que utilicen y su situación migratoria.',
    observaciones:
      'El BCR puede solicitar documentación adicional. No toda persona extranjera podrá completar el proceso digital.',
    abrirCuenta: 'https://digital.bancobcr.com/cuenta-ahorro/bienvenida',
    informacion: 'https://www.bancobcr.com/wps/portal/bcr/bancobcr/personas/cuentas/digital',
    telefono: '2211-1111',
    whatsapp: 'https://wa.me/50622111135',
  },
  {
    nombre: '🔴 BAC Credomatic / BAC San José',
    modalidad:
      'Cuenta Fácil BAC. Apertura digital desde Banca Móvil, sin saldo mínimo diario y con acceso a servicios digitales.',
    requisitos:
      'Mayoría de edad, documento de identificación válido y vigente, teléfono inteligente, cámara para verificación, datos personales y de contacto. El banco puede pedir evidencia de ingresos u origen de fondos.',
    pasos:
      'Descargue Banca Móvil, seleccione abrir una cuenta, complete sus datos, capture el documento, realice la verificación con selfie, seleccione la modalidad y acepte la documentación.',
    extranjeros:
      'BAC publica el requisito de documento válido y vigente, pero no una lista completa de documentos migratorios aceptados para la verificación digital. Conviene confirmar el canal aplicable según el documento.',
    observaciones:
      'La disponibilidad del proceso 100% digital depende de que BAC pueda validar el documento y la identidad.',
    abrirCuenta: 'https://www.baccredomatic.com/es-cr/personas/cuentas/ahorro',
    informacion: 'https://www.baccredomatic.com/es-cr/personas/cuentas',
    telefono: '2295-9797',
    whatsapp: 'https://wa.me/50687429595',
  },
];
