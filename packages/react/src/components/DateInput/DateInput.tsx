import { forwardRef, ReactNode, useState } from 'react';
import { cn } from '../../utils/css';
import { inputContainer, inputDisabled, inputInvalid } from '../Input/Input';
import { useFormFieldIds } from '../../utils/useFormFieldIds';
import { getAriaDescribedBy } from '../../utils/getAriaDescribedBy';
import { FormFieldLabel } from '../FormFieldLabel';

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
    const { id, errorId, descriptionId } = useFormFieldIds(providedId);

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

    const ariaDescribedBy = getAriaDescribedBy({
      description: !!description,
      error: !!errorMessage,
      descriptionId,
      errorId,
    });

    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-xs w-full items-start', className)}
        onFocus={() => onFocus?.(state)}
        onBlur={() => onBlur?.(state)}
        {...rest}
      >
        <FormFieldLabel
          id={id}
          label={label}
          description={description}
          error={errorMessage}
          errorId={errorId}
          descriptionId={descriptionId}
        />

        <div className="flex gap-s items-end flex-wrap">
          {/* Day */}
          <div className="flex flex-col gap-xs">
            <label
              htmlFor={`${id}-day`}
              className="text-[1.25rem] leading-normal font-bold text-black-00"
            >
              Day
            </label>
            <div
              className={cn(
                inputContainer,
                disabled && inputDisabled,
                invalidFields.day && inputInvalid,
                'w-20',
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
                className="w-full min-w-0 p-s outline-none rounded-[inherit]"
              />
            </div>
          </div>

          {/* Month */}
          <div className="flex flex-col gap-xs">
            <label
              htmlFor={`${id}-month`}
              className="text-[1.25rem] leading-normal font-bold text-black-00"
            >
              Month
            </label>
            <div
              className={cn(
                inputContainer,
                disabled && inputDisabled,
                invalidFields.month && inputInvalid,
                'w-20',
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
                className="w-full min-w-0 p-s outline-none rounded-[inherit]"
              />
            </div>
          </div>

          {/* Year */}
          <div className="flex flex-col gap-xs">
            <label
              htmlFor={`${id}-year`}
              className="text-[1.25rem] leading-normal font-bold text-black-00"
            >
              Year
            </label>
            <div
              className={cn(
                inputContainer,
                disabled && inputDisabled,
                invalidFields.year && inputInvalid,
                'w-40',
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
                className="w-full min-w-0 p-s outline-none rounded-[inherit]"
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
