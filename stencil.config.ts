import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/css/index.css',
  namespace: 'lido-player',
  extras: {
    enableImportInjection: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'css/fonts.css',
          dest: 'css/fonts.css',
        },
        {
          src: 'assets/offline-assets/fonts/Baloo-Bhai-2',
          dest: 'assets/offline-assets/fonts/Baloo-Bhai-2',
        },
      ],
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
