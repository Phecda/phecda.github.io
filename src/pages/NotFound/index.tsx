import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="safe-background">
      <main className="st-content wide-content">
        <h1>Emm... Why are you here?</h1>
        <p>
          Let`s go back to <Link to="/">Home</Link>
        </p>
      </main>
    </div>
  );
}
