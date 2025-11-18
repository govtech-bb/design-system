import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Text component for displaying body text, labels, and inline text elements with consistent styling. Supports multiple sizes, weights, and semantic HTML elements.',
      },
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'label', 'strong', 'em', 'small', 'del', 'ins', 's', 'sub', 'sup'],
      description: 'The HTML element to render',
    },
    size: {
      control: 'select',
      options: ['body', 'caption', 'small-caption'],
      description: 'The text size variant',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
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
type Story = StoryObj<typeof Text>;

export const Body: Story = {
  args: {
    as: 'p',
    size: 'body',
    children: 'This is body text used for most content throughout the application.',
  },
};

export const Caption: Story = {
  args: {
    as: 'p',
    size: 'caption',
    children: 'This is caption text for smaller supporting content.',
  },
};

export const SmallCaption: Story = {
  args: {
    as: 'p',
    size: 'small-caption',
    children: 'This is small caption text for fine print or metadata.',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Text as="p" size="body">
        Body (20px): The quick brown fox jumps over the lazy dog. This is the default text size used
        for most content throughout the application.
      </Text>
      <Text as="p" size="caption">
        Caption (16px): The quick brown fox jumps over the lazy dog. This text size is used for
        supporting content and secondary information.
      </Text>
      <Text as="p" size="small-caption">
        Small Caption (12px): The quick brown fox jumps over the lazy dog. This text size is used
        for fine print, metadata, or supplementary details.
      </Text>
    </div>
  ),
};
