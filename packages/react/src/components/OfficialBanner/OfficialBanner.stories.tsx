import type { Meta, StoryObj } from '@storybook/react-vite';
import { OfficialBanner } from './OfficialBanner.js';

const meta: Meta<typeof OfficialBanner> = {
  title: 'Components/OfficialBanner',
  component: OfficialBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Official Government Website banner component - displays at the top of government websites to indicate authenticity.',
      },
    },
  },
  argTypes: {
    showLearnMore: {
      control: 'boolean',
      description: 'Whether to show the "Learn more" link',
    },
  },
};

export default meta;
type Story = StoryObj<typeof OfficialBanner>;

export const Default: Story = {
  args: {
    showLearnMore: true,
  },
};

export const WithoutLink: Story = {
  args: {
    showLearnMore: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Banner without the "Learn more" link',
      },
    },
  },
};

export const InPageLayout: Story = {
  render: () => (
    <div>
      <OfficialBanner />
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Government Website</h1>
        <p>This demonstrates how the Official Government Banner appears at the top of a page.</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of banner in a page layout',
      },
    },
  },
};
