import { forwardRef, TextareaHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/css';
import { inputContainer, inputDisabled, inputInvalid } from '../Input/Input';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix'> {
  label?: string;
  error?: string;
  description?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, description, className, disabled, required, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const descriptionId = `${id}-description`;

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

        <div className={cn(inputContainer, inputDisabled, inputInvalid, className)}>
          <textarea
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : description ? descriptionId : undefined}
            aria-required={required}
            className={cn(
              'w-full min-w-0 p-s outline-none rounded-[inherit] placeholder:text-neutral-black/60 resize-y',
            )}
            {...props}
          />
        </div>
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';

export { TextArea };
