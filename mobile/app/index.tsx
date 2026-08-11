import { useCallback, useMemo } from 'react';
import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import { useKeepAwake } from 'expo-keep-awake';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlaceDisk } from '../src/components/PlaceDisk';
import { PlayerDock } from '../src/components/PlayerDock';
import { places, type Place } from '../src/lib/catalog';
import { useI18n } from '../src/lib/i18n';
import { isTVLike } from '../src/lib/device';

export default function HubScreen() {
  useKeepAwake();
  const router = useRouter();
  const { t, lang, setLang } = useI18n();
  const { width, height } = useWindowDimensions();
  const landscape = width > height;
  const tv = isTVLike(width, height);
  const live = useMemo(() => places.filter((p) => p.status === 'live'), []);

  const openPlace = useCallback(
    (p: Place) => {
      router.push(`/place/${p.id}`);
    },
    [router],
  );

  const numColumns = tv ? (landscape ? 6 : 4) : landscape ? 4 : 2;

  return (
    <SafeAreaView style={styles.root} edges={['top', 'left', 'right']}>
      <View style={[styles.top, landscape && styles.topLand]}>
        <View>
          <Text style={styles.eyebrow}>{t('eyebrow')}</Text>
          <Text style={[styles.brand, tv && styles.brandTV]}>{t('brand')}</Text>
        </View>
        <View style={styles.actions}>
          <View style={styles.lang}>
            <Pressable
              onPress={() => setLang('en')}
              style={[styles.langBtn, lang === 'en' && styles.langOn]}
            >
              <Text style={styles.langTxt}>EN</Text>
            </Pressable>
            <Pressable
              onPress={() => setLang('hi')}
              style={[styles.langBtn, lang === 'hi' && styles.langOn]}
            >
              <Text style={styles.langTxt}>HI</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => Linking.openURL('https://x.com/jxngrx')}
            style={styles.x}
            accessibilityLabel="Twitter"
          >
            <Text style={styles.xTxt}>𝕏</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.section}>{t('places')}</Text>

      <FlashList
        data={live}
        key={String(numColumns)}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PlaceDisk place={item} onPress={() => openPlace(item)} />
        )}
      />

      <PlayerDock compact />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0e14' },
  top: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  topLand: { paddingHorizontal: 28 },
  eyebrow: {
    color: 'rgba(245,240,232,0.55)',
    fontSize: 13,
    letterSpacing: 0.5,
  },
  brand: {
    color: '#f5f0e8',
    fontSize: 42,
    fontWeight: '800',
    marginTop: 2,
  },
  brandTV: { fontSize: 64 },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  lang: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 999,
    padding: 3,
  },
  langBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  langOn: { backgroundColor: 'rgba(212,160,23,0.28)' },
  langTxt: { color: '#f5f0e8', fontWeight: '800', fontSize: 12, letterSpacing: 1 },
  x: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  xTxt: { color: '#f5f0e8', fontSize: 18, fontWeight: '700' },
  section: {
    paddingHorizontal: 20,
    marginBottom: 4,
    color: 'rgba(245,240,232,0.45)',
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  list: { paddingHorizontal: 10, paddingBottom: 12 },
});
