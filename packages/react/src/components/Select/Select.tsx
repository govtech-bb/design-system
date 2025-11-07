import { forwardRef, useId, ReactNode } from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { cn } from '../../utils/css';
import { inputContainer, inputDisabled, inputInvalid } from '../Input/Input';

export interface SelectProps {
  label?: string;
  error?: string;
  description?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  children?: ReactNode;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
}

const Select = forwardRef<HTMLButtonElement, SelectProps>(
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
      placeholder = 'Select an option...',
      value,
      defaultValue,
      onValueChange,
      name,
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
          <RadixSelect.Root
            value={value}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            disabled={disabled}
            required={required}
            name={name}
          >
            <RadixSelect.Trigger
              ref={ref}
              id={id}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : description ? descriptionId : undefined}
              aria-required={required}
              className={cn(
                inputContainer,
                disabled && inputDisabled,
                error && inputInvalid,
                'w-full min-w-0 px-4 py-4 pr-20 outline-none bg-transparent text-left',
                className,
              )}
            >
              <RadixSelect.Value placeholder={placeholder} />
              <RadixSelect.Icon asChild>
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
              </RadixSelect.Icon>
            </RadixSelect.Trigger>

            <RadixSelect.Portal>
              <RadixSelect.Content
                className={cn(
                  'overflow-hidden bg-white rounded-md shadow-lg border-2 border-neutral-black',
                  'z-50',
                  'max-h-[300px]',
                )}
                position="popper"
                sideOffset={4}
                align="start"
                style={{ width: 'var(--radix-select-trigger-width)' }}
              >
                <RadixSelect.ScrollUpButton className="flex items-center justify-center h-6 bg-white cursor-default">
                  <svg className="size-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 7.5L5 12.5L15 12.5L10 7.5Z" />
                  </svg>
                </RadixSelect.ScrollUpButton>
                
                <RadixSelect.Viewport className="p-1">
                  {children}
                </RadixSelect.Viewport>

                <RadixSelect.ScrollDownButton className="flex items-center justify-center h-6 bg-white cursor-default">
                  <svg className="size-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12.5L5 7.5L15 7.5L10 12.5Z" />
                  </svg>
                </RadixSelect.ScrollDownButton>
              </RadixSelect.Content>
            </RadixSelect.Portal>
          </RadixSelect.Root>
        </div>
      </div>
    );
  },
);

Select.displayName = 'Select';

// Export helper components for building select options
interface SelectItemProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value, children, disabled }, ref) => {
    return (
      <RadixSelect.Item
        ref={ref}
        value={value}
        disabled={disabled}
        className={cn(
          'relative flex items-center px-4 py-3 rounded cursor-pointer outline-none',
          'hover:bg-neutral-grey/30 focus:bg-neutral-grey/30',
          'data-[disabled]:opacity-50 data-[disabled]:pointer-events-none',
          'data-[state=checked]:bg-neutral-grey/50',
          'select-none',
        )}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    );
  },
);

SelectItem.displayName = 'SelectItem';

const SelectSeparator = forwardRef<HTMLDivElement, Record<string, never>>(
  (props, ref) => {
    return (
      <RadixSelect.Separator
        ref={ref}
        className="h-[1px] bg-neutral-black/10 my-1"
        {...props}
      />
    );
  },
);

SelectSeparator.displayName = 'SelectSeparator';

const SelectGroup = RadixSelect.Group;

interface SelectLabelProps {
  children: ReactNode;
}

const SelectLabel = forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ children }, ref) => {
    return (
      <RadixSelect.Label
        ref={ref}
        className="px-4 py-2 text-xs font-semibold text-neutral-black/60 uppercase"
      >
        {children}
      </RadixSelect.Label>
    );
  },
);

SelectLabel.displayName = 'SelectLabel';

export { Select, SelectItem, SelectSeparator, SelectGroup, SelectLabel };