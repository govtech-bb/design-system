import React, { ElementType, forwardRef } from 'react';
import { cn } from '../../utils/css';
import { Link } from '../Link/Link';

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  /** Collapse intermediate crumbs on mobile, showing only first and last */
  collapseOnMobile?: boolean;
  /** Polymorphic link component (e.g. Next.js Link) */
  linkAs?: ElementType;
  /** Show a "Home" crumb at the start */
  homeHref?: string;
}

const separatorStyles =
  'before:mx-[0.5em] before:inline-block before:h-[0.4375em] before:w-[0.4375em] before:shrink-0 before:rotate-45 before:border-mid-grey-00 before:border-t before:border-r before:content-[""]';

const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, className, collapseOnMobile = false, linkAs, homeHref, ...props }, ref) => {
    if (items.length === 0 && !homeHref) return null;

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn('flex items-center', className)}
        {...props}
      >
        <ol
          className={cn(
            'flex flex-wrap items-center gap-y-1',
            collapseOnMobile &&
              '[&>li:not(:first-child):not(:last-child)]:hidden [&>li:not(:first-child):not(:last-child)]:md:flex',
          )}
        >
          {homeHref && (
            <li className="flex items-center">
              <Link as={linkAs} href={homeHref}>
                Home
              </Link>
            </li>
          )}
          {items.map((item, index) => (
            <li
              className={cn('flex items-center', (homeHref || index > 0) && separatorStyles)}
              key={item.href}
            >
              <Link as={linkAs} className="break-all" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    );
  },
);

Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs };
