import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  label?: string;
  error?: string;
  description?: string;
}

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
      <div className="w-full">
        {/* Label and Description/Error */}
        {label && (
          <div className="mb-2">
            <label htmlFor={id} className="block text-h4 text-brand-neutral-black">
              {label}
            </label>

            {!error && description && (
              <p id={descriptionId} className="text-body text-brand-neutral-black">
                {description}
              </p>
            )}

            {error && (
              <p id={errorId} role="alert" className="text-body text-brand-red-dark">
                {error}
              </p>
            )}
          </div>
        )}

        {/* Input Container */}
        <div
          className={cn(
            'relative inline-flex w-full rounded-sm border-2 border-brand-neutral-black items-center gap-2 transition-all text-body bg-brand-neutral-white  hover:shadow-form-hover focus-within:ring-4 focus-within:ring-teal-100 has-aria-invalid:border-brand-red-dark has-aria-invalid:focus-within:border-brand-red-dark [&:has(:disabled,:focus-visible,[aria-invalid])]:shadow-none disabled-state',
            className,
          )}
        >
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
              'w-full min-w-0 px-4 py-4 outline-none rounded-[inherit] placeholder:text-brand-neutral-black/60',
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
