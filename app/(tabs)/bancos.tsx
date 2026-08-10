import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { BANCOS, Banco } from '@/data/bancos';

export default function BancosScreen() {
  const { provincia, condicion, sucursal } = useLocalSearchParams<{
    provincia?: string;
    condicion?: string;
    sucursal?: string;
  }>();

  const [seleccionado, setSeleccionado] = useState<Banco | null>(null);

  const llamar = (telefono: string) =>
    Linking.openURL(`tel:${telefono.replace(/-/g, '')}`);

  const continuar = () => {
    router.push({
      pathname: '/(tabs)/organizaciones',
      params: {
        provincia,
        condicion,
        sucursal,
        cuenta: 'no',
        banco: seleccionado?.nombre ?? 'No seleccionado',
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
        <Text style={styles.backText}>← Volver al aseguramiento</Text>
      </Pressable>

      <Text style={styles.brand}>RUTA SALUD MIGRANTE CR</Text>

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>PASO ADICIONAL · OPCIONAL</Text>
        <Text style={styles.title}>🏦 Abra una cuenta bancaria si no tiene una</Text>
        <Text style={styles.description}>
          Revise cuatro opciones incluidas en la guía. La apertura y aprobación
          dependen de cada banco y de la documentación de la persona.
        </Text>
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeTitle}>📌 Recuerde</Text>
        <Text style={styles.noticeText}>
          No necesita abrir una cuenta nueva si ya cuenta con un estado de cuenta
          bancario que pueda presentar para su solicitud.
        </Text>
      </View>

      <View style={styles.list}>
        {BANCOS.map((banco) => {
          const active = seleccionado?.nombre === banco.nombre;

          return (
            <Pressable
              key={banco.nombre}
              onPress={() => setSeleccionado(banco)}
              style={[styles.card, active && styles.cardSelected]}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.bankName}>{banco.nombre}</Text>
                <View style={[styles.radio, active && styles.radioSelected]}>
                  {active && <Text style={styles.check}>✓</Text>}
                </View>
              </View>

              <Text style={styles.label}>🧾 MODALIDAD</Text>
              <Text style={styles.text}>{banco.modalidad}</Text>

              <Text style={styles.label}>✅ REQUISITOS PRINCIPALES</Text>
              <Text style={styles.text}>{banco.requisitos}</Text>

              <Text style={styles.label}>👤 PERSONAS EXTRANJERAS</Text>
              <Text style={styles.text}>{banco.extranjeros}</Text>

              <View style={styles.actions}>
                <Pressable
                  onPress={(event) => {
                    event.stopPropagation();
                    Linking.openURL(banco.abrirCuenta);
                  }}
                  style={styles.actionPrimary}
                >
                  <Text style={styles.actionPrimaryText}>Abrir / iniciar ↗</Text>
                </Pressable>

                <Pressable
                  onPress={(event) => {
                    event.stopPropagation();
                    Linking.openURL(banco.informacion);
                  }}
                  style={styles.action}
                >
                  <Text style={styles.actionText}>Información ↗</Text>
                </Pressable>
              </View>

              <View style={styles.actions}>
                <Pressable
                  onPress={(event) => {
                    event.stopPropagation();
                    llamar(banco.telefono);
                  }}
                  style={styles.action}
                >
                  <Text style={styles.actionText}>📞 {banco.telefono}</Text>
                </Pressable>

                <Pressable
                  onPress={(event) => {
                    event.stopPropagation();
                    Linking.openURL(banco.whatsapp);
                  }}
                  style={styles.action}
                >
                  <Text style={styles.actionText}>💬 WhatsApp</Text>
                </Pressable>
              </View>
            </Pressable>
          );
        })}
      </View>

      <Pressable onPress={continuar} style={styles.continueButton}>
        <Text style={styles.continueText}>
          {seleccionado
            ? 'Continuar con esta opción →'
            : 'Continuar sin elegir un banco →'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F9FC' },
  content: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 50 },
  backButton: { alignSelf: 'flex-start', marginBottom: 25 },
  backText: { fontSize: 16, fontWeight: '700', color: '#1677A8' },
  brand: { fontSize: 13, fontWeight: '800', letterSpacing: 1.4, color: '#1677A8', marginBottom: 20 },
  hero: { marginBottom: 18 },
  eyebrow: { fontSize: 11, fontWeight: '800', letterSpacing: 1, color: '#7A8798', marginBottom: 7 },
  title: { fontSize: 30, lineHeight: 37, fontWeight: '900', color: '#172033', marginBottom: 11 },
  description: { fontSize: 15, lineHeight: 23, color: '#637086' },
  notice: { backgroundColor: '#FFF8E7', borderRadius: 17, padding: 16, marginBottom: 18 },
  noticeTitle: { fontSize: 15, fontWeight: '800', color: '#70591A', marginBottom: 6 },
  noticeText: { fontSize: 13, lineHeight: 20, color: '#655B41' },
  list: { gap: 13 },
  card: { backgroundColor: '#FFFFFF', borderWidth: 1.5, borderColor: '#E0E8EE', borderRadius: 21, padding: 18 },
  cardSelected: { borderColor: '#1677A8', backgroundColor: '#F0FAFE' },
  cardHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 14 },
  bankName: { flex: 1, fontSize: 18, lineHeight: 24, fontWeight: '900', color: '#273449', paddingRight: 10 },
  radio: { width: 29, height: 29, borderRadius: 15, borderWidth: 2, borderColor: '#C8D5DE', alignItems: 'center', justifyContent: 'center' },
  radioSelected: { borderColor: '#1677A8', backgroundColor: '#1677A8' },
  check: { color: '#FFFFFF', fontSize: 17, fontWeight: '900' },
  label: { fontSize: 10, fontWeight: '800', letterSpacing: 0.8, color: '#718096', marginBottom: 5, marginTop: 8 },
  text: { fontSize: 13, lineHeight: 20, color: '#586579' },
  actions: { flexDirection: 'row', gap: 8, marginTop: 12 },
  actionPrimary: { flex: 1, backgroundColor: '#1677A8', borderRadius: 11, paddingVertical: 11, alignItems: 'center' },
  actionPrimaryText: { fontSize: 12, fontWeight: '800', color: '#FFFFFF' },
  action: { flex: 1, backgroundColor: '#F5FAFC', borderWidth: 1, borderColor: '#CFE1E9', borderRadius: 11, paddingVertical: 11, alignItems: 'center' },
  actionText: { fontSize: 12, fontWeight: '800', color: '#1677A8' },
  continueButton: { backgroundColor: '#172033', borderRadius: 15, paddingVertical: 16, alignItems: 'center', marginTop: 20 },
  continueText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
});
