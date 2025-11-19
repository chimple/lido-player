import "../src/css/index.css";

import {defineCustomElements} from '../loader';
defineCustomElements();

import type { Preview } from '@storybook/web-components'
import { AudioPlayer } from '../src/utils/audioPlayer';

// Create/get the singleton AudioPlayer once so we can reuse it in the decorator
const audioPlayer = AudioPlayer.getI();

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

export const decorators = [
  (Story: any, context: any) => {
    // Stop any playing audio when switching stories
    try {
      audioPlayer.stop();
    } catch (error) {
      console.warn('Failed to stop audio player on story change:', error);
    }
    return Story();
  }
];

// Hot Module Replacement: teardown the AudioPlayer to avoid duplicated listeners
if ((module as any)?.hot) {
  (module as any).hot.dispose(() => {
    try {
      audioPlayer.destroy();
    } catch (e) {
      console.warn('Failed to destroy AudioPlayer on HMR dispose:', e);
    }
  });
}

export default preview;