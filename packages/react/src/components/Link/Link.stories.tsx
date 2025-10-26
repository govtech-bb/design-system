import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link.js';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    children: 'This is a link',
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        component: 'GovTechBB Link component',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'This is a link',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'This link is to be used on backgrounds?',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#eaf9f9', padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};

export const External: Story = {
  args: {
    variant: 'default',
    children: 'Check out alpha.gov.bb!',
    href: 'https://alpha.gov.bb/',
    external: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Default variant</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div>
            <Link href="#">This is a link</Link> <span>- Default</span>
          </div>
          <div>
            <Link href="#">This is a link</Link> <span>- Hover</span>
          </div>
          <div>
            <Link href="#">This is a link</Link> <span>- Active / Focus</span>
          </div>
          <div>
            <Link href="#">This is a link</Link> <span>- Visited</span>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#eaf9f9', padding: '1rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>On Background</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div>
            <Link href="#" variant="secondary">
              This is a link
            </Link>{' '}
            <span>- Default</span>
          </div>
          <div>
            <Link href="#" variant="secondary">
              This is a link
            </Link>{' '}
            <span>- Hover (white background)</span>
          </div>
          <div>
            <Link href="#" variant="secondary">
              This is a link
            </Link>{' '}
            <span>- Active / Focus</span>
          </div>
          <div>
            <Link href="#" variant="secondary">
              This is a link
            </Link>{' '}
            <span>- Visited</span>
          </div>
        </div>
      </div>
    </div>
  ),
};
