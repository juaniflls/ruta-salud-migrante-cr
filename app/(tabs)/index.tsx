import { router } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const PROVINCIAS = [
  'San José',
  'Alajuela',
  'Cartago',
  'Heredia',
  'Guanacaste',
  'Puntarenas',
  'Limón',
];

export default function HomeScreen() {
  const [provincia, setProvincia] = useState<string | null>(null);

  const continuar = () => {
    if (!provincia) return;

    router.push({
      pathname: '/(tabs)/condicion',
      params: {
        provincia,
      },
    });
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Text style={styles.brand}>RUTA SALUD MIGRANTE CR</Text>

        <Text style={styles.title}>Encuentre su ruta de orientación</Text>

        <Text style={styles.description}>
          Consulte información organizada según su provincia y condición
          migratoria para orientarse sobre trámites y acceso al aseguramiento
          en Costa Rica.
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.stepHeader}>
          <View style={styles.stepCircle}>
            <Text style={styles.stepNumber}>1</Text>
          </View>

          <View style={styles.stepTextContainer}>
            <Text style={styles.stepLabel}>PRIMER PASO</Text>

            <Text style={styles.question}>
              📍 ¿En cuál provincia se encuentra?
            </Text>
          </View>
        </View>

        <Text style={styles.helperText}>
          Seleccione una provincia para comenzar.
        </Text>

        <View style={styles.provinceList}>
          {PROVINCIAS.map((item) => {
            const selected = provincia === item;

            return (
              <Pressable
                key={item}
                onPress={() => setProvincia(item)}
                style={[
                  styles.provinceButton,
                  selected && styles.provinceButtonSelected,
                ]}
              >
                <Text
                  style={[
                    styles.provinceText,
                    selected && styles.provinceTextSelected,
                  ]}
                >
                  {selected ? '✓ ' : ''}
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          disabled={!provincia}
          onPress={continuar}
          style={[
            styles.continueButton,
            !provincia && styles.continueButtonDisabled,
          ]}
        >
          <Text
            style={[
              styles.continueButtonText,
              !provincia && styles.continueButtonTextDisabled,
            ]}
          >
            Continuar →
          </Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        💙 Información para facilitar el acceso a servicios de salud y
        aseguramiento.
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
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  hero: {
    marginBottom: 28,
  },

  brand: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: '#1677A8',
    marginBottom: 12,
  },

  title: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '800',
    color: '#172033',
    marginBottom: 14,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5A6578',
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
    color: '#6C7788',
    marginBottom: 18,
  },

  provinceList: {
    gap: 10,
  },

  provinceButton: {
    borderWidth: 1.5,
    borderColor: '#DDE5EC',
    backgroundColor: '#FAFCFD',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 17,
  },

  provinceButtonSelected: {
    borderColor: '#1677A8',
    backgroundColor: '#EAF7FC',
  },

  provinceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#344054',
  },

  provinceTextSelected: {
    color: '#12658D',
    fontWeight: '700',
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
    paddingHorizontal: 20,
  },
});