import { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, RadioGroup, type RadioProps } from './Radio';

// Extended args type for Storybook controls
interface RadioStoryArgs extends RadioProps {
  isGroup?: boolean;
  groupLabel?: string;
  groupDescription?: string;
}

const meta: Meta<RadioStoryArgs> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const { isGroup, groupLabel, groupDescription } = context.args as RadioStoryArgs;

      if (isGroup) {
        return (
          <RadioGroup label={groupLabel} description={groupDescription}>
            <Story />
          </RadioGroup>
        );
      }

      return (
        <RadioGroup>
          <Story />
        </RadioGroup>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        component:
          'An accessible radio button component following the GOV.BB design system with support for labels, descriptions, and error states.',
      },
    },
  },
  argTypes: {
    value: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text for the radio',
    },
    isGroup: {
      control: 'boolean',
      description: 'Show as RadioGroup with label and description',
      table: {
        category: 'Group Options',
      },
    },
    groupLabel: {
      control: 'text',
      description: 'Label for the RadioGroup (only when isGroup is true)',
      if: { arg: 'isGroup' },
      table: {
        category: 'Group Options',
      },
    },
    groupDescription: {
      control: 'text',
      description: 'Description for the RadioGroup (only when isGroup is true)',
      if: { arg: 'isGroup' },
      table: {
        category: 'Group Options',
      },
    },
  },
};

export default meta;
type Story = StoryObj<RadioStoryArgs>;

// Basic Examples
export const Default: Story = {
  args: {
    value: 'option1',
    id: 'radio1',
  },
};

export const Selected: Story = {
  args: {
    value: 'option1',
    id: 'radio-selected',
  },
  decorators: [
    (Story) => (
      <RadioGroup defaultValue="option1">
        <Story />
      </RadioGroup>
    ),
  ],
};

export const WithLabel: Story = {
  args: {
    value: 'option1',
    id: 'radio-label',
    label: 'I agree to the terms and conditions',
  },
};

export const SelectedWithLabel: Story = {
  args: {
    value: 'option1',
    id: 'radio-selected-label',
    label: 'Subscribe to newsletter',
  },
  decorators: [
    (Story) => (
      <RadioGroup defaultValue="option1">
        <Story />
      </RadioGroup>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    value: 'option1',
    id: 'radio-disabled',
    disabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    value: 'option1',
    id: 'radio-disabled-selected',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <RadioGroup defaultValue="option1">
        <Story />
      </RadioGroup>
    ),
  ],
};

export const Error: Story = {
  args: {
    value: 'option1',
    id: 'radio-error',
    label: 'This field has an error',
    'aria-invalid': true,
  },
};

export const Group: Story = {
  render: () => (
    <RadioGroup label="Label" description="Description" defaultValue="option1">
      <Radio value="option1" id="group-option1" label="Option 1" />
      <Radio value="option2" id="group-option2" label="Option 2" />
    </RadioGroup>
  ),
};

export const GroupWithSelection: Story = {
  render: () => (
    <RadioGroup
      label="Select your preference"
      description="Choose one option"
      defaultValue="option2"
    >
      <Radio value="option1" id="pref-option1" label="Option 1" />
      <Radio value="option2" id="pref-option2" label="Option 2" />
      <Radio value="option3" id="pref-option3" label="Option 3" />
    </RadioGroup>
  ),
};

export const MultipleGroups: Story = {
  render: () => (
    <div className="space-y-8">
      <RadioGroup
        label="Shipping Method"
        description="Select your preferred shipping method"
        defaultValue="standard"
      >
        <Radio value="standard" id="ship-standard" label="Standard Shipping (5-7 days)" />
        <Radio value="express" id="ship-express" label="Express Shipping (2-3 days)" />
        <Radio value="overnight" id="ship-overnight" label="Overnight Shipping (1 day)" />
      </RadioGroup>
      <RadioGroup
        label="Payment Method"
        description="Choose how you want to pay"
        defaultValue="credit"
      >
        <Radio value="credit" id="pay-credit" label="Credit Card" />
        <Radio value="debit" id="pay-debit" label="Debit Card" />
        <Radio value="paypal" id="pay-paypal" label="PayPal" />
      </RadioGroup>
    </div>
  ),
};
