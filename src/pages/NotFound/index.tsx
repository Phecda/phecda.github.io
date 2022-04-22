import { Link } from 'preact-router';

export default function NotFound() {
  return (
    <div>
      <h1>Emm... Why are you here?</h1>
      <p>
        Let`s go back to <Link href="/">Home</Link>
      </p>
    </div>
  );
}
