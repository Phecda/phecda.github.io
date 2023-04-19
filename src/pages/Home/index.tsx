import PageHeader from '@/components/PageHeader';
import { Outlet } from 'react-router-dom';

export function HomeIndex() {
  return (
    <div className="safe-background">
      <main className="st-content wide-content">
        <h1 className="khaenriah-text">Welcome, Traveler!</h1>
        <p className="khaenriah-text">Ad astra abyssosque</p>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
}
