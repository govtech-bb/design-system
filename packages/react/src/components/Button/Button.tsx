import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/css';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 rounded-sm text-[20px] leading-[1.7] whitespace-nowrap transition-[background-color,box-shadow] duration-200 outline-none disabled-state',
  {
    variants: {
      variant: {
        primary:
          'bg-teal-dark text-neutral-white hover:bg-brand-teal-light hover:shadow-[inset_0_0_0_4px_rgba(222,245,246,0.10)] active:bg-brand-teal-darker active:shadow-[inset_0_0_0_3px_rgba(0,0,0,0.20)] active:outline-none active:ring-4 active:ring-teal-100 active:ring-offset-1 active:rounded-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-100 focus-visible:ring-offset-1 focus-visible:rounded-sm',
        secondary:
          'bg-neutral-grey text-neutral-black hover:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.05)] active:bg-brand-neutral-gray-dark active:shadow-[inset_0_0_0_3px_rgba(0,0,0,0.10)] active:outline-none active:ring-4 active:ring-teal-100 active:ring-offset-1 active:rounded-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-100 focus-visible:ring-offset-1 focus-visible:rounded-sm',
      },
      size: {
        default: 'px-xm py-s',
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
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, onClick, children, variant, size, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size, className }))}
        type="button"
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
