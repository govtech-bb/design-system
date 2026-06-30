import { ElementType, forwardRef, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/css';
import { Logo } from '../Logo';
import { linkVariants } from '../Link';
import { Button } from '../Button';

export interface HeaderNavItem {
  label: string;
  href: string;
}

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /** Primary navigation links. */
  navItems?: HeaderNavItem[];
  /** Destination for the logo / home link. */
  homeHref?: string;
  /** Accessible label for the logo home link. */
  homeLabel?: string;
  /**
   * Element or component used for the logo and nav links. Defaults to `'a'`.
   * To get client-side routing, pass an adapter that accepts `href` (mapping it
   * to your router's prop, e.g. TanStack's `to`) and forwards its ref to the
   * underlying anchor so focus management keeps working.
   */
  linkComponent?: ElementType;
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      navItems = [],
      homeHref = '/',
      homeLabel = 'Go to the homepage',
      linkComponent,
      className,
      ...props
    },
    ref,
  ) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const firstNavLinkRef = useRef<HTMLAnchorElement>(null);

    // Close on Escape, return focus to the trigger.
    useEffect(() => {
      if (!menuOpen) return;
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };
      document.addEventListener('keydown', onKeyDown);
      return () => document.removeEventListener('keydown', onKeyDown);
    }, [menuOpen]);

    // Move focus to the first nav link when the panel opens.
    useEffect(() => {
      if (menuOpen) firstNavLinkRef.current?.focus();
    }, [menuOpen]);

    const LinkEl: ElementType = linkComponent ?? 'a';
    const hasNav = navItems.length > 0;

    return (
      <header ref={ref} className={cn('relative bg-yellow-100', className)} {...props}>
        <div className="container">
          <div className="flex items-center gap-x-6 py-4 lg:py-6">
            <LinkEl href={homeHref} aria-label={homeLabel} className="inline-flex">
              <Logo aria-hidden="true" className="h-7 w-auto lg:h-9" />
            </LinkEl>

            {hasNav && (
              <>
                {/* Desktop nav — hidden below 640px */}
                <nav aria-label="Primary" className="ml-auto hidden min-[640px]:block">
                  <ul className="flex items-center gap-x-5 lg:gap-x-7">
                    {navItems.map((item) => (
                      <li key={item.href} className="flex">
                        <LinkEl
                          href={item.href}
                          className={cn(
                            linkVariants({ variant: 'secondary' }),
                            'flex items-center font-bold no-underline',
                          )}
                        >
                          {item.label}
                        </LinkEl>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile menu button — hidden at 640px and above */}
                <Button
                  ref={menuButtonRef}
                  type="button"
                  variant="link"
                  aria-expanded={menuOpen}
                  aria-controls="header-mobile-nav"
                  onClick={() => setMenuOpen((o) => !o)}
                  className="ml-auto flex min-h-11 items-center text-base font-semibold text-black-00 hover:text-black-00! min-[640px]:hidden no-underline"
                >
                  Menu
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile disclosure panel */}
        {hasNav && menuOpen && (
          <nav id="header-mobile-nav" aria-label="Primary" className="bg-blue-10 min-[640px]:hidden">
            <ul className="container flex flex-col gap-s py-s">
              {navItems.map((item, i) => (
                <li key={item.href} className="flex text-caption font-bold">
                  <LinkEl
                    ref={i === 0 ? firstNavLinkRef : undefined}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(linkVariants(), 'flex items-center no-underline')}
                  >
                    {item.label}
                  </LinkEl>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    );
  },
);

Header.displayName = 'Header';

export { Header };
