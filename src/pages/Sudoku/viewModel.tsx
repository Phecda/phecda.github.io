import { useEffect, useMemo, useState } from 'preact/hooks';
import React, { Fragment } from 'preact/compat';
import { enableMapSet } from 'immer';
import { useImmer } from 'use-immer';
import styles from './styles.module.css';
import { combineClassName } from '@/utils/combineClassName';
import {
  blocks,
  columns,
  getBlockIndex,
  getIndexes,
  rows,
  validNumbers,
} from './utils';

enableMapSet();

type Position = [number, number];

const CellView: React.FC<{
  value: number;
  choices: number[];
  activeRow: boolean;
  activeCol: boolean;
  activeNum: boolean;
  editable: boolean;
  backgroundColor: string;
  onClick: () => void;
}> = ({
  value,
  choices,
  activeNum,
  activeCol,
  activeRow,
  editable,
  backgroundColor,
  onClick,
}) => {
  return (
    <div
      className={combineClassName(
        styles.cell,
        activeRow && styles.activeRowCell,
        activeCol && styles.activeColumnCell,
        activeNum && styles.activeValueCell
      )}
      data-filled={value > 0}
      data-editable={editable}
      style={{
        backgroundColor,
      }}
      onClick={onClick}
    >
      <div>{value || choices.join(' ')}</div>
    </div>
  );
};

export function TableView({ raw }: { raw: number[] }) {
  const [cells, setCells] = useImmer(raw);
  const areaRemaining = useMemo(() => {
    const getRemains = (areas: number[][]) => {
      return areas.map(area => {
        const filled = area.map(i => cells[i]).filter(v => !!v);
        return validNumbers.filter(v => !filled.includes(v));
      });
    };
    return {
      row: getRemains(rows),
      col: getRemains(columns),
      block: getRemains(blocks),
    };
  }, [cells]);
  const [choiceRecord, setChoices] = useImmer(() => {
    return raw.map(num => (num ? [] : validNumbers.filter(v => v !== num)));
  });
  const [activePos, setActivePos] = useState<Position>();
  const [activeNum, setActiveNum] = useState<number>();

  const [activeRow, activeCol] = activePos ?? [];

  useEffect(() => {
    setChoices(draft => {
      draft.forEach((choices, index) => {
        const { rowIndex, colIndex, blockIndex } = getIndexes(index);
        const { row, col, block } = areaRemaining;
        const [rr, cr, br] = [row[rowIndex], col[colIndex], block[blockIndex]];
        draft[index] = choices
          .filter(v => rr.includes(v))
          .filter(v => cr.includes(v))
          .filter(v => br.includes(v));
      });
    });
  }, [areaRemaining, setChoices]);

  useEffect(() => {
    setCells(raw);
  }, [raw, setCells]);

  return (
    <div>
      <div className={styles.container}>
        {rows.map((row, rowIndex) => (
          <Fragment key={rowIndex}>
            {row.map((index, colIndex) => {
              const value = cells[index];
              const blockIndex = getBlockIndex(rowIndex, colIndex);
              const choices = choiceRecord[index];

              return (
                <CellView
                  key={colIndex}
                  value={value}
                  choices={choices}
                  activeNum={activeNum === value}
                  activeCol={activeCol === colIndex}
                  activeRow={activeRow === rowIndex}
                  editable={!raw[index]}
                  backgroundColor={
                    blockIndex % 2 === 0
                      ? 'var(--color-bg-2)'
                      : 'var(--color-bg-3)'
                  }
                  onClick={() => {
                    setActiveNum(value || undefined);
                    setActivePos([rowIndex, colIndex]);
                  }}
                />
              );
            })}
          </Fragment>
        ))}
      </div>
      <div className={styles.keyboard} />
      <div>
        <button>Update</button>
        <button
          onClick={() => {
            setCells(draft => {
              draft.forEach((cell, index) => {
                if (choiceRecord[index].length === 1) {
                  draft[index] = choiceRecord[index][0];
                }
              });
            });
          }}
        >
          Fill
        </button>
      </div>
    </div>
  );
}
