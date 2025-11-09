import { forwardRef, ReactNode, useId } from 'react';
import {
  Indicator,
  Item,
  RadioGroupItemProps,
  RadioGroupProps as RadioGroupPropsPrimitive,
  Root,
} from '@radix-ui/react-radio-group';
import { cn } from '../../utils/css';

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
          'relative inline-flex size-12 shrink-0 items-center justify-center bg-neutral-white border-2 border-neutral-black border-solid rounded-full transition-all outline-none hover:cursor-pointer hover:shadow-form-hover focus-visible:border-teal-dark focus-visible:shadow-none focus-visible:ring-4 focus-visible:ring-teal-100 aria-invalid:border-red-dark disabled-state',
          className,
        )}
        {...props}
      >
        <Indicator className="flex items-center justify-center w-full h-full">
          <div className="absolute bg-teal-dark size-[19px] rounded-full" />
        </Indicator>
      </Item>
    );

    if (label) {
      return (
        <div className="flex gap-5 items-center">
          {radio}
          <label htmlFor={id} className="text-body text-neutral-black cursor-pointer">
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
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const descriptionId = `${id}-description`;

    const ariaDescribedBy = [description ? descriptionId : null, error ? errorId : null]
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
        <div className="flex flex-col gap-4 items-start w-full">
          {(label || description || error) && (
            <div className="flex flex-col items-start text-neutral-black">
              {label && <p className="text-h4">{label}</p>}
              {description && (
                <p id={descriptionId} className="text-[20px] leading-[1.7] text-neutral-midgrey">
                  {description}
                </p>
              )}
              {error && (
                <p id={errorId} role="alert" className="text-[20px] leading-[1.7] text-red-dark">
                  {error}
                </p>
              )}
            </div>
          )}
          <div className="flex flex-col gap-4 items-start w-full">{children}</div>
        </div>
      </Root>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';

export { Radio, RadioGroup };
