import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.js';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click me!',
  },
  parameters: {
    docs: {
      description: {
        component: 'GovTechBB Button Template',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'link', 'destructive-link'],
      description: 'The visual style of the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

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
