import { forwardRef, ReactNode } from 'react';
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
          'relative inline-flex size-15.5 shrink-0 items-center justify-center bg-brand-neutral-white border-2 border-brand-neutral-black border-solid rounded-full transition-all outline-none hover:cursor-pointer hover:shadow-form-hover focus-visible:border-brand-teal focus-visible:shadow-none focus-visible:ring-4 focus-visible:ring-teal-100 aria-invalid:border-brand-red-dark disabled-state',
          className,
        )}
        {...props}
      >
        <Indicator className="flex items-center justify-center w-full h-full">
          <div className="absolute bg-brand-teal size-8 rounded-full" />
        </Indicator>
      </Item>
    );

    if (label) {
      return (
        <div className="flex gap-5 items-center">
          {radio}
          <label htmlFor={id} className="text-body text-brand-neutral-black cursor-pointer">
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
  ({ label, description, children, className, ...props }, ref) => {
    return (
      <Root ref={ref} className={cn('flex gap-2 items-center', className)} {...props}>
        <div className="flex flex-col gap-4 items-start w-full">
          {(label || description) && (
            <div className="flex flex-col items-start text-brand-neutral-black">
              {label && <p className="text-h4">{label}</p>}
              {description && <p className="text-body">{description}</p>}
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
