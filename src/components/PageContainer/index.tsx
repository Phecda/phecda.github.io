import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { combineClassName } from '@/utils/combineClassName';

type PageContainerProps<T extends ElementType = 'div'> = {
  as?: T;
  children?: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export function PageContainer<T extends ElementType = 'div'>({
  as,
  children,
  className,
  ...rest
}: PageContainerProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component
      className={combineClassName(
        'mx-auto w-full max-w-(--max-content-width)',
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
