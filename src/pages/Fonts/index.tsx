import { Outlet } from 'react-router';
import { PageContainer } from '@/components/PageContainer';

export function Component() {
  return (
    <div className="safe-background">
      <PageContainer>
        <Outlet />
      </PageContainer>
    </div>
  );
}
