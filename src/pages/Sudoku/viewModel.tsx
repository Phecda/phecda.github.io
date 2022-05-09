import { useMemo, useState } from 'preact/hooks';
import { Fragment, memo } from 'preact/compat';
import { Cell, Table, validNumbers } from './model';
import styles from './styles.module.css';
import { combineClassName } from '@/utils/combineClassName';

export const CellView = memo<{
  cell: Cell;
  rowIndex: number;
  colIndex: number;
  onSetActive: (pos: [number, number]) => void;
  active?: [number, number];
}>(({ cell, rowIndex, colIndex, onSetActive, active }) => {
  const blockIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3);

  return (
    <div
      onClick={() => {
        onSetActive([rowIndex, colIndex]);
      }}
      className={combineClassName(
        styles.cell,
        active?.[0] === rowIndex && styles.activeRowCell,
        active?.[1] === colIndex && styles.activeColumnCell
      )}
      style={{
        fontSize: cell.value > 0 ? 28 : 16,
        color: cell.editable
          ? cell.value > 0
            ? 'var(--color-link)'
            : 'var(--color-text-2)'
          : 'var(--color-text-1)',
        backgroundColor:
          blockIndex % 2 === 0 ? 'var(--color-bg-2)' : 'var(--color-bg-3)',
      }}
    >
      <div>{cell.value || cell.getRemains().join(' ')}</div>
    </div>
  );
});

export function TableView({ rows }: { rows: number[][] }) {
  const table = useMemo(() => {
    const t = new Table();
    t.load(rows);
    return t;
  }, [rows]);

  const [activePos, setActivePos] = useState<[number, number]>();

  return (
    <div>
      <div className={styles.container}>
        {rows.map((row, rowIndex) => (
          <Fragment key={rowIndex}>
            {row.map((c, colIndex) => (
              <CellView
                key={colIndex}
                active={activePos}
                onSetActive={setActivePos}
                rowIndex={rowIndex}
                colIndex={colIndex}
                cell={table.getCell(rowIndex, colIndex)}
              />
            ))}
          </Fragment>
        ))}
      </div>
      <div>
        {validNumbers.map(v => (
          <div key={v}>
            {v} - {table.getNumberRemainCount(v)}
          </div>
        ))}
      </div>
    </div>
  );
}
