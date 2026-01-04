import { forwardRef, ReactNode } from 'react';
import { CheckboxProps as CheckboxPropsPrimitive, Indicator, Root } from '@radix-ui/react-checkbox';
import { cn } from '../../utils/css';

export interface CheckboxProps extends Omit<CheckboxPropsPrimitive, 'onChange'> {
  className?: string;
  label?: string;
}

export interface CheckboxGroupProps {
  label?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkbox = (
      <Root
        ref={ref}
        id={id}
        className={cn(
          'relative inline-flex size-12 shrink-0 items-center justify-center bg-white-00 border-2 border-black-00 border-solid transition-all outline-none hover:cursor-pointer hover:shadow-form-hover focus-visible:border-teal-00 focus-visible:shadow-none focus-visible:ring-4 focus-visible:ring-teal-100 aria-invalid:border-red-00 disabled-state',
          className,
        )}
        {...props}
      >
        <Indicator className="absolute bg-teal-00 size-[19px]" />
      </Root>
    );

    if (label) {
      return (
        <div className="flex gap-5 items-center">
          {checkbox}
          <label
            htmlFor={id}
            className="text-[1.25rem] leading-normal text-black-00 cursor-pointer"
          >
            {label}
          </label>
        </div>
      );
    }

    return checkbox;
  },
);

Checkbox.displayName = 'Checkbox';

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ label, description, children, className }, ref) => {
    return (
      <div ref={ref} className={cn('flex gap-2 items-center', className)}>
        <div className="flex flex-col gap-xs items-start w-full">
          {(label || description) && (
            <div className="flex flex-col items-start text-black-00">
              {label && <p className="text-[1.25rem] leading-normal font-bold">{label}</p>}
              {description && (
                <p className="text-[1.25rem] leading-normal text-mid-grey-00">{description}</p>
              )}
            </div>
          )}
          <div className="flex flex-col gap-s items-start w-full">{children}</div>
        </div>
      </div>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';

export { Checkbox, CheckboxGroup };
