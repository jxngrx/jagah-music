# JAGAH mobile (Expo)

Android phone · tablet · Android TV · landscape/portrait.

```bash
cd mobile
npm start
# phone: scan QR / a
# TV: expo run:android on TV device or emulator with android.software.leanback
```

## What works
- All 28 places + 530 YT tracks (same packs as web)
- Hidden YouTube player (HD stream, same copyright pattern as web)
- EN/HI toggle, shuffle / queue / next-prev
- Landscape + portrait layouts
- Android TV: large type, multi-column hub, D-pad hooks

## Android Auto
YT iframe cannot stream into Auto MediaSession. Deep link `jagah://place/{id}` opens the app. Full Auto browse needs Media3 + real audio URLs — see `src/lib/android-auto.ts`.

## Build APK
```bash
npx expo prebuild --platform android
npx expo run:android --variant release
```
