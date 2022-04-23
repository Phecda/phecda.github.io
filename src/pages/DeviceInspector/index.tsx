import styles from './styles.module.css';

export default function DeviceInspector() {
  return (
    <div className={`safe-background bg-below-top-bar ${styles.background}`}>
      <div className="st-content wide-content">
        <h1>Your device</h1>
        <p>{navigator.userAgent}</p>
      </div>
    </div>
  );
}
