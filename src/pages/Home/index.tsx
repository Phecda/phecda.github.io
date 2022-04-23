import { Link } from 'preact-router';

export default function Home() {
  return (
    <div className="safe-background bg-below-top-bar">
      <main className="st-content wide-content">
        <h1>Welcome, Traveler!</h1>
        <p>
          But it is another page <Link href="/device">here</Link>
        </p>
      </main>
    </div>
  );
}
