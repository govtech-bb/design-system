import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A file upload component that allows users to select files. Supports single and multiple file selection with remove functionality.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the file input (shown inside the dropzone)',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle shown inside the dropzone',
    },
    maxSizeText: {
      control: 'text',
      description: 'Maximum file size text shown below button',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the file upload is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the file upload is required',
    },
    multiple: {
      control: 'boolean',
      description: 'Whether multiple files can be selected',
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (e.g., "image/*", ".pdf,.doc")',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

// Default
export const Default: Story = {
  args: {},
};

// With error
export const WithError: Story = {
  args: {
    error: 'Please upload a valid document',
  },
};

// Multiple files allowed
export const MultipleFiles: Story = {
  args: {
    multiple: true,
  },
};

// Accept specific file types
export const AcceptImages: Story = {
  args: {
    label: 'Upload an image',
    subtitle: 'Attach a .jpg, .png, or .gif file',
    accept: 'image/*',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// With file uploaded
export const WithFile: Story = {
  render: () => {
    const ControlledFileUpload = () => {
      const [files, setFiles] = useState<File[]>([
        new File([''], 'document.pdf', { type: 'application/pdf' }),
      ]);

      return <FileUpload value={files} onChange={setFiles} />;
    };

    return <ControlledFileUpload />;
  },
};

// With multiple files uploaded
export const WithMultipleFiles: Story = {
  render: () => {
    const ControlledFileUpload = () => {
      const [files, setFiles] = useState<File[]>([
        new File([''], 'document.pdf', { type: 'application/pdf' }),
        new File([''], "driver's license.png", { type: 'image/png' }),
        new File([''], 'proof_of_address.docx', { type: 'application/msword' }),
      ]);

      return <FileUpload multiple value={files} onChange={setFiles} />;
    };

    return <ControlledFileUpload />;
  },
};

// Long file name (truncates)
export const LongFileName: Story = {
  render: () => {
    const ControlledFileUpload = () => {
      const [files, setFiles] = useState<File[]>([
        new File(
          [''],
          'really really really really really really really really really really really really really really really really long file name.pdf',
          { type: 'application/pdf' },
        ),
      ]);

      return <FileUpload value={files} onChange={setFiles} />;
    };

    return <ControlledFileUpload />;
  },
};

// Custom text
export const CustomText: Story = {
  args: {
    label: 'Attach your documents',
    subtitle: 'Upload PDF, Word, or image files',
    buttonText: 'Browse files',
    maxSizeText: 'Max file size: 10MB',
    removeFileText: 'Delete',
  },
};
