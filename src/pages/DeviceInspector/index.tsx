import { useMemo } from 'react';
import parser from 'ua-parser-js';
import styles from './styles.module.css';

export function Component() {
  const { ua, browser, cpu, device, engine, os } = useMemo(() => parser(), []);
  return (
    <div className="safe-background">
      <div className="st-content wide-content">
        <h1>Your device</h1>
        <dl className={styles.descList}>
          <dt>User Agent</dt>
          <dd>{ua}</dd>
          <dt>OS</dt>
          <dd>
            {os.name}, {os.version}
          </dd>
          <dt>Browser</dt>
          <dd>
            {browser.name}, {browser.version}
          </dd>
          <dt>Engine</dt>
          <dd>
            {engine.name}, {engine.version}
          </dd>
          <dt>CPU</dt>
          <dd>{cpu.architecture || '-'}</dd>
          <dt>Device</dt>
          <dd>
            {device.type
              ? `(${device.type}) ${device.vendor ?? '-'}, ${
                  device.model ?? '-'
                }`
              : '-'}
          </dd>
        </dl>
      </div>
    </div>
  );
}

Component.displayName = 'DeviceInspector';
