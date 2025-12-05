import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/css';

export interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  description?: string;
  onIncrement?: () => void;
  onDecrement?: () => void;
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
      {...props}
    >
      <path d="M12 0L6 8L0 -5.24537e-07L12 0Z" />
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
      onIncrement,
      onDecrement,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const descriptionId = `${id}-description`;

    const handleIncrement = () => {
      // TODO: implement increment
    };

    const handleDecrement = () => {
      // TODO: implement decrement
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

        <div
          className={cn(
            'group flex w-full rounded-sm',
            'focus-within:ring-4 focus-within:ring-teal-100',
            className,
          )}
          role="group"
        >
          <input
            ref={ref}
            id={id}
            inputMode="numeric"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            aria-roledescription="Number field"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : description ? descriptionId : undefined}
            aria-required={required}
            disabled={disabled}
            required={required}
            className={cn(
              'w-full min-w-0 border-2 rounded-l-sm p-s outline-none bg-white',
              'group-hover:group-[:not(:focus-within)]:shadow-form-hover',
              error ? 'border-red-dark' : 'border-neutral-black',
              disabled && 'opacity-40 cursor-not-allowed',
            )}
            type="text"
            {...props}
          />
          <div
            className={cn(
              'w-[47px] flex flex-col border-2 border-l-0 rounded-r-sm overflow-hidden bg-neutral-grey/50',
              error ? 'border-red-dark' : 'border-neutral-black',
              disabled && 'opacity-40',
            )}
          >
            <button
              type="button"
              tabIndex={-1}
              onClick={handleIncrement}
              disabled={disabled}
              aria-label="Increment"
              aria-controls={id}
              className="flex-1 flex items-center justify-center hover:bg-neutral-grey/70 active:bg-neutral-grey disabled:cursor-not-allowed transition-colors"
            >
              <UpIcon aria-hidden="true" />
            </button>
            <div className={cn('h-0.5 w-full', error ? 'bg-red-dark' : 'bg-neutral-black')} />
            <button
              type="button"
              tabIndex={-1}
              aria-label="Decrement"
              aria-controls={id}
              onClick={handleDecrement}
              disabled={disabled}
              className="flex-1 flex items-center justify-center hover:bg-neutral-grey/70 active:bg-neutral-grey disabled:cursor-not-allowed transition-colors"
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
