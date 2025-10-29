import React, { forwardRef, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/css';

const statusBannerVariants = cva(
  'border-x-4 border-solid box-border flex items-center px-4 py-2 w-full',
  {
    variants: {
      variant: {
        alpha: 'bg-brand-blue-light border-blue-100',
        beta: 'bg-brand-yellow-light border-yellow-100',
        migrated: 'bg-pink-10 border-pink-100',
        'service-issue': 'bg-red-10 border-red-100',
      },
    },
    defaultVariants: {
      variant: 'alpha',
    },
  },
);

export interface StatusBannerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBannerVariants> {
  /**
   * Aria label for screen readers (defaults to variant name if not provided)
   */
  'aria-label'?: string;
}

const StatusBanner = forwardRef<HTMLDivElement, StatusBannerProps>(
  ({ variant, className, children, style, 'aria-label': ariaLabel, ...props }, ref) => {
    // Generate a default aria-label based on variant if not provided
    const defaultAriaLabel = variant
      ? `${variant.replace('-', ' ')} status banner`
      : 'alpha status banner';

    return (
      <div
        ref={ref}
        className={cn(statusBannerVariants({ variant }), className)}
        style={style}
        role="status"
        aria-label={ariaLabel || defaultAriaLabel}
        aria-live="polite"
        {...props}
      >
        <div className="flex flex-col items-start justify-center flex-1">
          <div className="text-body text-brand-neutral-black w-full">{children}</div>
        </div>
      </div>
    );
  },
);

StatusBanner.displayName = 'StatusBanner';

export { StatusBanner, statusBannerVariants };
