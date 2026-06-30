import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/css';

export interface OfficialBannerProps extends HTMLAttributes<HTMLDivElement> {
  showLearnMore?: boolean;
  imageSrc: string;
  /** Decorative by default — the banner text conveys the meaning. */
  imageAlt?: string;
  /** Target for the "Learn more" link (how to identify official government websites). */
  learnMoreHref?: string;
}

const OfficialBanner = forwardRef<HTMLDivElement, OfficialBannerProps>(
  (
    { showLearnMore = true, imageSrc, imageAlt = '', learnMoreHref = '#', className, ...props },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn('bg-blue-100 w-full', className)} {...props}>
        <div className="container flex flex-wrap gap-2 items-center py-2">
          <img src={imageSrc} alt={imageAlt} className="block shrink-0 h-6 w-auto" />

          <p className="font-normal text-caption leading-normal text-white-00">
            Official government website
          </p>
          {showLearnMore && (
            <a
              href={learnMoreHref}
              aria-label="Learn how to identify an official government website"
              className="font-normal text-caption leading-normal text-white-00 underline decoration-solid underline-offset-2 hover:opacity-80 transition-opacity"
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
