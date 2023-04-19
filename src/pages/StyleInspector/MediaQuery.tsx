import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const mediaFeatures: ([string] | [string, (string | number)[]])[] = [
  ['any-hover', ['none', 'hover']],
  ['any-pointer', ['none', 'coarse', 'fine']],
  ['aspect-ratio'],
  ['color'],
  ['color-gamut', ['srgb', 'p3', 'rec2020']],
  ['color-index'],
  ['device-aspect-ratio'],
  ['device-height'],
  ['device-width'],
  ['display-mode', ['fullscreen', 'standalone', 'minimal-ui', 'browser']],
  ['dynamic-range', ['standard', 'high']],
  ['forced-colors', ['none', 'active']],
  ['grid', [0, 1]],
  ['height'],
  ['hover', ['none', 'hover']],
  ['inverted-colors', ['none', 'inverted']],
  ['monochrome'],
  ['orientation', ['portrait', 'landscape']],
  ['overflow-block', ['none', 'scroll', 'optional-paged', 'paged']],
  ['overflow-inline', ['none', 'scroll']],
  ['pointer', ['none', 'coarse', 'fine']],
  ['prefers-color-scheme', ['light', 'dark']],
  ['prefers-contrast', ['no-preference', 'more', 'less']],
  ['prefers-reduced-motion', ['no-preference', 'reduce']],
  ['resolution'],
  ['scripting', ['none', 'initial-only', 'enabled']],
  ['update', ['none', 'slow', 'fast']],
  ['video-dynamic-range', ['standard', 'high']],
  ['width'],
];

const prefixes = ['', 'min-', 'max-'];

export function MediaQuery() {
  const [mqIndex, setMQIndex] = useState(21);
  const [prefix, setPrefix] = useState(prefixes[0]);
  const [mqValue, setMQValue] = useState<number | string | undefined>('light');
  const [mqMsg, setMQMsg] = useState('');
  useEffect(() => {
    const updateMsg = (e: { matches: boolean; media: string }) => {
      if (e.media === 'not all' && !e.matches) {
        setMQMsg('Invalid.');
      } else {
        setMQMsg(`@media ${e.media}: ${e.matches}`);
      }
    };
    const [name] = mediaFeatures[mqIndex];
    let queryString = `(${prefix}${name})`;
    if (mqValue || mqValue === 0) {
      queryString = queryString.replace(/\)$/, `: ${mqValue})`);
    }
    console.log('qs', queryString);
    const mql = window.matchMedia(queryString);
    updateMsg(mql);
    console.log(mql);
    mql.addEventListener('change', updateMsg);
    return () => {
      mql.removeEventListener('change', updateMsg);
    };
  }, [mqIndex, prefix, mqValue]);
  const [, enums] = mediaFeatures[mqIndex];
  return (
    <div>
      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className={styles.formItem}>
          <label>@media</label>
          <div className={styles.formItemContent}>
            {!enums && (
              <select
                name="prefix"
                value={prefix}
                onChange={e => {
                  setPrefix((e.target as HTMLSelectElement).value);
                }}
              >
                {prefixes.map((p, i) => (
                  <option value={p} key={i}>
                    {p}
                  </option>
                ))}
              </select>
            )}
            <select
              name="feature"
              value={mqIndex}
              onChange={e => {
                const index = Number((e.target as HTMLSelectElement).value);
                const [, newEnums] = mediaFeatures[index];
                setPrefix('');
                setMQValue(newEnums?.[0]);
                setMQIndex(index);
              }}
            >
              {mediaFeatures.map(([feature], i) => (
                <option value={i} key={i}>
                  {feature}
                </option>
              ))}
            </select>
            <span>:</span>
            {enums && (
              <select
                name="mqValue"
                value={mqValue}
                onChange={e => {
                  setMQValue((e.target as HTMLSelectElement).value);
                }}
              >
                {enums.map(v => (
                  <option value={v} key={v}>
                    {v}
                  </option>
                ))}
              </select>
            )}
            {!enums && (
              <input
                type="text"
                placeholder="value"
                value={mqValue}
                onChange={e => {
                  setMQValue((e.target as HTMLInputElement).value);
                }}
              />
            )}
          </div>
        </div>
      </form>
      <p>{mqMsg}</p>
    </div>
  );
}
