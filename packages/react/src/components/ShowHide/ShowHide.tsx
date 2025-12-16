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
      <details ref={ref} className={cn('flex flex-col gap-xs items-start', className)} {...props}>
        <summary
          className={cn(
            'cursor-pointer list-none inline-flex items-center gap-3 text-[1.25rem] leading-normal font-normal transition-colors duration-200 outline-none underline-offset-2 text-teal-00 underline hover:text-[#083a3d] focus-visible:text-[#083a3d] active:bg-yellow-100 focus-visible:bg-yellow-100',
            summaryClassName,
          )}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block shrink-0 transition-transform [details[open]_&]:rotate-90 text-teal-00"
          >
            <path d="M 0 0 L 8 6 L 0 12 Z" fill="currentColor" />
          </svg>
          {summary}
        </summary>
        <div
          className={cn(
            'flex flex-col gap-s border-l-4 border-grey-00 pl-xm',
            contentClassName,
          )}
        >
          {children}
        </div>
      </details>
    );
  },
);

ShowHide.displayName = 'ShowHide';

export { ShowHide };
