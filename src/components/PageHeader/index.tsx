import { Link } from 'preact-router/match';
import styles from './styles.module.css';

const routes = [
  { name: 'Device', path: '/device' },
  { name: 'Layout', path: '/layout' },
  { name: 'Style', path: '/style' },
  { name: 'Inputs', path: '/inputs' },
];

export default function PageHeader() {
  return (
    <div>
      <div className={styles.navbarContainer}>
        <nav className={`wide-content ${styles.navbar}`}>
          <Link className={styles.brand} href="/">
            <img src="/favicon.svg" />
          </Link>
          <div className={styles.menu}>
            {routes.map(({ name, path }) => (
              <Link
                key={path}
                className={styles.link}
                activeClassName={styles.matchedLink}
                href={path}
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
