import { Link } from 'preact-router';
import { useEffect, useRef, useState } from 'preact/hooks';
import { DimLine } from './DimLine';
import styles from './styles.module.css';

export default function DeviceInspector() {
  // TODO: safe area size
  const [, setRect] = useState<{ content?: DOMRect | null }>({});
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => {
      setRect({
        content: contentRef.current?.getClientRects().item(0),
      });
    };
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('resize', update);
    };
  }, []);
  return (
    <div ref={bgRef} className={`safe-background ${styles.background}`}>
      <div ref={contentRef} className={styles.content}>
        <p>
          Back to <Link href="/">Home</Link>
        </p>

        <DimLine
          direction="horizontal"
          position={{ left: 0, right: 0, top: '5%' }}
          color="blue"
        />
        <DimLine
          direction="vertical"
          position={{ top: 0, bottom: 0, left: '5%' }}
          color="blue"
        />
      </div>
      <DimLine
        direction="horizontal"
        position={{ left: 0, right: 0, bottom: '10%' }}
        color="red"
      />
      <DimLine
        direction="vertical"
        position={{ top: 0, bottom: 0, right: '10%' }}
        color="red"
      />
    </div>
  );
}
