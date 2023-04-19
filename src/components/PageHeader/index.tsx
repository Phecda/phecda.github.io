import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const routes = [
  { name: 'Device', path: '/device' },
  { name: 'Layout', path: '/layout' },
  { name: 'Style', path: '/style' },
  { name: 'Inputs', path: '/inputs' },
];

export default function PageHeader() {
  return (
    <div className={styles.navbarContainer}>
      <nav className={`wide-content ${styles.navbar}`}>
        <Link className={styles.brand} to="/">
          <img src="/favicon.svg" />
        </Link>
        <div className={styles.menu}>
          {routes.map(({ name, path }) => (
            <NavLink
              key={path}
              className={({ isActive }) =>
                isActive ? styles.matchedLink : styles.link
              }
              to={path}
            >
              {name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
