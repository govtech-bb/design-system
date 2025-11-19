import { forwardRef, ReactNode, useId, useState } from 'react';
import { cn } from '../../utils/css';
import { inputContainer, inputDisabled, inputInvalid } from '../Input/Input';

export type DateInputValue = { day: string; month: string; year: string };

export type DateInputPartValidationError = {
  day?: string;
  month?: string;
  year?: string;
};

export type DateInputError = ReactNode | DateInputPartValidationError;

export const isPreValidateError = (v: DateInputError): v is DateInputPartValidationError => {
  if (!v || typeof v !== 'object') return false;
  if ('$$typeof' in v) return false;
  return 'day' in v || 'month' in v || 'year' in v;
};

const getInvalidFields = (error: DateInputError | undefined) => {
  if (!error) return { day: false, month: false, year: false };

  if (isPreValidateError(error)) {
    return {
      day: !!error.day,
      month: !!error.month,
      year: !!error.year,
    };
  }
  return { day: true, month: true, year: true };
};

const getErrorMessage = (error: DateInputError | undefined): ReactNode => {
  if (!error) return undefined;

  if (isPreValidateError(error)) {
    return error.day || error.month || error.year;
  }

  return error;
};

const normalizeValue = (v: string | undefined): string => {
  return v ?? '';
};

export interface DateInputProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onChange' | 'onBlur' | 'onFocus' | 'defaultValue' | 'value'
  > {
  label?: string;
  description?: string;
  error?: DateInputError;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  name: string;

  value?: DateInputValue;
  defaultValue?: DateInputValue;

  onChange?: (date: DateInputValue) => void;
  onFocus?: (date: DateInputValue) => void;
  onBlur?: (date: DateInputValue) => void;
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
      name,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const id = providedId || autoId;

    const isControlled = value !== undefined;
    const [local, setLocal] = useState<DateInputValue>(
      defaultValue ?? { day: '', month: '', year: '' },
    );
    const state = isControlled ? (value as DateInputValue) : local;

    // Get invalid fields and error message
    const invalidFields = getInvalidFields(error);
    const errorMessage = getErrorMessage(error);

    const updateDate = (next: DateInputValue) => {
      if (!isControlled) setLocal(next);
      onChange?.(next);
    };

    const handleChange =
      (key: keyof DateInputValue) => (e: React.ChangeEvent<HTMLInputElement>) => {
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

            {errorMessage && (
              <p id={`${id}-error`} role="alert" className="text-body text-red-dark mt-4">
                {errorMessage}
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
            <div
              className={cn(
                inputContainer,
                disabled && inputDisabled,
                invalidFields.day && inputInvalid,
                'w-[81px]',
              )}
            >
              <input
                id={`${id}-day`}
                name={`${name}[day]`}
                type="text"
                inputMode="numeric"
                value={state.day}
                onChange={handleChange('day')}
                disabled={disabled}
                aria-invalid={invalidFields.day || undefined}
                aria-describedby={ariaDescribedBy}
                className="w-full min-w-0 px-4 py-4 outline-none rounded-[inherit]"
              />
            </div>
          </div>

          {/* Month */}
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-month`} className="text-body text-neutral-black">
              Month
            </label>
            <div
              className={cn(
                inputContainer,
                disabled && inputDisabled,
                invalidFields.month && inputInvalid,
                'w-[81px]',
              )}
            >
              <input
                id={`${id}-month`}
                name={`${name}[month]`}
                type="text"
                inputMode="numeric"
                value={state.month}
                onChange={handleChange('month')}
                disabled={disabled}
                aria-invalid={invalidFields.month || undefined}
                aria-describedby={ariaDescribedBy}
                className="w-full min-w-0 px-4 py-4 outline-none rounded-[inherit]"
              />
            </div>
          </div>

          {/* Year */}
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-year`} className="text-body text-neutral-black">
              Year
            </label>
            <div
              className={cn(
                inputContainer,
                disabled && inputDisabled,
                invalidFields.year && inputInvalid,
                'w-[138px]',
              )}
            >
              <input
                id={`${id}-year`}
                name={`${name}[year]`}
                type="text"
                inputMode="numeric"
                value={state.year}
                onChange={handleChange('year')}
                disabled={disabled}
                aria-invalid={invalidFields.year || undefined}
                aria-describedby={ariaDescribedBy}
                className="w-full min-w-0 px-4 py-4 outline-none rounded-[inherit]"
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
