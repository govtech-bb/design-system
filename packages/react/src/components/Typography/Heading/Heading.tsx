import type { HTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'display';

const headingVariants = cva('font-semibold', {
  variants: {
    size: {
      display: 'text-[4rem] leading-[1.25]',
      h1: 'text-[2.75rem] leading-[1.27]',
      h2: 'text-[1.75rem] leading-[1.29]',
      h3: 'text-[1.375rem] leading-[1.27]',
      h4: 'text-[1.125rem] leading-[1.56]',
      h5: 'text-[0.875rem] leading-[1.71] uppercase tracking-[0.04em] font-normal',
      h6: 'text-[0.875rem] leading-[1.71] uppercase tracking-[0.04em] font-normal',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: 'h2',
  },
});

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  children: ReactNode;
  as?: HeadingLevel;
}

const Heading = ({
  as = 'h2',
  children,
  size,
  weight,
  align,
  className,
  ...props
}: HeadingProps) => {
  const element = as === 'display' ? 'h1' : as;
  const Comp = element;

  return (
    <Comp
      className={cn(headingVariants({ size: size || as, weight, align }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
};

Heading.displayName = 'Heading';

export { Heading, headingVariants };
