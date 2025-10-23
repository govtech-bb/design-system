import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/css';

type TypographyVariant = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body-lg' | 'body';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  children: ReactNode;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'body', as, className, children, ...props }, ref) => {
    const defaultElement: Record<TypographyVariant, string> = {
      display: 'h1',
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      'body-lg': 'p',
      body: 'p',
    };

    const Component = (as || defaultElement[variant]) as any;

    const variantClasses: Record<TypographyVariant, string> = {
      display: 'text-display',
      h1: 'text-h1',
      h2: 'text-h2',
      h3: 'text-h3',
      h4: 'text-h4',
      'body-lg': 'text-body-lg',
      body: 'text-body',
    };

    return (
      <Component ref={ref} className={cn(variantClasses[variant], className)} {...props}>
        {children}
      </Component>
    );
  },
);

Typography.displayName = 'Typography';

export { Typography };
