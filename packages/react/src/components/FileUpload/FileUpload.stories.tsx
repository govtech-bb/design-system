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
          'A file upload component that allows users to select files via button click or drag and drop. Supports single and multiple file selection with remove functionality.',
      },
    },
  },
  argTypes: {
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

// Default state with hint text
export const Default: Story = {
  args: {
    label: 'Upload document',
  },
};

// With description
export const WithDescription: Story = {
  args: {
    label: 'Upload document',
    description: 'Please upload your supporting documents',
  },
};

// With error
export const WithError: Story = {
  args: {
    label: 'Upload document',
    error: 'Please upload a valid document',
  },
};

// Multiple files
export const MultipleFiles: Story = {
  args: {
    label: 'Upload documents',
    description: 'You can select multiple files',
    multiple: true,
  },
};

// Accept specific file types
export const AcceptImages: Story = {
  args: {
    label: 'Upload image',
    accept: 'image/*',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Upload document',
    disabled: true,
  },
};

// Required field
export const Required: Story = {
  args: {
    label: 'Upload document',
    required: true,
  },
};

// Without hint text
export const WithoutHint: Story = {
  args: {
    label: 'Upload document',
  },
};

// With single file uploaded
export const WithFile: Story = {
  render: () => {
    const ControlledFileUpload = () => {
      const [files, setFiles] = useState<File[]>([
        new File([''], 'document.pdf', { type: 'application/pdf' }),
      ]);

      return <FileUpload label="Upload document" value={files} onChange={setFiles} />;
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
      ]);

      return <FileUpload label="Upload documents" multiple value={files} onChange={setFiles} />;
    };

    return <ControlledFileUpload />;
  },
};

// Single file with long name
export const LongFileName: Story = {
  render: () => {
    const ControlledFileUpload = () => {
      const [files, setFiles] = useState<File[]>([
        new File(
          [''],
          'really really really really really really really really really really really long file name.pdf',
          { type: 'application/pdf' },
        ),
      ]);

      return <FileUpload label="Upload document" value={files} onChange={setFiles} />;
    };

    return <ControlledFileUpload />;
  },
};

// Custom text
export const CustomText: Story = {
  args: {
    label: 'Attach file',
    buttonText: 'Browse files',
    removeFileText: 'Delete',
  },
};
