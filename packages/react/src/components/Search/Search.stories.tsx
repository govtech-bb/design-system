import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from './Search';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ background: '#eaf9f9', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A search input with a submit button. Uses the HTML <search> landmark for accessibility. Pass an onSearch callback to handle navigation in your framework of choice.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    label: 'Search for a service',
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Search for a service',
    defaultValue: 'driving licence',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Search for a service',
    placeholder: 'e.g. renew passport',
  },
};

export const CustomButtonLabel: Story = {
  args: {
    label: 'Search',
    buttonLabel: 'Find',
  },
};
