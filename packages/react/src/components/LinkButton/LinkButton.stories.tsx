import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkButton } from './LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  args: {
    children: 'Click me!',
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        component:
          'An anchor element styled as a button. Use when you need a link that looks like a button.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'link', 'destructive-link'],
      description: 'The visual style of the link button',
    },
    external: {
      control: 'boolean',
      description:
        'Whether this is an external link (adds target="_blank" and rel="noopener noreferrer")',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Learn more',
  },
};

export const DestructiveLink: Story = {
  args: {
    variant: 'destructive-link',
    children: 'Remove',
  },
};

export const External: Story = {
  args: {
    variant: 'primary',
    href: 'https://example.com',
    external: true,
    children: 'Visit site',
  },
};
