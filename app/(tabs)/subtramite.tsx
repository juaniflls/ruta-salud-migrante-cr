import { router, useLocalSearchParams } from 'expo-router';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { obtenerSubtramite } from '@/data/subtramites';

export default function SubtramiteScreen() {
  const { subtramite } = useLocalSearchParams<{
    subtramite?: string;
  }>();

  const informacion = obtenerSubtramite(subtramite);

  if (!informacion) {
    return (
      <View style={styles.errorScreen}>
        <Text style={styles.errorEmoji}>🧭</Text>

        <Text style={styles.errorTitle}>
          Estamos incorporando este trámite
        </Text>

        <Text style={styles.errorText}>
          El trámite seleccionado todavía no ha sido incorporado a esta versión
          de la aplicación.
        </Text>

        <Pressable
          onPress={() => router.back()}
          style={styles.errorButton}
        >
          <Text style={styles.errorButtonText}>← Volver a mi ruta</Text>
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
        <Text style={styles.backText}>← Volver a mi ruta</Text>
      </Pressable>

      <Text style={styles.brand}>RUTA SALUD MIGRANTE CR</Text>

      <View style={styles.hero}>
        <Text style={styles.heroEmoji}>{informacion.emoji}</Text>

        <Text style={styles.title}>{informacion.titulo}</Text>

        <Text style={styles.heroDescription}>
          Información específica para orientar este trámite.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionEyebrow}>
          INFORMACIÓN DEL TRÁMITE
        </Text>

        <Text style={styles.sectionTitle}>
          🧾 ¿Qué es este trámite?
        </Text>

        <Text style={styles.bodyText}>
          {informacion.queEs}
        </Text>
      </View>

      <View style={styles.stepsCard}>
        <Text style={styles.sectionEyebrowLight}>
          GUÍA PASO A PASO
        </Text>

        <Text style={styles.stepsTitle}>
          🧭 ¿Qué debe hacer?
        </Text>

        <Text style={styles.stepsText}>
          {informacion.pasos}
        </Text>
      </View>

      <View style={styles.officialCard}>
        <Text style={styles.officialTitle}>
          🏛️ Verificación oficial
        </Text>

        <Text style={styles.officialText}>
          Los requisitos migratorios pueden depender del caso particular.
          Antes de realizar el trámite, verifique la información vigente con la
          Dirección General de Migración y Extranjería.
        </Text>
      </View>

      <Pressable
        onPress={() => router.back()}
        style={styles.returnButton}
      >
        <Text style={styles.returnButtonText}>
          ← Regresar a mis trámites
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  errorEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },

  errorTitle: {
    fontSize: 25,
    lineHeight: 31,
    fontWeight: '800',
    textAlign: 'center',
    color: '#172033',
    marginBottom: 10,
  },

  errorText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#687487',
    textAlign: 'center',
    marginBottom: 24,
  },

  errorButton: {
    backgroundColor: '#1677A8',
    borderRadius: 14,
    paddingHorizontal: 22,
    paddingVertical: 14,
  },

  errorButtonText: {
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
    marginBottom: 25,
  },

  heroEmoji: {
    fontSize: 42,
    marginBottom: 11,
  },

  title: {
    fontSize: 31,
    lineHeight: 38,
    fontWeight: '900',
    color: '#172033',
    marginBottom: 10,
  },

  heroDescription: {
    fontSize: 16,
    lineHeight: 23,
    color: '#687487',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E3EAF0',
    marginBottom: 16,
  },

  sectionEyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.1,
    color: '#7A8798',
    marginBottom: 8,
  },

  sectionTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '800',
    color: '#172033',
    marginBottom: 13,
  },

  bodyText: {
    fontSize: 15,
    lineHeight: 23,
    color: '#566477',
  },

  stepsCard: {
    backgroundColor: '#1677A8',
    borderRadius: 22,
    padding: 20,
    marginBottom: 16,
  },

  sectionEyebrowLight: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.1,
    color: '#BFE4F2',
    marginBottom: 8,
  },

  stepsTitle: {
    fontSize: 21,
    lineHeight: 27,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 16,
  },

  stepsText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#F2FAFD',
  },

  officialCard: {
    backgroundColor: '#FFF8E7',
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
  },

  officialTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#70591A',
    marginBottom: 8,
  },

  officialText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#655B41',
  },

  returnButton: {
    borderWidth: 1.5,
    borderColor: '#1677A8',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },

  returnButtonText: {
    color: '#1677A8',
    fontSize: 15,
    fontWeight: '800',
  },
});