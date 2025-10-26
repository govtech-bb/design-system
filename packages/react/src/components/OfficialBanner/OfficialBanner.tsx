import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/css';

export interface OfficialBannerProps extends HTMLAttributes<HTMLDivElement> {
  showLearnMore?: boolean;
}

const OfficialBanner = forwardRef<HTMLDivElement, OfficialBannerProps>(
  ({ showLearnMore = true, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('bg-blue-100 w-full', className)} {...props}>
        <div className="flex gap-2 items-center px-4 py-2">
          <div className="shrink-0 w-4 h-4 relative">
            <img
              src="/images/coat-of-arms.png"
              alt="Government of Barbados"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          <p className="font-normal text-[12px] leading-4 text-white text-nowrap whitespace-pre shrink-0">
            Official government website
          </p>
          {showLearnMore && (
            <a
              href="#"
              className="font-normal text-[12px] leading-4 text-white underline decoration-solid underline-offset-2 text-nowrap whitespace-pre shrink-0 hover:opacity-80 transition-opacity"
            >
              Learn more
            </a>
          )}
        </div>
      </div>
    );
  },
);

OfficialBanner.displayName = 'OfficialBanner';

export { OfficialBanner };
