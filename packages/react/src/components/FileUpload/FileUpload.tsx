import { forwardRef, InputHTMLAttributes, useRef, useState } from 'react';
import { cn } from '../../utils/css';
import { mergeRefs } from '../../utils/refs';
import { Button, buttonVariants } from '../Button/Button';
import { Text } from '../Typography';
import { useFormFieldIds } from '../../utils/useFormFieldIds';

export interface FileUploadProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange'
> {
  /** Label for the file input (shown as title inside the dropzone) */
  label?: string;
  /** Subtitle shown inside the dropzone (e.g., accepted file types) */
  subtitle?: string;
  /** Text for the choose file button */
  buttonText?: string;
  /** Maximum file size text shown below button */
  maxSizeText?: string;
  /** Text for the remove file button */
  removeFileText?: string;
  /** Error message to display */
  error?: string;
  /** Controlled file value */
  value?: File[];
  /** Callback when files change */
  onChange?: (files: File[]) => void;
}

interface FileItemProps {
  file: File;
  onRemove: () => void;
  removeFileText: string;
}

const FileItem = ({ file, onRemove, removeFileText }: FileItemProps) => {
  return (
    <li className="flex gap-s items-center justify-between w-full p-s bg-blue-10 rounded-sm">
      <Text as={'span'} size={'body'} className="text-black-00 truncate min-w-0 flex-1">
        {file.name}
      </Text>
      <Button
        variant="destructive-link"
        onClick={onRemove}
        type="button"
        aria-label={`${removeFileText} ${file.name}`}
      >
        {removeFileText}
      </Button>
    </li>
  );
};

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      label = 'Upload a file',
      subtitle = 'Attach a .pdf, .docx, or .png file',
      buttonText = 'Choose file',
      maxSizeText = 'Maximum size: 25MB',
      removeFileText = 'Remove',
      error,
      className,
      disabled,
      required,
      multiple,
      accept,
      id: providedId,
      value: controlledFiles,
      onChange,
      ...props
    },
    ref,
  ) => {
    const { id, errorId } = useFormFieldIds(providedId);
    const inputRef = useRef<HTMLInputElement>(null);

    const [internalFiles, setInternalFiles] = useState<File[]>([]);
    const files = controlledFiles !== undefined ? controlledFiles : internalFiles;

    const hasFiles = files.length > 0;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(event.target.files || []);
      const newFiles = multiple ? [...files, ...selectedFiles] : selectedFiles;

      if (onChange) {
        onChange(newFiles);
      } else {
        setInternalFiles(newFiles);
      }

      // Reset input value to allow selecting the same file again
      event.target.value = '';
    };

    const handleRemoveFile = (fileToRemove: File) => {
      const newFiles = files.filter((file) => file !== fileToRemove);

      if (onChange) {
        onChange(newFiles);
      } else {
        setInternalFiles(newFiles);
      }
    };

    return (
      <div className={cn('flex flex-col gap-xs w-full', className)}>
        {/* Dropzone - label wraps entire area so clicking anywhere triggers input */}
        <label
          htmlFor={id}
          className={cn(
            'flex flex-col items-center text-center gap-m px-s py-xm w-full cursor-pointer',
            'md:flex-row md:items-center md:text-left',
            'border border-dashed rounded-sm',
            error ? 'border-red-00' : 'border-grey-00',
            disabled && 'opacity-40 cursor-not-allowed',
          )}
        >
          {/* Title and subtitle */}
          <div className="flex flex-col gap-xxs flex-1 md:items-start items-center text-mid-grey-00">
            <Text as={'span'} size={'body'} weight={'bold'}>
              {label}
            </Text>
            <Text as={'span'} size={'caption'} weight={'normal'}>
              {subtitle}
            </Text>
          </div>

          {/* Hidden file input */}
          <input
            ref={mergeRefs(ref, inputRef)}
            type="file"
            id={id}
            disabled={disabled}
            required={required}
            multiple={multiple}
            accept={accept}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            aria-required={required}
            className="sr-only"
            onChange={handleFileChange}
            {...props}
          />

          {/* Choose file styled as button + max size */}
          <div className="flex flex-col gap-xxs items-center md:items-start">
            <span
              className={cn(
                buttonVariants({ variant: 'tertiary' }),
                disabled && 'pointer-events-none',
              )}
              aria-hidden="true"
            >
              {buttonText}
            </span>
            <span className="text-caption text-mid-grey-00 leading-normal">{maxSizeText}</span>
          </div>
        </label>

        {/* Error message */}
        {error && (
          <Text as={'p'} size={'body'} id={errorId} role="alert" className="text-red-00">
            {error}
          </Text>
        )}

        {/* File list */}
        {hasFiles && (
          <ul className="flex flex-col gap-xxs w-full list-none m-0 p-0">
            {files.map((file) => (
              <FileItem
                key={`${file.name}-${file.size}-${file.lastModified}`}
                file={file}
                onRemove={() => handleRemoveFile(file)}
                removeFileText={removeFileText}
              />
            ))}
          </ul>
        )}
      </div>
    );
  },
);

FileUpload.displayName = 'FileUpload';

export { FileUpload };
