import { forwardRef, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/css';

const statusBannerVariants = cva('flex items-center p-s w-full rounded-sm', {
  variants: {
    variant: {
      alpha: 'bg-blue-10 border-blue-100',
      beta: 'bg-yellow-40 border-yellow-100',
      migrated: 'bg-pink-10 border-pink-100',
      'service-issue': 'bg-red-10 border-red-100',
    },
  },
  defaultVariants: {
    variant: 'alpha',
  },
});

export interface StatusBannerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBannerVariants> {
  'aria-label'?: string;
}

const StatusBanner = forwardRef<HTMLDivElement, StatusBannerProps>(
  ({ variant, className, children, style, 'aria-label': ariaLabel, ...props }, ref) => {
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
          <div className="text-[1.25rem] leading-normal text-neutral-black w-full">{children}</div>
        </div>
      </div>
    );
  },
);

StatusBanner.displayName = 'StatusBanner';

export { StatusBanner, statusBannerVariants };
