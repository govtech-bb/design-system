import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Typography component following the GOV.BB design system typography scale with semantic variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['display', 'h1', 'h2', 'h3', 'h4', 'body-lg', 'body'],
      description: 'The typography variant to use',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      description: 'The HTML element to render',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Display: Story = {
  args: {
    variant: 'display',
    children: 'Display Text',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const BodyLarge: Story = {
  args: {
    variant: 'body-lg',
    children: 'Large body text for emphasis or introductory paragraphs.',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Regular body text used for most content throughout the application.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <Typography variant="display">Display Text</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="body-lg">
        Large body text: The quick brown fox jumps over the lazy dog. This text style is used for
        emphasis or introductory paragraphs.
      </Typography>
      <Typography variant="body">
        Body text: The quick brown fox jumps over the lazy dog. This is the default text style used
        for most content throughout the application.
      </Typography>
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h2" className="text-blue-100">
        Blue Heading
      </Typography>
      <Typography variant="h2" className="text-green-100">
        Green Heading
      </Typography>
      <Typography variant="h2" className="text-red-100">
        Red Heading
      </Typography>
      <Typography variant="h2" className="text-purple-100">
        Purple Heading
      </Typography>
      <Typography variant="body" className="text-blue-100">
        Blue body text with proper line height and spacing.
      </Typography>
    </div>
  ),
};

export const CustomElement: Story = {
  args: {
    variant: 'h1',
    as: 'span',
    children: 'Heading 1 styled as a span element',
  },
};

export const ContentExample: Story = {
  render: () => (
    <article className="max-w-2xl space-y-4">
      <Typography variant="h1">Article Title</Typography>
      <Typography variant="body-lg">
        This is an introductory paragraph with larger text to draw attention and provide context
        for the article content.
      </Typography>
      <Typography variant="h2">Section Heading</Typography>
      <Typography variant="body">
        Regular body text provides detailed information. The typography system ensures consistent
        spacing, sizing, and readability across all text elements.
      </Typography>
      <Typography variant="h3">Subsection Heading</Typography>
      <Typography variant="body">
        More detailed content continues here. The line height and font size are optimized for
        comfortable reading.
      </Typography>
      <Typography variant="h4">Minor Heading</Typography>
      <Typography variant="body">
        Additional details and supporting information for the subsection above.
      </Typography>
    </article>
  ),
};
