import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Breadcrumbs navigation component.',
      },
    },
  },
  argTypes: {
    homeHref: {
      control: 'text',
      description: 'When set, a "Home" link is prepended to the breadcrumb trail',
    },
    collapseOnMobile: {
      control: 'boolean',
      description: 'Collapse intermediate crumbs on mobile, showing only the first and last',
    },
    linkAs: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    homeHref: '#',
    items: [
      { label: 'Services', href: '#services' },
      { label: 'Business Registration', href: '#services/business-registration' },
    ],
  },
};

export const WithoutHome: Story = {
  args: {
    items: [
      { label: 'Services', href: '#services' },
      { label: 'Business Registration', href: '#services/business-registration' },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    homeHref: '#',
    items: [{ label: 'Services', href: '#services' }],
  },
};

export const DeepNesting: Story = {
  args: {
    homeHref: '#',
    items: [
      { label: 'Services', href: '#services' },
      { label: 'Business Registration', href: '#services/business-registration' },
      { label: 'New Application', href: '#services/business-registration/new-application' },
      {
        label: 'Review & Submit',
        href: '#services/business-registration/new-application/review',
      },
    ],
  },
};

export const MobileCollapse: Story = {
  args: {
    homeHref: '#',
    collapseOnMobile: false,
    items: [
      { label: 'Services', href: '#services' },
      { label: 'Business Registration', href: '#services/business-registration' },
      { label: 'New Application', href: '#services/business-registration/new-application' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `collapseOnMobile` is enabled, intermediate breadcrumb items are hidden on small screens, showing only the first and last items. Resize the viewport to see the effect.',
      },
    },
  },
};
