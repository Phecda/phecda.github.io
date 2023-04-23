import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const routes = [
  { name: 'Device', path: '/device' },
  { name: 'Layout', path: '/layout' },
  { name: 'Style', path: '/style' },
  { name: 'Inputs', path: '/inputs' },
];

export default function PageHeader() {
  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container className={styles.navbar}>
        <Navbar.Brand as={Link} to="/">
          <img src="/favicon.svg" className={styles.favicon} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            {routes.map(({ name, path }) => (
              <Nav.Link key={path} as={NavLink} to={path}>
                {name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
