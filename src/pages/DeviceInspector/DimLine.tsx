import { FunctionComponent, JSX } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { combineClassName } from '@/utils/combineClassName';
import styles from './styles.module.css';

type DimLineProps = {
  position: Pick<JSX.CSSProperties, 'top' | 'bottom' | 'left' | 'right'>;
  direction: 'horizontal' | 'vertical';
  color?: string;
};

const ARROW_LINE_WIDTH = 2;
const MIN_CONTAINER_WIDTH = 8;

export const DimLine: FunctionComponent<DimLineProps> = ({
  position,
  direction,
  color = 'green',
}) => {
  const [dim, setDimensions] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setDimensions(
          direction === 'horizontal'
            ? containerRef.current.clientWidth
            : containerRef.current.clientHeight
        );
      }
    };
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('resize', update);
    };
  }, [direction]);

  const arrowLine = (
    <div
      className={styles.line}
      style={{
        backgroundColor: color,
        width: direction === 'vertical' ? ARROW_LINE_WIDTH : undefined,
        height: direction === 'horizontal' ? ARROW_LINE_WIDTH : undefined,
      }}
    />
  );
  return (
    <div
      ref={containerRef}
      className={styles.dimContainer}
      style={{
        ...position,
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        minWidth: direction === 'vertical' ? MIN_CONTAINER_WIDTH : undefined,
        minHeight: direction === 'horizontal' ? MIN_CONTAINER_WIDTH : undefined,
      }}
    >
      <div
        className={combineClassName(
          styles.arrow,
          direction === 'vertical' ? styles.arrowUp : styles.arrowLeft
        )}
        style={
          direction === 'vertical'
            ? { borderBottomColor: color }
            : { borderRightColor: color }
        }
      />
      {arrowLine}
      <div className={styles.dimDigit}>{dim}</div>
      {arrowLine}
      <div
        className={combineClassName(
          styles.arrow,
          direction === 'vertical' ? styles.arrowDown : styles.arrowRight
        )}
        style={
          direction === 'vertical'
            ? { borderTopColor: color }
            : { borderLeftColor: color }
        }
      />
    </div>
  );
};
