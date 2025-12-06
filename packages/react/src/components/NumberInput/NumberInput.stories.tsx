import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberInput } from './NumberInput';

const meta = {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    description: 'Type a number or use the controls to count.',
    className: 'w-[11rem]',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Age',
    description: 'Enter your age in years',
  },
};

export const WithError: Story = {
  args: {
    label: 'Amount',
    error: 'Please enter a valid amount',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Quantity',
    disabled: true,
    value: 5,
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Score',
    min: 0,
    max: 100,
    step: 5,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(0);

    return (
      <div className="flex flex-col gap-m">
        <NumberInput {...args} value={value} onChange={(e) => setValue(Number(e.target.value))} />
        <p className="text-[1.125rem]">Current value: {value}</p>
      </div>
    );
  },
  args: {
    label: 'Controlled Input',
    description: 'This input is controlled by React state',
  },
};
