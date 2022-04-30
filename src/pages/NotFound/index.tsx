import { Link } from 'preact-router';

export default function NotFound() {
  return (
    <div className="safe-background bg-below-top-bar">
      <main className="st-content wide-content">
        <h1>Emm... Why are you here?</h1>
        <p>
          Let`s go back to <Link href="/">Home</Link>
        </p>
      </main> 
    </div>
  );
}
