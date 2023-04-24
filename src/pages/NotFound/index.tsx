import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="safe-background">
      <Container>
        <h1>Emm... Why are you here?</h1>
        <p>
          Let`s go back to <Link to="/">Home</Link>
        </p>
      </Container>
    </div>
  );
}
