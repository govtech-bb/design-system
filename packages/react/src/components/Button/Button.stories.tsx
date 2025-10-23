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

// Show all states
// export const AllStates: Story = {
//   render: () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//       <Button>Base</Button>
//       <Button>Hover (simulated)</Button>
//       <Button>Pressed (simulated)</Button>
//       <Button>Focus (simulated)</Button>
//     </div>
//   ),
// };
