export type FamiliaSubtramite =
  | 'regularizacion'
  | 'dimex'
  | 'refugio';

export type Subtramite = {
  nombre: string;
  titulo: string;
  emoji: string;
  familia: FamiliaSubtramite;
  queEs: string;
  pasos: string;
};

type RegistroSubtramite = {
  nombre: string;
  familia: FamiliaSubtramite;
  queEs: string;
  pasos: string;
  aliases?: string[];
};

/*
  Estos registros corresponden a las tres tablas de Airtable:
  - SUBTRÁMITES REGULARIZACIÓN
  - SUBTRÁMITES DIMEX
  - SUBTRÁMITES REFUGIO

  Total con contenido: 31.
*/

const REGISTROS: RegistroSubtramite[] = [
  // ============================================================
  // ⚖️ REGULARIZACIÓN MIGRATORIA
  // ============================================================

  {
    nombre: '🧾 Requisitos Generales de Regularización',
    familia: 'regularizacion',

    queEs: `Este apartado reúne los **requisitos básicos** que una persona extranjera debe presentar para iniciar un proceso de **regularización migratoria en Costa Rica**.
Sirve como punto de partida para solicitar una **condición migratoria formal** ante la **Dirección General de Migración y Extranjería**.

✅ **Aplica para:**
- Personas refugiadas
- Personas migrantes sin trámite
- Personas con condición migratoria temporal

🚫 **No aplica para:**
- Personas que ya cuentan con residencia regular permanente activa

📌 **Importante:**
- Estos son los requisitos generales base. Dependiendo del trámite específico que usted elija, podrían solicitarse documentos adicionales.`,

    pasos: `# **A. 👤 Solicitud y documentación personal**

### **1️⃣ Solicitud formal**
Debe presentar una solicitud de permanencia legal que incluya:
- Sus datos personales
- El trámite o solicitud que desea realizar
- Su domicilio actual
- Un medio para recibir notificaciones

La solicitud debe:
✅ Firmarse frente a un funcionario público de la Plataforma de Servicios o de la oficina administrativa regional correspondiente
**o**
✅ Presentarse con firma autenticada por abogado

### **2️⃣ Fotografías**
Debe presentar:
📸 Dos fotografías tamaño pasaporte
📸 Recientes
📸 Tomadas de frente

### **3️⃣ Certificación de nacimiento**
Debe presentar:
📄 Certificación de nacimiento emitida en su país de origen

El documento debe estar:
✅ Legalizado
✅ Autenticado
✅ Apostillado

Si está en otro idioma:
🌐 Debe traducirse oficialmente al español por traductor oficial costarricense.

Puede aceptarse aunque tenga más de seis meses si:
- Los datos coinciden con el pasaporte
- El documento está en buen estado
- No tiene tachones
- No tiene borrones
- No tiene sobreescrituras
- No está roto
- No presenta alteraciones

⚠️ Si existe diferencia entre el pasaporte y la certificación:
Debe:
- Aclararlo mediante documentos oficiales
o
- Presentar documentos corregidos

### **4️⃣ Certificación de antecedentes penales**
Debe presentar:
📄 Certificación de antecedentes penales de:
- Su país de origen
o
- El país donde haya residido legalmente durante los últimos tres años

El documento debe estar:
✅ Legalizado
✅ Autenticado
✅ Apostillado

Además:
Debe demostrar que su permanencia en ese país fue legal mediante copia certificada del documento migratorio correspondiente.

# **🌍 B. Casos especiales (países con sistemas penales federales o locales)**

Aplica para personas nacionales de:
- México
- Brasil
- Estados Unidos
- Canadá
- Otros países con sistemas penales similares

En estos casos:

La certificación debe incluir revisión por:
🔎 Nombre
🔎 Número de identificación
🔎 Huellas dactilares (cuando aplique)

Esto permite verificar antecedentes en todo el territorio correspondiente.

Si aparecen:
⚠️ Arrestos
⚠️ Procesos pendientes

También deberá presentar:
📄 Certificación adicional del lugar donde se tramita el proceso judicial, indicando el resultado.

# **🛂 C. Documentación del pasaporte**

Debe presentar copia de páginas donde aparezca:
- Información personal
- Sello de ingreso a Costa Rica
- Visa de ingreso (si aplica)

Estas copias deben:
✅ Ser certificadas por notario público
o
✅ Ser confrontadas con el original por funcionario autorizado

# **💰 D. Solvencia económica (cuando aplique)**

Puede presentar según su caso:

### **👷 Personas trabajadoras**
- Orden patronal vigente
o
- Carta del empleador indicando:
  - Salario bruto
  - Salario neto
  - Puesto
  - Años de servicio

### **👵 Personas jubiladas**
- Recibos de pensión
o
- Certificación oficial indicando:
  - Monto
  - Tiempo de jubilación

### **🎓 Estudiantes**
- Certificación de contador público autorizado indicando origen de recursos

Si tiene beca:
- Certificación institucional indicando:
  - Monto
  - Plazo
  - Cobertura

### **🏢 Personas físicas o jurídicas**
- Certificación de contador público autorizado
o
- Estados financieros auditados

Migración podrá solicitar documentación de respaldo adicional.

### **🤝 Voluntariado**
- Fotocopia del programa donde conste financiamiento

### **💵 Otros medios**
- Documentación que demuestre origen de recursos

### **⚠️ Casos excepcionales**
Si no puede presentar lo anterior:

Puede presentar declaración jurada indicando:
- Motivo
- Recursos disponibles
- Origen de ingresos

Migración podrá verificar la información.

Si aplica a:
- Persona menor de edad
- Persona adulta dependiente

La declaración debe realizarla la persona responsable económicamente.

# **📍 E. Otros requisitos**

Debe presentar:
📄 Comprobante de inscripción consular

# **⚠️ F. Notas importantes**

### **👆 Toma de huellas**
Debe presentar comprobante de toma de huellas al momento del trámite.

No aplica para:
- Trabajadores temporales
- Personas indígenas

### **💳 Pago por cambio de categoría**
Si su trámite implica cambio de categoría:

Debe presentar:
- Pago de US$200
- O equivalente en colones

Depósito a:
🏦 Banco de Costa Rica
Cuenta #242480-0

### **🌐 Documentos en otro idioma**
Todo documento en idioma distinto al español:

Debe traducirse por:
- Traductor oficial
o
- Notario conocedor del idioma

### **📑 Apostilla o legalización**
Todo documento público extranjero debe estar:
✅ Apostillado
o
✅ Legalizado por autoridades correspondientes

### **👨‍👩‍👧 Certificados sin datos de padres**
Si el certificado de nacimiento no incluye nombres de padres:

Debe presentar:
📄 Declaración jurada protocolizada con esa información`,
  },

  {
    nombre: '🔄 Cambio de Categoría',
    familia: 'regularizacion',

    queEs: `Este trámite permite cambiar el **tipo de categoría migratoria** que una persona extranjera ya posee en Costa Rica.
Por ejemplo, puede permitir pasar de una **residencia temporal a una residencia permanente**, siempre que se cumplan los requisitos establecidos por Migración.

✅ **Aplica para:**
- Personas con residencia temporal activa
- Personas refugiadas, asiladas o apátridas que cumplan el tiempo requerido
- Personas con vínculo migratorio elegible según normativa

🚫 **No aplica para:**
- Personas sin proceso migratorio iniciado
- Personas sin condición migratoria previa reconocida

📌 **Importante:**
Este trámite **no significa iniciar desde cero**, sino modificar una condición migratoria existente según su situación actual.`,

    pasos: `# **👤 ¿Quién puede solicitarlo?**

Puede solicitar este trámite si cumple alguna de estas condiciones:

### **1️⃣ Residencia temporal con renovaciones**
Persona extranjera con residencia temporal que haya renovado su documento durante **tres años consecutivos**.

### **2️⃣ Cónyuge de persona costarricense**
Persona extranjera con residencia temporal por vínculo con persona costarricense que haya demostrado durante tres años consecutivos:

❤️ Convivencia conyugal
📄 Renovación continua de su condición migratoria

### **3️⃣ Personas refugiadas, asiladas o apátridas**
Si han transcurrido **tres años** desde el reconocimiento oficial de esa condición.

📌 Importante:
En personas refugiadas, este trámite **no implica renunciar automáticamente al refugio**, salvo manifestación expresa.

# **📄 Requisitos**

### **1️⃣ Carta de solicitud**
Debe incluir:
- Nombre completo
- Número de expediente
- Número de DIMEX
- Nacionalidad
- Edad
- Ocupación
- Dirección de residencia
- Nombre de padres
- Medio para notificaciones:
  - Correo electrónico
  - Número telefónico

Si existe vínculo con persona costarricense:
Debe incluir además:
- Nombre completo de esa persona
- Número de cédula

La carta puede:
✅ Firmarse ante funcionario de Migración
o
✅ Llevar firma autenticada

### **2️⃣ Pago por cambio de categoría**
Debe presentar:
💵 US$200 o equivalente en colones según tipo de cambio BCCR

Depósito a:
🏦 Banco de Costa Rica
Cuenta #242480-0
A nombre de la persona interesada

### **3️⃣ Pago administrativo adicional**
Debe presentar:
💵 US$50 o equivalente en colones

Depósito a:
🏦 Banco de Costa Rica
Cuenta #242480-0

⚠️ Excepción:
Si el cambio es de **residencia temporal a residencia permanente**, este pago no aplica.

### **4️⃣ Caso especial: personas rentistas**
Si tiene residencia temporal como rentista:

Debe solicitar:
📄 Liberación de la renta estable, permanente y mensual utilizada para obtener esa residencia.

Aplica únicamente si ese depósito fue realizado en un banco estatal.`,
  },

  {
    nombre: '🏠 Regularización de Residencia Permanente',
    familia: 'regularizacion',

    queEs: `Este trámite permite que una persona extranjera obtenga **residencia permanente en Costa Rica**, siempre que cumpla con los requisitos establecidos por la normativa migratoria.

La residencia permanente brinda una condición migratoria más estable y permite desarrollar actividades laborales en el país sin las limitaciones de algunas categorías temporales.

✅ **Aplica para:**
- Personas con residencia temporal que cumplan el tiempo requerido
- Personas con vínculo familiar elegible con una persona costarricense
- Personas a quienes la autoridad migratoria haya otorgado esta posibilidad

🚫 **No aplica para:**
- Personas que ya cuentan con residencia permanente activa

📌 **Importante:**
Este trámite requiere cumplir requisitos generales migratorios y también requisitos específicos según el caso.`,

    pasos: `### **👤 ¿Quién puede solicitar residencia permanente?**

Puede optar por residencia permanente la persona extranjera que cumpla con alguna de estas condiciones:

**1️⃣ Residencia temporal previa**
- La persona extranjera
- Su cónyuge
- O familiares de primer grado por consanguinidad

Que hayan contado con **residencia temporal durante tres años consecutivos**.

**2️⃣ Vínculo familiar con persona costarricense**

Aplica para personas extranjeras con parentesco de primer grado por consanguinidad con una persona costarricense.

Esto incluye:
- Padre o madre
- Hijos menores de edad
- Hijos mayores con discapacidad
- Hermanos menores de edad
- Hermanos mayores con discapacidad

**3️⃣ Casos aprobados por autoridad competente**

También aplica para personas a quienes:

🏛️ **La Comisión de Visas Restringidas y Refugio**

les haya otorgado esta condición.

### **📄 Requisitos para realizar el trámite**

La persona solicitante debe presentar:

✅ **Requisitos Generales de regularización migratoria**
✅ Una solicitud indicando expresamente que desea optar por **residencia permanente**

Además:

💵 **1. Pago gubernamental**

Debe presentar:
- Comprobante de pago a favor del Gobierno por **US$50,00**
- O su equivalente en colones según tipo de cambio vigente

Este pago corresponde a:
**Solicitud de permanencia legal bajo categoría de residente permanente.**

👨‍👩‍👧 **2. Certificación de vínculo familiar (cuando aplique)**

Debe presentar:
- Certificación emitida por el Registro Civil de Costa Rica

Este documento debe:
- Demostrar el vínculo familiar
- Tener fecha de emisión **no mayor a dos meses**

🩺 **3. Caso especial: hermanos mayores con discapacidad**

Debe presentar:
- Dictamen médico
- Certificación de curatela emitida por juez (cuando corresponda)

### **📌 Importante**

Si se aprueba la residencia permanente:

La persona extranjera podrá:

💼 Trabajar en cualquier actividad remunerada
🧠 Ejercer actividades intelectuales remuneradas
🏠 Permanecer en Costa Rica con una condición migratoria más estable`,
  },

  {
    nombre: '👷 Regularización de Trabajadores Temporales',
    familia: 'regularizacion',

    queEs: `Este trámite permite **regularizar la situación migratoria de personas extranjeras que vienen a trabajar temporalmente en Costa Rica** bajo condiciones específicas autorizadas por las autoridades competentes.

Se trata de una **categoría especial migratoria** diseñada para personas contratadas por un periodo determinado para realizar actividades laborales específicas en el país.

✅ **Aplica para:**
- Personas refugiadas
- Personas migrantes sin trámite
- Personas con condición migratoria temporal
- Personas extranjeras contratadas para trabajo temporal autorizado

🚫 **No aplica para:**
- Personas que no tienen una actividad laboral definida dentro de este régimen
- Personas cuya situación no corresponde a trabajo temporal autorizado

📌 **Importante:**
Esta autorización tiene una vigencia inicial de **un año prorrogable**, según evaluación de Migración y cumplimiento de requisitos.`,

    pasos: `La Dirección General de Migración y Extranjería, mediante la **Gestión de Extranjería** o sus **Delegaciones Regionales**, podrá otorgar esta autorización migratoria especial.

Para ello, debe cumplirse con los siguientes requisitos:

### **1️⃣ Solicitud formal del empleador o patrono**

Debe presentarse una solicitud escrita dirigida a la **Dirección General de Migración y Extranjería**.

Esta solicitud debe estar firmada por:

✅ El representante legal de la empresa
o
✅ El patrono correspondiente

Debe explicar claramente:
- Las actividades laborales que realizará la persona extranjera
- La temporada de trabajo
- La zona geográfica donde laborará

### **2️⃣ Documento de identificación migratoria**

Debe presentar:

📘 Copia certificada de **todas las páginas del pasaporte vigente o salvoconducto**

Estas páginas deben mostrar:
- Fotografía
- Datos personales

También puede presentarse:
✅ Original + copia para confrontación ante funcionario público autorizado

### **3️⃣ Fotografías**

Debe presentar:

📸 Dos fotografías tamaño pasaporte
📸 Recientes

### **4️⃣ Inscripción consular**

Debe presentar:

📄 Comprobante de inscripción consular

# **🏛️ Requisito institucional previo**

Antes de que Migración pueda resolver la solicitud:

Debe existir una **recomendación del Ministerio de Trabajo** autorizando la contratación de mano de obra extranjera.

Esta autorización debe indicar:
- Cantidad de personas autorizadas
- Zona de trabajo
- Actividad laboral autorizada

# **⚠️ Casos especiales**

Los requisitos anteriores aplican a todas las personas solicitantes bajo esta categoría.

**Excepción:**

🌐 Personas extranjeras cubiertas por **convenios binacionales suscritos entre Costa Rica y otros países**

En esos casos:

Se aplicarán los requisitos establecidos específicamente en esos convenios.

📌 **Importante:**
Este trámite depende tanto de requisitos migratorios como laborales, por lo que la autorización del empleador y del Ministerio de Trabajo forma parte fundamental del proceso.`,
  },

  {
    nombre:
      '🎓 Regularización de Personas Extranjeras Dependientes de Estudiantes',
    familia: 'regularizacion',

    queEs: `Este trámite permite regularizar la situación migratoria de familiares dependientes de una persona extranjera que solicita permanencia en Costa Rica como estudiante.

Está dirigido a personas que dependen familiar o económicamente de una persona extranjera estudiante.

✅ **Aplica para:**
- Padre o madre de la persona estudiante
- Cónyuge
- Hijos menores de edad
- Hijos mayores de edad con discapacidad

🚫 **No aplica para:**
- Personas sin vínculo familiar con una persona extranjera estudiante
- Personas que no dependen de una persona estudiante extranjera

📌 **Importante:**
Este trámite requiere demostrar tanto la relación familiar como la condición de dependencia correspondiente.`,

    pasos: `# **👨‍👩‍👧 ¿Quién puede solicitarlo?**

Este trámite aplica para personas dependientes de una persona extranjera que solicita permanencia como estudiante.

Se entiende como persona dependiente:
- Padre
- Madre
- Cónyuge
- Hijos menores de edad
- Hijos mayores de edad con discapacidad

# **📄 Requisitos**

### **1️⃣ Solicitud de permanencia legal**

Debe presentar una solicitud de permanencia legal indicando:
- Datos personales de la persona interesada
- Pretensión o solicitud que desea realizar
- Domicilio actual
- Lugar o medio para recibir notificaciones

La solicitud debe:
✅ Firmarse en presencia de funcionario público
o
✅ Presentarse debidamente autenticada por abogado

### **2️⃣ Fotografías**

Debe presentar:
📸 Dos fotografías recientes tamaño pasaporte

### **3️⃣ Certificación de nacimiento**

Debe presentar:
📄 Certificación de nacimiento de la persona extranjera emitida en el país de origen

El documento debe estar:
✅ Legalizado
✅ Autenticado
✅ Apostillado

### **4️⃣ Certificación de antecedentes penales**

Debe presentar:
📄 Certificación de antecedentes penales de la persona extranjera:
- De su país de origen
o
- Del lugar donde haya residido legalmente durante los últimos tres años

El documento debe estar:
✅ Legalizado
✅ Autenticado
✅ Apostillado

Además, debe demostrar la legalidad de su permanencia en ese país mediante:
- Copia certificada del documento migratorio obtenido en ese plazo

### **5️⃣ Pasaporte**

Debe presentar fotocopia de las páginas del pasaporte donde aparezcan:
- Datos personales de la persona extranjera
- Sello de ingreso a Costa Rica
- Visa de ingreso, si por su nacionalidad corresponde

Estas copias deberán:
✅ Ser certificadas por notario público
o
✅ Ser confrontadas con el original por funcionario de la Plataforma de Servicios o sede regional donde se presente el trámite

### **6️⃣ Documentos para demostrar el vínculo familiar**

Además de los requisitos anteriores, si se trata de dependientes:

**Cónyuge**
- Debe presentar certificación de matrimonio debidamente legalizada o apostillada

**Hijos menores de edad**
- La solicitud deberá realizarla su padre, madre o representante correspondiente

**Hijos mayores de edad con discapacidad**
- Debe demostrarse la discapacidad mediante dictamen médico
- En los casos que corresponda, debe presentarse certificación de curatela emitida por juez

### **7️⃣ Solvencia económica**

Debe presentar demostración de la solvencia económica con la que cuenta para subsistir en el país.

📌 **Importante:**
La información disponible indica que debe demostrarse solvencia económica, pero el detalle específico de esa presentación debe verificarse con Migración según el caso concreto.`,
  },

  {
    nombre: '🌍 Regularización de Persona Apátrida',
    familia: 'regularizacion',

    queEs: `Este trámite permite regularizar la situación migratoria de una **persona apátrida**, es decir, una persona que **no es reconocida como nacional por ningún país**.

Costa Rica reconoce una vía específica para que estas personas puedan formalizar su situación migratoria dentro del país.

✅ **Aplica para:**
- Personas reconocidas oficialmente como apátridas
- Personas refugiadas, migrantes sin trámite o con condición temporal que cuenten con esta declaratoria

🚫 **No aplica para:**
- Personas que sí tienen nacionalidad reconocida por algún país

📌 **Importante:**
Para acceder a este trámite, debe existir una **declaratoria oficial de apatridia** emitida por las autoridades competentes.`,

    pasos: `# **📄 Requisitos**

### **1️⃣ Declaratoria oficial de apatridia**

Debe presentar:

📑 Resolución emitida por el **Ministerio de Relaciones Exteriores y Culto** mediante la cual se le reconoce oficialmente como **persona apátrida**.

📌 **Importante:** Este documento es fundamental para iniciar el trámite.

### **2️⃣ Solicitud de la persona interesada**

Debe presentar:

📝 Solicitud formal realizada por la persona interesada para iniciar el proceso correspondiente.

### **3️⃣ Fotografías**

Debe presentar:

📸 Dos fotografías tamaño pasaporte
📸 Recientes

📌 **Importante:** Este trámite aplica únicamente cuando la condición de apatridia ya ha sido oficialmente reconocida por el Estado competente.`,
  },

  {
    nombre: '🛡️ Regularización de Persona Asilada',
    familia: 'regularizacion',

    queEs: `Este trámite permite formalizar la condición migratoria de una **persona asilada** en Costa Rica.

Aplica cuando una persona ya cuenta con una resolución oficial que la reconoce como asilada y necesita regularizar su situación migratoria ante Migración.

✅ **Aplica para:**
- Personas reconocidas oficialmente como asiladas
- Personas refugiadas, migrantes sin trámite o con condición temporal que cuenten con esta declaratoria

🚫 **No aplica para:**
- Personas que no tienen reconocimiento oficial de asilo
- Personas que desean solicitar refugio, ya que ese es un proceso distinto

📌 **Importante:**
Para realizar este trámite, debe existir una **resolución oficial del Ministerio de Relaciones Exteriores y Culto** que declare a la persona como asilada.`,

    pasos: `# **📄 Requisitos**

### **1️⃣ Resolución oficial de asilo**

Debe presentar:

📑 Resolución emitida por el **Ministerio de Relaciones Exteriores y Culto**, mediante la cual se le declara oficialmente como **persona asilada**.

### **2️⃣ Solicitud de la persona interesada**

Debe presentar:

📝 Solicitud formal realizada por la persona interesada para iniciar el proceso correspondiente.

### **3️⃣ Fotografías**

Debe presentar:

📸 Dos fotografías tamaño pasaporte
📸 Recientes

### **4️⃣ Pasaporte o documento de viaje**

Debe presentar:

📘 Copia certificada de todas las páginas del pasaporte vigente o documento de viaje de la persona extranjera

o

📘 Fotocopia y original para confrontación ante la autoridad correspondiente.

📌 **Nota:**
El registro de Airtable conserva una advertencia de que el texto original de este requisito aparecía incompleto y recomienda verificar este punto en la fuente oficial antes de publicar la versión final.`,
  },

  {
    nombre:
      '❤️‍🩹 Regularización de Categoría Especial por Razones de Humanidad',
    familia: 'regularizacion',

    queEs: `Este trámite aplica en **situaciones excepcionales de carácter humanitario**, donde una persona extranjera puede optar por una regularización migratoria especial según su situación particular.

Está pensado para casos que requieren una valoración diferenciada por razones humanitarias dentro del sistema migratorio costarricense.

✅ **Aplica para:**
- Personas refugiadas
- Personas migrantes sin trámite
- Personas con condición migratoria temporal
- Casos humanitarios excepcionales que correspondan según normativa

🚫 **No aplica para:**
- Casos migratorios ordinarios que cuentan con otras vías regulares de trámite

📌 **Importante:**
Este trámite está orientado a situaciones especiales y requiere evaluación según el caso concreto.`,

    /*
      NOTA:
      El campo "PASOS" de este registro en Airtable contiene actualmente
      el mismo bloque de requisitos de cambio de categoría.
      Se conserva tal como está en Airtable; no se corrige automáticamente.
    */
    pasos: `# **👤 ¿Quién puede solicitarlo?**

Puede solicitar este trámite la persona extranjera que cumpla con alguna de estas condiciones:

### **1️⃣ Residencia temporal con renovaciones consecutivas**
Persona extranjera con residencia temporal que haya renovado su documento durante **tres años consecutivos**.

### **2️⃣ Cónyuge de persona costarricense**
Persona extranjera con residencia temporal por vínculo con persona costarricense que haya demostrado durante tres años consecutivos:

❤️ Convivencia conyugal continua
📄 Renovación anual de su condición migratoria

### **3️⃣ Personas refugiadas, asiladas o apátridas**
Si han transcurrido **tres años** desde el reconocimiento oficial de esa condición.

📌 **Importante:**
En el caso de personas refugiadas, este trámite **no implica renunciar automáticamente a la condición de refugio**, salvo manifestación expresa.

# **📄 Requisitos**

### **1️⃣ Carta de solicitud**

Debe presentar una carta indicando:
- Nombre completo
- Número de expediente
- Número de DIMEX
- Nacionalidad
- Edad
- Ocupación
- Dirección de residencia
- Nombre de sus padres
- Medio para recibir notificaciones:
  - Correo electrónico
  - Número telefónico

Si el trámite se relaciona con vínculo con persona costarricense, también debe incluir:
- Nombre completo de la persona vinculada
- Número de cédula

La carta puede:
✅ Firmarse frente al funcionario(a) de Migración
o
✅ Presentarse con firma autenticada

### **2️⃣ Pago principal**

Debe presentar:
💵 Comprobante de pago a favor del Gobierno por **US$200,00**
o
💵 Su equivalente en colones según tipo de cambio de referencia del BCCR

Depósito a:
🏦 Banco de Costa Rica
Cuenta #242480-0
A nombre de la persona interesada

### **3️⃣ Pago administrativo adicional**

Debe presentar:
💵 Comprobante de pago por **US$50,00**
o
💵 Equivalente en colones según tipo de cambio de referencia del BCCR

Depósito a:
🏦 Banco de Costa Rica
Cuenta #242480-0
A nombre de la persona interesada

⚠️ **Excepción importante:**
Si el cambio corresponde de **Residencia Temporal a Residencia Permanente**, este pago no aplica.

### **4️⃣ Caso especial: personas rentistas**

Si la persona extranjera cuenta con residencia temporal como rentista:

Además de cumplir los requisitos anteriores, deberá:

📄 Solicitar la liberación de la renta estable, permanente y mensual utilizada para obtener esa residencia temporal.

Esto aplica únicamente si:
- El depósito correspondiente fue realizado en un banco estatal`,
  },

  {
    nombre: '🧩 Regularización de Otras Categorías Especiales',
    familia: 'regularizacion',

    queEs: `Este trámite incluye **situaciones migratorias especiales** que no siempre entran en las categorías más comunes de regularización.

Son casos que se valoran según condiciones específicas, como vínculos familiares, dependencia económica, protección institucional, cooperación internacional u otras situaciones particulares.

✅ **Aplica para:**
- Personas refugiadas
- Personas migrantes sin trámite
- Personas con condición migratoria temporal
- Personas cuya situación corresponda a alguna categoría especial reconocida

🚫 **No aplica para:**
- Personas cuya situación no corresponde a estas condiciones especiales
- Casos que deben tramitarse mediante otra categoría migratoria

📌 **Importante:**
Estas categorías deben revisarse caso por caso, porque cada una responde a una situación distinta.`,

    pasos: `# **📄 Categorías especiales disponibles**

### **1️⃣ Vínculo con ciudadano costarricense**
Aplica para:
- Hijos(as) mayores de edad hasta veinticinco años
- Hermanos(as) solteros mayores de edad hasta veinticinco años

En ambos casos, debe existir:
- Relación de dependencia económica

### **2️⃣ Vínculo con residente permanente**
Aplica para:
- Cónyuge
- Unión de hecho, cuando haya sido dictada por un juez
- Padres
- Madres
- Hijos e hijas menores de edad
- Hijos e hijas mayores de edad hasta veinticinco años

En el caso de hijos e hijas mayores de edad hasta veinticinco años, debe existir:
- Condición de dependencia económica

### **3️⃣ Vínculo con residente temporal**
Aplica para:
- Padres dependientes económicamente
- Madres dependientes económicamente
- Hijos(as) mayores de edad hasta veinticinco años

En ambos casos, debe existir:
- Dependencia económica

### **4️⃣ Vínculo con tutor o curador**
Aplica para:
- Persona menor de edad
- Persona mayor con discapacidad

Siempre que su tutor o curador tenga alguna de estas condiciones:
- Residente permanente
- Residente temporal
- Persona costarricense

### **5️⃣ Vínculo con investigador, docente, profesional o voluntario**

Aplica para familiares dependientes de una persona investigadora, docente, profesional o voluntaria.

Puede incluir:
- Cónyuge
- Hijos menores de edad
- Hijos mayores con discapacidad

Deben cumplir con:
- Dependencia económica
- Vinculación con una institución registrada ante la Dirección General

### **6️⃣ Hijos e hijas de agentes diplomáticos o funcionarios internacionales**

Aplica para hijos e hijas de:
- Agentes diplomáticos
- Funcionarios consulares
- Funcionarios o representantes de misiones permanentes
- Delegaciones ante organizaciones internacionales acreditadas en Costa Rica

Cuando, por alcanzar la edad de **25 años**, quedan excluidos del núcleo familiar primario y dejan de estar cubiertos por el estatus otorgado por el Ministerio de Relaciones Exteriores y Culto.

### **7️⃣ Persona menor de edad bajo representación legal del PANI**

Aplica para persona menor de edad que esté bajo representación legal del **Patronato Nacional de la Infancia (PANI)**.

Esto incluye personas menores ubicadas en una alternativa de protección:
- Pública o privada
- Institucional o familiar
- Declaradas o no judicialmente en estado de abandono

También aplica cuando no puedan optar por otra categoría migratoria que les genere derechos de permanencia definitiva o temporal.

### **8️⃣ Habitante fronterizo**

Aplica para personas con domicilio fijo en zonas cercanas a la frontera, definidas por:
- La Dirección General
- Acuerdos binacionales sobre zonas fronterizas

📌 **Condición importante:**
La persona no debe dedicarse a ninguna labor manual o intelectual remunerada.

La categoría se otorga por:
- Un periodo de un año prorrogable

### **9️⃣ Funcionarios designados por países u organismos internacionales cooperantes**

Aplica para funcionarios designados por países y organismos internacionales cooperantes vinculados con:
- Proyectos de cooperación internacional
- Programas de cooperación internacional

También puede incluir:
- Dependientes
- Una persona de servicio personal o doméstico

Se entiende como núcleo familiar:
- Cónyuge
- Conviviente de hecho
- Hijos e hijas menores de edad y solteros
- Familiares de primer grado de consanguinidad con dependencia económica

📌 **Condición importante:**
La persona dependiente no debe ejercer actividad lucrativa y debe demostrar que vive de forma permanente con el funcionario o funcionaria.

📌 **Importante:**
Cada categoría especial tiene condiciones específicas. Antes de iniciar el trámite, revise cuál se ajusta realmente a su situación.`,
  },

  {
    nombre:
      '💻 Regularización de Categorías Temporales (Solamente en Línea)',
    familia: 'regularizacion',

    queEs: `Este trámite permite iniciar procesos de **regularización migratoria temporal** de forma completamente digital mediante la plataforma oficial **TRÁMITE YA** de la Dirección General de Migración y Extranjería (DGME).

Desde esta plataforma puede abrir su expediente, cargar documentos, dar seguimiento a su solicitud y realizar el proceso sin necesidad de hacer filas presenciales.

✅ **Aplica para:**
- Personas refugiadas
- Personas migrantes sin trámite
- Personas con condición migratoria temporal
- Personas cuya categoría pueda gestionarse mediante esta plataforma digital

🚫 **No aplica para:**
- Trámites migratorios que no pertenezcan a categorías temporales
- Procesos que requieran otra vía de gestión distinta

📌 **Importante:**
Este trámite se realiza **únicamente en línea**.`,

    pasos: `# **💻 Plataforma**

El trámite se realiza mediante la **Plataforma Migración Digital** de la Dirección General de Migración y Extranjería (DGME):

🔗 <https://tramiteya.go.cr/dgme/>

Registro directo en la plataforma:

🔗 <https://www.tramiteya.go.cr/signup>

La plataforma permite:
- Abrir expediente digital
- Dar seguimiento al proceso
- Cargar documentos 24/7
- Evitar filas presenciales

# **🧭 Pasos a seguir**

### **1️⃣ Crear cuenta**

Ingrese directamente al registro:

🔗 <https://www.tramiteya.go.cr/signup>

Debe registrarse en la plataforma para iniciar el proceso.

### **2️⃣ Ingresar al sistema**

Acceda a la plataforma:

🔗 <https://tramiteya.go.cr/dgme/>

### **3️⃣ Realizar el pago**

Debe cancelar un único pago de:

💵 **US$11**

Este pago habilita el trámite en la plataforma.

### **4️⃣ Abrir expediente**

Debe completar el formulario de filiación y seleccionar la **categoría migratoria correspondiente**.

### **5️⃣ Cargar documentos**

Debe subir los documentos requeridos según la categoría migratoria.

📌 **Importante:**
Los documentos deben estar:
- Apostillados o legalizados
- Traducidos si corresponde

### **6️⃣ Enviar expediente**

Antes de enviarlo:
- Verifique la información
- Revise que los documentos estén completos
- Envíe el expediente para valoración

### **7️⃣ Proceso de análisis**

Migración evaluará la solicitud.

Durante este proceso, Migración puede requerir:
- Información adicional
- Correcciones
- Documentación complementaria

### **8️⃣ Seguimiento**

Debe dar seguimiento al trámite directamente desde la plataforma.

# **📂 Categorías temporales disponibles**

## **Residencia Temporal**
- Por cónyuge costarricense
- Religioso
- Dependiente de religioso
- Rentista
- Dependiente de rentista
- Pensionado
- Dependiente de pensionado
- Religioso de institución acreditada
- Dependiente de religioso de institución acreditada
- Dependiente de religioso católico de institución acreditada

## **Otros**
- Devolución de depósito de garantía de residencia temporal

# **⚠️ Notas importantes**
- El trámite es completamente digital.
- El expediente se construye dentro de la plataforma.
- Los requisitos varían según la categoría.
- Los requisitos pueden incluir:
  - Identificación
  - Certificaciones legales
  - Prueba de solvencia económica en algunos casos`,
  },

  {
    nombre:
      '🌐 Regularización de Categorías Especiales (Opciones en Línea)',
    familia: 'regularizacion',

    queEs: `Este trámite permite gestionar **categorías especiales de regularización migratoria** mediante la plataforma digital **Trámite Ya** de la Dirección General de Migración y Extranjería.

Está pensado para personas cuya situación migratoria corresponde a una **categoría especial disponible en línea**, sin necesidad de iniciar todo el proceso de forma presencial.

✅ **Aplica para:**
- Personas refugiadas
- Personas migrantes sin trámite
- Personas con condición migratoria temporal
- Personas cuya situación corresponda a una categoría especial disponible en la plataforma

🚫 **No aplica para:**
- Casos que requieren validación presencial
- Categorías especiales que no estén disponibles en la plataforma digital

📌 **Importante:**
Este trámite permite abrir expediente digital, cargar documentos y dar seguimiento al proceso desde la plataforma.`,

    pasos: `# **💻 Plataforma**

El trámite se realiza mediante la **Plataforma Migración Digital** de la Dirección General de Migración y Extranjería (DGME):

🔗 <https://tramiteya.go.cr/dgme/>

Registro directo en la plataforma:

🔗 <https://www.tramiteya.go.cr/signup>

La plataforma permite:
- Abrir expediente digital
- Dar seguimiento al proceso
- Cargar documentos 24/7
- Evitar filas presenciales

# **🧭 Pasos a seguir**

### **1️⃣ Crear cuenta**

Ingrese directamente al registro:

🔗 <https://www.tramiteya.go.cr/signup>

Debe registrarse en la plataforma para iniciar el proceso.

### **2️⃣ Ingresar al sistema**

Acceda a la plataforma:

🔗 <https://tramiteya.go.cr/dgme/>

### **3️⃣ Realizar el pago**

Debe cancelar un único pago de:

💵 **US$11**

Este pago habilita el trámite en la plataforma.

### **4️⃣ Abrir expediente**

Debe completar el formulario de filiación y seleccionar la **categoría migratoria correspondiente**.

### **5️⃣ Cargar documentos**

Debe subir los documentos requeridos según la categoría migratoria.

📌 **Importante:**
Los documentos deben estar:
- Apostillados o legalizados
- Traducidos si corresponde

### **6️⃣ Enviar expediente**

Antes de enviarlo:
- Verifique la información
- Revise que los documentos estén completos
- Envíe el expediente para valoración

### **7️⃣ Proceso de análisis**

Migración evaluará la solicitud.

Durante este proceso, Migración puede requerir:
- Información adicional
- Correcciones
- Documentación complementaria

### **8️⃣ Seguimiento**

Debe dar seguimiento al trámite directamente desde la plataforma.

# **📂 Categorías especiales disponibles**

## **Residencia Especial**
- Vínculo con ciudadano costarricense
- Vínculo con Residente Permanente
- Vínculo con Curador o tutor
- Trabajador con ocupación específica con patrono físico (empleado(a) doméstica)
- Trabajador con ocupación específica para persona física
- Trabajador temporal
- Estudiante-Voluntario-Docente-Investigador

# **⚠️ Notas importantes**

- El trámite es completamente digital.
- El expediente se construye dentro de la plataforma.
- Los requisitos varían según la categoría.
- Los requisitos pueden incluir:
  - Identificación
  - Certificaciones legales
  - Prueba de solvencia económica en algunos casos.`,
  },

  // ============================================================
  // 🪪 DIMEX
  // ============================================================

  {
    nombre: '📦 DIMEX sin Retirar',
    familia: 'dimex',

    queEs: `Este trámite permite retirar un **DIMEX que ya fue emitido**, pero que no fue recogido dentro del plazo establecido después de que la persona extranjera fue notificada de su disponibilidad.

Si usted ya completó el proceso de documentación, se tomó la fotografía correspondiente y recibió la notificación para retirar su DIMEX, pero no lo retiró dentro del tiempo indicado, es posible que el documento haya sido trasladado a las Oficinas Centrales de Migración para su resguardo.

✅ **Aplica para:**
- Personas extranjeras de cualquier categoría migratoria que ya completaron el proceso de documentación.
- Personas cuyo DIMEX ya fue emitido.
- Personas que recibieron una notificación de entrega pero no retiraron el documento.

🚫 **No aplica para:**
- Personas que aún no se han documentado.
- Personas que todavía no tienen un DIMEX emitido.
- Personas que se encuentran esperando la emisión de su documento.

📌 **Importante:**
Este trámite únicamente corresponde al retiro de un DIMEX ya confeccionado. No sustituye procesos de documentación, renovación o solicitud de categorías migratorias.`,

    pasos: `### **1️⃣ Verifique si su DIMEX se encuentra pendiente de retiro**

Si usted ya se tomó la fotografía para el DIMEX, pero no retiró el documento después de dos meses desde que fue notificada la entrega en la sucursal de Correos de Costa Rica seleccionada, deberá verificar si su documento se encuentra disponible para retiro en Migración.

📌 Revise la lista oficial correspondiente para confirmar si su DIMEX aparece registrado.

### **2️⃣ Confirme que su DIMEX aparece en la lista**

Si su DIMEX aparece en la lista de documentos pendientes de retiro, podrá presentarse directamente a retirarlo.

✅ No es necesario iniciar un trámite nuevo.
✅ No es necesario solicitar una nueva documentación.

### **3️⃣ Preséntese en las Oficinas Centrales de Migración**

Debe acudir personalmente a:

📍 **Dirección General de Migración y Extranjería**
🏢 Oficinas Centrales de Migración
🚪 Puerta 3
📍 La Uruca

🕒 Horario de atención:
- Lunes a viernes
- De 7:30 a.m. a 2:00 p.m.

### **4️⃣ Lleve su comprobante de documentación**

Al momento de retirar el documento deberá presentar:

📄 **Comprobante de documentación**

Este documento permitirá verificar que usted realizó previamente el proceso correspondiente para la emisión del DIMEX.

### **5️⃣ Retire su DIMEX**

Una vez verificada su información, podrá retirar su Documento de Identidad Migratorio para Extranjeros (DIMEX).

📌 **Importante:**
Este trámite no requiere cita previa.

✅ Puede presentarse directamente dentro del horario indicado.

### **⚠️ Consideraciones importantes**
- Debe haber completado previamente el proceso de documentación.
- Debe aparecer en la lista de DIMEX pendientes de retiro.
- Debe portar su comprobante de documentación.
- El trámite se realiza directamente en las Oficinas Centrales de Migración en La Uruca.
- No requiere sacar cita.`,
  },

  {
    nombre: '🪪🚔❓ Duplicado de DIMEX por Robo o Extravío (Aún Vigente)',
    familia: 'dimex',

    queEs: `Este trámite permite solicitar un **duplicado del Documento de Identidad Migratorio para Extranjeros (DIMEX)** cuando el documento ha sido perdido, extraviado, hurtado o robado, siempre que se encuentre vigente al momento de realizar la solicitud.

El duplicado sustituye el documento original y permite que la persona extranjera continúe identificándose oficialmente en Costa Rica sin afectar su condición migratoria.

✅ **Aplica para:**
- Personas extranjeras de cualquier categoría migratoria que tengan un DIMEX vigente.
- Casos de extravío, hurto o robo del documento.

🚫 **No aplica para:**
- Personas cuyo DIMEX ya se encuentra vencido.
- Personas que requieren una renovación y no un duplicado.
- Personas que nunca han tenido un DIMEX emitido.

📌 **Importante:**
Este trámite únicamente reemplaza un DIMEX perdido o robado. No modifica la categoría migratoria ni extiende la vigencia del documento.`,

    pasos: `### **1️⃣ Verificar que el DIMEX se encuentre vigente**

Antes de iniciar el trámite, debe confirmar que el documento perdido o robado aún se encuentra vigente.

⚠️ Si el DIMEX ya venció, deberá realizar el trámite correspondiente a renovación y no un duplicado.

### **2️⃣ Obtener una cita**

📅 Debe presentarse el día de la cita con todos los documentos requeridos para gestionar la reposición del DIMEX.

### **3️⃣ Presentar declaración jurada por pérdida, hurto o robo**

Debe presentar uno de los siguientes documentos:

📑 **Declaración Jurada Protocolizada**, elaborada por un notario público.

o bien

🏛️ **Declaración Jurada rendida ante funcionario público de la Dirección General de Migración y Extranjería**, cuando la atención se realice directamente en una oficina de Migración.

Esta declaración debe indicar las circunstancias en las que ocurrió:
- El extravío
- El hurto
- El robo del documento

### **4️⃣ Presentar pasaporte vigente**

Debe aportar:

📘 **Pasaporte vigente y en buen estado**, sin excepción.

El pasaporte es un requisito obligatorio para la emisión del duplicado.

### **5️⃣ Presentar comprobante de pago**

Debe presentar:

💵 **Recibo de pago por los derechos correspondientes al duplicado del DIMEX**, donde aparezca el nombre de la persona extranjera como depositante.

El depósito debe realizarse en:

🏦 Banco de Costa Rica (BCR)
📄 Cuenta #242480-0

El pago debe efectuarse en colones.

### **6️⃣ Consideración especial para trámites en el Banco de Costa Rica**

🏦 Si la atención se realiza en una agencia del Banco de Costa Rica para la emisión del duplicado:

⚠️ No debe realizar el pago previamente.

El monto correspondiente será cancelado al momento de la toma de fotografía.

### **7️⃣ Consideración especial para atención en BCR o Correos de Costa Rica**

📮 Si el trámite se realiza en:
- Oficinas del Banco de Costa Rica
- Ventanillas Especiales de Servicios de Correos de Costa Rica

deberá cancelar un monto adicional.

💰 Este pago se realiza en efectivo el día de la cita.

📌 El monto exacto será informado al momento de programar la cita.

## **⚠️ Recomendaciones importantes**

🔍 Revise cuidadosamente los requisitos antes de asistir a la cita.

📘 Verifique que su pasaporte se encuentre vigente y en buen estado.

📑 Conserve copia de la declaración jurada y de los comprobantes de pago.

👮 Acuda únicamente al personal debidamente identificado para consultas sobre:
- Requisitos
- Citas
- Cupos de atención

🚫 Evite entregar información personal a personas no autorizadas.`,
  },

  {
    nombre: '🔄 Renovación de DIMEX (Información Importante)',
    familia: 'dimex',
    aliases: ['Renovación (Información Importante)'],

    queEs: `Esta sección reúne información importante que toda persona extranjera debe conocer antes de renovar su **Documento de Identidad Migratorio para Extranjeros (DIMEX)**.

La renovación permite mantener vigente la condición migratoria y evitar sanciones, pagos adicionales o incluso la cancelación de la categoría migratoria en determinados casos.

✅ **Aplica para:**
- Personas con residencia permanente.
- Personas con residencia temporal.
- Personas con categorías especiales vigentes.
- Personas extranjeras que ya poseen un DIMEX.

🚫 **No aplica para:**
- Personas que no cuentan con DIMEX.
- Personas que aún no han sido documentadas por primera vez.
- Personas que no poseen una categoría migratoria aprobada.

📌 **Importante:**
Antes de iniciar cualquier renovación específica, se recomienda revisar cuidadosamente esta información, ya que contiene reglas generales aplicables a distintas categorías migratorias.`,

    pasos: `### **⏰ Renovación de residencia permanente**

Las personas extranjeras con **residencia permanente** deberán renovar su documento de identidad dentro de los **30 días posteriores a su vencimiento**.

Si no lo hacen dentro de ese plazo:

💵 Deberán cancelar el equivalente a **US$3 por cada mes o fracción de mes de atraso**.

### **⚠️ Cancelación por falta de renovación**

Si una persona extranjera no renueva el documento que acredita su condición migratoria legal dentro de los **tres meses posteriores al vencimiento**, podrá producirse la cancelación de la categoría migratoria en los casos de:
- Residencia Temporal
- Categorías Especiales

📌 Esta cancelación podrá evitarse únicamente cuando existan razones debidamente comprobadas que demuestren la imposibilidad de realizar la renovación dentro del plazo establecido.

### **✈️ Permanencia fuera de Costa Rica por más de un año**

Si la persona extranjera permaneció fuera del país por un periodo superior a un año, deberá presentar:

📄 Un escrito explicando las razones de la ausencia.
📄 Certificación de antecedentes penales del país donde permaneció.

El documento deberá estar:
- Apostillado, o
- Debidamente legalizado y autenticado según corresponda.

### **🌎 Ausencias prolongadas que pueden generar cancelación**

La condición migratoria podrá cancelarse cuando:

**🏠 Residencia Permanente**

La persona extranjera permanezca fuera de Costa Rica por más de **cuatro años consecutivos**.

**🏠 Residencia Temporal**

La persona extranjera permanezca fuera de Costa Rica por más de **dos años consecutivos**.

📌 Lo anterior no aplicará cuando existan causas de excepción debidamente comprobadas, tales como:
- Razones de salud
- Razones de estudio
- Razones familiares
- Otras situaciones justificadas

### **📅 Renovación anticipada**

La cédula de residencia puede renovarse hasta:

✅ **Tres meses antes de la fecha de vencimiento.**

Esto permite evitar atrasos y posibles recargos.

### **💵 Multa por atraso**

Por cada mes o fracción de mes de atraso en la renovación del DIMEX deberá cancelarse adicionalmente:

💰 Equivalente en colones a **US$3 por mes**.

### **📝 Si el DIMEX tiene más de tres meses de vencido**

Si la cédula tiene más de tres meses de vencida al momento de renovar, deberá presentar:

📄 Una carta de justificación explicando el motivo por el cual no realizó la renovación dentro del plazo correspondiente.

La carta debe contener:

✅ Firma autenticada por abogado.

### **🚨 En caso de robo o extravío**

Si el DIMEX fue robado o extraviado, deberá presentar:

📄 Declaración jurada protocolizada elaborada por un abogado o abogada.

### **🏦 Atención en Banco de Costa Rica o Correos de Costa Rica**

Si la atención se realiza en:
- Banco de Costa Rica (BCR)
- Ventanillas Especiales de Servicios de Correos de Costa Rica

💵 Deberá cancelar un monto adicional en efectivo el día de la cita.

📌 El monto exacto será informado al momento de programar la cita.

### **👮 Recomendación de seguridad**

Para consultas sobre:
- Requisitos
- Citas
- Cupos de atención

✅ Acuda únicamente a personal debidamente identificado.

⚠️ Evite entregar información personal o documentos a terceros no autorizados.`,
  },

  {
    nombre: '🏠🪪 Renovación DIMEX de Residencia Permanente',
    familia: 'dimex',

    queEs: `Este trámite permite renovar el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** de las personas que cuentan con **residencia permanente vigente en Costa Rica**.

La renovación es necesaria para mantener actualizado el documento de identificación migratoria y continuar acreditando legalmente la condición de residente permanente ante las instituciones públicas y privadas del país.

✅ **Aplica para:**
- Personas extranjeras con residencia permanente aprobada.
- Personas cuyo DIMEX de residencia permanente está próximo a vencer o ya venció dentro de los plazos permitidos.

🚫 **No aplica para:**
- Personas con residencia temporal.
- Personas con categorías especiales.
- Personas que aún no cuentan con residencia permanente aprobada.
- Personas que deben realizar otro tipo de renovación migratoria.

📌 **Importante:**
La renovación del DIMEX no modifica su categoría migratoria. Únicamente permite mantener vigente el documento de identidad asociado a su residencia permanente.`,

    pasos: `**El día de la cita deberá presentar:**

1. DIMEX en buen estado.

2. Comprobante de afiliación a los sistemas de aseguramiento de la Caja Costarricense de Seguro Social CCSS (seguro voluntario, orden patronal, entre otros).

3. Recibo de pago por la suma de los derechos de renovación, donde se indique el nombre de la persona extranjera como depositante.

Este dinero debe cancelarse en COLONES en la cuenta 242480-0 del Banco de Costa Rica.

Si es atendido en una agencia del Banco de Costa Rica para renovación de cédula, NO debe cancelar con anterioridad; cancelará al momento que le toman la fotografía.

El monto a cancelar debe ser consultado al momento de realizar la cita para renovación, ya que según sea el caso, ese monto varía.

4. Pasaporte vigente y en buen estado.

**Si ha estado fuera del país por más de un año**, al momento de renovar deberá presentar el documento de Antecedentes Penales del país donde estuvo.

Esto porque deberá realizar el trámite de solicitud de autorización de renovación de su DIMEX, y será indispensable la presentación de este documento.

Artículo 216, Reglamento de Extranjería.`,
  },

  {
    nombre: '🪪 Documentación por Primera Vez',
    familia: 'dimex',

    queEs: `Este trámite permite obtener el **DIMEX por primera vez** después de que una persona extranjera recibe la aprobación de su categoría migratoria.

La documentación por primera vez es el paso que sigue después de que Migración aprueba una categoría migratoria. En este proceso, la persona se presenta a documentarse para que pueda emitirse su **Documento de Identidad Migratorio para Extranjeros (DIMEX)**.

✅ **Aplica para:**
- Personas migrantes sin trámite o con condición temporal que ya recibieron una resolución aprobatoria.
- Personas extranjeras cuya categoría migratoria ya fue aprobada por Migración.
- Personas que necesitan documentarse por primera vez para obtener su DIMEX.

🚫 **No aplica para:**
- Personas que todavía no tienen una resolución aprobada.
- Personas que aún no han recibido aprobación de su categoría migratoria.
- Personas que todavía no han completado el proceso migratorio previo necesario.

📌 **Importante:**
Este trámite no es para solicitar una categoría migratoria desde cero. Es para personas que **ya recibieron aprobación** y ahora deben completar el proceso de documentación para obtener su DIMEX.`,

    pasos: `### **1️⃣ Verifique que su categoría migratoria ya fue aprobada**

Este trámite aplica únicamente si a la persona extranjera **ya le fue aprobada su categoría migratoria**.

Antes de iniciar, revise que cuenta con la resolución o notificación correspondiente emitida por Migración.

### **2️⃣ Solicite una cita para documentarse**

La persona extranjera deberá sacar una cita para realizar la documentación por primera vez.

Puede hacerlo mediante:

☎️ **Call Center de Migración:** 1311

o

🏦 **Banco de Costa Rica (BCR)**, según los canales habilitados para este trámite.

### **3️⃣ Presente los requisitos indicados en la resolución**

El día de la cita debe presentar los requisitos que se le indican en la **resolución de aprobación** de su categoría migratoria.

📌 **Importante:**
Los requisitos pueden variar según la categoría migratoria aprobada, por eso debe revisar cuidadosamente la resolución recibida.

### **4️⃣ Realice el proceso dentro del plazo establecido**

Debe hacer el proceso de documentación dentro de los **90 días posteriores a la notificación** de aprobación.

⚠️ **Importante:**
No deje pasar este plazo. La documentación por primera vez es necesaria para continuar con la emisión del DIMEX.

### **5️⃣ Complete la documentación para obtener el DIMEX**

Una vez que se presente a la cita y entregue los requisitos correspondientes, Migración podrá continuar con el proceso de documentación para emitir su DIMEX.

📌 **Resultado esperado:**

Obtener el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** por primera vez.`,
  },

  {
    nombre:
      '💍🪪 Renovación DIMEX de Residencia Temporal por Cónyuge Costarricense',
    familia: 'dimex',

    queEs: `Este trámite permite renovar el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** de las personas extranjeras que cuentan con una **Residencia Temporal por vínculo con cónyuge costarricense**.

La renovación permite mantener vigente la condición migratoria otorgada por matrimonio con una persona costarricense y demostrar que la relación y convivencia continúan existiendo.

✅ **Aplica para:**
- Personas extranjeras con residencia temporal por matrimonio con una persona costarricense.
- Personas que mantienen vigente el vínculo y la convivencia conyugal que dio origen a su residencia.

🚫 **No aplica para:**
- Personas que no poseen esta categoría migratoria.
- Personas que no cuentan con vínculo conyugal con una persona costarricense.
- Personas que solicitan una categoría migratoria diferente.

📌 **Importante:**
La renovación no otorga una nueva residencia. Su objetivo es mantener vigente la condición migratoria ya aprobada.`,

    pasos: `### **1️⃣ Presentar el DIMEX**

Debe presentar:

🪪 **DIMEX en buen estado.**

El documento debe encontrarse legible y en condiciones adecuadas para su identificación.

### **2️⃣ Presentar comprobante de aseguramiento ante la CCSS**

Debe aportar:

🏥 **Comprobante de afiliación a los sistemas de aseguramiento de la Caja Costarricense de Seguro Social (CCSS).**

Por ejemplo:
- Seguro voluntario.
- Orden patronal.
- Otro mecanismo válido de aseguramiento ante la CCSS.

### **3️⃣ Presentar comprobante de pago de renovación**

Debe presentar:

💵 **Recibo de pago por los derechos de renovación**, donde aparezca el nombre de la persona extranjera como depositante.

El pago debe realizarse en:

🏦 **Banco de Costa Rica (BCR)**
📄 Cuenta #242480-0

📌 El pago debe efectuarse en colones.

**⚠️ Importante:**
Si la atención se realiza en una agencia del Banco de Costa Rica para renovación de DIMEX, **no debe realizar el pago previamente**, ya que cancelará el monto correspondiente al momento de la toma de fotografía.

El monto exacto debe consultarse al momento de solicitar la cita, ya que puede variar según cada caso.

### **4️⃣ Presentar pasaporte vigente**

Debe presentar:

📘 **Pasaporte vigente y en buen estado.**

El documento debe encontrarse válido al momento de realizar la renovación.

### **5️⃣ Demostrar la convivencia conyugal**

Debe demostrarse que la convivencia conyugal continúa vigente.

Para ello:

👫 **Ambos cónyuges deberán presentarse personalmente** ante la Plataforma de Servicios de la Gestión de Extranjería o en la Delegación Regional correspondiente.

Durante el trámite deberán:

🗣️ Participar en una entrevista de ratificación de datos.
📄 Presentar cualquier documentación o prueba adicional que permita acreditar la convivencia conyugal.
✍️ La documentación presentada deberá estar firmada por ambos cónyuges cuando corresponda.

## **⚠️ Consideraciones importantes**

🚫 **Si el DIMEX tiene más de tres meses de vencido**

No podrá realizar la renovación ordinaria.

📄 Deberá iniciar un nuevo trámite de solicitud de categoría migratoria.

🔒 **Si el DIMEX fue robado o extraviado**

Deberá presentar:

📑 Declaración jurada protocolizada elaborada por un abogado o abogada.

🌎 **Si permaneció fuera de Costa Rica por más de un año**

Al momento de renovar deberá presentar:

📄 Certificación de antecedentes penales del país donde permaneció.

El documento deberá encontrarse:

✅ Legalizado y autenticado, o
✅ Apostillado según corresponda.

Este requisito es indispensable para tramitar la autorización de renovación del DIMEX conforme al artículo 216 del Reglamento de Extranjería.

✅ Mantenga vigente su afiliación a la CCSS.
✅ Verifique que su pasaporte se encuentre vigente antes de solicitar la cita.
✅ Procure renovar el documento antes de su vencimiento.`,
  },

  {
    nombre:
      '💼📈 Renovación DIMEX de Residencia Temporal como Inversionista y Dependientes',
    familia: 'dimex',

    queEs: `Este trámite permite renovar el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** de las personas extranjeras que cuentan con una **Residencia Temporal como Inversionista**, así como de sus dependientes autorizados.

La renovación permite mantener vigente la condición migratoria otorgada con base en una inversión realizada en Costa Rica y demostrar que dicha inversión continúa existiendo.

✅ **Aplica para:**
- Personas extranjeras con Residencia Temporal como Inversionista.
- Dependientes autorizados bajo esta categoría migratoria.
- Personas que mantienen vigente la inversión que dio origen a la residencia.

🚫 **No aplica para:**
- Personas que no poseen una residencia temporal como inversionista.
- Personas que no cuentan con una inversión reconocida dentro del expediente migratorio.
- Personas que pertenecen a otras categorías migratorias.

📌 **Importante:**
La renovación permite mantener vigente la condición migratoria ya aprobada. No corresponde a una nueva solicitud de residencia.`,

    pasos: `### **1️⃣ Presentar el DIMEX**

Debe presentar:
🪪 **DIMEX en buen estado.**

### **2️⃣ Presentar comprobante de aseguramiento ante la CCSS**

Debe aportar:

🏥 **Comprobante de afiliación a los sistemas de aseguramiento de la Caja Costarricense de Seguro Social (CCSS).**

### **3️⃣ Presentar comprobante de pago de renovación**

Debe presentar:

💵 **Recibo de pago por los derechos de renovación**, donde aparezca el nombre de la persona extranjera como depositante.

El pago debe realizarse en:

🏦 **Banco de Costa Rica (BCR)**
📄 Cuenta #242480-0

📌 El pago debe efectuarse en colones.

⚠️ Si la atención se realiza en una agencia del Banco de Costa Rica para renovación de DIMEX, **no debe realizar el pago previamente**, ya que cancelará el monto correspondiente al momento de la toma de fotografía.

El monto exacto debe consultarse al momento de solicitar la cita.

### **4️⃣ Presentar pasaporte vigente**

📘 **Pasaporte vigente y en buen estado.**

### **5️⃣ Presentar comprobante de la inversión**

Debe aportar:

📈 **Comprobante de la inversión realizada en Costa Rica.**

Este documento debe demostrar que la inversión que sirvió de base para obtener la residencia continúa vigente y cumple con los requisitos correspondientes.

## **⚠️ Consideraciones importantes**

🚫 Si el DIMEX tiene más de tres meses de vencido, no podrá realizar la renovación ordinaria.

📄 Deberá iniciar un nuevo trámite de solicitud de categoría migratoria.

🔒 Si el DIMEX fue robado o extraviado, deberá presentar declaración jurada protocolizada elaborada por un abogado o abogada.

🌎 Si permaneció fuera de Costa Rica por más de un año, deberá presentar certificación de antecedentes penales del país donde permaneció.

El documento deberá encontrarse:
✅ Legalizado y autenticado, o
✅ Apostillado según corresponda.

✅ Mantenga vigente su afiliación a la CCSS.
✅ Verifique que su pasaporte se encuentre vigente.
✅ Conserve documentación actualizada que respalde la inversión realizada en el país.
✅ Procure renovar el DIMEX antes de su fecha de vencimiento.`,
  },

  {
    nombre:
      '👴💰🪪 Renovación DIMEX de Residencia Temporal como Pensionado y Dependientes',
    familia: 'dimex',

    queEs: `Este trámite permite renovar el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** de las personas extranjeras que cuentan con una **Residencia Temporal como Pensionado**, así como de sus dependientes autorizados.

La renovación permite mantener vigente la condición migratoria otorgada con base en una pensión permanente y demostrar que la persona continúa recibiendo dicho beneficio económico.

✅ **Aplica para:**
- Personas extranjeras con Residencia Temporal como Pensionado.
- Dependientes autorizados bajo esta categoría migratoria.
- Personas que continúan recibiendo la pensión que dio origen a su residencia.

🚫 **No aplica para:**
- Personas que no poseen una residencia temporal como pensionado.
- Personas que no cuentan con una pensión vigente.
- Personas que pertenecen a otra categoría migratoria.

📌 **Importante:**
La renovación permite mantener vigente la condición migratoria ya aprobada. No corresponde a una nueva solicitud de residencia.`,

    pasos: `### **1️⃣ Presentar el DIMEX**

🪪 **DIMEX en buen estado.**

### **2️⃣ Presentar comprobante de aseguramiento ante la CCSS**

🏥 **Comprobante de afiliación a los sistemas de aseguramiento de la CCSS.**

### **3️⃣ Presentar comprobante de pago de renovación**

💵 Recibo de pago por los derechos de renovación, donde aparezca el nombre de la persona extranjera como depositante.

🏦 **Banco de Costa Rica (BCR)**
📄 Cuenta #242480-0

📌 El pago debe efectuarse en colones.

⚠️ Si la atención se realiza en una agencia del Banco de Costa Rica para renovación de DIMEX, **no debe realizar el pago previamente**.

El monto exacto debe consultarse al momento de solicitar la cita.

### **4️⃣ Presentar pasaporte vigente**

📘 **Pasaporte vigente y en buen estado.**

### **5️⃣ Presentar comprobante de pensión vigente**

Debe aportar:

📄 **Certificación o comprobante emitido por la autoridad competente**, donde se indique que la persona extranjera mantiene activa la pensión que dio origen a la residencia temporal.

## **⚠️ Consideraciones importantes**

🚫 Si el DIMEX tiene más de tres meses de vencido, deberá iniciar un nuevo trámite de solicitud de categoría migratoria.

🔒 Si el DIMEX fue robado o extraviado, deberá presentar declaración jurada protocolizada.

🌎 Si permaneció fuera de Costa Rica por más de un año, deberá presentar certificación de antecedentes penales del país donde permaneció.

El documento deberá encontrarse:
✅ Legalizado y autenticado, o
✅ Apostillado según corresponda.

✅ Mantenga vigente su afiliación a la CCSS.
✅ Verifique que su pasaporte esté vigente.
✅ Conserve documentación actualizada que demuestre que continúa recibiendo la pensión.
✅ Procure renovar el DIMEX antes de su fecha de vencimiento.`,
  },

  {
    nombre:
      '⛪🪪 Renovación DIMEX de Residencia Temporal como Religioso y Dependientes',
    familia: 'dimex',

    queEs: `Este trámite permite renovar el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** de las personas extranjeras que cuentan con una **Residencia Temporal como Religioso**, así como de sus dependientes autorizados.

La renovación permite mantener vigente la condición migratoria otorgada para realizar actividades religiosas en Costa Rica y demostrar que la persona continúa vinculada a la congregación o institución religiosa que respaldó su residencia.

✅ **Aplica para:**
- Personas extranjeras con Residencia Temporal como Religioso.
- Dependientes autorizados bajo esta categoría migratoria.
- Personas que mantienen vigente su vínculo con una congregación o institución religiosa.

🚫 **No aplica para:**
- Personas que no poseen esta categoría migratoria.
- Personas que ya no pertenecen a una congregación religiosa reconocida.
- Personas que pertenecen a otras categorías migratorias.

📌 **Importante:**
La renovación permite mantener vigente la condición migratoria ya aprobada. No corresponde a una nueva solicitud de residencia.`,

    pasos: `### **1️⃣ Presentar el DIMEX**

🪪 **DIMEX en buen estado.**

### **2️⃣ Presentar comprobante de aseguramiento ante la CCSS**

🏥 **Comprobante de afiliación a los sistemas de aseguramiento de la CCSS.**

Por ejemplo:
- Seguro voluntario.
- Orden patronal.
- Otro mecanismo válido de aseguramiento.

### **3️⃣ Presentar comprobante de pago de renovación**

💵 Recibo de pago por los derechos de renovación.

🏦 **Banco de Costa Rica (BCR)**
📄 Cuenta #242480-0

📌 El pago debe efectuarse en colones.

⚠️ Si la atención se realiza en una agencia del Banco de Costa Rica, no debe realizar el pago previamente.

### **4️⃣ Presentar pasaporte vigente**

📘 **Pasaporte vigente y en buen estado.**

### **5️⃣ Presentar carta de la congregación religiosa**

📄 Carta emitida por la congregación religiosa, donde se indique que la persona extranjera continúa perteneciendo a dicha congregación.

### **6️⃣ Requisito adicional para cónyuges dependientes**

💰 Comprobante de pago anual a favor del Gobierno por **US$25,00**.

Este monto será destinado al:

🤝 **Fondo Social de Migración.**

⚠️ Este pago es adicional a los derechos de renovación.

## **⚠️ Consideraciones importantes**

🚫 Si el DIMEX tiene más de tres meses de vencido, deberá iniciar un nuevo trámite de solicitud de categoría migratoria.

🔒 Si el DIMEX fue robado o extraviado, deberá presentar declaración jurada protocolizada.

🌎 Si permaneció fuera de Costa Rica por más de un año, deberá presentar certificación de antecedentes penales.

✅ Mantenga vigente su afiliación a la CCSS.
✅ Verifique que su pasaporte se encuentre vigente.
✅ Solicite con tiempo la carta de respaldo de su congregación religiosa.
✅ Procure renovar el DIMEX antes de su fecha de vencimiento.`,
  },

  {
    nombre:
      '💰🪪 Renovación DIMEX de Residencia Temporal como Rentista y Dependientes',
    familia: 'dimex',

    queEs: `Este trámite permite renovar el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** de las personas extranjeras que cuentan con una **Residencia Temporal como Rentista**, así como de sus dependientes autorizados.

La categoría de rentista está dirigida a personas que pueden demostrar ingresos estables, permanentes y suficientes para mantenerse económicamente en Costa Rica sin necesidad de depender de un empleo local.

La renovación permite mantener vigente la condición migratoria previamente aprobada y continuar residiendo legalmente en el país bajo esta categoría.

✅ **Aplica para:**
- Personas extranjeras con Residencia Temporal como Rentista.
- Dependientes autorizados bajo esta categoría migratoria.
- Personas que pueden demostrar que continúan recibiendo su renta mensual, estable y permanente.

🚫 **No aplica para:**
- Personas que no poseen esta categoría migratoria.
- Personas que no pueden demostrar la continuidad de los ingresos que dieron origen a la residencia.
- Personas que solicitan una categoría migratoria diferente.

📌 **Importante:**
Este trámite corresponde únicamente a la renovación de una residencia temporal ya aprobada. No sustituye una solicitud inicial de residencia.`,

    pasos: `### **1️⃣ Presentar el DIMEX**

🪪 **DIMEX en buen estado.**

### **2️⃣ Presentar comprobante de aseguramiento ante la CCSS**

🏥 **Comprobante de afiliación vigente a la CCSS.**

### **3️⃣ Presentar comprobante de pago de renovación**

💵 Recibo de pago por los derechos de renovación.

🏦 **Banco de Costa Rica (BCR)**
📄 Cuenta #242480-0

📌 El pago debe efectuarse en colones.

⚠️ Si la renovación se realiza en una agencia del Banco de Costa Rica, no debe realizar el pago previamente.

### **4️⃣ Presentar pasaporte vigente**

📘 **Pasaporte vigente y en buen estado.**

### **5️⃣ Demostrar que mantiene la renta que dio origen a la residencia**

Debe presentar:

🏦 **Certificación bancaria** donde se indique que mantiene una renta:

✅ Mensual
✅ Estable
✅ Permanente

### **6️⃣ Requisito adicional cuando los fondos provienen del extranjero**

Si la renta proviene de otro país, deberá aportar además:

🌎📄 **Certificación bancaria que demuestre que los fondos ingresan a Costa Rica mediante transferencias a la Banca Nacional.**

La certificación debe demostrar que dichos ingresos:
- Ingresan regularmente al país.
- Son mensuales.
- Son estables y permanentes.
- Corresponden al monto exigido para mantener la categoría migratoria.

## **⚠️ Consideraciones importantes**

🚫 Si su DIMEX tiene más de tres meses de vencido, deberá iniciar una nueva solicitud de categoría migratoria.

🔒 Si su DIMEX fue robado o extraviado, deberá presentar declaración jurada protocolizada.

🌎 Si permaneció fuera de Costa Rica por más de un año, deberá presentar certificación de antecedentes penales.

✅ Mantenga vigente su afiliación a la CCSS.
✅ Verifique que su pasaporte no se encuentre próximo a vencer.
✅ Solicite con anticipación las certificaciones bancarias necesarias.
✅ Conserve evidencia de las transferencias internacionales si los fondos provienen del exterior.
✅ Procure renovar el DIMEX antes de su fecha de vencimiento.`,
  },

  {
    nombre:
      '👨‍🔧🪪 Renovación DIMEX de Trabajador de Ocupación Específica – Por Cuenta Propia',
    familia: 'dimex',

    queEs: `Este trámite permite renovar el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** de las personas extranjeras que cuentan con una categoría migratoria de **Trabajador de Ocupación Específica por Cuenta Propia**.

Está dirigido a personas que desarrollan actividades económicas independientes en Costa Rica y necesitan mantener vigente su documentación migratoria para continuar ejerciendo sus actividades de forma regular.

✅ **Aplica para:**
- Personas extranjeras con categoría migratoria de Trabajador de Ocupación Específica por Cuenta Propia.
- Personas trabajadoras independientes que mantienen vigente la actividad económica por la cual obtuvieron su condición migratoria.

🚫 **No aplica para:**
- Personas que no poseen esta categoría migratoria.
- Personas trabajadoras dependientes de un empleador.
- Personas sin actividad económica independiente registrada.

📌 **Importante:**
La renovación del DIMEX permite mantener vigente la condición migratoria ya aprobada. No constituye una nueva solicitud de residencia.`,

    pasos: `### **1️⃣ Presentarse a la cita con el DIMEX**

🪪 **DIMEX en buen estado.**

### **2️⃣ Presentar comprobante de aseguramiento ante la CCSS**

🏥 **Comprobante de afiliación a los sistemas de aseguramiento de la CCSS.**

### **3️⃣ Presentar el comprobante de pago de renovación**

💵 Recibo de pago por los derechos de renovación.

🏦 Banco de Costa Rica
📄 Cuenta #242480-0

📌 El pago debe efectuarse en colones.

### **4️⃣ Presentar pasaporte vigente**

📘 **Pasaporte vigente y en buen estado.**

### **5️⃣ Presentar documentación tributaria (si posee un negocio)**

Si desarrolla una actividad económica mediante un negocio propio, deberá presentar:

📑 Comprobante de pago de impuestos

o

📄 Formulario de exoneración presentado ante el Ministerio de Hacienda o la entidad recaudadora correspondiente.

### **6️⃣ Presentar patente e impuestos municipales al día**

Si posee un negocio propio:

🏢 Patente comercial vigente.
🧾 Comprobantes que demuestren que los impuestos municipales se encuentran al día.

### **7️⃣ Presentar permiso sanitario de funcionamiento**

Cuando corresponda:

🏥 **Permiso Sanitario de Funcionamiento vigente.**

### **8️⃣ Presentar constancia laboral en sectores específicos**

Las personas trabajadoras por cuenta propia que desarrollan actividades en:

🌱 Agricultura
🏗️ Construcción
🛠️ Servicios

deberán presentar:

📄 Constancia de trabajo.
🪪 Copia certificada del documento de identidad de la persona que firma dicha constancia.

## **⚠️ Consideraciones importantes**

✅ Mantenga vigente su aseguramiento ante la CCSS.
✅ Verifique que su pasaporte se encuentre vigente.
✅ Si posee un negocio, asegúrese de tener al día sus obligaciones tributarias, municipales y sanitarias.
✅ Consulte previamente el monto exacto de los derechos de renovación.`,
  },

  {
    nombre:
      '👨‍💼🪪 Renovación DIMEX de Trabajador de Ocupación Específica – Persona Física',
    familia: 'dimex',

    queEs: `Este trámite permite renovar el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** de las personas extranjeras que cuentan con una categoría migratoria de **Trabajador de Ocupación Específica con empleador o empleadora específica (Persona Física)**.

Está dirigido a personas que fueron autorizadas para trabajar en Costa Rica bajo una relación laboral específica y necesitan mantener vigente su condición migratoria.

✅ **Aplica para:**
- Personas extranjeras con categoría migratoria de Trabajador de Ocupación Específica para Persona Física.
- Personas que mantienen vigente la relación laboral por la cual obtuvieron su condición migratoria.

🚫 **No aplica para:**
- Personas trabajadoras independientes o por cuenta propia.
- Personas que no poseen esta categoría migratoria.
- Personas sin una relación laboral autorizada bajo esta modalidad.

📌 **Importante:**
La renovación permite mantener vigente la condición migratoria ya aprobada. No corresponde a una nueva solicitud migratoria.`,

    pasos: `### **1️⃣ Presentar carta del empleador o empleadora**

📄 Carta emitida por el empleador o empleadora, donde se indique que se mantienen las condiciones bajo las cuales fue contratada la persona extranjera.

### **2️⃣ Presentar el DIMEX**

🪪 **DIMEX en buen estado.**

### **3️⃣ Presentar pasaporte vigente**

📘 **Pasaporte vigente y en buen estado.**

### **4️⃣ Presentar comprobante de aseguramiento ante la CCSS**

🏥 **Comprobante de afiliación a los sistemas de aseguramiento de la CCSS.**

Generalmente se presenta mediante:
- Orden patronal vigente.
- Otro documento que demuestre la afiliación activa.

### **5️⃣ Presentar comprobante de pago de renovación**

💵 Recibo de pago por los derechos de renovación.

🏦 Banco de Costa Rica
📄 Cuenta #242480-0

📌 El pago debe efectuarse en colones.

## **⚠️ Consideraciones importantes**

⏰ Por cada mes o fracción de mes de atraso en la renovación deberá cancelarse adicionalmente:

💲 El equivalente en colones a **US$3 por cada mes de atraso.**

📄 Si el DIMEX tiene más de tres meses de vencido, deberá presentar carta de justificación explicando las razones del atraso.

✅ Mantenga vigente su afiliación a la CCSS.
✅ Verifique que su pasaporte se encuentre vigente.
✅ Consulte previamente el monto exacto de los derechos de renovación.`,
  },

  {
    nombre: '🎓🪪 Renovación DIMEX de Categoría Especial de Estudiante',
    familia: 'dimex',

    queEs: `Este trámite permite renovar el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** de las personas extranjeras que cuentan con una **Categoría Especial de Estudiante** en Costa Rica.

La renovación permite mantener vigente la condición migratoria otorgada para realizar estudios en el país y demostrar que la persona continúa matriculada en el centro educativo autorizado.

✅ **Aplica para:**
- Personas extranjeras que poseen una Categoría Especial de Estudiante vigente o próxima a vencer.
- Personas que continúan realizando estudios en el mismo centro educativo.

🚫 **No aplica para:**
- Personas que ya no se encuentran estudiando.
- Personas que no poseen una categoría migratoria de estudiante.
- Personas que cambiaron de condición migratoria a otra categoría.

📌 **Importante:**
La renovación permite conservar la categoría migratoria de estudiante. No corresponde a una nueva solicitud migratoria.`,

    pasos: `### **1️⃣ Presentar el DIMEX**

🪪 DIMEX en buen estado.

### **2️⃣ Presentar pasaporte vigente**

📘 Pasaporte vigente y en buen estado.

### **3️⃣ Presentar documentación académica actualizada**

Debe presentar:

🎓 Notas académicas.
📚 Comprobante de matrícula vigente.
📄 Certificación vigente emitida por el centro educativo, donde se indique que continúa estudiando en la misma institución educativa.

### **4️⃣ Presentar comprobante de depósito bancario**

💵 Comprobante de depósito bancario a favor del Estado por la suma de **US$103,00**, donde aparezca el nombre de la persona extranjera como depositante.

🏦 Banco de Costa Rica
📄 Cuenta #242480-0

📌 El depósito debe realizarse en colones según el tipo de cambio correspondiente.

## **⚠️ Consideraciones importantes**

⏰ Por cada mes o fracción de mes de atraso deberá cancelar adicionalmente el equivalente en colones a **US$3 por cada mes de atraso.**

🚫 Si el DIMEX tiene más de tres meses de vencido, deberá iniciar un nuevo trámite de solicitud de categoría migratoria.

✅ Verifique que su pasaporte se encuentre vigente.
✅ Mantenga actualizada su matrícula y documentación académica.
✅ Conserve el comprobante de pago realizado al Banco de Costa Rica.`,
  },

  {
    nombre:
      '🏢👔 Renovación DIMEX de Residencia Temporal como Trabajador de Empresa Registrada y Dependientes',
    familia: 'dimex',

    queEs: `Este trámite permite renovar el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** de las personas extranjeras que cuentan con una **Residencia Temporal como Trabajador de Empresa Registrada**, así como de los dependientes autorizados bajo esta categoría migratoria.

Está dirigido a personas extranjeras que continúan laborando para una empresa registrada ante la Dirección General de Migración y Extranjería y que requieren mantener vigente su condición migratoria en Costa Rica.

✅ **Aplica para:**
- Personas extranjeras con Residencia Temporal como Trabajador de Empresa Registrada.
- Dependientes autorizados vinculados a esta categoría migratoria.
- Personas que continúan laborando para la empresa que respalda su residencia.

🚫 **No aplica para:**
- Personas que no poseen esta categoría migratoria.
- Personas sin vínculo vigente con una empresa registrada.
- Personas que desean solicitar una categoría migratoria diferente.

📌 **Importante:**
Este trámite corresponde únicamente a la renovación de una residencia temporal ya otorgada. No sustituye una solicitud inicial de residencia.`,

    pasos: `### **1️⃣ Presentar solicitud de renovación emitida por la empresa**

Debe presentarse una solicitud dirigida a la Dirección General de Migración y Extranjería, firmada por:

👤 El representante legal de la empresa, o
👤 El apoderado autorizado.

La solicitud debe indicar:
- Las razones por las cuales se requiere renovar la residencia temporal.
- Que la persona extranjera continúa trabajando activamente para la empresa.
- La información correspondiente al grupo familiar dependiente, cuando aplique.
- Un medio para recibir notificaciones.

### **2️⃣ Presentar poder especial (si corresponde)**

📄 Si el trámite no es gestionado directamente por el representante legal de la empresa, deberá aportarse poder especial.

### **3️⃣ Realizar el pago de derechos migratorios**

💵 Debe presentar un comprobante de pago por:

**US$128,00**

🏦 Banco de Costa Rica
📄 Cuenta #242480-0

El pago debe efectuarse en colones utilizando el tipo de cambio oficial del Banco Central de Costa Rica vigente el día del pago.

### **4️⃣ Cancelar multas por atraso (si corresponde)**

⏳ Si la renovación se realiza después del vencimiento:

💲 US$3,00 por cada mes o fracción de mes de atraso.

### **5️⃣ Presentar comprobante de aseguramiento ante la CCSS**

🏥 Comprobante de afiliación vigente a los sistemas de aseguramiento de la CCSS.

### **6️⃣ Presentar documentación del pasaporte**

📘 Debe aportar:
- Original y copia de las páginas del pasaporte, o
- Copias certificadas.

## **⚠️ Consideraciones importantes**

🚫 Si su DIMEX tiene más de tres meses de vencido, deberá iniciar una nueva solicitud de categoría migratoria.

🔒 Si su DIMEX fue robado o extraviado, deberá presentar declaración jurada protocolizada.

🌎 Si permaneció fuera de Costa Rica por más de un año, deberá presentar certificación de antecedentes penales.

✅ Verifique que la empresa mantenga vigente la documentación necesaria.
✅ Mantenga activa su afiliación a la CCSS.
✅ Revise que su pasaporte se encuentre vigente.
✅ Procure renovar el DIMEX antes de su vencimiento.
✅ Conserve copia de todos los comprobantes de pago y documentos presentados.`,
  },

  // ============================================================
  // 🛡️ REFUGIO
  // ============================================================

  {
    nombre: '🛡️🌎 Solicitud de refugio por primera vez',
    familia: 'refugio',

    queEs: `Este trámite permite solicitar **protección internacional en Costa Rica** para aquellas personas que, por temor fundado de persecución o por otras circunstancias contempladas en la legislación nacional e internacional, requieren el reconocimiento de la condición de persona refugiada.

La solicitud inicia el procedimiento de evaluación por parte de la Dirección General de Migración y Extranjería.

✅ **Aplica para:**
- Personas que desean solicitar refugio por primera vez en Costa Rica.
- Personas que requieren protección internacional conforme a la normativa vigente.

🚫 **No aplica para:**
- Personas que ya cuentan con un estatus migratorio regular.
- Personas refugiadas reconocidas.
- Personas que únicamente desean realizar otros trámites migratorios.

📌 **Importante:**
La solicitud debe presentarse dentro del plazo establecido por la Dirección General de Migración y Extranjería. Una vez presentada, la persona adquiere la condición de solicitante de refugio mientras se resuelve su caso.`,

    pasos: `**1️⃣ Presentar la solicitud de refugio**

La solicitud puede presentarse de dos maneras:

🛂 **En un puesto fronterizo habilitado**, al momento de ingresar al territorio nacional.

🏢 **Dentro del país**, en la Unidad de Refugio ubicada en La Uruca, San José, mediante cita previa.

📍 Dirección:
<https://maps.app.goo.gl/vNokEuDKxfSyvh4H6>

☎️ Teléfono: 2252-2410

**2️⃣ Solicitar una cita**

Si la persona ya se encuentra dentro de Costa Rica deberá solicitar una cita antes de presentarse.

Puede hacerlo mediante:

🌐 Sitio web oficial: www.migracion.go.cr
☎️ Call Center de Migración: 1311

⚠️ **Importante:**
La información registrada en Airtable indica que la solicitud de cita debe realizarse dentro de los **30 días naturales posteriores al ingreso al país**.

**3️⃣ Asistir a la cita asignada**

La persona deberá presentarse en la fecha y hora indicadas para formalizar la solicitud de refugio.

**4️⃣ Recibir el documento provisional**

Una vez presentada la solicitud, la Unidad de Refugio emitirá un **documento provisional**, el cual:

🪪 Acredita temporalmente la condición de solicitante de refugio.
📅 Puede tener una vigencia de hasta **dos años**.

**5️⃣ Esperar la resolución del trámite**

La Dirección General de Migración y Extranjería analizará la solicitud y emitirá una resolución.

**6️⃣ Derechos laborales**

Mientras el documento provisional se encuentre vigente, la persona solicitante podrá:

💼 Realizar actividades laborales remuneradas.
👷 Trabajar por cuenta propia o en relación de dependencia, conforme a la legislación laboral y de seguridad social vigente.

**⚠️ Consideraciones importantes**

✅ Solicite la cita lo antes posible.
✅ Conserve el documento provisional en buen estado.
✅ Mantenga actualizados sus datos de contacto ante Migración.`,
  },

  {
    nombre: '🟨🪪 Renovación de carné de solicitante de refugio',
    familia: 'refugio',

    queEs: `Este trámite permite renovar el **carné de solicitante de refugio**, que funciona como documento provisional mientras la solicitud de refugio se encuentra en trámite ante la Dirección General de Migración y Extranjería.

La renovación permite mantener vigente la acreditación temporal de la persona como solicitante de refugio mientras se resuelve su expediente.

✅ **Aplica para:**
- Personas solicitantes de refugio.
- Personas cuyo carné de solicitante de refugio está próximo a vencer.
- Personas que aún no han recibido resolución definitiva sobre su solicitud.

🚫 **No aplica para:**
- Personas refugiadas reconocidas que ya cuentan con DIMEX.
- Personas extranjeras con otra categoría migratoria.
- Personas que no tienen una solicitud de refugio en trámite.

📌 **Importante:**
Este trámite corresponde a la renovación del documento provisional de solicitante de refugio. No corresponde a la renovación de DIMEX ni a una nueva solicitud de refugio.`,

    pasos: `**1️⃣ Solicitar una cita previa**

Para renovar el carné de solicitante de refugio, la persona debe gestionar una cita antes de presentarse.

Puede solicitar la cita por medio de:

☎️ **Call Center de Migración:** 1311

🌐 **Portal de Citas Web:** www.migracion.go.cr

**2️⃣ Presentarse únicamente con cita asignada**

La persona deberá presentarse en la fecha y hora indicadas por Migración.

⚠️ No será atendida ninguna persona usuaria sin una cita previa asignada.

**3️⃣ Gestionar la cita antes del vencimiento**

Se recomienda solicitar la cita con anterioridad a la fecha de vencimiento del carné.

Esto ayuda a evitar atrasos, vencimientos innecesarios o dificultades para acreditar la condición de solicitante de refugio.

**4️⃣ Mantener el carné vigente hasta la cita**

El registro de Airtable indica que el carné se tendrá como vigente hasta el día de la cita asignada para su renovación.

📌 Conserve la constancia o información de la cita como respaldo.

**⚠️ Consideraciones importantes**

✅ Solicite la cita con suficiente anticipación.
✅ Revise periódicamente la fecha de vencimiento de su carné.
✅ Lleve su carné actual el día de la cita.
✅ Conserve cualquier comprobante o confirmación relacionada con la cita asignada.`,
  },

  {
    nombre: '🗣️🛡️ Entrevista de elegibilidad para refugio',
    familia: 'refugio',
    aliases: ['Entrevista de elegibilidad'],

    queEs: `Este trámite corresponde a la entrevista mediante la cual la autoridad migratoria evalúa si una persona solicitante cumple con los criterios para ser reconocida como persona refugiada en Costa Rica.

La entrevista permite que la persona explique con detalle las razones por las cuales salió de su país, por qué no puede regresar y por qué considera que necesita protección internacional.

✅ **Aplica para:**
- Personas solicitantes de refugio.
- Personas que ya iniciaron una solicitud de refugio y fueron citadas a entrevista.
- Personas que deben ampliar información sobre los motivos de su solicitud.

🚫 **No aplica para:**
- Personas ya reconocidas como refugiadas.
- Personas que no tienen una solicitud de refugio en trámite.
- Personas que realizan otros trámites migratorios no relacionados con refugio.

📌 **Importante:**
La entrevista es una etapa clave del procedimiento de refugio. La información brindada será utilizada para valorar la solicitud y comprender las razones que fundamentan la necesidad de protección internacional.`,

    pasos: `**1️⃣ Asistir en la fecha programada**

La entrevista se realizará en la fecha indicada por la autoridad migratoria.

**2️⃣ Explicar los motivos de la solicitud**

Durante la entrevista, la persona solicitante tendrá un espacio para brindar información sobre:

🌎 Las razones por las que salió de su país.
🚫 Las razones por las que no puede o no desea regresar.
🛡️ Los motivos por los cuales considera que necesita protección internacional.

Es importante responder con claridad y aportar la mayor información posible.

**3️⃣ Presentar documentos o pruebas disponibles**

Si la persona cuenta con documentos, pruebas o información relacionada con su solicitud, puede aportarlos durante la entrevista.

📄 Estos documentos pueden ayudar a respaldar los hechos relatados.

**4️⃣ Caso de personas menores de 15 años**

El registro de Airtable indica que las personas menores de **15 años** no realizarán entrevista individual.

En estos casos, se incluirá en el expediente la entrevista realizada a sus representantes legales.

**⚠️ Consideraciones importantes**

✅ Preséntese puntualmente.
✅ Lleve cualquier documento o prueba disponible.
✅ Explique los hechos con el mayor detalle posible.
✅ Si no comprende alguna pregunta, solicite que se le explique nuevamente.
✅ Mantenga actualizados sus datos de contacto.`,
  },

  {
    nombre:
      '🪪✅ Documentación por primera vez: DIMEX para personas refugiadas',
    familia: 'refugio',

    queEs: `Este trámite permite obtener por primera vez el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** después de que la solicitud de refugio haya sido aprobada por la Dirección General de Migración y Extranjería.

El DIMEX constituye el documento oficial de identificación migratoria de las personas refugiadas reconocidas en Costa Rica y acredita su condición migratoria vigente.

✅ **Aplica para:**
- Personas refugiadas reconocidas.
- Personas cuya solicitud de refugio fue aprobada y deben documentarse por primera vez.

🚫 **No aplica para:**
- Personas solicitantes de refugio que aún no han recibido una resolución aprobatoria.
- Personas pertenecientes a otras categorías migratorias.

📌 **Importante:**
Este trámite corresponde únicamente a la **primera emisión del DIMEX** después del reconocimiento de la condición de persona refugiada. No corresponde a una renovación del documento.`,

    pasos: `**1️⃣ Recibir la resolución de aprobación del refugio**

Una vez que la Dirección General de Migración y Extranjería aprueba la solicitud de refugio, la persona deberá iniciar el proceso para obtener su primer DIMEX.

**2️⃣ Solicitar una cita**

La cita debe gestionarse mediante los socios estratégicos de la Dirección General de Migración y Extranjería:

🏦 **Banco de Costa Rica (BCR)**
- Sitio web del BCR.
- Teléfono: **800-227-2482**.

📮 **Correos de Costa Rica / VES**
- Teléfono: **1311**.

**3️⃣ Presentar los requisitos**

La persona deberá presentar los requisitos indicados en la resolución de aprobación del refugio.

De forma general deberá aportar:

📘 Pasaporte vigente y en buen estado.

⚠️ Dependiendo del caso, Migración podrá solicitar documentación adicional indicada en la resolución aprobatoria.

**4️⃣ Realizar el pago correspondiente**

💵 Si la atención se realiza en una sucursal del Banco de Costa Rica o de VES-Correos de Costa Rica, podrá existir un monto adicional que deberá cancelarse conforme a las tarifas vigentes.

**⚠️ Consideraciones importantes**

📄 Revise cuidadosamente la resolución de aprobación.
💰 Pueden aplicarse multas conforme a la normativa cuando corresponda.
✅ Verifique que su pasaporte se encuentre vigente.
✅ Lleve toda la documentación completa.`,
  },

  {
    nombre: '🔄🪪 Renovación de DIMEX para personas refugiadas',
    familia: 'refugio',

    queEs: `Este trámite permite renovar el **Documento de Identidad Migratorio para Extranjeros (DIMEX)** de una persona refugiada reconocida en Costa Rica.

La renovación permite mantener vigente el documento que acredita la condición migratoria de refugio y facilita la identificación de la persona ante instituciones públicas, entidades privadas y servicios del país.

✅ **Aplica para:**
- Personas refugiadas reconocidas que necesitan renovar su DIMEX.
- Personas cuyo DIMEX de refugio está próximo a vencer o requiere actualización.

🚫 **No aplica para:**
- Personas solicitantes de refugio que aún no han sido reconocidas como refugiadas.
- Personas extranjeras pertenecientes a otras categorías migratorias.

📌 **Importante:**
Este trámite corresponde a la renovación de un DIMEX ya emitido para una persona refugiada reconocida. No corresponde a una solicitud de refugio ni a una documentación por primera vez.`,

    pasos: `**1️⃣ Solicitar una cita para la renovación**

Puede gestionar la cita por medio de:

🏦 **Banco de Costa Rica (BCR)**
- Página web del BCR.
- Teléfono: **800-227-2482**.

📮 **Correos de Costa Rica / VES**
- Teléfono: **1311**.

**2️⃣ Presentar el DIMEX vigente o vencido**

🪪 DIMEX o Documento de Identidad Migratorio para Extranjeros.

**3️⃣ Presentar comprobante de aseguramiento ante la CCSS**

Debe aportar:

🏥 Comprobante de aseguramiento o número de asegurado.

El registro de Airtable también contempla la posibilidad de asegurarse siguiendo las indicaciones del formulario de aseguramiento.

**4️⃣ Presentar comprobante de pago**

💵 El registro indica un pago en colones por el equivalente a **$103**.

🏦 Cuenta: **242480-0 del Banco de Costa Rica.**

📌 El comprobante debe estar a nombre de la persona dueña del documento.

**⚠️ Consideraciones importantes**

✅ Verifique que el DIMEX, el comprobante de aseguramiento y el comprobante de pago estén completos y legibles.
✅ Confirme el monto exacto y las condiciones al momento de gestionar la cita.
✅ Procure realizar la renovación antes del vencimiento.`,
  },

  {
    nombre: '👨‍👩‍👧‍👦🛡️ Refugio por extensión familiar',
    familia: 'refugio',
    aliases: ['Refugio por extensión'],

    queEs: `Este trámite permite que determinados familiares de una persona refugiada reconocida en Costa Rica puedan solicitar el reconocimiento de refugio por extensión.

La extensión busca proteger la unidad familiar cuando el vínculo familiar ya existía en el país de origen o en el país de residencia habitual de la persona refugiada.

✅ **Aplica para:**
- Personas refugiadas reconocidas que desean solicitar protección para familiares elegibles.
- Padres, hijos o hermanos de una persona refugiada reconocida.
- Familiares cuyo parentesco con la persona refugiada surgió en el país de origen o residencia habitual.

🚫 **No aplica para:**
- Personas sin vínculo familiar con una persona refugiada reconocida.
- Familiares cuyo parentesco no corresponde a las categorías admitidas.
- Personas que deben iniciar una solicitud de refugio independiente.

📌 **Importante:**
Este trámite no corresponde a una nueva solicitud de refugio individual. Es una solicitud vinculada al reconocimiento previo de una persona refugiada.`,

    pasos: `**1️⃣ Verificar si existe un vínculo familiar aplicable**

Pueden solicitar refugio por extensión:

👨‍👩‍👧‍👦
- Padres.
- Hijos.
- Hermanos.

**2️⃣ Confirmar que el parentesco surgió antes de llegar a Costa Rica**

El parentesco entre la persona refugiada y sus familiares debe haber surgido en el país de origen o en el país de residencia habitual de la persona refugiada.

**3️⃣ Solicitar una cita previa**

Puede hacerlo por medio de:

☎️ **Call Center de Migración:** 1311

🌐 **Sitio web oficial:** www.migracion.go.cr

**4️⃣ Presentarse en la cita asignada**

La persona deberá presentarse en la fecha y hora indicadas por la Dirección General de Migración y Extranjería.

⚠️ No será atendida ninguna persona sin una cita previa asignada.

**⚠️ Consideraciones importantes**

✅ Revise que el vínculo familiar corresponda a las categorías admitidas.
✅ Tenga disponible la documentación que permita demostrar el parentesco.
✅ Solicite la cita antes de presentarse.
✅ Conserve el comprobante de la cita.
✅ Si la persona familiar no califica para refugio por extensión, podría requerir un trámite distinto.`,
  },
];

/*
  Convierte el rich text de Airtable en texto limpio para React Native.
  No altera el contenido sustantivo.
*/
function limpiarRichText(texto: string): string {
  return texto
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)')
    .replace(/<([^>]+)>/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/__/g, '')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/*
  Normalización tolerante:
  - mayúsculas/minúsculas
  - tildes
  - emojis
  - signos
  - pequeñas diferencias como "de" / "para"
*/
function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\b(de|del|la|el|para)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function limpiarTitulo(nombre: string): string {
  return nombre
    .replace(
      /^[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+/,
      ''
    )
    .trim();
}

function emojiPorFamilia(
  familia: FamiliaSubtramite
): string {
  if (familia === 'regularizacion') {
    return '⚖️';
  }

  if (familia === 'dimex') {
    return '🪪';
  }

  return '🛡️';
}

export function obtenerSubtramite(
  nombre: string | undefined
): Subtramite | null {
  if (!nombre) {
    return null;
  }

  const buscado = normalizar(nombre);

  const encontrado = REGISTROS.find((registro) => {
    const candidatos = [
      registro.nombre,
      ...(registro.aliases ?? []),
    ];

    return candidatos.some((candidato) => {
      const normalizado = normalizar(candidato);

      return (
        normalizado === buscado ||
        normalizado.includes(buscado) ||
        buscado.includes(normalizado)
      );
    });
  });

  if (!encontrado) {
    return null;
  }

  return {
    nombre: encontrado.nombre,
    titulo: limpiarTitulo(encontrado.nombre),
    emoji: emojiPorFamilia(encontrado.familia),
    familia: encontrado.familia,
    queEs: limpiarRichText(encontrado.queEs),
    pasos: limpiarRichText(encontrado.pasos),
  };
}