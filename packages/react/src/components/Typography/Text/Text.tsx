import type { HTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/css';

type TextElement =
  | 'del'
  | 'em'
  | 'ins'
  | 'label'
  | 'p'
  | 's'
  | 'small'
  | 'span'
  | 'strong'
  | 'sub'
  | 'sup';

const textVariants = cva('font-normal', {
  variants: {
    size: {
      body: 'text-[1.25rem] leading-[1.5]',
      caption: 'text-[1rem] leading-[1.5]',
      'small-caption': 'text-[0.75rem] leading-[1.5]',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: 'body',
  },
});

export interface TextProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  children: ReactNode;
  as?: TextElement;
}

const Text = ({ as = 'span', children, size, weight, align, className, ...props }: TextProps) => {
  const Comp = as;

  return (
    <Comp className={cn(textVariants({ size, weight, align }), className)} {...props}>
      {children}
    </Comp>
  );
};

Text.displayName = 'Text';

export { Text, textVariants };
