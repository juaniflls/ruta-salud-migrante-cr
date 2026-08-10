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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Sucursal,
  obtenerSucursalesPorProvincia,
} from '@/data/sucursales';

function extraerPrimerTelefono(texto: string) {
  const match = texto.match(/\d{4}-\d{4}/);
  return match ? match[0].replace('-', '') : null;
}

function extraerCorreo(texto: string) {
  const match = texto.match(
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
  );
  return match ? match[0] : null;
}

function extraerUrl(texto: string) {
  const match = texto.match(/https?:\/\/[^\s]+/i);
  return match ? match[0] : null;
}

export default function SucursalScreen() {
  const { provincia, condicion } = useLocalSearchParams<{
    provincia?: string;
    condicion?: string;
  }>();

  const insets = useSafeAreaInsets();
  const [seleccionada, setSeleccionada] = useState<Sucursal | null>(null);

  const sucursales = useMemo(
    () => obtenerSucursalesPorProvincia(provincia),
    [provincia]
  );

  const abrirMapa = async (url: string) => {
    await Linking.openURL(url.trim());
  };

  const llamar = async (telefono: string) => {
    const numero = extraerPrimerTelefono(telefono);
    if (!numero) return;

    await Linking.openURL(`tel:${numero}`);
  };

  const abrirContacto = async (contacto: string) => {
    const correo = extraerCorreo(contacto);

    if (correo) {
      await Linking.openURL(`mailto:${correo}`);
      return;
    }

    const url = extraerUrl(contacto);

    if (url) {
      await Linking.openURL(url);
    }
  };

  const continuar = () => {
    if (!seleccionada) return;

    router.push({
      pathname: '/(tabs)/aseguramiento',
      params: {
        provincia,
        condicion,
        sucursal: seleccionada.nombre,
      },
    });
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← Volver a mi ruta</Text>
        </Pressable>

        <Text style={styles.brand}>RUTA SALUD MIGRANTE CR</Text>

        <View style={styles.hero}>
          <Text style={styles.stepLabel}>TERCER PASO</Text>

          <Text style={styles.title}>
            🏥 Elija una sucursal de la CCSS
          </Text>

          <Text style={styles.description}>
            Revise las sucursales vinculadas con su provincia, consulte sus datos
            y seleccione aquella en la que desea continuar su proceso.
          </Text>
        </View>

        <View style={styles.provinceCard}>
          <Text style={styles.provinceLabel}>📍 PROVINCIA SELECCIONADA</Text>
          <Text style={styles.provinceValue}>
            {provincia ?? 'No disponible'}
          </Text>
          <Text style={styles.counter}>
            {sucursales.length} sucursal
            {sucursales.length === 1 ? '' : 'es'} disponible
            {sucursales.length === 1 ? '' : 's'}
          </Text>
        </View>

        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>💡 ¿Cómo elegir?</Text>
          <Text style={styles.noticeText}>
            Puede revisar horarios, teléfonos, canales de contacto y ubicación
            antes de decidir. La aplicación no selecciona una sucursal
            automáticamente: usted elige la que mejor se ajuste a su situación.
          </Text>
        </View>

        <View style={styles.list}>
          {sucursales.map((sucursal) => {
            const active = seleccionada?.nombre === sucursal.nombre;
            const correo = extraerCorreo(sucursal.contacto);
            const contactoUrl = extraerUrl(sucursal.contacto);

            return (
              <Pressable
                key={`${sucursal.provincia}-${sucursal.nombre}`}
                onPress={() => setSeleccionada(sucursal)}
                style={[
                  styles.card,
                  active && styles.cardSelected,
                ]}
              >
                <View style={styles.cardHeader}>
                  <View style={styles.cardTitleContainer}>
                    <Text style={styles.cardTitle}>
                      🏥 {sucursal.nombre}
                    </Text>

                    <Text style={styles.region}>
                      🗺️ {sucursal.region}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.radio,
                      active && styles.radioSelected,
                    ]}
                  >
                    {active && <Text style={styles.check}>✓</Text>}
                  </View>
                </View>

                <View style={styles.divider} />

                <Text style={styles.detailText}>{sucursal.horario}</Text>
                <Text style={styles.detailText}>{sucursal.telefono}</Text>

                {correo && (
                  <Text style={styles.contactInfo}>✉️ {correo}</Text>
                )}

                {!correo && contactoUrl && (
                  <Text style={styles.contactInfo}>
                    🌐 Formulario general de contacto de la CCSS
                  </Text>
                )}

                <View style={styles.actions}>
                  <Pressable
                    onPress={(event) => {
                      event.stopPropagation();
                      llamar(sucursal.telefono);
                    }}
                    style={styles.secondaryButton}
                  >
                    <Text style={styles.secondaryButtonText}>📞 Llamar</Text>
                  </Pressable>

                  <Pressable
                    onPress={(event) => {
                      event.stopPropagation();
                      abrirMapa(sucursal.mapa);
                    }}
                    style={styles.secondaryButton}
                  >
                    <Text style={styles.secondaryButtonText}>📍 Ver mapa</Text>
                  </Pressable>
                </View>

                {(correo || contactoUrl) && (
                  <Pressable
                    onPress={(event) => {
                      event.stopPropagation();
                      abrirContacto(sucursal.contacto);
                    }}
                    style={styles.contactButton}
                  >
                    <Text style={styles.contactButtonText}>
                      {correo
                        ? '✉️ Escribir correo electrónico'
                        : '🌐 Abrir formulario de contacto'}
                    </Text>
                  </Pressable>
                )}

                <Text style={styles.chooseHelper}>
                  {active
                    ? '✅ Esta sucursal está seleccionada'
                    : 'Toque la tarjeta para seleccionar esta sucursal'}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <View
        style={[
          styles.bottomBar,
          { paddingBottom: Math.max(insets.bottom, 12) },
        ]}
      >
        <View style={styles.bottomSelection}>
          <Text style={styles.bottomEyebrow}>
            {seleccionada ? 'SUCURSAL ELEGIDA' : 'PARA CONTINUAR'}
          </Text>

          <Text style={styles.bottomName} numberOfLines={1}>
            {seleccionada?.nombre ?? 'Seleccione una sucursal'}
          </Text>
        </View>

        <Pressable
          disabled={!seleccionada}
          onPress={continuar}
          style={[
            styles.continueButton,
            !seleccionada && styles.continueButtonDisabled,
          ]}
        >
          <Text
            style={[
              styles.continueButtonText,
              !seleccionada && styles.continueButtonTextDisabled,
            ]}
          >
            {seleccionada
              ? 'Continuar con esta sucursal →'
              : 'Seleccione una sucursal'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F9FC',
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 26,
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
    marginBottom: 22,
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

  provinceCard: {
    backgroundColor: '#E7F6FC',
    borderRadius: 19,
    padding: 18,
    marginBottom: 14,
  },

  provinceLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#5E7D8D',
    marginBottom: 6,
  },

  provinceValue: {
    fontSize: 21,
    fontWeight: '900',
    color: '#12658D',
  },

  counter: {
    fontSize: 13,
    color: '#56798A',
    marginTop: 5,
  },

  notice: {
    backgroundColor: '#FFF8E7',
    borderRadius: 17,
    padding: 16,
    marginBottom: 18,
  },

  noticeTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#70591A',
    marginBottom: 6,
  },

  noticeText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#655B41',
  },

  list: {
    gap: 13,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E0E8EE',
    borderRadius: 21,
    padding: 18,
  },

  cardSelected: {
    borderColor: '#1677A8',
    backgroundColor: '#F0FAFE',
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  cardTitleContainer: {
    flex: 1,
    paddingRight: 12,
  },

  cardTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '800',
    color: '#273449',
    marginBottom: 5,
  },

  region: {
    fontSize: 13,
    lineHeight: 19,
    color: '#6C7788',
  },

  radio: {
    width: 29,
    height: 29,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#C8D5DE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioSelected: {
    borderColor: '#1677A8',
    backgroundColor: '#1677A8',
  },

  check: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },

  divider: {
    height: 1,
    backgroundColor: '#EDF1F4',
    marginVertical: 14,
  },

  detailText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#586579',
    marginBottom: 9,
  },

  contactInfo: {
    fontSize: 13,
    lineHeight: 20,
    color: '#586579',
    marginBottom: 9,
  },

  actions: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 5,
  },

  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#BFD8E4',
    backgroundColor: '#F8FCFE',
    borderRadius: 12,
    paddingVertical: 11,
    alignItems: 'center',
  },

  secondaryButtonText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1677A8',
  },

  contactButton: {
    borderWidth: 1,
    borderColor: '#BFD8E4',
    backgroundColor: '#EAF7FC',
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: 9,
  },

  contactButtonText: {
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    fontWeight: '800',
    color: '#12658D',
  },

  chooseHelper: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '700',
    color: '#56798A',
    marginTop: 13,
  },

  bottomBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DDE7EE',
    paddingTop: 12,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 10,
  },

  bottomSelection: {
    marginBottom: 9,
  },

  bottomEyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#7A8798',
    marginBottom: 2,
  },

  bottomName: {
    fontSize: 15,
    fontWeight: '900',
    color: '#172033',
  },

  continueButton: {
    backgroundColor: '#1677A8',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },

  continueButtonDisabled: {
    backgroundColor: '#E0E6EB',
  },

  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  continueButtonTextDisabled: {
    color: '#9BA5B1',
  },
});