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
      <div className="w-full">
        {label && (
          <div className="mb-2">
            <label htmlFor={id} className="block text-h4 text-neutral-black">
              {label}
            </label>

            {!error && description && (
              <p id={descriptionId} className="text-body text-neutral-black">
                {description}
              </p>
            )}

            {error && (
              <p id={errorId} role="alert" className="text-body text-red-dark">
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
              'w-full min-w-0 px-4 py-4 outline-none rounded-[inherit] placeholder:text-neutral-black/60 resize-y',
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
