import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/css';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 rounded-sm text-body whitespace-nowrap transition-[background-color,box-shadow] duration-200 outline-none disabled-state',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-teal text-brand-neutral-white hover:bg-brand-teal-light hover:shadow-[inset_0_0_0_4px_rgba(222,245,246,0.10)] active:bg-brand-teal-darker active:shadow-[inset_0_0_0_3px_rgba(0,0,0,0.20)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-100 focus-visible:ring-offset-1 focus-visible:rounded-sm',
        secondary:
          'bg-brand-neutral-gray-light text-brand-neutral-black hover:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.05)] active:bg-brand-neutral-gray-dark active:shadow-[inset_0_0_0_3px_rgba(0,0,0,0.10)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-100 focus-visible:ring-offset-1 focus-visible:rounded-sm',
      },
      size: {
        default: 'px-6 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, children, variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size, className }))}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
