import { Config } from '@stencil/core';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const loadDotEnv = () => {
  const envPath = resolve(__dirname, '.env');

  if (!existsSync(envPath)) {
    return {};
  }

  return Object.fromEntries(
    readFileSync(envPath, 'utf8')
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#'))
      .map(line => {
        const separatorIndex = line.indexOf('=');
        const key = separatorIndex >= 0 ? line.slice(0, separatorIndex).trim() : line;
        const value = separatorIndex >= 0 ? line.slice(separatorIndex + 1).trim() : '';

        return [key, value.replace(/^["']|["']$/g, '')];
      }),
  );
};

const dotEnv = loadDotEnv();

const firebaseConfig = {
  apiKey: dotEnv.LIDO_FIREBASE_API_KEY ?? process.env.LIDO_FIREBASE_API_KEY,
  authDomain: dotEnv.LIDO_FIREBASE_AUTH_DOMAIN ?? process.env.LIDO_FIREBASE_AUTH_DOMAIN,
  databaseURL: dotEnv.LIDO_FIREBASE_DATABASE_URL ?? process.env.LIDO_FIREBASE_DATABASE_URL,
  projectId: dotEnv.LIDO_FIREBASE_PROJECT_ID ?? process.env.LIDO_FIREBASE_PROJECT_ID,
  storageBucket: dotEnv.LIDO_FIREBASE_STORAGE_BUCKET ?? process.env.LIDO_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: dotEnv.LIDO_FIREBASE_MESSAGING_SENDER_ID ?? process.env.LIDO_FIREBASE_MESSAGING_SENDER_ID,
  appId: dotEnv.LIDO_FIREBASE_APP_ID ?? process.env.LIDO_FIREBASE_APP_ID,
  measurementId: dotEnv.LIDO_FIREBASE_MEASUREMENT_ID ?? process.env.LIDO_FIREBASE_MEASUREMENT_ID,
};

const defineFirebaseConfig = () => {
  const replacement = JSON.stringify(firebaseConfig);

  return {
    name: 'define-firebase-config',
    transform(code: string) {
      if (!code.includes('__LIDO_FIREBASE_CONFIG__')) {
        return null;
      }

      return code.replace(/__LIDO_FIREBASE_CONFIG__/g, replacement);
    },
  };
};

export const config: Config = {
  globalStyle: 'src/css/index.css',
  namespace: 'lido-player',
  rollupPlugins: {
    before: [defineFirebaseConfig()],
  },
  extras: {
    enableImportInjection: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  sourceMap: false,
  testing: {
    browserHeadless: true,
  },
};
