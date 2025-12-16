import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  label?: string;
  error?: string;
  description?: string;
}

export const inputContainer =
  'relative inline-flex w-full rounded-sm border-2 border-black-00 items-center gap-2 transition-all text-body bg-white-00 hover:shadow-form-hover focus-within:ring-4 focus-within:ring-teal-100 [&:has(:disabled,:focus-visible,[aria-invalid])]:shadow-none';
export const inputDisabled = 'disabled-state';
export const inputInvalid =
  'has-aria-invalid:border-red-00 has-aria-invalid:focus-within:border-red-00';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      label,
      error,
      description,
      className,
      disabled,
      required,
      id: providedId,
      ...props
    },
    ref,
  ) => {
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
              className="block text-[1.25rem] leading-normal font-bold text-black-00"
            >
              {label}
            </label>

            {!error && description && (
              <p id={descriptionId} className="text-[1.25rem] leading-normal text-mid-grey-00">
                {description}
              </p>
            )}

            {error && (
              <p id={errorId} role="alert" className="text-[1.25rem] leading-normal text-red-00">
                {error}
              </p>
            )}
          </div>
        )}

        <div className={cn(inputContainer, inputDisabled, inputInvalid, className)}>
          <input
            ref={ref}
            type={type}
            id={id}
            disabled={disabled}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : description ? descriptionId : undefined}
            aria-required={required}
            className={cn(
              'w-full min-w-0 p-s outline-none rounded-[inherit] placeholder:text-black-00/60',
            )}
            {...props}
          />
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
