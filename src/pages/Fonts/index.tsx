import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router';

export function Component() {
  return (
    <div className="safe-background">
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
