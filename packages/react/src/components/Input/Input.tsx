import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  label?: string;
  error?: string;
  description?: string;
}

export const inputContainer =
  'relative inline-flex w-full rounded-sm border-2 border-neutral-black items-center gap-2 transition-all text-body bg-neutral-white hover:shadow-form-hover focus-within:ring-4 focus-within:ring-teal-100 [&:has(:disabled,:focus-visible,[aria-invalid])]:shadow-none';
export const inputDisabled = 'disabled-state';
export const inputInvalid =
  'has-aria-invalid:border-red-dark has-aria-invalid:focus-within:border-red-dark';

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
              'w-full min-w-0 p-s outline-none rounded-[inherit] placeholder:text-neutral-black/60',
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
