import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { ErrorSummary } from './ErrorSummary';

const meta: Meta<typeof ErrorSummary> = {
  title: 'Components/ErrorSummary',
  component: ErrorSummary,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'GovTechBB ErrorSummary component.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorSummary>;

export const Default: Story = {
  args: {
    title: 'Some errors',
    errors: [
      { text: 'Please enter a first name', target: '#name' },
      { text: 'Please enter a first name', target: '#name' },
      { text: 'Please enter a first name', target: '#name' },
      { text: 'Please enter a first name', target: '#name' },
      { text: 'Please enter a first name', target: '#name' },
    ],
  },
};

export const SingleError: Story = {
  args: {
    title: 'There is a problem',
    errors: [{ text: 'Enter your full name', target: '#name' }],
  },
};

export const MultipleErrors: Story = {
  args: {
    title: 'There is a problem',
    errors: [
      { text: 'Enter a valid email address', target: '#email' },
      { text: 'Enter your password', target: '#password' },
      { text: 'Password must be at least 8 characters', target: '#password' },
      { text: 'Select your country', target: '#country' },
      { text: 'Enter your phone number', target: '#phone' },
    ],
  },
};

export const NoErrors: Story = {
  args: {
    title: 'There is a problem',
    errors: [],
  },
};

export const WithFormExample: Story = {
  render: () => {
    const FormExample = () => {
      const [formData, setFormData] = useState({
        firstName: '',
        email: '',
      });
      const [errors, setErrors] = useState<Array<{ text: string; target: string }>>([]);

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = [];

        if (!formData.firstName) {
          newErrors.push({ text: 'Enter your first name', target: '#firstName' });
        }
        if (!formData.email) {
          newErrors.push({ text: 'Enter a valid email address', target: '#email' });
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.push({ text: 'Enter a valid email address', target: '#email' });
        }

        setErrors(newErrors);

        if (newErrors.length === 0) {
          alert('Form submitted successfully!');
        }
      };

      const getFieldError = (fieldId: string) => {
        return errors.find((error) => error.target === `#${fieldId}`)?.text;
      };

      return (
        <div className="max-w-3xl">
          <h1 className="text-h1 mb-6">Contact Form</h1>

          {errors.length > 0 && (
            <ErrorSummary title="There is a problem with your submission" errors={errors} />
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Input
                id="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                error={getFieldError('firstName')}
              />

              <Input
                id="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={getFieldError('email')}
                description="We'll never share your email"
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" variant="primary">
                Submit Form
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setFormData({ firstName: '', email: '' });
                  setErrors([]);
                }}
              >
                Clear Form
              </Button>
            </div>
          </form>
        </div>
      );
    };

    return <FormExample />;
  },
};
