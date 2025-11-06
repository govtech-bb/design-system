import React, { DetailsHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/css';

export interface ShowHideProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  summary: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  summaryClassName?: string;
  contentClassName?: string;
}

const ShowHide = forwardRef<HTMLDetailsElement, ShowHideProps>(
  ({ summary, children, className, summaryClassName, contentClassName, ...props }, ref) => {
    return (
      <details ref={ref} className={cn('mt-4', className)} {...props}>
        <summary
          className={cn(
            'cursor-pointer list-none inline-flex items-center gap-3 text-body font-normal leading-[1.7] text-[20px] transition-colors duration-200 outline-none underline-offset-2 text-teal-dark underline hover:text-brand-teal-hover focus-visible:text-brand-teal-hover active:bg-yellow-100 focus-visible:bg-yellow-100',
            summaryClassName,
          )}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block shrink-0 transition-transform [details[open]_&]:rotate-90 text-teal-dark"
          >
            <path d="M 0 0 L 8 6 L 0 12 Z" fill="currentColor" />
          </svg>
          {summary}
        </summary>
        <div className={cn('mt-2 border-l-4 border-neutral-grey pl-4', contentClassName)}>
          {children}
        </div>
      </details>
    );
  },
);

ShowHide.displayName = 'ShowHide';

export { ShowHide };
