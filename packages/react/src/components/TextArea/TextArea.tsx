import { forwardRef, TextareaHTMLAttributes } from 'react';
import { cn } from '../../utils/css';
import { inputContainer, inputDisabled, inputInvalid } from '../Input/Input';
import { useFormFieldIds } from '../../utils/useFormFieldIds';
import { getAriaDescribedBy } from '../../utils/getAriaDescribedBy';
import { FormFieldLabel } from '../FormFieldLabel';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix'> {
  label?: string;
  error?: string;
  description?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, description, className, disabled, required, id: providedId, ...props }, ref) => {
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
          <textarea
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={getAriaDescribedBy({
              hasDescription: !!description,
              hasError: !!error,
              descriptionId,
              errorId,
            })}
            aria-required={required}
            className={cn(
              'w-full min-w-0 p-s outline-none rounded-[inherit] placeholder:text-black-00/60 resize-y',
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
