import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../packages/**/*.mdx', '../docs/**/*.mdx'],
  staticDirs: ['../public'],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  typescript: {
    check: true,
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      base: configType === 'PRODUCTION' ? '/design-system/' : '/',
      plugins: [tailwindcss()],
    });
  },
};

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

export default config;
