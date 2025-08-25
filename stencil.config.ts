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
      copy: [
        {
          src: 'components/home/Close.svg',
          dest: 'build/Close.svg',
        },
        {
          src: 'components/home/Previous.svg',
          dest: 'build/Previous.svg',
        },
        {
          src: 'components/home/AudioIcon.svg',
          dest: 'build/AudioIcon.svg',
        },
      ],
    },
  ],
  sourceMap: false,
  testing: {
    browserHeadless: 'new',
  },
};
