import type { Meta, StoryObj } from '@storybook/react-vite';
import { BackButton } from './BackButton';

const meta: Meta<typeof BackButton> = {
  title: 'Components/BackButton',
  component: BackButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'BackButton component for navigation. Displays a left-pointing arrow with customizable text.',
      },
    },
  },
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL to navigate to',
    },
    children: {
      control: 'text',
      description: 'Button text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Back',
  },
};
