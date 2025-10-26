import type { Preview } from '@storybook/react-vite';
import './styles.css';

export const parameters: Preview['parameters'] = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
