import styles from './styles.module.css';
import { ColorCell } from './ColorCell';
import { useEffect, useState } from 'preact/hooks';

const colors = [
  {
    title: 'text',
    list: ['text-1', 'text-2', 'text-3', 'text-4', 'text-placeholder'],
  },
  { title: 'fill', list: ['fill-1', 'fill-2', 'fill-3', 'fill-4'] },
  { title: 'background', list: ['bg-1', 'bg-2', 'bg-3'] },
  {
    title: 'grouped background',
    list: ['group-bg-1', 'group-bg-2', 'group-bg-3'],
  },
  {
    title: 'colors',
    list: [
      'blue',
      'brown',
      'cyan',
      'green',
      'indigo',
      'mint',
      'orange',
      'pink',
      'purple',
      'red',
      'teal',
      'yellow',
    ],
  },
  {
    title: 'opaque gray',
    list: ['gray', 'gray2', 'gray3', 'gray4', 'gray5', 'gray6'],
  },
  { title: 'link', list: ['link'] },
  { title: 'separator', list: ['separator', 'separator-opaque'] },
];

export default function StyleInspector() {
  const [mq, setMQ] = useState('(display-mode: standalone)');
  const [mqMsg, setMQMsg] = useState('');
  useEffect(() => {
    const updateMsg = (e: { matches: boolean; media: string }) => {
      setMQMsg(`@media ${e.media}: ${e.matches}`);
    };
    const mql = window.matchMedia(mq);
    updateMsg(mql);
    mql.addEventListener('change', updateMsg);
    return () => {
      mql.removeEventListener('change', updateMsg);
    };
  }, [mq]);
  return (
    <div className="safe-background bg-below-top-bar">
      <main className="st-content wide-content">
        <h1>Styles</h1>
        <h2>Media Query</h2>
        <p>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media"
            target="_blank"
            rel="noreferrer"
          >
            MDN Reference
          </a>
        </p>
        <form
          className={styles.form}
          onSubmit={e => {
            e.preventDefault();
            const formData = new FormData(e.target! as HTMLFormElement);
            const { mediaQuery } = Object.fromEntries(formData);
            if (typeof mediaQuery === 'string') {
              setMQ(mediaQuery);
            }
          }}
        >
          <div className={styles.formItem}>
            <label htmlFor="mediaQuery">@media </label>
            <input
              id="mq"
              name="mediaQuery"
              type="text"
              autoCapitalize="off"
              placeholder="(display-mode: standalone)"
            />
          </div>
          <div className={styles.formActions}>
            <input type="submit" value="Query" />
          </div>
        </form>
        <p>{mqMsg}</p>
        <h2>Palette</h2>
        <p>
          The color scheme from{' '}
          <a
            target="_blank"
            href="https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color"
            rel="noreferrer"
          >
            Apple
          </a>
          .
        </p>
        {colors.map(color => (
          <section key={color.title}>
            <h3>{color.title}</h3>
            <div className={styles.container}>
              {color.list.map(v => (
                <ColorCell key={v} color={`var(--color-${v})`} name={v} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
