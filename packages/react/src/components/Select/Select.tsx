import { forwardRef, SelectHTMLAttributes, useCallback, useId, useRef } from 'react';
import { cn } from '../../utils/css';
import { mergeRefs } from '../../utils/refs';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: string;
  description?: string;
}

function ChevronDownIcon(props: React.ComponentProps<'svg'>) {
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
    const selectRef = useRef<HTMLSelectElement>(null);

    const handleIconClick = useCallback(() => {
      if (disabled || !selectRef.current) return;
      if (typeof selectRef.current.showPicker === 'function') {
        selectRef.current.showPicker();
      } else {
        selectRef.current.focus();
      }
    }, [disabled]);

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

        <div
          className={cn(
            'group flex w-full rounded-sm',
            'focus-within:ring-4 focus-within:ring-teal-100',
            className,
          )}
        >
          <select
            ref={mergeRefs(ref, selectRef)}
            id={id}
            disabled={disabled}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : description ? descriptionId : undefined}
            aria-required={required}
            className={cn(
              'w-full min-w-0 border-2 rounded-l-sm p-s outline-none appearance-none bg-white',
              'group-hover:group-[:not(:focus-within)]:shadow-form-hover',
              'text-[1.125rem] leading-[1.56]',
              error ? 'border-red-00' : 'border-black-00',
              disabled && 'opacity-40 cursor-not-allowed',
            )}
            {...props}
          >
            {children}
          </select>
          <button
            type="button"
            onClick={handleIconClick}
            tabIndex={-1}
            aria-hidden="true"
            disabled={disabled}
            className={cn(
              'w-[62px] flex shrink-0 items-center justify-center border-2 border-l-0 rounded-r-sm bg-grey-00/50',
              error ? 'border-red-00' : 'border-black-00',
              disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
            )}
          >
            <ChevronDownIcon />
          </button>
        </div>
      </div>
    );
  },
);

Select.displayName = 'Select';

export { Select };
