import "../src/css/index.css";

import {defineCustomElements} from '../loader';
defineCustomElements();

import type { Preview } from '@storybook/web-components'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;