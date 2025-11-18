import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Heading component for displaying headings with consistent styling. Supports multiple sizes, weights, and alignment options.',
      },
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'display'],
      description: 'The HTML heading element to render',
    },
    size: {
      control: 'select',
      options: ['display', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The visual size of the heading',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold', 'extrabold'],
      description: 'The font weight',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Display: Story = {
  args: {
    as: 'display',
    children: 'Display Heading',
  },
};

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
};

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
  },
};

export const H3: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3',
  },
};

export const H4: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4',
  },
};

export const H5: Story = {
  args: {
    as: 'h5',
    children: 'Heading 5',
  },
};

export const H6: Story = {
  args: {
    as: 'h6',
    children: 'Heading 6',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <Heading as="display">Display - The largest heading</Heading>
      <Heading as="h1">Heading 1 - Primary page title</Heading>
      <Heading as="h2">Heading 2 - Section heading</Heading>
      <Heading as="h3">Heading 3 - Subsection heading</Heading>
      <Heading as="h4">Heading 4 - Minor heading</Heading>
      <Heading as="h5">Heading 5 - Small heading</Heading>
      <Heading as="h6">Heading 6 - Smallest heading</Heading>
    </div>
  ),
};
