import { router, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { BANCOS } from '@/data/bancos';
import { ORGANIZACIONES } from '@/data/organizaciones';
import { obtenerGuiaCondicion } from '@/data/rutas';
import { SUCURSALES } from '@/data/sucursales';
import { obtenerSubtramite } from '@/data/subtramites';
import { obtenerTramitePrincipal } from '@/data/tramites';

const INFORMACION_ASEGURAMIENTO = [
  'Nombre, nacionalidad e identificación.',
  'Tipo de aseguramiento que solicita.',
  'Provincia, cantón, distrito y dirección exacta de residencia.',
  'Teléfonos de contacto.',
  'Información sobre empleo, empresa, Hacienda y posibles actividades generadoras de ingreso.',
  'Forma en que pagará las cuotas del seguro.',
  'Dependencia económica y situación personal.',
  'Ingreso familiar y gastos.',
  'Medio o lugar para recibir notificaciones.',
  'Firma de la persona solicitante.',
];

function primerTelefono(texto: string | undefined) {
  if (!texto) return null;
  const match = texto.match(/\d{4}-\d{4}/);
  return match ? match[0] : null;
}

function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

export default function GuiaScreen() {
  const {
    provincia,
    condicion,
    sucursal,
    cuenta,
    banco,
    marcados,
  } = useLocalSearchParams<{
    provincia?: string;
    condicion?: string;
    sucursal?: string;
    cuenta?: string;
    banco?: string;
    marcados?: string;
  }>();

  const guia = useMemo(() => obtenerGuiaCondicion(condicion), [condicion]);

  const sucursalElegida = useMemo(
    () =>
      SUCURSALES.find(
        (item) =>
          item.nombre === sucursal &&
          (!provincia || item.provincia === provincia)
      ) ?? SUCURSALES.find((item) => item.nombre === sucursal),
    [provincia, sucursal]
  );

  const bancoSeleccionado = useMemo(
    () =>
      banco && banco !== 'No seleccionado'
        ? BANCOS.find((item) => item.nombre === banco) ?? null
        : null,
    [banco]
  );

  const checklistMarcado = useMemo(() => {
    if (!marcados) return [] as string[];
    try {
      const parsed = JSON.parse(marcados);
      return Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === 'string')
        : [];
    } catch {
      return [];
    }
  }, [marcados]);

  const [procesosAbiertos, setProcesosAbiertos] = useState<string[]>([]);

  const toggleProceso = (nombre: string) => {
    setProcesosAbiertos((actuales) =>
      actuales.includes(nombre)
        ? actuales.filter((item) => item !== nombre)
        : [...actuales, nombre]
    );
  };

  const llamarSucursal = async () => {
    const telefono = primerTelefono(sucursalElegida?.telefono);
    if (!telefono) return;
    await Linking.openURL(`tel:${telefono.replace(/-/g, '')}`);
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Volver al checklist</Text>
      </Pressable>

      <Text style={styles.brand}>RUTA SALUD MIGRANTE CR</Text>

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>GUÍA FINAL DE SU CONSULTA</Text>
        <Text style={styles.title}>💙 Su guía personalizada</Text>
        <Text style={styles.description}>
          Aquí se reúne la información de las decisiones tomadas durante su
          consulta. Puede repasar su ruta completa sin tener que regresar por
          cada pantalla anterior.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionNumber}>1</Text>
        <Text style={styles.sectionTitle}>Su perfil y ruta identificada</Text>

        <Text style={styles.label}>📍 PROVINCIA</Text>
        <Text style={styles.value}>{provincia ?? 'No disponible'}</Text>

        <Text style={styles.label}>🪪 CONDICIÓN MIGRATORIA</Text>
        <Text style={styles.value}>{condicion ?? 'No disponible'}</Text>

        {guia && (
          <>
            <Text style={styles.label}>🧭 RUTA</Text>
            <Text style={styles.value}>
              {guia.emoji} {guia.titulo}
            </Text>
            <Text style={styles.body}>{guia.descripcion}</Text>

            <Text style={styles.subheading}>Esta ruta aplica si:</Text>
            {guia.aplicaSi.map((item) => (
              <Bullet key={item} text={item} />
            ))}

            <Text style={styles.subheading}>Revise otra opción si:</Text>
            {guia.noAplicaSi.map((item) => (
              <Bullet key={item} text={item} />
            ))}
          </>
        )}
      </View>

      {guia && (
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>2</Text>
          <Text style={styles.sectionTitle}>Trámites principales de su ruta</Text>
          <Text style={styles.body}>
            Estos son los trámites principales asociados con la condición que
            indicó durante la consulta.
          </Text>

          {guia.tramites.map((nombre) => {
            const tramite = obtenerTramitePrincipal(nombre);

            return (
              <View key={nombre} style={styles.infoCard}>
                <Text style={styles.infoCardTitle}>
                  {tramite ? `${tramite.emoji} ${tramite.titulo}` : nombre}
                </Text>
                {tramite && (
                  <>
                    <Text style={styles.body}>{tramite.descripcion}</Text>
                    <Text style={styles.miniHeading}>Puntos importantes</Text>
                    {tramite.importante.map((item) => (
                      <Bullet key={item} text={item} />
                    ))}
                  </>
                )}
              </View>
            );
          })}
        </View>
      )}

      {guia && (
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>3</Text>
          <Text style={styles.sectionTitle}>Procesos aplicables</Text>
          <Text style={styles.body}>
            Estos son los procesos asociados con su perfil. Toque cada uno para
            desplegar en esta misma guía qué es y cuáles son sus pasos.
          </Text>

          <View style={styles.processList}>
            {guia.subtramites.map((nombre) => {
              const informacion = obtenerSubtramite(nombre);
              const abierto = procesosAbiertos.includes(nombre);

              return (
                <View key={nombre} style={styles.processCard}>
                  <Pressable
                    onPress={() => toggleProceso(nombre)}
                    style={styles.processHeader}
                  >
                    <Text style={styles.processName}>
                      {informacion
                        ? `${informacion.emoji} ${informacion.titulo}`
                        : nombre}
                    </Text>
                    <Text style={styles.processToggle}>{abierto ? '−' : '+'}</Text>
                  </Pressable>

                  {abierto && (
                    <View style={styles.processDetails}>
                      {informacion ? (
                        <>
                          <Text style={styles.miniHeading}>¿Qué es?</Text>
                          <Text style={styles.processText}>{informacion.queEs}</Text>
                          <Text style={styles.miniHeading}>Pasos</Text>
                          <Text style={styles.processText}>{informacion.pasos}</Text>
                        </>
                      ) : (
                        <Text style={styles.processText}>
                          La información detallada de este proceso todavía no
                          está disponible en esta versión.
                        </Text>
                      )}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionNumber}>4</Text>
        <Text style={styles.sectionTitle}>Sucursal CCSS elegida</Text>

        {sucursalElegida ? (
          <>
            <Text style={styles.branchName}>🏥 {sucursalElegida.nombre}</Text>
            <Text style={styles.body}>🗺️ Región: {sucursalElegida.region}</Text>
            <Text style={styles.body}>{sucursalElegida.horario}</Text>
            <Text style={styles.body}>{sucursalElegida.telefono}</Text>
            <Text style={styles.body}>{sucursalElegida.contacto}</Text>

            <View style={styles.actions}>
              <Pressable onPress={llamarSucursal} style={styles.actionButton}>
                <Text style={styles.actionText}>📞 Llamar</Text>
              </Pressable>
              <Pressable
                onPress={() => Linking.openURL(sucursalElegida.mapa.trim())}
                style={styles.actionButton}
              >
                <Text style={styles.actionText}>📍 Ver mapa</Text>
              </Pressable>
            </View>
          </>
        ) : (
          <Text style={styles.body}>
            Sucursal seleccionada: {sucursal ?? 'No disponible'}
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionNumber}>5</Text>
        <Text style={styles.sectionTitle}>Solicitud de aseguramiento</Text>
        <Text style={styles.body}>
          El formulario de Solicitud de Aseguramiento Voluntario / Migrante se
          encuentra incorporado en el paso anterior de la aplicación. Para
          preparar la gestión, revise la información que normalmente deberá
          completar:
        </Text>

        {INFORMACION_ASEGURAMIENTO.map((item) => (
          <Bullet key={item} text={item} />
        ))}

        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>⚠️ Verifique su caso</Text>
          <Text style={styles.noticeText}>
            La CCSS puede corroborar la información suministrada y los
            requisitos pueden variar según la situación particular. Esta guía
            organiza la información, pero no sustituye la verificación oficial.
          </Text>
        </View>

        <Pressable
          onPress={() => Linking.openURL('https://www.ccss.sa.cr/tramites')}
          style={styles.officialButton}
        >
          <Text style={styles.officialButtonText}>
            🏛️ Consultar sitio oficial de la CCSS ↗
          </Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionNumber}>6</Text>
        <Text style={styles.sectionTitle}>Cuenta bancaria</Text>

        <Text style={styles.label}>DECISIÓN REGISTRADA</Text>
        <Text style={styles.value}>
          {cuenta === 'si'
            ? '✅ Ya cuenta con un estado de cuenta bancario.'
            : '🏦 Indicó que necesita gestionar o abrir una cuenta.'}
        </Text>

        {cuenta !== 'si' && bancoSeleccionado && (
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>{bancoSeleccionado.nombre}</Text>

            <Text style={styles.miniHeading}>Modalidad</Text>
            <Text style={styles.body}>{bancoSeleccionado.modalidad}</Text>

            <Text style={styles.miniHeading}>Requisitos principales</Text>
            <Text style={styles.body}>{bancoSeleccionado.requisitos}</Text>

            <Text style={styles.miniHeading}>Pasos</Text>
            <Text style={styles.body}>{bancoSeleccionado.pasos}</Text>

            <Text style={styles.miniHeading}>Personas extranjeras</Text>
            <Text style={styles.body}>{bancoSeleccionado.extranjeros}</Text>

            <Text style={styles.miniHeading}>Observaciones</Text>
            <Text style={styles.body}>{bancoSeleccionado.observaciones}</Text>

            <View style={styles.actions}>
              <Pressable
                onPress={() => Linking.openURL(bancoSeleccionado.abrirCuenta)}
                style={styles.actionButton}
              >
                <Text style={styles.actionText}>Abrir / iniciar ↗</Text>
              </Pressable>
              <Pressable
                onPress={() => Linking.openURL(bancoSeleccionado.informacion)}
                style={styles.actionButton}
              >
                <Text style={styles.actionText}>Información ↗</Text>
              </Pressable>
            </View>

            <View style={styles.actions}>
              <Pressable
                onPress={() =>
                  Linking.openURL(
                    `tel:${bancoSeleccionado.telefono.replace(/-/g, '')}`
                  )
                }
                style={styles.actionButton}
              >
                <Text style={styles.actionText}>
                  📞 {bancoSeleccionado.telefono}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => Linking.openURL(bancoSeleccionado.whatsapp)}
                style={styles.actionButton}
              >
                <Text style={styles.actionText}>💬 WhatsApp</Text>
              </Pressable>
            </View>
          </View>
        )}

        {cuenta !== 'si' && !bancoSeleccionado && (
          <Text style={styles.body}>
            No seleccionó una opción bancaria específica durante esta consulta.
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionNumber}>7</Text>
        <Text style={styles.sectionTitle}>Organizaciones de apoyo</Text>
        <Text style={styles.body}>
          Estas organizaciones permanecen disponibles como apoyo adicional. Su
          consulta es opcional y no sustituye las gestiones ante las
          instituciones responsables.
        </Text>

        {ORGANIZACIONES.map((org) => (
          <View key={org.nombre} style={styles.orgCard}>
            <Text style={styles.orgName}>{org.nombre}</Text>
            <Text style={styles.body}>{org.ayuda}</Text>
            <Text style={styles.meta}>🕒 {org.horario}</Text>
            <Text style={styles.meta}>📍 {org.ubicacion}</Text>
            <Text style={styles.meta}>📞 {org.telefono}</Text>
            <Text style={styles.meta}>📧 {org.correo}</Text>

            <View style={styles.actions}>
              <Pressable
                onPress={() =>
                  Linking.openURL(`tel:${org.telefono.replace(/-/g, '')}`)
                }
                style={styles.actionButton}
              >
                <Text style={styles.actionText}>📞 Llamar</Text>
              </Pressable>
              <Pressable
                onPress={() => Linking.openURL(org.whatsapp)}
                style={styles.actionButton}
              >
                <Text style={styles.actionText}>💬 WhatsApp</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionNumber}>8</Text>
        <Text style={styles.sectionTitle}>Estado de su checklist</Text>
        <Text style={styles.body}>
          {checklistMarcado.length} de 5 elementos fueron marcados como listos
          al abrir esta guía.
        </Text>

        {checklistMarcado.length > 0 ? (
          checklistMarcado.map((item) => (
            <View key={item} style={styles.readyRow}>
              <Text style={styles.readyCheck}>✓</Text>
              <Text style={styles.readyText}>{item}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.body}>
            Todavía no había elementos marcados en el checklist.
          </Text>
        )}
      </View>

      <View style={styles.finalCard}>
        <Text style={styles.finalTitle}>Su consulta quedó reunida aquí</Text>
        <Text style={styles.finalText}>
          Puede volver al checklist para actualizar sus documentos preparados o
          iniciar una nueva consulta si cambia su provincia, condición
          migratoria, sucursal o decisión bancaria.
        </Text>
      </View>

      <Pressable onPress={() => router.back()} style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>← Volver al checklist</Text>
      </Pressable>

      <Pressable
        onPress={() => router.replace('/(tabs)')}
        style={styles.restartButton}
      >
        <Text style={styles.restartText}>↻ Iniciar una nueva consulta</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F9FC' },
  content: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 50 },

  backButton: { alignSelf: 'flex-start', marginBottom: 18 },
  backText: { fontSize: 16, fontWeight: '800', color: '#1677A8' },
  brand: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: '#1677A8',
    marginBottom: 20,
  },

  hero: {
    backgroundColor: '#172033',
    borderRadius: 24,
    padding: 22,
    marginBottom: 16,
  },
  eyebrow: {
    color: '#8FD3EE',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.1,
    marginBottom: 7,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    lineHeight: 35,
    fontWeight: '900',
    marginBottom: 10,
  },
  description: { color: '#D9E2EE', fontSize: 14, lineHeight: 22 },

  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 19,
    borderWidth: 1,
    borderColor: '#E1E9EF',
    marginBottom: 14,
  },
  sectionNumber: {
    width: 30,
    height: 30,
    lineHeight: 30,
    textAlign: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#DDF3FC',
    color: '#1677A8',
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 9,
  },
  sectionTitle: {
    fontSize: 21,
    lineHeight: 27,
    fontWeight: '900',
    color: '#172033',
    marginBottom: 13,
  },
  label: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '900',
    letterSpacing: 0.8,
    color: '#718096',
    marginTop: 10,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '900',
    color: '#12658D',
    marginBottom: 7,
  },
  body: { fontSize: 14, lineHeight: 22, color: '#586579', marginBottom: 8 },
  subheading: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '900',
    color: '#334155',
    marginTop: 10,
    marginBottom: 5,
  },
  miniHeading: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '900',
    letterSpacing: 0.6,
    color: '#59697D',
    textTransform: 'uppercase',
    marginTop: 10,
    marginBottom: 5,
  },

  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 4,
    marginBottom: 5,
  },
  bullet: {
    width: 18,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '900',
    color: '#1677A8',
  },
  bulletText: { flex: 1, fontSize: 13, lineHeight: 20, color: '#586579' },

  infoCard: {
    backgroundColor: '#F6FAFC',
    borderRadius: 16,
    padding: 15,
    marginTop: 10,
  },
  infoCardTitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '900',
    color: '#273449',
    marginBottom: 7,
  },

  processList: { marginTop: 8, gap: 8 },
  processCard: {
    borderWidth: 1,
    borderColor: '#DDE7ED',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#FAFCFD',
  },
  processHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  processName: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '800',
    color: '#334155',
    paddingRight: 10,
  },
  processToggle: {
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '700',
    color: '#1677A8',
  },
  processDetails: {
    borderTopWidth: 1,
    borderTopColor: '#E2EAF0',
    paddingHorizontal: 14,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  processText: { fontSize: 12.5, lineHeight: 20, color: '#556274' },

  branchName: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '900',
    color: '#12658D',
    marginBottom: 8,
  },
  actions: { flexDirection: 'row', gap: 8, marginTop: 10 },
  actionButton: {
    flex: 1,
    minHeight: 43,
    backgroundColor: '#F0F8FC',
    borderWidth: 1,
    borderColor: '#C9DFE9',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
    paddingVertical: 9,
  },
  actionText: {
    textAlign: 'center',
    fontSize: 11.5,
    lineHeight: 16,
    fontWeight: '800',
    color: '#1677A8',
  },

  notice: {
    backgroundColor: '#FFF8E7',
    borderRadius: 14,
    padding: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  noticeTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#70591A',
    marginBottom: 5,
  },
  noticeText: { fontSize: 12.5, lineHeight: 19, color: '#655B41' },
  officialButton: {
    backgroundColor: '#172033',
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: 3,
  },
  officialButtonText: { color: '#FFFFFF', fontSize: 12.5, fontWeight: '800' },

  orgCard: {
    backgroundColor: '#F8FBFC',
    borderRadius: 16,
    padding: 14,
    marginTop: 10,
  },
  orgName: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '900',
    color: '#273449',
    marginBottom: 7,
  },
  meta: { fontSize: 12.5, lineHeight: 19, color: '#617084', marginBottom: 3 },

  readyRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EAF8F0',
    borderRadius: 11,
    padding: 10,
    marginBottom: 7,
  },
  readyCheck: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '900',
    color: '#2E7D50',
    marginRight: 8,
  },
  readyText: { flex: 1, fontSize: 12.5, lineHeight: 19, color: '#2E6848' },

  finalCard: {
    backgroundColor: '#E7F6FC',
    borderRadius: 18,
    padding: 17,
    marginBottom: 16,
  },
  finalTitle: {
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '900',
    color: '#12658D',
    marginBottom: 6,
  },
  finalText: { fontSize: 13, lineHeight: 20, color: '#4D6778' },

  secondaryButton: {
    borderWidth: 1.5,
    borderColor: '#C5D5DE',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButtonText: { fontSize: 14, fontWeight: '800', color: '#566477' },
  restartButton: {
    backgroundColor: '#1677A8',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  restartText: { fontSize: 14, fontWeight: '800', color: '#FFFFFF' },
});
