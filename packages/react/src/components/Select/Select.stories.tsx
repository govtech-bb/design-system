import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, SelectItem } from './Select';

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
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div className="w-[400px]">
        <Select {...args} value={value} onValueChange={setValue}>
          {[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' },
          ].map((item) => (
            <SelectItem value={item.value}>{item.label}</SelectItem>
          ))}
        </Select>
      </div>
    );
  },
  args: {
    label: 'Choose an option',
    placeholder: 'Select an option...',
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div className="w-[400px]">
        <Select {...args} value={value} onValueChange={setValue}>
          {[
            { label: 'Singapore', value: 'sg' },
            { label: 'Malaysia', value: 'my' },
            { label: 'Indonesia', value: 'id' },
            { label: 'Thailand', value: 'th' },
          ].map((item) => (
            <SelectItem value={item.value}>{item.label}</SelectItem>
          ))}
        </Select>
      </div>
    );
  },
  args: {
    label: 'Country',
    placeholder: 'Select your country...',
  },
};

export const Required: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-[400px]">
        <Select {...args} value={value} onValueChange={setValue}>
          <SelectItem value="eng">Engineering</SelectItem>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="product">Product</SelectItem>
          <SelectItem value="hr">Human Resources</SelectItem>
        </Select>
      </div>
    );
  },
  args: {
    label: 'Department',
    required: true,
    placeholder: 'Select a department...',
  },
};

export const WithDescription: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-[400px]">
        <Select {...args} value={value} onValueChange={setValue}>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="zh">中文</SelectItem>
          <SelectItem value="ms">Bahasa Melayu</SelectItem>
          <SelectItem value="ta">தமிழ்</SelectItem>
        </Select>
      </div>
    );
  },
  args: {
    label: 'Preferred Language',
    description: 'Choose your preferred language for communications',
    placeholder: 'Select a language...',
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-[400px]">
        <Select {...args} value={value} onValueChange={setValue}>
          <SelectItem value="passport">Passport Services</SelectItem>
          <SelectItem value="license">Driver's License</SelectItem>
          <SelectItem value="tax">Tax Filing</SelectItem>
          <SelectItem value="housing">Housing Services</SelectItem>
        </Select>
      </div>
    );
  },
  args: {
    label: 'Service Type',
    error: 'Please select a service type',
    placeholder: 'Select a service...',
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <div className="w-[400px]">
        <Select {...args} defaultValue="pending">
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="rejected">Rejected</SelectItem>
        </Select>
      </div>
    );
  },
  args: {
    label: 'Status',
    disabled: true,
  },
};

export const WithManyOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-[400px]">
        <Select {...args} value={value} onValueChange={setValue}>
          {Array.from({ length: 100 }, (_, i) => {
            const year = 2024 - i;
            return (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            );
          })}
        </Select>
      </div>
    );
  },
  args: {
    label: 'Year of Birth',
    placeholder: 'Select year...',
  },
};

// Form integration example
export const InForm: Story = {
  render: (args) => {
    const [formData, setFormData] = useState({
      country: '',
      state: '',
      city: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(JSON.stringify(formData, null, 2));
    };

    return (
      <form onSubmit={handleSubmit} className="w-[400px] space-y-4">
        <Select
          label="Country"
          placeholder="Select country..."
          required
          value={formData.country}
          onValueChange={(value) => setFormData({ ...formData, country: value })}
        >
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="mx">Mexico</SelectItem>
        </Select>

        <Select
          label="State"
          placeholder="Select state..."
          required
          value={formData.state}
          onValueChange={(value) => setFormData({ ...formData, state: value })}
        >
          <SelectItem value="ca">California</SelectItem>
          <SelectItem value="ny">New York</SelectItem>
          <SelectItem value="tx">Texas</SelectItem>
        </Select>

        <Select
          label="City"
          placeholder="Select city..."
          required
          value={formData.city}
          onValueChange={(value) => setFormData({ ...formData, city: value })}
        >
          <SelectItem value="sf">San Francisco</SelectItem>
          <SelectItem value="la">Los Angeles</SelectItem>
          <SelectItem value="sd">San Diego</SelectItem>
        </Select>

        <button
          type="submit"
          className="w-full px-4 py-3 bg-neutral-black text-white rounded hover:bg-neutral-black/90"
        >
          Submit
        </button>
      </form>
    );
  },
};
