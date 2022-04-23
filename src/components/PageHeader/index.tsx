import { Link } from 'preact-router/match';
import styles from './styles.module.css';

export default function PageHeader() {
  return (
    <div>
      <div className={styles.navbarContainer}>
        <nav className={`wide-content ${styles.navbar}`}>
          <Link className={styles.brand} href="/">
            <img src="/favicon.svg" />
          </Link>
          <div className={styles.scroll}>
            <Link
              className={styles.link}
              activeClassName={styles.matchedLink}
              href="/device"
            >
              Device
            </Link>
            <Link
              className={styles.link}
              activeClassName={styles.matchedLink}
              href="/layout"
            >
              Layout
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
