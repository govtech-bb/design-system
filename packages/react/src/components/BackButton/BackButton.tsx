import { forwardRef } from 'react';
import { cn } from '../../utils/css';
import { Link, LinkProps } from '../Link/Link';

export interface BackButtonProps extends Omit<LinkProps, 'children'> {
  children?: string;
}

const BackButton = forwardRef<HTMLAnchorElement, BackButtonProps>(
  ({ children = 'Back', className, ...props }, ref) => {
    return (
      <Link ref={ref} className={cn('inline-flex items-center gap-xs', className)} {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="8"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
          viewBox="0 0 11 8"
        >
          <path
            fill="currentColor"
            d="M6.421 5c.081.904.282 1.823.578 3C4.807 5.559 0 4 0 4s4.31-1.235 7-4c-.293 1.206-.475 2.158-.56 3H11v2z"
          />
        </svg>
        {children}
      </Link>
    );
  },
);

BackButton.displayName = 'BackButton';

export { BackButton };
