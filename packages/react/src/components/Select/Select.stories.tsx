import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A flexible and accessible select dropdown component with support for labels, errors, and helper text. Uses the same styling as the Input component for consistency.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the select is required',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// Basic Examples
export const Default: Story = {
  args: {
    children: (
      <>
        <option value="">Select an option...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Country',
    children: (
      <>
        <option value="">Select a country...</option>
        <option value="sg">Singapore</option>
        <option value="my">Malaysia</option>
        <option value="id">Indonesia</option>
        <option value="th">Thailand</option>
      </>
    ),
  },
};

export const Required: Story = {
  args: {
    label: 'Department',
    required: true,
    children: (
      <>
        <option value="">Select a department...</option>
        <option value="eng">Engineering</option>
        <option value="design">Design</option>
        <option value="product">Product</option>
        <option value="hr">Human Resources</option>
      </>
    ),
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Preferred Language',
    description: 'Choose your preferred language for communications',
    children: (
      <>
        <option value="">Select a language...</option>
        <option value="en">English</option>
        <option value="zh">中文</option>
        <option value="ms">Bahasa Melayu</option>
        <option value="ta">தமிழ்</option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: 'Service Type',
    error: 'Please select a service type',
    defaultValue: '',
    children: (
      <>
        <option value="">Select a service...</option>
        <option value="passport">Passport Services</option>
        <option value="license">Driver's License</option>
        <option value="tax">Tax Filing</option>
        <option value="housing">Housing Services</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Status',
    disabled: true,
    defaultValue: 'pending',
    children: (
      <>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </>
    ),
  },
};

export const WithManyOptions: Story = {
  args: {
    label: 'Year of Birth',
    children: (
      <>
        <option value="">Select year...</option>
        {Array.from({ length: 100 }, (_, i) => {
          const year = 2024 - i;
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </>
    ),
  },
};
