import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/css';
import { useFormFieldIds } from '../../utils/useFormFieldIds';
import { getAriaDescribedBy } from '../../utils/getAriaDescribedBy';
import { FormFieldLabel } from '../FormFieldLabel';

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
    const { id, errorId, descriptionId } = useFormFieldIds(providedId);

    return (
      <div className="flex flex-col gap-xs w-full items-start">
        <FormFieldLabel
          id={id}
          label={label}
          description={description}
          error={error}
          errorId={errorId}
          descriptionId={descriptionId}
        />

        <div className={cn(inputContainer, inputDisabled, inputInvalid, className)}>
          <input
            ref={ref}
            type={type}
            id={id}
            disabled={disabled}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={getAriaDescribedBy({
              description: !!description,
              error: !!error,
              descriptionId,
              errorId,
            })}
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
