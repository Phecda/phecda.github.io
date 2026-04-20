import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router';
import { PageHeader } from '@/components/PageHeader';

export function HomeIndex() {
  return (
    <div className="safe-background">
      <Container as="main">
        <h1 className="khaenriah-text">Welcome, Traveler!</h1>
        <p className="khaenriah-text">Ad astra abyssosque</p>
      </Container>
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
