import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useKeepAwake } from 'expo-keep-awake';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlayerDock } from '../../src/components/PlayerDock';
import { placeById, stationFor, type Track } from '../../src/lib/catalog';
import { coverUrl, heroes } from '../../src/lib/heroes';
import { useI18n } from '../../src/lib/i18n';
import { usePlayer } from '../../src/lib/player';
import { isTVLike } from '../../src/lib/device';

export default function PlaceScreen() {
  useKeepAwake();
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { t, lang } = useI18n();
  const { setQueue, playAt, track, index } = usePlayer();
  const { width, height } = useWindowDimensions();
  const landscape = width > height;
  const tv = isTVLike(width, height);
  const [queueOpen, setQueueOpen] = useState(false);

  const place = placeById(id || '');
  const station = stationFor(id || '');

  useEffect(() => {
    if (!station?.tracks?.length) return;
    setQueue(station.tracks, 0);
  }, [station?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const title = useMemo(() => {
    if (!place) return '';
    return lang === 'en' ? place.en : place.title;
  }, [place, lang]);

  const hero = place ? heroes[place.id] : null;
  const accent = station?.accent || place?.accent || '#d4a017';

  const renderTrack = useCallback(
    ({ item, index: i }: { item: Track; index: number }) => {
      const on = i === index;
      return (
        <Pressable
          onPress={() => {
            playAt(i);
            setQueueOpen(false);
          }}
          style={[styles.row, on && { backgroundColor: accent + '33' }]}
        >
          <Image source={{ uri: coverUrl(item.id) }} style={styles.rowArt} contentFit="cover" />
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.rowArtist} numberOfLines={1}>
              {item.artist}
            </Text>
          </View>
          <Text style={styles.era}>{item.era === 'new' ? 'NEW' : 'OLD'}</Text>
        </Pressable>
      );
    },
    [accent, index, playAt],
  );

  if (!place || !station) {
    return (
      <SafeAreaView style={styles.root}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>{t('back')}</Text>
        </Pressable>
        <Text style={styles.missing}>Place not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.root}>
      {hero ? (
        <Image source={hero} style={StyleSheet.absoluteFill} contentFit="cover" />
      ) : null}
      <View style={styles.scrim} />

      <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
        <View style={[styles.header, landscape && styles.headerLand]}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.back}>← {t('back')}</Text>
          </Pressable>
          <Text style={[styles.logo, tv && styles.logoTV]} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.where}>{place.where}</Text>
        </View>

        <View style={[styles.body, landscape && styles.bodyLand]}>
          <View style={[styles.stage, landscape && styles.stageLand]}>
            {track ? (
              <Image
                source={{ uri: coverUrl(track.id) }}
                style={[styles.cover, tv && styles.coverTV, landscape && styles.coverLand]}
                contentFit="cover"
              />
            ) : null}
            <Text style={styles.nowTitle} numberOfLines={2}>
              {track?.title || '…'}
            </Text>
            <Text style={styles.nowArtist} numberOfLines={1}>
              {track?.artist || ''}
            </Text>
          </View>

          {!landscape && !tv ? (
            <FlashList
              data={station.tracks}
              contentContainerStyle={{ paddingBottom: 8 }}
              renderItem={renderTrack}
            />
          ) : null}
        </View>

        <PlayerDock onQueue={() => setQueueOpen(true)} />
      </SafeAreaView>

      <Modal visible={queueOpen} animationType="slide" onRequestClose={() => setQueueOpen(false)}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHead}>
            <Text style={styles.modalTitle}>{t('queue')}</Text>
            <Pressable onPress={() => setQueueOpen(false)}>
              <Text style={styles.back}>✕</Text>
            </Pressable>
          </View>
          <FlashList
            data={station.tracks}
            renderItem={renderTrack}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0e14' },
  scrim: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(6,8,12,0.72)',
  },
  safe: { flex: 1 },
  header: { paddingHorizontal: 18, paddingTop: 6, paddingBottom: 8 },
  headerLand: { paddingHorizontal: 28 },
  backBtn: { alignSelf: 'flex-start', marginBottom: 8 },
  back: { color: 'rgba(245,240,232,0.7)', fontWeight: '700', fontSize: 15 },
  logo: {
    color: '#f5f0e8',
    fontSize: 34,
    fontWeight: '800',
  },
  logoTV: { fontSize: 52 },
  where: {
    marginTop: 4,
    color: 'rgba(245,240,232,0.45)',
    fontSize: 13,
  },
  body: { flex: 1, paddingHorizontal: 12 },
  bodyLand: { flexDirection: 'row', gap: 20, paddingHorizontal: 24 },
  stage: { alignItems: 'center', paddingVertical: 12 },
  stageLand: { flex: 1, justifyContent: 'center' },
  cover: {
    width: 220,
    height: 220,
    borderRadius: 16,
    backgroundColor: '#222',
  },
  coverLand: { width: 260, height: 260 },
  coverTV: { width: 320, height: 320 },
  nowTitle: {
    marginTop: 16,
    color: '#f5f0e8',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  nowArtist: {
    marginTop: 4,
    color: 'rgba(245,240,232,0.55)',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  rowArt: { width: 44, height: 44, borderRadius: 8, backgroundColor: '#222' },
  rowTitle: { color: '#f5f0e8', fontWeight: '700', fontSize: 14 },
  rowArtist: { color: 'rgba(245,240,232,0.5)', fontSize: 12, marginTop: 2 },
  era: {
    color: 'rgba(245,240,232,0.35)',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  missing: { color: '#f5f0e8', padding: 24, fontSize: 18 },
  modal: { flex: 1, backgroundColor: '#0a0e14' },
  modalHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  modalTitle: { color: '#f5f0e8', fontSize: 20, fontWeight: '800' },
});
