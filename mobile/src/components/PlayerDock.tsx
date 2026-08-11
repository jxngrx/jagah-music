import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { usePlayer } from '../lib/player';
import { coverUrl } from '../lib/heroes';
import { useI18n } from '../lib/i18n';

type Props = {
  onQueue?: () => void;
  compact?: boolean;
};

export function PlayerDock({ onQueue, compact }: Props) {
  const { track, playing, shuffle, toggle, next, prev, toggleShuffle } = usePlayer();
  const { t } = useI18n();
  if (!track) return null;

  return (
    <View style={[styles.dock, compact && styles.dockCompact]}>
      <Image source={{ uri: coverUrl(track.id) }} style={styles.art} contentFit="cover" />
      <View style={styles.meta}>
        <Text style={styles.title} numberOfLines={1}>
          {track.title}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {track.artist}
        </Text>
      </View>
      <View style={styles.controls}>
        <Pressable onPress={toggleShuffle} style={styles.btn} accessibilityLabel={t('shuffle')}>
          <Text style={[styles.btnTxt, shuffle && styles.on]}>⇄</Text>
        </Pressable>
        <Pressable onPress={prev} style={styles.btn} accessibilityLabel={t('prev')}>
          <Text style={styles.btnTxt}>‹</Text>
        </Pressable>
        <Pressable onPress={toggle} style={[styles.btn, styles.play]} accessibilityLabel={playing ? 'Pause' : 'Play'}>
          <Text style={styles.playTxt}>{playing ? '❚❚' : '▶'}</Text>
        </Pressable>
        <Pressable onPress={next} style={styles.btn} accessibilityLabel={t('next')}>
          <Text style={styles.btnTxt}>›</Text>
        </Pressable>
        {onQueue ? (
          <Pressable onPress={onQueue} style={styles.btn} accessibilityLabel={t('queue')}>
            <Text style={styles.btnTxt}>☰</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: 'rgba(10,14,20,0.92)',
    borderTopWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  dockCompact: {
    paddingVertical: 8,
  },
  art: {
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: '#222',
  },
  meta: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    color: '#f5f0e8',
    fontWeight: '700',
    fontSize: 15,
  },
  artist: {
    color: 'rgba(245,240,232,0.55)',
    fontSize: 13,
    marginTop: 2,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  play: {
    backgroundColor: '#d4a017',
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  btnTxt: {
    color: '#f5f0e8',
    fontSize: 22,
    fontWeight: '700',
  },
  playTxt: {
    color: '#0a0e14',
    fontSize: 16,
    fontWeight: '800',
  },
  on: {
    color: '#d4a017',
  },
});
