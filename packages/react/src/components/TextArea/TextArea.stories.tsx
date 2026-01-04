import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/Textarea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A flexible and accessible textarea component with support for labels, errors, and helper text. Uses the same styling as the Input component for consistency.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

// Basic Examples
export const Default: Story = {
  args: {
    label: 'Can you provide more details?',
    rows: 4,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Comments',
    rows: 4,
  },
};

export const Required: Story = {
  args: {
    label: 'Feedback',
    required: true,
    rows: 4,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Additional Information',
    description: 'Please provide any additional details that may be relevant',
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    error: 'This field is required',
    defaultValue: '',
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    disabled: true,
    defaultValue: 'This textarea is disabled and cannot be edited.',
    rows: 4,
  },
};

export const LargeTextarea: Story = {
  args: {
    label: 'Detailed Description',
    rows: 10,
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Bio',
    description: 'Tell us about yourself',
    defaultValue:
      'I am a software engineer with a passion for building user-friendly applications. I have experience in web development, mobile development, and cloud computing.',
    rows: 6,
  },
};
