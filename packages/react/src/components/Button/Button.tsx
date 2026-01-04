import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/css';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 text-[20px] whitespace-nowrap transition-[background-color,box-shadow] duration-200 outline-none disabled-state',
  {
    variants: {
      variant: {
        primary:
          'bg-teal-00 text-white-00 hover:bg-[#1a777d] hover:shadow-[inset_0_0_0_4px_rgba(222,245,246,0.10)] active:bg-[#0a4549] active:shadow-[inset_0_0_0_3px_rgba(0,0,0,0.20)]',
        secondary:
          'bg-grey-00 text-black-00 hover:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.05)] active:bg-[#b9c0c6] active:shadow-[inset_0_0_0_3px_rgba(0,0,0,0.10)]',
        destructive:
          'bg-red-00 text-white-00 hover:bg-[#bf3e3e] hover:shadow-[inset_0_0_0_4px_rgba(255,235,235,0.10)] active:bg-[#961e1f] active:shadow-[inset_0_0_0_3px_rgba(0,0,0,0.20)]',
        link: 'text-green-00 hover:text-yellow-100 active:text-yellow-00',
        'destructive-link': 'text-red-00 hover:text-red-100 active:text-red-00',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
    compoundVariants: [
      // Solid button styles
      {
        variant: ['primary', 'secondary', 'destructive'],
        class:
          'px-xm py-s rounded-sm leading-[1.7] active:outline-none active:ring-4 active:ring-offset-1 active:rounded-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-1 focus-visible:rounded-sm',
      },
      // Link styles
      {
        variant: ['link', 'destructive-link'],
        class:
          'leading-[1.5] font-normal underline underline-offset-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-1',
      },
      // Teal focus ring
      {
        variant: ['primary', 'secondary', 'link'],
        class: 'active:ring-teal-100 focus-visible:ring-teal-100',
      },
      // Red focus ring
      {
        variant: ['destructive', 'destructive-link'],
        class: 'active:ring-red-100 focus-visible:ring-red-100',
      },
    ],
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
  ({ asChild, onClick, children, variant, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        onClick={onClick}
        className={cn(buttonVariants({ variant, className }))}
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
