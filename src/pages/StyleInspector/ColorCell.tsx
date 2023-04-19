import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

function rgb2hex(color: string) {
  const match = color.match(/([\d.]+)/g);
  if (match) {
    const [r, g, b, a] = match;
    const result = [r, g, b, a].reduce((prev, current, i) => {
      if (i === 3 && current) {
        return (
          prev +
          Math.round(Number(current) * 255)
            .toString(16)
            .padStart(2, '0')
        );
      }
      if (typeof current === 'string') {
        return prev + Number(current).toString(16).padStart(2, '0');
      }
      return prev;
    }, '#');
    return result.toUpperCase();
  }
  return color;
}

export function ColorCell({ color, name }: { color: string; name?: string }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const [colorValue, setColorValue] = useState('');
  useEffect(() => {
    const updateValue = () => {
      if (dotRef.current) {
        const c = window
          .getComputedStyle(dotRef.current)
          .getPropertyValue('background-color');
        setColorValue(rgb2hex(c));
      }
    };
    window.matchMedia('(prefers-color-scheme: dark)').onchange = updateValue;
    updateValue();
  }, []);
  return (
    <div
      role="button"
      onClick={() => {
        navigator.clipboard.writeText(colorValue);
      }}
      title="Click to copy this color value"
      className={styles.cell}
    >
      <div
        className={styles.dot}
        style={{ backgroundColor: color }}
        ref={dotRef}
      />
      <div className={styles.colorValue}>
        <small>
          <code>{colorValue}</code>
        </small>
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}
