import Bowser from 'bowser';
import { Fragment, useMemo } from 'react';
import { PageContainer } from '@/components/PageContainer';
import styles from './styles.module.css';

export function Component() {
  const userAgent = window.navigator.userAgent;
  const { browser, engine, os, platform } = useMemo(
    () => Bowser.parse(userAgent),
    [userAgent]
  );
  const formatPair = (name?: string, version?: string) => {
    const value = [name, version].filter(Boolean).join(', ');
    return value || undefined;
  };
  const formatDevice = () => {
    const details = [platform.vendor, platform.model]
      .filter(Boolean)
      .join(', ');

    if (platform.type && details) {
      return `(${platform.type}) ${details}`;
    }

    return platform.type ? `(${platform.type})` : details || undefined;
  };

  const rows = [
    ['User Agent', userAgent],
    ['OS', formatPair(os.name, os.version)],
    ['Browser', formatPair(browser.name, browser.version)],
    ['Engine', formatPair(engine.name, engine.version)],
    ['Device', formatDevice()],
  ] as const;

  return (
    <div className="safe-background">
      <PageContainer className="space-y-4">
        <h1>Your device</h1>
        <dl className={styles.descList}>
          {rows.map(([label, value]) =>
            value ? (
              <Fragment key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </Fragment>
            ) : null
          )}
        </dl>
      </PageContainer>
    </div>
  );
}

Component.displayName = 'DeviceInspector';
