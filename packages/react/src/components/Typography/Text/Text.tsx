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
      body: 'text-[20px] leading-[1.7]',
      caption: 'text-[16px] leading-[1.5]',
      'small-caption': 'text-[12px] leading-[1.5]',
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
    weight: 'normal',
    align: 'left',
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
