import { forwardRef, useId, useState } from 'react';
import { cn } from '../../utils/css';
import { inputContainer, inputDisabled, inputInvalid } from '../Input/Input';

type DateParts = { day: string; month: string; year: string };

export interface DateInputProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onChange' | 'onBlur' | 'onFocus' | 'defaultValue' | 'value'
  > {
  label?: string;
  description?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;

  value?: DateParts;
  defaultValue?: DateParts;

  onChange?: (date: DateParts) => void;
  onFocus?: (date: DateParts) => void;
  onBlur?: (date: DateParts) => void;

  dayName?: string;
  monthName?: string;
  yearName?: string;
}

const DateInput = forwardRef<HTMLDivElement, DateInputProps>(
  (
    {
      label,
      description,
      error,
      className,
      disabled,
      required,
      id: providedId,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      dayName = 'day',
      monthName = 'month',
      yearName = 'year',
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const id = providedId || autoId;

    const isControlled = value !== undefined;
    const [local, setLocal] = useState<DateParts>(defaultValue ?? { day: '', month: '', year: '' });
    const state = isControlled ? (value as DateParts) : local;

    const updateDate = (next: DateParts) => {
      if (!isControlled) setLocal(next);
      onChange?.(next);
    };

    const handleChange = (key: keyof DateParts) => (e: React.ChangeEvent<HTMLInputElement>) => {
      updateDate({ ...state, [key]: e.target.value });
    };

    const ariaDescribedBy =
      [description && `${id}-description`, error && `${id}-error`].filter(Boolean).join(' ') ||
      undefined;

    return (
      <div
        ref={ref}
        className={cn('w-full', className)}
        onFocus={() => onFocus?.(state)}
        onBlur={() => onBlur?.(state)}
        {...rest}
      >
        {label && (
          <div className="mb-2">
            <label className="block text-h4 text-neutral-black">{label}</label>

            {description && (
              <p id={`${id}-description`} className="text-body text-neutral-midgrey">
                {description}
              </p>
            )}

            {error && (
              <p id={`${id}-error`} role="alert" className="text-body text-red-dark mt-4">
                {error}
              </p>
            )}
          </div>
        )}

        <div className="flex gap-4 items-end flex-wrap pt-2">
          {/* Day */}
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-day`} className="text-body text-neutral-black">
              Day
            </label>
            <div className={cn(inputContainer, inputDisabled, inputInvalid, 'w-[81px]')}>
              <input
                id={`${id}-day`}
                name={dayName}
                type="text"
                value={state.day}
                onChange={handleChange('day')}
                onBlur={() => {}}
                disabled={disabled}
                aria-invalid={error ? true : undefined}
                aria-describedby={ariaDescribedBy}
                className="w-full min-w-0 px-4 py-4 outline-none rounded-[inherit] text-center"
              />
            </div>
          </div>

          {/* Month */}
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-month`} className="text-body text-neutral-black">
              Month
            </label>
            <div className={cn(inputContainer, inputDisabled, inputInvalid, 'w-[81px]')}>
              <input
                id={`${id}-month`}
                name={monthName}
                type="text"
                value={state.month}
                onChange={handleChange('month')}
                onBlur={() => {}}
                disabled={disabled}
                aria-invalid={error ? true : undefined}
                aria-describedby={ariaDescribedBy}
                className="w-full min-w-0 px-4 py-4 outline-none rounded-[inherit] text-center"
              />
            </div>
          </div>

          {/* Year */}
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-year`} className="text-body text-neutral-black">
              Year
            </label>
            <div className={cn(inputContainer, inputDisabled, inputInvalid, 'w-[138px]')}>
              <input
                id={`${id}-year`}
                name={yearName}
                type="text"
                value={state.year}
                onChange={handleChange('year')}
                onBlur={() => {}}
                disabled={disabled}
                aria-invalid={error ? true : undefined}
                aria-describedby={ariaDescribedBy}
                className="w-full min-w-0 px-4 py-4 outline-none rounded-[inherit] text-center"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

DateInput.displayName = 'DateInput';

export { DateInput };
