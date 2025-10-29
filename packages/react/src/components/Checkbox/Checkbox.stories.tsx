import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, CheckboxGroup } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An accessible checkbox component following the GOV.BB design system with support for labels, descriptions, and error states.',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Basic Examples
export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  args: {
    id: 'terms',
    name: 'terms',
    label: 'I agree to the terms and conditions',
  },
};

export const CheckedWithLabel: Story = {
  args: {
    id: 'newsletter',
    name: 'newsletter',
    label: 'Subscribe to newsletter',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const Required: Story = {
  args: {
    id: 'accept',
    name: 'accept',
    label: 'Accept terms (required)',
    required: true,
  },
};

export const Error: Story = {
  args: {
    id: 'error-checkbox',
    label: 'This field has an error',
    'aria-invalid': true,
  },
};

export const Group: Story = {
  render: () => (
    <CheckboxGroup label="Label" description="Description">
      <Checkbox id="option1" name="options" label="Option 1" />
      <Checkbox id="option2" name="options" label="Option 2" />
    </CheckboxGroup>
  ),
};

export const GroupWithCheckedItem: Story = {
  render: () => (
    <CheckboxGroup label="Select your preferences" description="Choose one or more options">
      <Checkbox id="pref1" name="preferences" label="Option 1" defaultChecked />
      <Checkbox id="pref2" name="preferences" label="Option 2" />
      <Checkbox id="pref3" name="preferences" label="Option 3" />
    </CheckboxGroup>
  ),
};
