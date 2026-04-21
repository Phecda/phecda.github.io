import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Link, NavLink, useLocation } from 'react-router';
import { PageContainer } from '@/components/PageContainer';
import { combineClassName } from '@/utils/combineClassName';
import styles from './styles.module.css';

const routes = [
  { name: 'Device', path: '/device' },
  { name: 'Layout', path: '/layout' },
  { name: 'Style', path: '/style' },
  { name: 'Inputs', path: '/inputs' },
  { name: 'Quick Tools', path: '/quicktools' },
  { name: 'Fancy Fonts', path: '/fonts' },
];

const desktopLinkClassName =
  'px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70';

const mobileLinkClassName =
  'block px-3 py-2 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70';

const safeInlinePadding = {
  paddingLeft: 'max(env(safe-area-inset-left), 1rem)',
  paddingRight: 'max(env(safe-area-inset-right), 1rem)',
};

export function PageHeader() {
  const location = useLocation();

  return (
    <Disclosure
      key={location.pathname}
      as="header"
      className="border-b border-black/10 bg-(--color-brand) text-(--color-brand-text) shadow-sm"
    >
      {({ open }) => (
        <>
          <PageContainer
            className="flex min-h-(--top-nav-bar-height) items-center justify-between gap-4 py-3"
            style={safeInlinePadding}
          >
            <Link
              to="/"
              viewTransition
              className="inline-flex items-center justify-center rounded-sm p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <img src="/favicon.svg" className="block size-9" alt="Home" />
            </Link>
            <nav className="hidden items-center gap-2 md:flex">
              {routes.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  viewTransition
                  className={({ isActive }) =>
                    combineClassName(
                      desktopLinkClassName,
                      styles.navLink,
                      isActive && styles.navLinkActive
                    )
                  }
                >
                  {name}
                </NavLink>
              ))}
            </nav>
            <DisclosureButton className="inline-flex size-10 items-center justify-center rounded-md border border-white/15 bg-transparent text-white/55 transition-colors hover:text-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:hidden">
              <span className="sr-only">
                {open ? 'Close navigation menu' : 'Open navigation menu'}
              </span>
              <span className="relative block h-4 w-5">
                <span
                  className={combineClassName(
                    'absolute left-0 top-0.5 block h-0.5 w-5 rounded-full bg-current transition duration-200',
                    open && 'translate-y-1.5 rotate-45'
                  )}
                />
                <span
                  className={combineClassName(
                    'absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition duration-200',
                    open && 'opacity-0'
                  )}
                />
                <span
                  className={combineClassName(
                    'absolute bottom-0.5 left-0 block h-0.5 w-5 rounded-full bg-current transition duration-200',
                    open && '-translate-y-1.5 -rotate-45'
                  )}
                />
              </span>
            </DisclosureButton>
          </PageContainer>
          <DisclosurePanel className="border-t border-white/10 md:hidden">
            <PageContainer
              className="grid gap-2 py-3"
              style={safeInlinePadding}
            >
              {routes.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  viewTransition
                  className={({ isActive }) =>
                    combineClassName(
                      mobileLinkClassName,
                      styles.navLink,
                      isActive && styles.navLinkActive
                    )
                  }
                >
                  {name}
                </NavLink>
              ))}
            </PageContainer>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
