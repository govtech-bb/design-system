import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/css';

export interface FooterLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  links?: FooterLink[];
  logoSrc?: string;
  logoAlt?: string;
  copyrightText?: string;
}

const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      links = [],
      logoSrc,
      logoAlt = 'Government Logo',
      copyrightText = `© ${new Date().getFullYear()} Government of Barbados`,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        className={cn('bg-blue-100 text-white w-full overflow-hidden', className)}
        {...props}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-8">
            {links.length > 0 && (
              <nav className="flex flex-col gap-2 py-8 lg:pb-0" aria-label="Footer navigation">
                {links.map((link, index) => {
                  if (link.href) {
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className="cursor-pointer font-normal text-body leading-normal underline"
                      >
                        {link.label}
                      </a>
                    );
                  }
                  return (
                    <button
                      key={index}
                      onClick={link.onClick}
                      className="cursor-pointer font-normal text-[20px] leading-[150%] underline text-left"
                    >
                      {link.label}
                    </button>
                  );
                })}
              </nav>
            )}

            <div className="-mx-[calc(50vw-50%)] border-black/25 border-t-4 lg:hidden" />

            <div className="flex flex-col items-start gap-6 justify-between pt-8 pb-4 lg:items-end lg:pb-8">
              {logoSrc && <img src={logoSrc} alt={logoAlt} className="block h-28 w-auto" />}
              <p className="text-neutral-white text-body">{copyrightText}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  },
);

Footer.displayName = 'Footer';
export { Footer };
