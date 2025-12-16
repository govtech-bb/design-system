import { forwardRef, InputHTMLAttributes, useId, useRef, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/css';
import { mergeRefs } from '../../utils/refs';
import { Button } from '../Button/Button';

const fileUploadVariants = cva(
  'flex flex-col gap-xs items-start overflow-hidden px-[28px] py-m rounded-sm w-full',
  {
    variants: {
      state: {
        default: 'border border-dashed border-neutral-grey cursor-pointer [border-style:dashed]',
        uploaded: 'border border-solid border-neutral-grey rounded-sm bg-neutral-grey/10',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

export interface FileUploadProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'>,
    VariantProps<typeof fileUploadVariants> {
  label?: string;
  error?: string;
  description?: string;
  buttonText?: string;
  noFileText?: string;
  removeFileText?: string;
  value?: File[];
  onChange?: (files: File[]) => void;
}

interface FileItemProps {
  file: File;
  onRemove: () => void;
  removeFileText: string;
}

const FileItem = ({ file, onRemove, removeFileText }: FileItemProps) => {
  return (
    <div className="flex gap-s items-center w-full px-0 py-xs border-b border-neutral-midgrey/40">
      <p className="flex-1 text-[1.25rem] leading-normal text-neutral-black truncate">
        {file.name}
      </p>
      <Button variant="destructive-link" onClick={onRemove}>
        {removeFileText}
      </Button>
    </div>
  );
};

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      label,
      error,
      description,
      buttonText = 'Choose file',
      noFileText = 'no file selected',
      removeFileText = 'Remove file',
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
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const descriptionId = `${id}-description`;
    const inputRef = useRef<HTMLInputElement>(null);

    const [internalFiles, setInternalFiles] = useState<File[]>([]);
    const files = controlledFiles !== undefined ? controlledFiles : internalFiles;

    const hasFiles = files.length > 0;
    const state = hasFiles ? 'uploaded' : 'default';

    const handleButtonClick = () => {
      inputRef.current?.click();
    };

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

    const handleRemoveFile = (index: number) => {
      const newFiles = files.filter((_, i) => i !== index);

      if (onChange) {
        onChange(newFiles);
      } else {
        setInternalFiles(newFiles);
      }
    };

    return (
      <div className="flex flex-col gap-xs w-full items-start">
        {label && (
          <div className="flex flex-col">
            <label
              htmlFor={id}
              className="block text-[1.25rem] leading-normal font-bold text-neutral-black"
            >
              {label}
            </label>

            {!error && description && (
              <p id={descriptionId} className="text-[1.25rem] leading-normal text-neutral-midgrey">
                {description}
              </p>
            )}

            {error && (
              <p id={errorId} role="alert" className="text-[1.25rem] leading-normal text-red-dark">
                {error}
              </p>
            )}
          </div>
        )}
        <div className={cn(fileUploadVariants({ state }), className)}>
          <div className="flex gap-5 items-center w-full">
            <Button
              type="button"
              variant="secondary"
              onClick={handleButtonClick}
              disabled={disabled}
            >
              {buttonText}
            </Button>

            {!hasFiles && (
              <p className="text-[1.25rem] leading-normal text-neutral-black">{noFileText}</p>
            )}
          </div>
          {hasFiles &&
            files.map((file, index) => (
              <FileItem
                key={`${file.name}-${index}`}
                file={file}
                onRemove={() => handleRemoveFile(index)}
                removeFileText={removeFileText}
              />
            ))}
          <input
            ref={mergeRefs(ref, inputRef)}
            type="file"
            id={id}
            disabled={disabled}
            required={required}
            multiple={multiple}
            accept={accept}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : description ? descriptionId : undefined}
            aria-required={required}
            className="sr-only"
            onChange={handleFileChange}
            {...props}
          />
        </div>
      </div>
    );
  },
);

FileUpload.displayName = 'FileUpload';

export { FileUpload, fileUploadVariants };
