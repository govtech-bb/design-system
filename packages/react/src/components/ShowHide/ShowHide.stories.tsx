import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../Input/Input.js';
import { Typography } from '../Typography/Typography.js';
import { ShowHide } from './ShowHide.js';

const meta: Meta<typeof ShowHide> = {
  title: 'Components/ShowHide',
  component: ShowHide,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A collapsible component built on the HTML details/summary elements. Useful for progressive disclosure of content.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShowHide>;

export const Default: Story = {
  args: {
    summary: 'Use passport number instead',
    children: (
      <div>
        <p className="mb-4 text-neutral-midgrey leading-[1.7] text-[20px]">
          If you don't have a National Registration number, you can use your passport number
          instead.
        </p>
        <Input
          label="Passport number"
          id="passport-number"
          placeholder="Enter passport number"
          className="w-86"
        />
      </div>
    ),
  },
};

export const SimpleText: Story = {
  args: {
    summary: 'More information',
    children: (
      <Typography variant="body" className="text-neutral-midgrey">
        This is additional information that can be shown or hidden by clicking the summary.
      </Typography>
    ),
  },
};

export const NestedContent: Story = {
  args: {
    summary: 'View detailed instructions',
    children: (
      <div className="space-y-4">
        <Typography variant="h4">Step-by-step guide</Typography>
        <ol className="list-decimal list-inside space-y-2 text-neutral-midgrey">
          <li>First, gather all required documents</li>
          <li>Fill out the application form completely</li>
          <li>Submit the form and wait for confirmation</li>
          <li>Check your email for further instructions</li>
        </ol>
      </div>
    ),
  },
};

export const DefaultOpen: Story = {
  args: {
    summary: 'Already expanded',
    open: true,
    children: (
      <Typography variant="body" className="text-neutral-midgrey">
        This ShowHide component is open by default.
      </Typography>
    ),
  },
};
