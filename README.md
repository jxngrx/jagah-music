# JAGAH

Places have sound — hub of listening places (Scorpio, Roadways, Ragni, DHH…) with a glass YouTube-backed player.

## Web

```bash
npm install
npm run dev
```

## Android (Expo)

```bash
cd mobile
npm start
# then a / scan QR — works phone, tablet, Android TV emulator
```

See `mobile/README.md`. Portrait + landscape. Android Auto needs Media3 streams (YT iframe cannot feed Auto) — deep link `jagah://place/{id}` ready.