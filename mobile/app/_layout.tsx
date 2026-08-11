import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nProvider } from '../src/lib/i18n';
import { PlayerProvider } from '../src/lib/player';

export default function RootLayout() {
  useEffect(() => {
    ScreenOrientation.unlockAsync().catch(() => {});
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#0a0e14' }}>
      <SafeAreaProvider>
        <I18nProvider>
          <PlayerProvider>
            <StatusBar style="light" />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#0a0e14' },
                animation: Platform.isTV ? 'none' : 'default',
              }}
            />
          </PlayerProvider>
        </I18nProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
