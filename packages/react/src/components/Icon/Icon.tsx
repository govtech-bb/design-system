import { forwardRef, SVGProps } from 'react';
import { cn } from '../../utils/css';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the icon in pixels
   */
  size?: number | string;
}

/**
 * Base Icon component for SVG icons.
 * Uses currentColor by default to inherit text color from parent.
 *
 * @example
 * ```tsx
 * <Icon size={24}>
 *   <path d="..." />
 * </Icon>
 * ```
 */
const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className, children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn('shrink-0', className)}
        {...props}
      >
        {children}
      </svg>
    );
  },
);

Icon.displayName = 'Icon';

export { Icon };
