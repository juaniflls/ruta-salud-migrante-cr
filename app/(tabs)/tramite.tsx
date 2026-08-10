import { router, useLocalSearchParams } from 'expo-router';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { obtenerTramitePrincipal } from '@/data/tramites';

export default function TramiteScreen() {
  const { tramite } = useLocalSearchParams<{
    tramite?: string;
  }>();

  const informacion = obtenerTramitePrincipal(tramite);

  if (!informacion) {
    return (
      <View style={styles.errorScreen}>
        <Text style={styles.errorEmoji}>⚠️</Text>

        <Text style={styles.errorTitle}>
          No pudimos encontrar este trámite
        </Text>

        <Pressable
          onPress={() => router.back()}
          style={styles.backHomeButton}
        >
          <Text style={styles.backHomeButtonText}>
            ← Regresar
          </Text>
        </Pressable>
      </View>
    );
  }

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
        <Text style={styles.backText}>
          ← Volver a mi ruta
        </Text>
      </Pressable>

      <Text style={styles.brand}>
        RUTA SALUD MIGRANTE CR
      </Text>

      <View style={styles.hero}>
        <Text style={styles.heroEmoji}>
          {informacion.emoji}
        </Text>

        <Text style={styles.title}>
          {informacion.nombre}
        </Text>

        <Text style={styles.subtitle}>
          {informacion.titulo}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          🤔 ¿Qué es este trámite?
        </Text>

        <Text style={styles.bodyText}>
          {informacion.descripcion}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.positiveTitle}>
          👥 ¿Para quién aplica?
        </Text>

        {informacion.aplicaPara.map((item) => (
          <View
            key={item}
            style={styles.listRow}
          >
            <Text style={styles.greenBullet}>
              •
            </Text>

            <Text style={styles.listText}>
              {item}
            </Text>
          </View>
        ))}
      </View>

      {informacion.sirvePara &&
        informacion.sirvePara.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>
              🛠️ ¿Para qué sirve?
            </Text>

            {informacion.sirvePara.map((item) => (
              <View
                key={item}
                style={styles.listRow}
              >
                <Text style={styles.blueBullet}>
                  •
                </Text>

                <Text style={styles.listText}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        )}

      {informacion.resultado &&
        informacion.resultado.length > 0 && (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>
              ✅ ¿Qué se obtiene?
            </Text>

            {informacion.resultado.map((item) => (
              <View
                key={item}
                style={styles.listRow}
              >
                <Text style={styles.greenBullet}>
                  •
                </Text>

                <Text style={styles.listText}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        )}

      <View style={styles.warningCard}>
        <Text style={styles.warningTitle}>
          📌 Importante
        </Text>

        {informacion.importante.map((item) => (
          <View
            key={item}
            style={styles.listRow}
          >
            <Text style={styles.warningBullet}>
              •
            </Text>

            <Text style={styles.warningText}>
              {item}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.nextCard}>
        <Text style={styles.nextEyebrow}>
          SIGUIENTE
        </Text>

        <Text style={styles.nextTitle}>
          🧭 Revise los trámites específicos
        </Text>

        <Text style={styles.nextText}>
          Regrese a su ruta para consultar los subtrámites que podrían
          corresponder a su situación particular.
        </Text>

        <Pressable
          onPress={() => router.back()}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>
            Volver a mis trámites →
          </Text>
        </Pressable>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  errorEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },

  errorTitle: {
    fontSize: 23,
    lineHeight: 29,
    fontWeight: '800',
    textAlign: 'center',
    color: '#172033',
    marginBottom: 24,
  },

  backHomeButton: {
    backgroundColor: '#1677A8',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 24,
  },

  backHomeButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 25,
  },

  backText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1677A8',
  },

  brand: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: '#1677A8',
    marginBottom: 20,
  },

  hero: {
    marginBottom: 26,
  },

  heroEmoji: {
    fontSize: 42,
    marginBottom: 11,
  },

  title: {
    fontSize: 33,
    lineHeight: 39,
    fontWeight: '900',
    color: '#172033',
    marginBottom: 7,
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 24,
    color: '#657287',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 19,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E2EAF0',
  },

  sectionTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '800',
    color: '#273449',
    marginBottom: 11,
  },

  positiveTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '800',
    color: '#28724B',
    marginBottom: 11,
  },

  bodyText: {
    fontSize: 15,
    lineHeight: 23,
    color: '#586579',
  },

  listRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },

  listText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    color: '#536174',
  },

  greenBullet: {
    fontSize: 18,
    lineHeight: 20,
    color: '#2C7A50',
    marginRight: 9,
  },

  blueBullet: {
    fontSize: 18,
    lineHeight: 20,
    color: '#1677A8',
    marginRight: 9,
  },

  resultCard: {
    backgroundColor: '#EBF8F1',
    borderRadius: 22,
    padding: 19,
    marginBottom: 15,
  },

  resultTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#286A46',
    marginBottom: 11,
  },

  warningCard: {
    backgroundColor: '#FFF8E7',
    borderRadius: 22,
    padding: 19,
    marginBottom: 20,
  },

  warningTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#70591A',
    marginBottom: 11,
  },

  warningBullet: {
    fontSize: 18,
    lineHeight: 20,
    color: '#A27A19',
    marginRight: 9,
  },

  warningText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    color: '#655B41',
  },

  nextCard: {
    backgroundColor: '#1677A8',
    borderRadius: 22,
    padding: 20,
  },

  nextEyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#BDE4F3',
    marginBottom: 6,
  },

  nextTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 9,
  },

  nextText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#DCEFF7',
    marginBottom: 16,
  },

  nextButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },

  nextButtonText: {
    color: '#1677A8',
    fontSize: 15,
    fontWeight: '800',
  },
});