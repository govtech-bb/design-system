import React, { AnchorHTMLAttributes, ElementType, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/css';

const linkVariants = cva(
  'inline-flex outline-none underline-offset-2 underline hover:no-underline active:bg-yellow-100 active:no-underline focus-visible:bg-yellow-100 focus-visible:no-underline active:text-neutral-black focus-visible:text-neutral-black',
  {
    variants: {
      variant: {
        default: 'text-teal-dark hover:text-neutral-black hover:bg-teal-10',
        secondary: 'text-neutral-black hover:bg-neutral-white hover:text-[#083A3D]',
        tertiary: 'text-neutral-white hover:bg-teal-10 hover:text-[#083A3D]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, VariantProps<typeof linkVariants> {
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
