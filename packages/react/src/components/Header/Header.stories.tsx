import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header.js';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Site header: logo + primary navigation with an accessible mobile disclosure menu. App-specific concerns (routing, analytics, official/stage banners) are composed by the consuming app.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    homeHref: '/',
    navItems: [{ label: 'Services', href: '/services' }],
  },
};

export const MultipleLinks: Story = {
  args: {
    homeHref: '/',
    navItems: [
      { label: 'Services', href: '/services' },
      { label: 'Topics', href: '/topics' },
      { label: 'About', href: '/about' },
    ],
  },
};

export const LogoOnly: Story = {
  args: { homeHref: '/' },
  parameters: {
    docs: { description: { story: 'No nav items — logo only, no mobile menu button.' } },
  },
};
