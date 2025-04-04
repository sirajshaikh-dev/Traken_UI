import type { Preview } from '@storybook/react';
import '../src/index.css';  //baad me verify krna h 

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