# Nexus App

An early-stage **Expo / React Native** application used to experiment with app structure, file-based routing, and a persistent light/dark theme.

This repository is currently a small prototype rather than a finished product.

## Current implementation

- Expo Router entry point
- React Native + TypeScript
- Custom theme context
- Light and dark color palettes
- Theme preference persisted with AsyncStorage
- Basic app shell for continued development

## Tech stack

- Expo SDK 53
- React Native 0.79
- React 19
- TypeScript
- Expo Router
- React Navigation
- AsyncStorage
- React Native Reanimated

## Project structure

```text
.
├── app/
│   ├── _layout.tsx
│   └── index.tsx
├── constants/
│   └── colors.ts
├── hooks/
│   └── useTheme.tsx
├── assets/
├── app.json
├── package.json
└── tsconfig.json
```

## Getting started

### Prerequisites

- Node.js
- npm
- Expo-compatible Android/iOS environment or Expo Go

### Install

```bash
git clone https://github.com/Hessam-Hosseinian/Nexus-App.git
cd Nexus-App
npm install
```

### Run

```bash
npm start
```

Or launch a specific target:

```bash
npm run android
npm run ios
npm run web
```

## Quality check

```bash
npm run lint
```

## Status

🚧 **Prototype / work in progress**

The current screen is intentionally minimal and primarily demonstrates project setup and theme persistence.

## License

No open-source license is currently provided.
