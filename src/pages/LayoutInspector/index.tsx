import { Link } from 'preact-router';
import { useEffect, useRef, useState } from 'preact/hooks';
import { DimLine } from './DimLine';
import styles from './styles.module.css';

type SafeAreaInsets = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export default function LayoutInspector() {
  // TODO: safe area size
  const [safeInsets, setInsets] = useState<SafeAreaInsets>({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => {
      const contentRect = contentRef.current?.getClientRects().item(0);
      const bgRect = bgRef.current?.getClientRects().item(0);
      if (contentRect && bgRect) {
        setInsets({
          top: contentRect.top - bgRect.top,
          bottom: bgRect.bottom - contentRect.bottom,
          left: contentRect.left - bgRect.left,
          right: bgRect.right - contentRect.right,
        });
      }
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
        <div className={styles.insetContainer}>
          <div className={styles.insetTop}>{safeInsets.top}</div>
          <div className={styles.insetLeft}>{safeInsets.left}</div>
          <div className={styles.insetCenter}>
            {Math.round(window.devicePixelRatio * 100) / 100}x
          </div>
          <div className={styles.insetRight}>{safeInsets.right}</div>
          <div className={styles.insetBottom}>{safeInsets.bottom}</div>
        </div>

        <DimLine
          direction="horizontal"
          position={{ left: 0, right: 0, top: 60 }}
          color="blue"
        />
        <DimLine
          direction="vertical"
          position={{ top: 0, bottom: 0, left: 40 }}
          color="blue"
        />
      </div>
      <DimLine
        direction="horizontal"
        position={{
          left: 0,
          right: 0,
          bottom: 'calc(env(safe-area-inset-bottom, 0px) + 40px)',
        }}
        color="red"
      />
      <DimLine
        direction="vertical"
        position={{
          top: 0,
          bottom: 0,
          right: 'calc(env(safe-area-inset-right, 0px) + 40px)',
        }}
        color="red"
      />
    </div>
  );
}
