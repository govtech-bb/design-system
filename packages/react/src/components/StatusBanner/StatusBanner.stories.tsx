import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusBanner } from './StatusBanner.js';

const meta: Meta<typeof StatusBanner> = {
  title: 'Components/StatusBanner',
  component: StatusBanner,
  tags: ['autodocs'],
  args: {
    children: 'This is a status banner message.',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to display inside the status banner',
    },
    variant: {
      control: 'select',
      options: ['alpha', 'beta', 'migrated', 'service-issue'],
      description: 'Predefined status banner variants',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'StatusBanner component for displaying page status messages like Alpha, Beta, Migrated content, or Service issues.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBanner>;

export const Alpha: Story = {
  args: {
    variant: 'alpha',
    children: (
      <>
        This page is in <span className="underline decoration-solid underline-offset-2">Alpha</span>
        .
      </>
    ),
  },
};

export const Beta: Story = {
  args: {
    variant: 'beta',
    children: (
      <>
        This page is in <span className="underline decoration-solid underline-offset-2">Beta</span>.
      </>
    ),
  },
};

export const Migrated: Story = {
  args: {
    variant: 'migrated',
    children: (
      <>
        <p className="mb-4">
          This content has been migrated from{' '}
          <span className="underline decoration-solid">gov.bb</span>. It may be out of date or
          displayed incorrectly.
        </p>
        <p className="underline decoration-solid">View the original source</p>
      </>
    ),
  },
};

export const ServiceIssue: Story = {
  args: {
    variant: 'service-issue',
    children: 'Service',
  },
};
