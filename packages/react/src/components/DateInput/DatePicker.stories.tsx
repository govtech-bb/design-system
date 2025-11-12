import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateInput } from './DateInput';

const meta: Meta<typeof DateInput> = {
  title: 'Components/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'DateInput component based on GOV.UK design system. Uses three separate text inputs for day, month, and year for better accessibility and form usability.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {
    label: 'Date of birth',
    description: 'For example, 31 3 1980',
  },
};

export const WithError: Story = {
  args: {
    label: 'Date of birth',
    description: 'For example, 31 3 1980',
    error: 'Enter a valid date of birth',
  },
};

export const WithFieldSpecificErrors: Story = {
  args: {
    label: 'Date of birth',
    description: 'For example, 31 3 1980',
    error: {
      day: 'Day must be between 1 and 31',
      month: 'Month must be between 1 and 12',
    },
  },
};

export const WithSingleFieldError: Story = {
  args: {
    label: 'Date of birth',
    description: 'For example, 31 3 1980',
    error: {
      year: 'Year must be in the past',
    },
  },
};

export const WithOnChangeCallback: Story = {
  render: () => {
    const DateInputWithCallback = () => {
      const [date, setDate] = useState({ day: '', month: '', year: '' });

      return (
        <div>
          <DateInput
            label="Select a date"
            description="For example, 31 3 1980"
            onChange={setDate}
          />
          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
            <p>
              <strong>Current date:</strong> {date.day || '-'}/{date.month || '-'}/
              {date.year || '-'}
            </p>
          </div>
        </div>
      );
    };

    return <DateInputWithCallback />;
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Date of birth',
    description: 'For example, 31 3 1980',
    defaultValue: { day: '25', month: '12', year: '1985' },
  },
};

export const ControlledMode: Story = {
  render: () => {
    const ControlledDateInput = () => {
      const [date, setDate] = useState({ day: '01', month: '06', year: '2000' });

      return (
        <div>
          <DateInput
            label="Select a date"
            description="For example, 31 3 1980"
            value={date}
            onChange={setDate}
          />
          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
            <p>
              <strong>Selected date:</strong> {date.day}/{date.month}/{date.year}
            </p>
            <button
              onClick={() => setDate({ day: '31', month: '12', year: '1999' })}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#0d9488',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Set to 31/12/1999
            </button>
          </div>
        </div>
      );
    };

    return <ControlledDateInput />;
  },
};
