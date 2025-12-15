import React, { AnchorHTMLAttributes, ElementType, forwardRef } from 'react';
import { VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/css';
import { buttonVariants } from '../Button';

export interface LinkButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  as?: ElementType;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ as, href, children, variant, className, external, target, ...props }, ref) => {
    const Element = as || 'a';

    return (
      <Element
        ref={ref}
        href={href}
        target={external ? '_blank' : target}
        rel={external || target === '_blank' ? 'noopener noreferrer' : undefined}
        className={cn(buttonVariants({ variant, className }))}
        {...props}
      >
        {children}
      </Element>
    );
  },
);

LinkButton.displayName = 'LinkButton';

export { LinkButton };
