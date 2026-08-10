import { router, useLocalSearchParams } from 'expo-router';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { ORGANIZACIONES } from '@/data/organizaciones';

export default function OrganizacionesScreen() {
  const { provincia, condicion, sucursal, cuenta, banco } =
    useLocalSearchParams<{
      provincia?: string;
      condicion?: string;
      sucursal?: string;
      cuenta?: string;
      banco?: string;
    }>();

  const continuar = () => {
    router.push({
      pathname: '/(tabs)/checklist',
      params: {
        provincia,
        condicion,
        sucursal,
        cuenta,
        banco,
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

      <Text style={styles.brand}>RUTA SALUD MIGRANTE CR</Text>

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>APOYO ADICIONAL</Text>
        <Text style={styles.title}>🤝 ¿Necesita orientación o acompañamiento?</Text>
        <Text style={styles.description}>
          Estas organizaciones forman parte de la guía y pueden brindarle apoyo
          adicional. Consultarlas es opcional y no sustituye los trámites ante
          las instituciones responsables.
        </Text>
      </View>

      <View style={styles.list}>
        {ORGANIZACIONES.map((org) => (
          <View key={org.nombre} style={styles.card}>
            <Text style={styles.orgName}>{org.nombre}</Text>

            <Text style={styles.label}>🤝 ¿CÓMO PUEDE AYUDARLE?</Text>
            <Text style={styles.text}>{org.ayuda}</Text>

            <Text style={styles.label}>🕒 HORARIO</Text>
            <Text style={styles.text}>{org.horario}</Text>

            <Text style={styles.label}>📍 UBICACIÓN</Text>
            <Text style={styles.text}>{org.ubicacion}</Text>

            <View style={styles.actions}>
              <Pressable
                onPress={() =>
                  Linking.openURL(`tel:${org.telefono.replace(/-/g, '')}`)
                }
                style={styles.action}
              >
                <Text style={styles.actionText}>📞 Llamar</Text>
              </Pressable>

              <Pressable
                onPress={() => Linking.openURL(org.whatsapp)}
                style={styles.action}
              >
                <Text style={styles.actionText}>💬 WhatsApp</Text>
              </Pressable>
            </View>

            <View style={styles.actions}>
              <Pressable
                onPress={() => Linking.openURL(`mailto:${org.correo}`)}
                style={styles.action}
              >
                <Text style={styles.actionText}>📧 Correo</Text>
              </Pressable>

              <Pressable
                onPress={() => Linking.openURL(org.web)}
                style={styles.action}
              >
                <Text style={styles.actionText}>🌐 Sitio / red</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>

      <Pressable onPress={continuar} style={styles.continueButton}>
        <Text style={styles.continueText}>Ir al checklist final →</Text>
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
  hero: { marginBottom: 20 },
  eyebrow: { fontSize: 11, fontWeight: '800', letterSpacing: 1, color: '#7A8798', marginBottom: 7 },
  title: { fontSize: 30, lineHeight: 37, fontWeight: '900', color: '#172033', marginBottom: 11 },
  description: { fontSize: 15, lineHeight: 23, color: '#637086' },
  list: { gap: 13 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 21, padding: 18, borderWidth: 1, borderColor: '#E2EAF0' },
  orgName: { fontSize: 18, lineHeight: 25, fontWeight: '900', color: '#273449', marginBottom: 12 },
  label: { fontSize: 10, fontWeight: '800', letterSpacing: 0.8, color: '#718096', marginBottom: 5, marginTop: 8 },
  text: { fontSize: 13, lineHeight: 20, color: '#586579' },
  actions: { flexDirection: 'row', gap: 8, marginTop: 10 },
  action: { flex: 1, backgroundColor: '#F4FAFD', borderWidth: 1, borderColor: '#CDE0E9', borderRadius: 11, paddingVertical: 11, alignItems: 'center' },
  actionText: { fontSize: 12, fontWeight: '800', color: '#1677A8' },
  continueButton: { backgroundColor: '#1677A8', borderRadius: 15, paddingVertical: 16, alignItems: 'center', marginTop: 20 },
  continueText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
});
