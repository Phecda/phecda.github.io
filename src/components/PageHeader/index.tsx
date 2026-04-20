import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router';
import styles from './styles.module.css';

const routes = [
  { name: 'Device', path: '/device' },
  { name: 'Layout', path: '/layout' },
  { name: 'Style', path: '/style' },
  { name: 'Inputs', path: '/inputs' },
  { name: 'Quick Tools', path: '/quicktools' },
  { name: 'Fancy Fonts', path: '/fonts' },
];

export function PageHeader() {
  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container className={styles.navbar}>
        <Navbar.Brand as={Link} to="/" viewTransition>
          <img src="/favicon.svg" className={styles.favicon} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            {routes.map(({ name, path }) => (
              <Nav.Link key={path} as={NavLink} to={path} viewTransition>
                {name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
