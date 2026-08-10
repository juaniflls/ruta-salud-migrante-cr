import { router, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function ChecklistScreen() {
  const { provincia, condicion, sucursal, cuenta, banco } =
    useLocalSearchParams<{
      provincia?: string;
      condicion?: string;
      sucursal?: string;
      cuenta?: string;
      banco?: string;
    }>();

  const items = useMemo(
    () => [
      'Documento de identidad preparado',
      'Documento migratorio vigente preparado',
      cuenta === 'si'
        ? 'Estado de cuenta bancario preparado'
        : 'Cuenta bancaria / estado de cuenta gestionado',
      'Formulario de aseguramiento completo',
      'Medio para recibir notificaciones definido',
    ],
    [cuenta]
  );

  const [marcados, setMarcados] = useState<string[]>([]);

  const toggle = (item: string) => {
    setMarcados((actuales) =>
      actuales.includes(item)
        ? actuales.filter((x) => x !== item)
        : [...actuales, item]
    );
  };

  const completos = marcados.length === items.length;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Volver</Text>
      </Pressable>

      <Text style={styles.brand}>RUTA SALUD MIGRANTE CR</Text>

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>CHECKLIST FINAL</Text>
        <Text style={styles.title}>✅ Revise que tiene todo listo</Text>
        <Text style={styles.description}>
          Marque cada elemento conforme lo vaya preparando. Al final tendrá un
          resumen de su ruta personalizada.
        </Text>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>📍 PROVINCIA</Text>
        <Text style={styles.summaryValue}>{provincia ?? 'No disponible'}</Text>
        <View style={styles.divider} />

        <Text style={styles.summaryLabel}>🪪 CONDICIÓN MIGRATORIA</Text>
        <Text style={styles.summaryValue}>{condicion ?? 'No disponible'}</Text>
        <View style={styles.divider} />

        <Text style={styles.summaryLabel}>🏥 SUCURSAL ELEGIDA</Text>
        <Text style={styles.summaryValue}>{sucursal ?? 'No disponible'}</Text>

        {banco && banco !== 'No seleccionado' && (
          <>
            <View style={styles.divider} />
            <Text style={styles.summaryLabel}>🏦 OPCIÓN BANCARIA CONSULTADA</Text>
            <Text style={styles.summaryValue}>{banco}</Text>
          </>
        )}
      </View>

      <View style={styles.checklistCard}>
        {items.map((item) => {
          const checked = marcados.includes(item);

          return (
            <Pressable
              key={item}
              onPress={() => toggle(item)}
              style={[styles.checkRow, checked && styles.checkRowActive]}
            >
              <View style={[styles.box, checked && styles.boxActive]}>
                {checked && <Text style={styles.check}>✓</Text>}
              </View>
              <Text style={[styles.checkText, checked && styles.checkTextActive]}>
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={[styles.statusCard, completos && styles.statusCardComplete]}>
        <Text style={styles.statusTitle}>
          {completos
            ? '🎉 Su preparación está completa'
            : '🧭 Aún quedan elementos por preparar'}
        </Text>
        <Text style={styles.statusText}>
          {completos
            ? `Su ruta indica presentar la documentación en ${sucursal ?? 'la sucursal seleccionada'}.`
            : `${marcados.length} de ${items.length} elementos marcados.`}
        </Text>
      </View>

      <View style={styles.finalCard}>
        <Text style={styles.finalTitle}>💙 Su guía personalizada</Text>
        <Text style={styles.finalText}>
          Provincia: {provincia ?? 'No disponible'}
          {'\n'}Condición migratoria: {condicion ?? 'No disponible'}
          {'\n'}Sucursal CCSS: {sucursal ?? 'No disponible'}
          {'\n'}Estado de cuenta: {cuenta === 'si' ? 'Ya disponible' : 'Requiere gestión o apertura de cuenta'}
          {banco && banco !== 'No seleccionado' ? `\nBanco consultado: ${banco}` : ''}
        </Text>
      </View>

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

  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingRight: 12,
    marginBottom: 18,
  },
  backText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1677A8',
  },

  brand: { fontSize: 13, fontWeight: '800', letterSpacing: 1.4, color: '#1677A8', marginBottom: 20 },
  hero: { marginBottom: 20 },
  eyebrow: { fontSize: 11, fontWeight: '800', letterSpacing: 1, color: '#7A8798', marginBottom: 7 },
  title: { fontSize: 30, lineHeight: 37, fontWeight: '900', color: '#172033', marginBottom: 11 },
  description: { fontSize: 15, lineHeight: 23, color: '#637086' },

  summaryCard: { backgroundColor: '#E7F6FC', borderRadius: 22, padding: 18, marginBottom: 16 },
  summaryLabel: { fontSize: 10, fontWeight: '800', letterSpacing: 1, color: '#5E7D8D', marginBottom: 4 },
  summaryValue: { fontSize: 17, lineHeight: 23, fontWeight: '900', color: '#12658D' },
  divider: { height: 1, backgroundColor: '#C8E6F2', marginVertical: 12 },

  checklistCard: { backgroundColor: '#FFFFFF', borderRadius: 21, padding: 12, borderWidth: 1, borderColor: '#E2EAF0', marginBottom: 16 },
  checkRow: { flexDirection: 'row', alignItems: 'center', borderRadius: 13, padding: 13, marginBottom: 5 },
  checkRowActive: { backgroundColor: '#EAF8F0' },
  box: { width: 28, height: 28, borderRadius: 8, borderWidth: 2, borderColor: '#C8D5DE', alignItems: 'center', justifyContent: 'center', marginRight: 11 },
  boxActive: { backgroundColor: '#2E7D50', borderColor: '#2E7D50' },
  check: { color: '#FFFFFF', fontSize: 17, fontWeight: '900' },
  checkText: { flex: 1, fontSize: 14, lineHeight: 20, fontWeight: '600', color: '#536174' },
  checkTextActive: { color: '#286A46', fontWeight: '800' },

  statusCard: { backgroundColor: '#FFF8E7', borderRadius: 18, padding: 18, marginBottom: 16 },
  statusCardComplete: { backgroundColor: '#EAF8F0' },
  statusTitle: { fontSize: 17, fontWeight: '900', color: '#344054', marginBottom: 7 },
  statusText: { fontSize: 14, lineHeight: 21, color: '#667085' },

  finalCard: { backgroundColor: '#172033', borderRadius: 21, padding: 19, marginBottom: 18 },
  finalTitle: { fontSize: 19, fontWeight: '900', color: '#FFFFFF', marginBottom: 10 },
  finalText: { fontSize: 14, lineHeight: 23, color: '#E5EBF3' },

  restartButton: { borderWidth: 1.5, borderColor: '#1677A8', borderRadius: 15, paddingVertical: 15, alignItems: 'center' },
  restartText: { fontSize: 14, fontWeight: '800', color: '#1677A8' },
});