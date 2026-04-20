import { Container } from 'react-bootstrap';
import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="safe-background">
      <Container>
        <h1>Emm... Why are you here?</h1>
        <p>
          Let`s go back to{' '}
          <Link to="/" viewTransition>
            Home
          </Link>
        </p>
      </Container>
    </div>
  );
}
