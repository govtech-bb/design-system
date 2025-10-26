import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './Logo.js';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'GovTechBB Logo component - Government of Barbados official logo',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomColor: Story = {
  args: {
    width: '400px',
    color: '#0e5f64',
  },
};
