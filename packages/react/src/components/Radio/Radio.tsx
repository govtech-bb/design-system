import { forwardRef, ReactNode } from 'react';
import {
  Indicator,
  Item,
  RadioGroupItemProps,
  RadioGroupProps as RadioGroupPropsPrimitive,
  Root,
} from '@radix-ui/react-radio-group';
import { cn } from '../../utils/css';
import { useFormFieldIds } from '../../utils/useFormFieldIds';

export interface RadioProps extends RadioGroupItemProps {
  className?: string;
  label?: string;
}

export interface RadioGroupProps extends RadioGroupPropsPrimitive {
  label?: string;
  description?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const radio = (
      <Item
        ref={ref}
        id={id}
        className={cn(
          'relative inline-flex size-12 shrink-0 items-center justify-center bg-white-00 border-2 border-black-00 border-solid rounded-full transition-all outline-none hover:cursor-pointer hover:shadow-form-hover focus-visible:border-teal-00 focus-visible:shadow-none focus-visible:ring-4 focus-visible:ring-teal-100 aria-invalid:border-red-00 disabled-state',
          className,
        )}
        {...props}
      >
        <Indicator className="flex items-center justify-center w-full h-full">
          <div className="absolute bg-teal-00 size-[19px] rounded-full" />
        </Indicator>
      </Item>
    );

    if (label) {
      return (
        <div className="flex gap-5 items-center">
          {radio}
          <label
            htmlFor={id}
            className="text-[1.25rem] leading-normal text-black-00 cursor-pointer"
          >
            {label}
          </label>
        </div>
      );
    }

    return radio;
  },
);

Radio.displayName = 'Radio';

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ label, description, error, children, className, id: providedId, ...props }, ref) => {
    const { id, errorId, descriptionId } = useFormFieldIds(providedId);

    const ariaDescribedBy = [!error && description ? descriptionId : null, error ? errorId : null]
      .filter(Boolean)
      .join(' ');

    return (
      <Root
        ref={ref}
        id={id}
        className={cn('flex gap-2 items-center', className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={ariaDescribedBy || undefined}
        {...props}
      >
        <div className="flex flex-col gap-xs items-start w-full">
          {(label || description || error) && (
            <div className="flex flex-col items-start text-black-00">
              {label && <p className="text-[1.25rem] leading-normal font-bold">{label}</p>}
              {!error && description && (
                <p
                  id={descriptionId}
                  className="text-[1.25rem] leading-normal text-mid-grey-00"
                >
                  {description}
                </p>
              )}
              {error && (
                <p
                  id={errorId}
                  role="alert"
                  className="text-[1.25rem] leading-normal text-red-00"
                >
                  {error}
                </p>
              )}
            </div>
          )}
          <div className="flex flex-col gap-s items-start w-full">{children}</div>
        </div>
      </Root>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';

export { Radio, RadioGroup };
