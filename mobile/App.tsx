import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AppState,
  BackHandler,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import type { WebViewNavigation } from 'react-native-webview/lib/WebViewTypes';

const SITE = 'https://music.jxngrx.com';

// ponytail: force media element volume=1; YouTube quality still gated by YT/site
const AUDIO_BOOT = `
(function () {
  function boost() {
    document.querySelectorAll('video,audio').forEach(function (el) {
      try {
        el.muted = false;
        el.defaultMuted = false;
        el.volume = 1;
      } catch (e) {}
    });
  }
  boost();
  try {
    new MutationObserver(boost).observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['muted', 'volume'],
    });
  } catch (e) {}
  setInterval(boost, 2000);
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) boost();
    document.querySelectorAll('video,audio').forEach(function (el) {
      if (document.hidden) return;
      try {
        if (el.paused && !el.ended) el.play().catch(function () {});
      } catch (e) {}
    });
  });
  true;
})();
`;

const RESUME_PLAY = `
(function () {
  document.querySelectorAll('video,audio').forEach(function (el) {
    try {
      el.muted = false;
      el.volume = 1;
      if (el.paused && !el.ended) el.play().catch(function () {});
    } catch (e) {}
  });
  true;
})();
`;

export default function App() {
  const ref = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (canGoBack) {
        ref.current?.goBack();
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [canGoBack]);

  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        ref.current?.injectJavaScript(RESUME_PLAY);
      }
    });
    return () => sub.remove();
  }, []);

  const onNav = useCallback((nav: WebViewNavigation) => {
    setCanGoBack(nav.canGoBack);
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.root}>
        <StatusBar barStyle="light-content" backgroundColor="#0a0e14" />
        <WebView
          ref={ref}
          source={{ uri: SITE }}
          style={styles.web}
          originWhitelist={['*']}
          javaScriptEnabled
          domStorageEnabled
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={false}
          allowsFullscreenVideo
          allowsBackForwardNavigationGestures
          setSupportMultipleWindows={false}
          mixedContentMode="always"
          androidLayerType="hardware"
          cacheEnabled
          sharedCookiesEnabled
          thirdPartyCookiesEnabled
          {...(Platform.OS === 'ios'
            ? { allowsAirPlayForMediaPlayback: true }
            : {})}
          injectedJavaScriptBeforeContentLoaded={AUDIO_BOOT}
          injectedJavaScript={AUDIO_BOOT}
          onNavigationStateChange={onNav}
          applicationNameForUserAgent="JagahMusic/1.0"
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0e14' },
  web: { flex: 1, backgroundColor: '#0a0e14' },
});
