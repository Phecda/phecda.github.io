import { Link } from 'react-router';
import { PageContainer } from '@/components/PageContainer';

export function NotFound() {
  return (
    <div className="safe-background">
      <PageContainer className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">
          Emm... Why are you here?
        </h1>
        <p className="text-base text-(--color-text-2)">
          Let`s go back to{' '}
          <Link
            to="/"
            viewTransition
            className="font-semibold text-(--color-link)"
          >
            Home
          </Link>
        </p>
      </PageContainer>
    </div>
  );
}
