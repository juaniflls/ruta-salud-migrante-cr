import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const CONDICIONES = [
  {
    nombre: 'Solicitante de refugio',
    emoji: '🛡️',
    descripcion:
      'Ha presentado una solicitud de refugio y se encuentra esperando una resolución.',
  },
  {
    nombre: 'Refugiado',
    emoji: '🤝',
    descripcion:
      'Cuenta con el reconocimiento oficial de la condición de persona refugiada.',
  },
  {
    nombre: 'Migrante regular permanente',
    emoji: '🪪',
    descripcion:
      'Cuenta con una condición migratoria regular de permanencia en Costa Rica.',
  },
  {
    nombre: 'Migrante sin trámite o temporal',
    emoji: '🌎',
    descripcion:
      'Se encuentra temporalmente en el país o todavía no cuenta con un trámite migratorio regularizado.',
  },
];

export default function CondicionScreen() {
  const { provincia } = useLocalSearchParams<{ provincia?: string }>();

  const [condicion, setCondicion] = useState<string | null>(null);

  const continuar = () => {
    if (!condicion || !provincia) return;

    router.push({
      pathname: '/(tabs)/ruta',
      params: {
        provincia,
        condicion,
      },
    });
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Volver</Text>
      </Pressable>

      <View style={styles.hero}>
        <Text style={styles.brand}>RUTA SALUD MIGRANTE CR</Text>

        <Text style={styles.title}>
          Cuéntenos sobre su condición migratoria
        </Text>

        <Text style={styles.description}>
          Esta información nos permitirá mostrarle una ruta de orientación
          adaptada a su situación.
        </Text>
      </View>

      <View style={styles.provinceSummary}>
        <Text style={styles.summaryLabel}>📍 PROVINCIA SELECCIONADA</Text>
        <Text style={styles.summaryValue}>
          {provincia ?? 'No disponible'}
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.stepHeader}>
          <View style={styles.stepCircle}>
            <Text style={styles.stepNumber}>2</Text>
          </View>

          <View style={styles.stepTextContainer}>
            <Text style={styles.stepLabel}>SEGUNDO PASO</Text>
            <Text style={styles.question}>
              🪪 ¿Cuál es su condición migratoria?
            </Text>
          </View>
        </View>

        <Text style={styles.helperText}>
          Seleccione la opción que mejor describa su situación actual.
        </Text>

        <View style={styles.conditionList}>
          {CONDICIONES.map((item) => {
            const selected = condicion === item.nombre;

            return (
              <Pressable
                key={item.nombre}
                onPress={() => setCondicion(item.nombre)}
                style={[
                  styles.conditionButton,
                  selected && styles.conditionButtonSelected,
                ]}
              >
                <View style={styles.conditionTop}>
                  <Text style={styles.conditionEmoji}>
                    {item.emoji}
                  </Text>

                  <Text
                    style={[
                      styles.conditionName,
                      selected && styles.conditionNameSelected,
                    ]}
                  >
                    {item.nombre}
                  </Text>

                  {selected && (
                    <Text style={styles.check}>✓</Text>
                  )}
                </View>

                <Text style={styles.conditionDescription}>
                  {item.descripcion}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          disabled={!condicion}
          onPress={continuar}
          style={[
            styles.continueButton,
            !condicion && styles.continueButtonDisabled,
          ]}
        >
          <Text
            style={[
              styles.continueButtonText,
              !condicion && styles.continueButtonTextDisabled,
            ]}
          >
            Ver mi ruta →
          </Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        🔒 La información seleccionada se utiliza únicamente para mostrar su
        ruta de orientación.
      </Text>
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

  provinceSummary: {
    backgroundColor: '#EAF7FC',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 17,
    marginBottom: 20,
  },

  summaryLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#5E7D8D',
    marginBottom: 4,
  },

  summaryValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#12658D',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 22,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },

  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  stepCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DDF3FC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  stepNumber: {
    fontSize: 19,
    fontWeight: '800',
    color: '#1677A8',
  },

  stepTextContainer: {
    flex: 1,
  },

  stepLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.1,
    color: '#7A8798',
    marginBottom: 3,
  },

  question: {
    fontSize: 19,
    lineHeight: 25,
    fontWeight: '700',
    color: '#172033',
  },

  helperText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#6C7788',
    marginBottom: 18,
  },

  conditionList: {
    gap: 12,
  },

  conditionButton: {
    borderWidth: 1.5,
    borderColor: '#DDE5EC',
    backgroundColor: '#FAFCFD',
    borderRadius: 16,
    padding: 16,
  },

  conditionButtonSelected: {
    borderColor: '#1677A8',
    backgroundColor: '#EAF7FC',
  },

  conditionTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  conditionEmoji: {
    fontSize: 23,
    marginRight: 10,
  },

  conditionName: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#344054',
  },

  conditionNameSelected: {
    color: '#12658D',
  },

  check: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1677A8',
    marginLeft: 10,
  },

  conditionDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: '#6C7788',
    marginTop: 9,
    marginLeft: 33,
  },

  continueButton: {
    marginTop: 22,
    backgroundColor: '#1677A8',
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
  },

  continueButtonDisabled: {
    backgroundColor: '#E2E7EC',
  },

  continueButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  continueButtonTextDisabled: {
    color: '#9CA5B1',
  },

  footer: {
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 19,
    color: '#768193',
    marginTop: 24,
    paddingHorizontal: 18,
  },
});