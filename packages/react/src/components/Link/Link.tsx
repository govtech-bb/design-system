import React, { AnchorHTMLAttributes, ElementType, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/css';

const linkVariants = cva(
  'inline text-body font-normal transition-colors duration-200 outline-none underline-offset-2',
  {
    variants: {
      variant: {
        default:
          'text-brand-teal underline hover:text-brand-teal-hover focus-visible:text-brand-teal-hover active:bg-brand-yellow-bright focus-visible:bg-brand-yellow-bright visited:text-purple-dark visited:underline',
        secondary:
          'text-brand-neutral-black underline hover:bg-brand-neutral-white active:bg-brand-yellow-bright focus-visible:bg-brand-yellow-bright visited:text-[#555555] visited:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof linkVariants> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  as?: ElementType;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ as, href, children, variant, className, external, target, ...props }, ref) => {
    const Element = as || 'a';

    return (
      <Element
        ref={ref}
        href={href}
        target={external ? '_blank' : target}
        rel={external || target === '_blank' ? 'noopener noreferrer' : undefined}
        className={cn(linkVariants({ variant, className }))}
        {...props}
      >
        {children}
      </Element>
    );
  },
);

Link.displayName = 'Link';

export { Link, linkVariants };
