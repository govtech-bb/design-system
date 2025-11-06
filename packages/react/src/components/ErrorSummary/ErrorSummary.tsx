import { forwardRef } from 'react';
import { cn } from '../../utils/css';
import { Link } from '../Link/Link';

export interface ErrorItem {
  text: string;
  target: string;
}

export interface ErrorSummaryProps {
  title: string;
  errors?: ErrorItem[];
  className?: string;
  onErrorClick?: (error: ErrorItem, event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(
  ({ title, errors = [], className, onErrorClick, ...props }, ref) => {
    if (!errors || errors.length === 0) {
      return null;
    }

    const handleDefaultClick = (error: ErrorItem, e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetElement = document.querySelector(error.target);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        if (targetElement instanceof HTMLElement) {
          targetElement.focus();
        }
      }
    };

    return (
      <div
        ref={ref}
        role="alert"
        aria-labelledby="error-summary-title"
        className={cn('border-4 border-red-100 py-6 px-8 mb-8', className)}
        tabIndex={-1}
        {...props}
      >
        <h2 id="error-summary-title" className="text-xl font-bold leading-[1.7]">
          {title}
        </h2>
        {errors.length > 0 && (
          <div className="flex flex-col items-start">
            {errors.map((error, _index) => (
              <Link
                key={error.target}
                href={error.target}
                tabIndex={0}
                className="text-red-dark text-xl leading-[1.7]"
                onClick={(e) => (onErrorClick ?? handleDefaultClick)(error, e)}
              >
                {error.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  },
);

ErrorSummary.displayName = 'ErrorSummary';

export { ErrorSummary };
