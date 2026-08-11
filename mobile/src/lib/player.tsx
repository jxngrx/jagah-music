import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import YoutubePlayer, { type YoutubeIframeRef } from 'react-native-youtube-iframe';
import { View, StyleSheet } from 'react-native';
import type { Track } from './catalog';

type PlayerCtx = {
  tracks: Track[];
  index: number;
  playing: boolean;
  shuffle: boolean;
  track: Track | null;
  setQueue: (tracks: Track[], start?: number) => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  playAt: (i: number) => void;
  toggleShuffle: () => void;
};

const Ctx = createContext<PlayerCtx | null>(null);

function shuffleOrder(n: number, start: number) {
  const rest = Array.from({ length: n }, (_, i) => i).filter((i) => i !== start);
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  return [start, ...rest];
}

export function PlayerProvider({ children }: { children: ReactNode }) {
  const ref = useRef<YoutubeIframeRef>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [order, setOrder] = useState<number[]>([0]);
  const [cursor, setCursor] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const index = order[cursor] ?? 0;
  const track = tracks[index] || null;

  const setQueue = useCallback((next: Track[], start = 0) => {
    setTracks(next);
    setOrder(next.map((_, i) => i));
    setCursor(Math.min(start, Math.max(0, next.length - 1)));
    setPlaying(true);
  }, []);

  const playAt = useCallback(
    (i: number) => {
      if (shuffle) {
        setOrder(shuffleOrder(tracks.length, i));
        setCursor(0);
      } else {
        setOrder(tracks.map((_, x) => x));
        setCursor(i);
      }
      setPlaying(true);
    },
    [shuffle, tracks],
  );

  const next = useCallback(() => {
    setCursor((c) => {
      if (c + 1 < order.length) return c + 1;
      return 0;
    });
    setPlaying(true);
  }, [order.length]);

  const prev = useCallback(() => {
    setCursor((c) => (c <= 0 ? Math.max(0, order.length - 1) : c - 1));
    setPlaying(true);
  }, [order.length]);

  const toggle = useCallback(() => setPlaying((p) => !p), []);
  const toggleShuffle = useCallback(() => {
    setShuffle((s) => {
      const on = !s;
      if (on && tracks.length) setOrder(shuffleOrder(tracks.length, index));
      else setOrder(tracks.map((_, i) => i));
      setCursor(0);
      return on;
    });
  }, [tracks, index]);

  const value = useMemo(
    () => ({
      tracks,
      index,
      playing,
      shuffle,
      track,
      setQueue,
      toggle,
      next,
      prev,
      playAt,
      toggleShuffle,
    }),
    [tracks, index, playing, shuffle, track, setQueue, toggle, next, prev, playAt, toggleShuffle],
  );

  return (
    <Ctx.Provider value={value}>
      {children}
      {/* Hidden YT — audio via video stream (same pattern as web). */}
      <View style={styles.host} pointerEvents="none">
        {track ? (
          <YoutubePlayer
            ref={ref}
            height={1}
            width={1}
            videoId={track.id}
            play={playing}
            onChangeState={(st: string) => {
              if (st === 'ended') next();
            }}
            initialPlayerParams={{
              controls: false,
              modestbranding: true,
              rel: false,
              preventFullScreen: true,
            }}
            webViewProps={{
              mediaPlaybackRequiresUserAction: false,
              allowsInlineMediaPlayback: true,
            }}
          />
        ) : null}
      </View>
    </Ctx.Provider>
  );
}

export function usePlayer() {
  const v = useContext(Ctx);
  if (!v) throw new Error('PlayerProvider missing');
  return v;
}

const styles = StyleSheet.create({
  host: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
    left: -4,
    top: -4,
    overflow: 'hidden',
  },
});
