import { Link } from 'preact-router';

export default function Home() {
  return (
    <div className="safe-background">
      <h1>Welcome, Traveler!</h1>
      <p>
        But it is another page <Link href="/device">here</Link>
      </p>
    </div>
  );
}
