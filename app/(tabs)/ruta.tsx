import { router, useLocalSearchParams } from 'expo-router';
import {
    Linking,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {
    CondicionMigratoria,
    obtenerGuiaCondicion,
} from '@/data/rutas';

export default function RutaScreen() {
  const { provincia, condicion } = useLocalSearchParams<{
    provincia?: string;
    condicion?: string;
  }>();

  const guia = obtenerGuiaCondicion(condicion);

  if (!guia) {
    return (
      <View style={styles.errorScreen}>
        <Text style={styles.errorEmoji}>⚠️</Text>

        <Text style={styles.errorTitle}>
          No pudimos construir su ruta
        </Text>

        <Text style={styles.errorText}>
          Regrese al inicio y seleccione nuevamente su provincia y condición
          migratoria.
        </Text>

        <Pressable
          onPress={() => router.replace('/(tabs)')}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>
            Volver al inicio
          </Text>
        </Pressable>
      </View>
    );
  }

  const condicionTipada = condicion as CondicionMigratoria;

  const necesitaRegularizacion =
    condicionTipada !== 'Migrante regular permanente';

  const abrirTramite = (tramite: string) => {
    router.push({
      pathname: '/(tabs)/tramite',
      params: {
        tramite,
      },
    });
  };

  const abrirSubtramite = (subtramite: string) => {
    router.push({
      pathname: '/(tabs)/subtramite',
      params: {
        subtramite,
        provincia,
        condicion,
      },
    });
  };

  const seleccionarSucursal = () => {
    router.push({
      pathname: '/(tabs)/sucursal',
      params: {
        provincia,
        condicion,
      },
    });
  };

  const abrirMigracion = () => {
    Linking.openURL('https://www.migracion.go.cr/');
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        onPress={() => router.back()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>← Volver</Text>
      </Pressable>

      <View style={styles.hero}>
        <Text style={styles.brand}>
          RUTA SALUD MIGRANTE CR
        </Text>

        <Text style={styles.title}>
          Esta es su ruta de orientación
        </Text>

        <Text style={styles.description}>
          La guía se ha organizado según la provincia y la condición
          migratoria que seleccionó.
        </Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.profileBlock}>
          <Text style={styles.profileLabel}>
            📍 PROVINCIA
          </Text>

          <Text style={styles.profileValue}>
            {provincia ?? 'No disponible'}
          </Text>
        </View>

        <View style={styles.profileDivider} />

        <View style={styles.profileBlock}>
          <Text style={styles.profileLabel}>
            {guia.emoji} CONDICIÓN MIGRATORIA
          </Text>

          <Text style={styles.profileValue}>
            {condicion}
          </Text>
        </View>
      </View>

      <View style={styles.routeIntro}>
        <Text style={styles.routeEyebrow}>
          SU RECORRIDO
        </Text>

        <Text style={styles.routeTitle}>
          Avance paso a paso
        </Text>

        <Text style={styles.routeDescription}>
          No todas las personas necesitan realizar exactamente los mismos
          trámites. Esta ruta le muestra la información relacionada con el
          perfil que seleccionó.
        </Text>
      </View>

      {/* PASO 1 */}

      <View style={styles.stepCard}>
        <View style={styles.stepHeader}>
          <View style={styles.stepCircle}>
            <Text style={styles.stepNumber}>1</Text>
          </View>

          <View style={styles.stepHeaderText}>
            <Text style={styles.stepEyebrow}>
              PRIMER PASO
            </Text>

            <Text style={styles.stepTitle}>
              {guia.emoji} Conozca su condición migratoria
            </Text>
          </View>
        </View>

        <Text style={styles.stepDescription}>
          Antes de continuar, confirme que la condición seleccionada describe
          correctamente su situación actual.
        </Text>

        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>
            {guia.titulo}
          </Text>

          <Text style={styles.informationText}>
            {guia.descripcion}
          </Text>
        </View>

        <View style={styles.criteriaBox}>
          <Text style={styles.criteriaTitlePositive}>
            ✅ Esta opción es para usted si:
          </Text>

          {guia.aplicaSi.map((item) => (
            <View key={item} style={styles.listRow}>
              <Text style={styles.bulletPositive}>•</Text>

              <Text style={styles.listText}>
                {item}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.criteriaBox}>
          <Text style={styles.criteriaTitleNegative}>
            ❌ Esta opción no es para usted si:
          </Text>

          {guia.noAplicaSi.map((item) => (
            <View key={item} style={styles.listRow}>
              <Text style={styles.bulletNegative}>•</Text>

              <Text style={styles.listText}>
                {item}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.officialNotice}>
          <Text style={styles.officialNoticeTitle}>
            🏛️ Información oficial
          </Text>

          <Text style={styles.officialNoticeText}>
            Para decisiones sobre su condición migratoria, utilice siempre la
            información oficial de la Dirección General de Migración y
            Extranjería.
          </Text>

          <Pressable
            onPress={abrirMigracion}
            style={({ pressed }) => [
              styles.officialButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.officialButtonText}>
              Sitio oficial de Migración ↗
            </Text>
          </Pressable>
        </View>
      </View>

      {/* PASO 2 */}

      <View style={styles.stepCard}>
        <View style={styles.stepHeader}>
          <View style={styles.stepCircle}>
            <Text style={styles.stepNumber}>2</Text>
          </View>

          <View style={styles.stepHeaderText}>
            <Text style={styles.stepEyebrow}>
              SEGUNDO PASO
            </Text>

            <Text style={styles.stepTitle}>
              🪪 Prepare su situación migratoria y documentación
            </Text>
          </View>
        </View>

        <Text style={styles.stepDescription}>
          {necesitaRegularizacion
            ? 'Antes de presentar una solicitud de aseguramiento, revise los trámites migratorios y de documentación que pueden corresponder a su situación.'
            : 'Su situación migratoria ya se encuentra regularizada. Revise que su documentación se encuentre vigente antes de continuar con el aseguramiento.'}
        </Text>

        <Text style={styles.subsectionLabel}>
          📄 TRÁMITES RELACIONADOS CON SU PERFIL
        </Text>

        <View style={styles.tagsContainer}>
          {guia.tramites.map((tramite) => (
            <Pressable
              key={tramite}
              onPress={() => abrirTramite(tramite)}
              style={({ pressed }) => [
                styles.tag,
                pressed && styles.tagPressed,
              ]}
            >
              <View style={styles.interactiveRow}>
                <Text style={styles.tagText}>
                  {tramite}
                </Text>

                <Text style={styles.tagArrow}>
                  →
                </Text>
              </View>

              <Text style={styles.tapHelper}>
                Toque para conocer este trámite
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.subtramitCard}>
          <Text style={styles.subtramitTitle}>
            🧭 Opciones de trámite que pueden corresponder
          </Text>

          <Text style={styles.subtramitHelper}>
            Seleccione una opción para consultar qué es el trámite y los pasos
            correspondientes. No significa necesariamente que deba realizar
            todos.
          </Text>

          {guia.subtramites.map((item, index) => (
            <Pressable
              key={`${item}-${index}`}
              onPress={() => abrirSubtramite(item)}
              style={({ pressed }) => [
                styles.subtramitRow,
                index === guia.subtramites.length - 1 &&
                  styles.subtramitRowLast,
                pressed && styles.subtramitPressed,
              ]}
            >
              <View style={styles.subtramitNumber}>
                <Text style={styles.subtramitNumberText}>
                  {index + 1}
                </Text>
              </View>

              <Text style={styles.subtramitText}>
                {item}
              </Text>

              <Text style={styles.subtramitArrow}>
                ›
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.tipBox}>
          <Text style={styles.tipTitle}>
            💡 ¿Por qué hacemos esto primero?
          </Text>

          <Text style={styles.tipText}>
            La solicitud de aseguramiento requiere documentación que permita
            identificar y acreditar la situación de la persona. Por eso esta
            guía coloca primero la revisión migratoria y documental antes de
            seleccionar la sucursal de la CCSS.
          </Text>
        </View>
      </View>

      {/* PASO 3 */}

      <View style={styles.nextStepCard}>
        <View style={styles.nextStepHeader}>
          <View style={styles.nextStepCircle}>
            <Text style={styles.nextStepNumber}>
              3
            </Text>
          </View>

          <View style={styles.nextStepContent}>
            <Text style={styles.nextStepEyebrow}>
              SIGUIENTE PASO
            </Text>

            <Text style={styles.nextStepTitle}>
              🏥 Elija la sucursal de la CCSS
            </Text>
          </View>
        </View>

        <Text style={styles.nextStepDescription}>
          Ahora podrá revisar únicamente las sucursales disponibles en
          {provincia ? ` ${provincia}` : ' su provincia'}, consultar sus datos
          y elegir dónde desea presentar posteriormente su solicitud.
        </Text>

        <Pressable
          onPress={seleccionarSucursal}
          style={({ pressed }) => [
            styles.pendingButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.pendingButtonText}>
            Seleccionar sucursal →
          </Text>
        </Pressable>
      </View>

      <View style={styles.futureSteps}>
        <Text style={styles.futureTitle}>
          Después de elegir la sucursal
        </Text>

        <View style={styles.futureRow}>
          <Text style={styles.futureEmoji}>4️⃣</Text>

          <View style={styles.futureContent}>
            <Text style={styles.futureStepTitle}>
              Prepare la solicitud de aseguramiento
            </Text>

            <Text style={styles.futureStepText}>
              Formulario, documentos y requisitos para presentar la solicitud
              ante la CCSS.
            </Text>
          </View>
        </View>

        <View style={styles.futureRow}>
          <Text style={styles.futureEmoji}>🏦</Text>

          <View style={styles.futureContent}>
            <Text style={styles.futureStepTitle}>
              Cuenta bancaria, cuando sea necesaria
            </Text>

            <Text style={styles.futureStepText}>
              Podrá indicar que ya cuenta con una o consultar las opciones
              bancarias disponibles.
            </Text>
          </View>
        </View>

        <View style={styles.futureRow}>
          <Text style={styles.futureEmoji}>🤝</Text>

          <View style={styles.futureContent}>
            <Text style={styles.futureStepTitle}>
              Organizaciones de apoyo
            </Text>

            <Text style={styles.futureStepText}>
              Información de contacto y acompañamiento para personas que
              necesiten orientación adicional.
            </Text>
          </View>
        </View>

        <View style={styles.futureRow}>
          <Text style={styles.futureEmoji}>✅</Text>

          <View style={styles.futureContent}>
            <Text style={styles.futureStepTitle}>
              Checklist y guía personalizada final
            </Text>

            <Text style={styles.futureStepText}>
              Al final reuniremos sus decisiones y documentos en una sola guía
              personalizada.
            </Text>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => router.replace('/(tabs)')}
        style={({ pressed }) => [
          styles.restartButton,
          pressed && styles.restartPressed,
        ]}
      >
        <Text style={styles.restartButtonText}>
          ↻ Iniciar una nueva consulta
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F9FC',
  },

  content: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  errorScreen: {
    flex: 1,
    backgroundColor: '#F5F9FC',
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  errorEmoji: {
    fontSize: 48,
    marginBottom: 18,
  },

  errorTitle: {
    fontSize: 25,
    lineHeight: 31,
    fontWeight: '800',
    textAlign: 'center',
    color: '#172033',
    marginBottom: 12,
  },

  errorText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: '#667085',
    marginBottom: 24,
  },

  primaryButton: {
    backgroundColor: '#1677A8',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 24,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 24,
  },

  backText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1677A8',
  },

  hero: {
    marginBottom: 24,
  },

  brand: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: '#1677A8',
    marginBottom: 12,
  },

  title: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '800',
    color: '#172033',
    marginBottom: 14,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5A6578',
  },

  profileCard: {
    backgroundColor: '#E7F6FC',
    borderRadius: 22,
    padding: 18,
    marginBottom: 32,
  },

  profileBlock: {
    paddingVertical: 4,
  },

  profileLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#5E7D8D',
    marginBottom: 6,
  },

  profileValue: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '800',
    color: '#12658D',
  },

  profileDivider: {
    height: 1,
    backgroundColor: '#C8E6F2',
    marginVertical: 14,
  },

  routeIntro: {
    marginBottom: 20,
  },

  routeEyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: '#7A8798',
    marginBottom: 6,
  },

  routeTitle: {
    fontSize: 25,
    lineHeight: 31,
    fontWeight: '800',
    color: '#172033',
    marginBottom: 8,
  },

  routeDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#687487',
  },

  stepCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#E4EBF0',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },

  stepHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },

  stepCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DDF3FC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  stepNumber: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1677A8',
  },

  stepHeaderText: {
    flex: 1,
  },

  stepEyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#7A8798',
    marginBottom: 4,
  },

  stepTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '800',
    color: '#172033',
  },

  stepDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#687487',
    marginBottom: 18,
  },

  informationBox: {
    backgroundColor: '#F4FAFD',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },

  informationTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '800',
    color: '#12658D',
    marginBottom: 9,
  },

  informationText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#536174',
  },

  criteriaBox: {
    marginBottom: 17,
  },

  criteriaTitlePositive: {
    fontSize: 15,
    fontWeight: '800',
    color: '#286A46',
    marginBottom: 10,
  },

  criteriaTitleNegative: {
    fontSize: 15,
    fontWeight: '800',
    color: '#9E4343',
    marginBottom: 10,
  },

  listRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 7,
  },

  bulletPositive: {
    color: '#2E7D50',
    fontSize: 18,
    lineHeight: 20,
    marginRight: 8,
  },

  bulletNegative: {
    color: '#A84B4B',
    fontSize: 18,
    lineHeight: 20,
    marginRight: 8,
  },

  listText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    color: '#536174',
  },

  officialNotice: {
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E4EBF0',
  },

  officialNoticeTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#273449',
    marginBottom: 7,
  },

  officialNoticeText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#667085',
    marginBottom: 13,
  },

  officialButton: {
    backgroundColor: '#172033',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },

  officialButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

  buttonPressed: {
    opacity: 0.72,
  },

  subsectionLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#718096',
    marginBottom: 11,
  },

  tagsContainer: {
    gap: 9,
    marginBottom: 20,
  },

  tag: {
    backgroundColor: '#EAF7FC',
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 13,
  },

  tagPressed: {
    backgroundColor: '#D5EFF9',
  },

  interactiveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  tagText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '800',
    color: '#12658D',
  },

  tagArrow: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1677A8',
    marginLeft: 10,
  },

  tapHelper: {
    fontSize: 11,
    color: '#648496',
    marginTop: 4,
  },

  subtramitCard: {
    borderWidth: 1,
    borderColor: '#E3EAF0',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 17,
  },

  subtramitTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#273449',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 7,
  },

  subtramitHelper: {
    fontSize: 13,
    lineHeight: 19,
    color: '#6C7788',
    paddingHorizontal: 15,
    paddingBottom: 13,
  },

  subtramitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEF2F5',
  },

  subtramitRowLast: {
    paddingBottom: 14,
  },

  subtramitPressed: {
    backgroundColor: '#F1F8FB',
  },

  subtramitNumber: {
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#EFF7FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  subtramitNumberText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1677A8',
  },

  subtramitText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
    color: '#4E5D70',
  },

  subtramitArrow: {
    fontSize: 23,
    color: '#1677A8',
    marginLeft: 8,
  },

  tipBox: {
    backgroundColor: '#FFF9E9',
    borderRadius: 15,
    padding: 15,
  },

  tipTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#70591A',
    marginBottom: 7,
  },

  tipText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#6B6042',
  },

  nextStepCard: {
    backgroundColor: '#1677A8',
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,
  },

  nextStepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  nextStepCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  nextStepNumber: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1677A8',
  },

  nextStepContent: {
    flex: 1,
  },

  nextStepEyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#C9E9F6',
    marginBottom: 4,
  },

  nextStepTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  nextStepDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: '#E2F2F8',
    marginBottom: 17,
  },

  pendingButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },

  pendingButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1677A8',
  },

  futureSteps: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E4EBF0',
  },

  futureTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#172033',
    marginBottom: 16,
  },

  futureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
  },

  futureEmoji: {
    fontSize: 22,
    marginRight: 12,
  },

  futureContent: {
    flex: 1,
  },

  futureStepTitle: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '800',
    color: '#344054',
    marginBottom: 4,
  },

  futureStepText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#6C7788',
  },

  restartButton: {
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: '#1677A8',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },

  restartPressed: {
    backgroundColor: '#EAF7FC',
  },

  restartButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1677A8',
  },
});