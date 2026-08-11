import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Image } from 'expo-image';
import { heroes } from '../lib/heroes';
import type { Place } from '../lib/catalog';
import { useI18n } from '../lib/i18n';

type Props = {
  place: Place;
  onPress: () => void;
};

export function PlaceDisk({ place, onPress }: Props) {
  const { placeLabel } = useI18n();
  const { width, height } = useWindowDimensions();
  const isTV = width >= 900 || height >= 900;
  const size = isTV ? 168 : Math.min(132, width * 0.34);
  const hero = heroes[place.id];

  return (
    <Pressable
      onPress={onPress}
      disabled={place.status !== 'live'}
      style={({ pressed }) => [
        styles.wrap,
        { width: size + 16, opacity: place.status === 'live' ? (pressed ? 0.85 : 1) : 0.45 },
      ]}
      accessibilityRole="button"
      accessibilityLabel={placeLabel(place)}
    >
      <View
        style={[
          styles.disk,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: place.accent + '55',
          },
        ]}
      >
        {hero ? (
          <Image source={hero} style={styles.img} contentFit="cover" transition={200} />
        ) : null}
        <View style={styles.hole} />
      </View>
      <Text style={[styles.title, isTV && styles.titleTV]} numberOfLines={2}>
        {placeLabel(place)}
      </Text>
      <Text style={styles.n}>{place.n}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 10,
  },
  disk: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  img: {
    ...StyleSheet.absoluteFill,
  },
  hole: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#0a0e14',
    top: '50%',
    left: '50%',
    marginLeft: -9,
    marginTop: -9,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  title: {
    marginTop: 10,
    color: '#f5f0e8',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  titleTV: {
    fontSize: 18,
  },
  n: {
    marginTop: 2,
    color: 'rgba(245,240,232,0.45)',
    fontSize: 11,
    letterSpacing: 1,
  },
});
