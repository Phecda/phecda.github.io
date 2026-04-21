import { Outlet } from 'react-router';
import { PageContainer } from '@/components/PageContainer';
import { PageHeader } from '@/components/PageHeader';

export function HomeIndex() {
  return (
    <div className="safe-background">
      <PageContainer as="main" className="space-y-3">
        <h1 className="khaenriah-text text-4xl sm:text-5xl">
          Welcome, Traveler!
        </h1>
        <p className="khaenriah-text text-lg text-(--color-text-2)">
          Ad astra abyssosque
        </p>
      </PageContainer>
    </div>
  );
}

export function Home() {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
}
