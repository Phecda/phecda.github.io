import styles from './styles.module.css';
import { ColorCell } from './ColorCell';
import { MediaQuery } from './MediaQuery';

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

export function Component() {
  return (
    <div className="safe-background">
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
        <MediaQuery />
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

Component.displayName = 'StyleInspector';
