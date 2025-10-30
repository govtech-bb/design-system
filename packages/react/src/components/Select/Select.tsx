import { forwardRef, SelectHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/css';
import { inputContainer, inputDisabled, inputInvalid } from '../Input/Input';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: string;
  description?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      description,
      className,
      disabled,
      required,
      id: providedId,
      children,
      ...props
    },
    ref,
  ) => {
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

        <div className="relative">
          <div className={cn(inputContainer, inputDisabled, inputInvalid, className)}>
            <select
              ref={ref}
              id={id}
              disabled={disabled}
              required={required}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : description ? descriptionId : undefined}
              aria-required={required}
              className={cn(
                'w-full min-w-0 px-4 py-4 pr-20 outline-none appearance-none bg-transparent',
              )}
              {...props}
            >
              {children}
            </select>
            <span
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute inset-y-0 right-0 flex w-16 items-center justify-center',
                'bg-neutral-grey/50',
                'border-l-2 border-neutral-black',
              )}
            >
              <svg
                className="size-5"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
  },
);

Select.displayName = 'Select';

export { Select };
