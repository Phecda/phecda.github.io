import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export function Component() {
  return (
    <div className="safe-background">
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
