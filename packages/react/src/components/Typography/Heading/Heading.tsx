import type { HTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'display';

const headingVariants = cva('font-bold', {
  variants: {
    size: {
      display: 'text-[5rem] leading-none',
      h1: 'text-[3.5rem] leading-[1.15]',
      h2: 'text-[2.5rem] leading-[1.25]',
      h3: 'text-[1.5rem] leading-[1.25]',
      h4: 'text-[1.25rem] leading-normal',
      h5: 'text-[1.25rem] leading-normal',
      h6: 'text-[1.25rem] leading-normal',
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
