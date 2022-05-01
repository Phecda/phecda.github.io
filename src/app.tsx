import PageHeader from './components/PageHeader';
import PWAStatus from './components/PWAStatus';
import PageRouter from './pages/router';

export function App() {
  return (
    <>
      <PageHeader />
      <PWAStatus />
      <PageRouter />
    </>
  );
}
