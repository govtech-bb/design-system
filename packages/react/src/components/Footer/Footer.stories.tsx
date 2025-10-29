import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer.js';

// Logo URL from public directory - served via Storybook staticDirs
const LOGO_URL = `${import.meta.env.BASE_URL || '/'}images/coat-of-arms.png`.replace(/\/+/g, '/');

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'GovTechBB Footer component ',
      },
    },
  },
  argTypes: {
    links: {
      description: 'Array of navigation links with label and href or onClick',
    },
    logoSrc: {
      control: 'text',
      description: 'URL or path to the coat of arms logo',
    },
    logoAlt: {
      control: 'text',
      description: 'Alt text for the logo',
    },
    copyrightText: {
      control: 'text',
      description: 'Copyright text to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    links: [
      { label: 'Home', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
    logoSrc: LOGO_URL,
    logoAlt: 'Government of Barbados Coat of Arms',
    copyrightText: '© 2025 Government of Barbados',
  },
};

export const CustomCopyright: Story = {
  args: {
    links: [
      { label: 'Home', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
    logoSrc: LOGO_URL,
    copyrightText: '© 2025 My Government Website',
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with custom copyright text',
      },
    },
  },
};
