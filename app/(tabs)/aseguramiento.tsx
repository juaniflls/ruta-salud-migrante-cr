import { Asset } from 'expo-asset';
import { router, useLocalSearchParams } from 'expo-router';
import * as Sharing from 'expo-sharing';
import { useState } from 'react';
import {
  Alert,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const FORMULARIO = require('../../assets/documents/solicitud-aseguramiento-migrante.doc');

const CCSS_URL = 'https://www.ccss.sa.cr/tramites';

export default function AseguramientoScreen() {
  const { provincia, condicion, sucursal } = useLocalSearchParams<{
    provincia?: string;
    condicion?: string;
    sucursal?: string;
  }>();

  const [abriendoFormulario, setAbriendoFormulario] = useState(false);

  const abrirFormulario = async () => {
    try {
      setAbriendoFormulario(true);

      const disponible = await Sharing.isAvailableAsync();

      if (!disponible) {
        Alert.alert(
          'Formulario no disponible',
          'Este dispositivo no permite abrir o compartir el formulario desde la aplicación.'
        );
        return;
      }

      const [asset] = await Asset.loadAsync(FORMULARIO);

      if (!asset.localUri) {
        throw new Error('No se pudo obtener una copia local del formulario.');
      }

      await Sharing.shareAsync(asset.localUri, {
        mimeType: 'application/msword',
        dialogTitle: 'Solicitud de Aseguramiento Voluntario / Migrante',
      });
    } catch (error) {
      console.error(error);

      Alert.alert(
        'No se pudo abrir el formulario',
        'Intente nuevamente. El documento permanece guardado dentro de la aplicación.'
      );
    } finally {
      setAbriendoFormulario(false);
    }
  };

  const abrirCCSS = async () => {
    await Linking.openURL(CCSS_URL);
  };

  const continuarConCuenta = () => {
    router.push({
      pathname: '/(tabs)/organizaciones',
      params: {
        provincia,
        condicion,
        sucursal,
        cuenta: 'si',
      },
    });
  };

  const necesitoCuenta = () => {
    router.push({
      pathname: '/(tabs)/bancos',
      params: {
        provincia,
        condicion,
        sucursal,
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
        <Text style={styles.backText}>← Cambiar sucursal</Text>
      </Pressable>

      <Text style={styles.brand}>RUTA SALUD MIGRANTE CR</Text>

      <View style={styles.hero}>
        <Text style={styles.stepLabel}>CUARTO PASO</Text>

        <Text style={styles.title}>
          🛡️ Prepare su solicitud de aseguramiento
        </Text>

        <Text style={styles.description}>
          Ya eligió la sucursal de la CCSS. Ahora revise la documentación y
          prepare el formulario de Solicitud de Aseguramiento Voluntario /
          Migrante.
        </Text>
      </View>

      <View style={styles.summaryCard}>
        <View>
          <Text style={styles.summaryLabel}>📍 PROVINCIA</Text>
          <Text style={styles.summaryValue}>
            {provincia ?? 'No disponible'}
          </Text>
        </View>

        <View style={styles.divider} />

        <View>
          <Text style={styles.summaryLabel}>🪪 CONDICIÓN MIGRATORIA</Text>
          <Text style={styles.summaryValue}>
            {condicion ?? 'No disponible'}
          </Text>
        </View>

        <View style={styles.divider} />

        <View>
          <Text style={styles.summaryLabel}>🏥 SUCURSAL ELEGIDA</Text>
          <Text style={styles.summaryValue}>
            {sucursal ?? 'No disponible'}
          </Text>
        </View>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.formEyebrow}>FORMULARIO DE LA CCSS</Text>

        <Text style={styles.formTitle}>
          📝 Solicitud de Aseguramiento Voluntario / Migrante
        </Text>

        <Text style={styles.formText}>
          El documento está guardado dentro de la aplicación. Puede abrirlo,
          guardarlo en Archivos, enviarlo a otra aplicación compatible o
          compartirlo para imprimirlo.
        </Text>

        <Pressable
          onPress={abrirFormulario}
          disabled={abriendoFormulario}
          style={[
            styles.formButton,
            abriendoFormulario && styles.formButtonDisabled,
          ]}
        >
          <Text style={styles.formButtonText}>
            {abriendoFormulario
              ? 'Preparando formulario…'
              : '📄 Abrir / guardar formulario'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>✍️ Antes de completarlo</Text>

        <Text style={styles.bodyText}>
          El formulario indica que debe llenarse con lapicero azul o negro,
          marcar con una X las casillas correspondientes, escribir “N.A.” cuando
          una pregunta no aplique y evitar borrones, tachones o corrector.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🧭 ¿Qué información le solicitarán?</Text>

        {[
          '👤 Nombre, nacionalidad e identificación.',
          '🛡️ Tipo de aseguramiento que solicita.',
          '🏠 Provincia, cantón, distrito y dirección exacta de residencia.',
          '📞 Teléfonos de contacto.',
          '💼 Información sobre empleo, empresa, Hacienda y posibles actividades generadoras de ingreso.',
          '💰 Forma en que pagará las cuotas del seguro.',
          '👥 Dependencia económica y situación personal.',
          '💵 Ingreso familiar y gastos.',
          '📬 Medio o lugar para recibir notificaciones.',
          '✍️ Firma de la persona solicitante.',
        ].map((item) => (
          <View key={item} style={styles.listRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.warningCard}>
        <Text style={styles.warningTitle}>⚠️ Revise su caso</Text>

        <Text style={styles.warningText}>
          El formulario describe el aseguramiento migrante para personas
          extranjeras que residan legalmente en Costa Rica y que no tengan
          actividad laboral por cuenta propia ni como asalariadas. La CCSS
          puede corroborar la información suministrada.
        </Text>
      </View>

      <Pressable onPress={abrirCCSS} style={styles.officialButton}>
        <Text style={styles.officialButtonText}>
          🏛️ Verificar en el sitio oficial de la CCSS ↗
        </Text>
      </Pressable>

      <View style={styles.bankDecision}>
        <Text style={styles.bankEyebrow}>PASO ADICIONAL · OPCIONAL</Text>

        <Text style={styles.bankTitle}>
          🏦 ¿Ya cuenta con un estado de cuenta bancario?
        </Text>

        <Text style={styles.bankText}>
          Si ya dispone del documento bancario que utilizará para su gestión,
          continúe directamente. Si necesita abrir una cuenta, la aplicación
          puede mostrarle las opciones bancarias incorporadas en la guía.
        </Text>

        <Pressable onPress={continuarConCuenta} style={styles.yesButton}>
          <Text style={styles.yesButtonText}>
            ✅ Sí, ya cuento con uno →
          </Text>
        </Pressable>

        <Pressable onPress={necesitoCuenta} style={styles.noButton}>
          <Text style={styles.noButtonText}>
            🏦 No, necesito abrir una cuenta →
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
    marginBottom: 23,
  },

  stepLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.1,
    color: '#7A8798',
    marginBottom: 8,
  },

  title: {
    fontSize: 31,
    lineHeight: 38,
    fontWeight: '900',
    color: '#172033',
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#637086',
  },

  summaryCard: {
    backgroundColor: '#E7F6FC',
    borderRadius: 22,
    padding: 18,
    marginBottom: 16,
  },

  summaryLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#5E7D8D',
    marginBottom: 5,
  },

  summaryValue: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '900',
    color: '#12658D',
  },

  divider: {
    height: 1,
    backgroundColor: '#C8E6F2',
    marginVertical: 13,
  },

  formCard: {
    backgroundColor: '#1677A8',
    borderRadius: 22,
    padding: 20,
    marginBottom: 15,
  },

  formEyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#BDE4F3',
    marginBottom: 6,
  },

  formTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 8,
  },

  formText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#E2F2F8',
    marginBottom: 16,
  },

  formButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    paddingVertical: 14,
    alignItems: 'center',
  },

  formButtonDisabled: {
    opacity: 0.7,
  },

  formButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1677A8',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2EAF0',
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 19,
    lineHeight: 25,
    fontWeight: '800',
    color: '#273449',
    marginBottom: 10,
  },

  bodyText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#586579',
  },

  listRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 9,
  },

  bullet: {
    fontSize: 18,
    lineHeight: 21,
    color: '#1677A8',
    marginRight: 8,
  },

  listText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    color: '#566477',
  },

  warningCard: {
    backgroundColor: '#FFF8E7',
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
  },

  warningTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#70591A',
    marginBottom: 8,
  },

  warningText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#655B41',
  },

  officialButton: {
    backgroundColor: '#172033',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 14,
    alignItems: 'center',
    marginBottom: 20,
  },

  officialButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    fontWeight: '800',
  },

  bankDecision: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 19,
    borderWidth: 1,
    borderColor: '#E2EAF0',
  },

  bankEyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#7A8798',
    marginBottom: 6,
  },

  bankTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '900',
    color: '#172033',
    marginBottom: 9,
  },

  bankText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#667085',
    marginBottom: 16,
  },

  yesButton: {
    backgroundColor: '#EAF8F0',
    borderRadius: 13,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 9,
  },

  yesButtonText: {
    color: '#286A46',
    fontSize: 14,
    fontWeight: '800',
  },

  noButton: {
    backgroundColor: '#EAF7FC',
    borderRadius: 13,
    paddingVertical: 14,
    alignItems: 'center',
  },

  noButtonText: {
    color: '#12658D',
    fontSize: 14,
    fontWeight: '800',
  },
});
