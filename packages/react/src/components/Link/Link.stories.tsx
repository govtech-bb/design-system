import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link.js';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    children: 'This is a link',
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        component: 'GovTechBB Link component',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'This is a link',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'This link is to be used on backgrounds?',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#eaf9f9', padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'This is a link',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#00267f', padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};

export const External: Story = {
  args: {
    variant: 'default',
    children: 'Check out alpha.gov.bb!',
    href: 'https://alpha.gov.bb/',
    external: true,
  },
};
