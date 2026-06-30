import { forwardRef, InputHTMLAttributes, useCallback, useRef } from 'react';
import { cn } from '../../utils/css';
import { mergeRefs } from '../../utils/refs';
import { useFormFieldIds } from '../../utils/useFormFieldIds';
import { getAriaDescribedBy } from '../../utils/getAriaDescribedBy';
import { FormFieldLabel } from '../FormFieldLabel';

export interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  description?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number | '';
}

function UpIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 8 6 0 12 8z" />
    </svg>
  );
}

function DownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="rotate-180"
      {...props}
    >
      <path d="M0 8 6 0 12 8z" />
    </svg>
  );
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      label,
      error,
      description,
      className,
      disabled,
      required,
      id: providedId,
      min,
      max,
      step = 1,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { id, errorId, descriptionId } = useFormFieldIds(providedId);

    const onIncrement = useCallback(() => {
      inputRef.current?.stepUp();
      inputRef.current?.dispatchEvent(new Event('input', { bubbles: true }));
    }, []);

    const onDecrement = useCallback(() => {
      inputRef.current?.stepDown();
      inputRef.current?.dispatchEvent(new Event('input', { bubbles: true }));
    }, []);

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

        <div
          className={cn(
            'group flex w-full rounded-sm',
            'focus-within:ring-4 focus-within:ring-teal-100',
            className,
          )}
          role="group"
        >
          <input
            ref={mergeRefs(ref, inputRef)}
            id={id}
            inputMode="numeric"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            aria-roledescription="Number field"
            aria-invalid={error ? true : undefined}
            aria-describedby={getAriaDescribedBy({
              hasDescription: !!description,
              hasError: !!error,
              descriptionId,
              errorId,
            })}
            aria-required={required}
            disabled={disabled}
            required={required}
            className={cn(
              'w-full min-w-0 border-2 rounded-l-sm p-s outline-none bg-white-00',
              'group-hover:group-[:not(:focus-within)]:shadow-form-hover',
              '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
              'text-[1.125rem] leading-[1.56]',
              error ? 'border-red-00' : 'border-black-00',
              disabled && 'opacity-40 cursor-not-allowed',
            )}
            type="number"
            min={min}
            max={max}
            step={step}
            {...props}
          />
          <div
            className={cn(
              'w-[47px] flex flex-col border-2 border-l-0 rounded-r-sm overflow-hidden bg-grey-00/50',
              error ? 'border-red-00' : 'border-black-00',
              disabled && 'opacity-40',
            )}
          >
            <button
              type="button"
              tabIndex={-1}
              onClick={onIncrement}
              disabled={disabled}
              aria-label="Increment"
              aria-controls={id}
              className="flex-1 flex items-center justify-center hover:bg-grey-00/70 active:bg-grey-00 disabled:cursor-not-allowed transition-colors"
            >
              <UpIcon aria-hidden="true" />
            </button>
            <div className={cn('h-0.5 w-full', error ? 'bg-red-00' : 'bg-black-00')} />
            <button
              type="button"
              tabIndex={-1}
              aria-label="Decrement"
              aria-controls={id}
              onClick={onDecrement}
              disabled={disabled}
              className="flex-1 flex items-center justify-center hover:bg-grey-00/70 active:bg-grey-00 disabled:cursor-not-allowed transition-colors"
            >
              <DownIcon aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  },
);

NumberInput.displayName = 'NumberInput';

export { NumberInput };
