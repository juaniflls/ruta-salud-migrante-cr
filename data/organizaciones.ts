export type Organizacion = {
  nombre: string;
  ayuda: string;
  horario: string;
  ubicacion: string;
  telefono: string;
  whatsapp: string;
  correo: string;
  web: string;
};

export const ORGANIZACIONES: Organizacion[] = [
  {
    nombre: '⚖️🎓 Clínica de Refugio, Migración y Protección Internacional — UCR',
    ayuda:
      'Brinda orientación y asesoría jurídica gratuita a personas migrantes, solicitantes de refugio y personas refugiadas. Puede orientar sobre situación migratoria, refugio, protección internacional, derechos y procedimientos legales o administrativos.',
    horario: 'Lunes a viernes, 8:00 a.m. a 4:00 p.m. (jornada continua).',
    ubicacion: 'Facultad de Derecho, Universidad de Costa Rica.',
    telefono: '2511-1553',
    whatsapp: 'https://wa.me/50683178481',
    correo: 'consultamigratoria.fd@ucr.ac.cr',
    web: 'https://www.facebook.com/ClinicaRefugioMigracionyProteccionInternacional/',
  },
  {
    nombre: '🤝🌎 Servicio Jesuita para Migrantes Costa Rica',
    ayuda:
      'Brinda orientación, acompañamiento y asesoría gratuita. Dependiendo de la sede, ofrece información sobre trámites migratorios, acceso a derechos y procesos relacionados con refugio, apatridia y protección internacional.',
    horario:
      'San José: lunes a jueves 8:00 a.m. a 4:00 p.m.; viernes 8:00 a.m. a 1:00 p.m. Los Chiles: lunes a jueves 8:00 a.m. a 12:30 p.m. y 1:30 p.m. a 4:00 p.m.',
    ubicacion:
      'Sede San José: Barrio Lourdes, San Pedro de Montes de Oca. También cuenta con sede en Los Chiles.',
    telefono: '2280-4439',
    whatsapp: 'https://wa.me/50687290521',
    correo: 'info@serviciojesuitacr.org',
    web: 'https://www.facebook.com/servjesuitacr/',
  },
  {
    nombre: '⚖️🤲 Consultorio Jurídico para Personas Migrantes y Refugiadas — Universidad La Salle',
    ayuda:
      'Ofrece asesoría legal gratuita a personas migrantes, solicitantes de refugio, personas refugiadas y personas en tránsito. Brinda orientación sobre procesos migratorios, refugio, documentación y acceso a derechos.',
    horario:
      'Martes, miércoles y jueves, 8:30 a.m. a 4:00 p.m. Atención con cupo limitado; se recomienda comunicarse previamente.',
    ubicacion:
      'Salón Parroquial de la Iglesia La Dolorosa, segundo piso, San José Centro.',
    telefono: '2248-0154',
    whatsapp: 'https://wa.me/50684558166',
    correo: 'fmena@ulasalle.ac.cr',
    web: 'https://www.facebook.com/ulasallecr',
  },
];
