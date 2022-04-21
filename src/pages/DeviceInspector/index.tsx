import { Link } from 'preact-router';
import styles from './styles.module.css';

export default function DeviceInspector() {
  return (
    <div className={`safe-background ${styles.background}`}>
      <div className={styles.content}>
        <p>
          Back to <Link href="/">Home</Link>
        </p>
      </div>
    </div>
  );
}
