import { useRef, useState } from 'preact/hooks';
import styles from './styles.module.css';
import { TableView } from './viewModel';

export default function SudokuPage() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [raw, setRaw] = useState<number[][]>();
  return (
    <div className="safe-background bg-below-top-bar">
      <main className="st-content wide-content">
        <h1>Sudoku</h1>
        <div>
          <textarea
            ref={textareaRef}
            className={styles.inputArea}
            cols={9}
            rows={9}
          />
          <button
            onClick={() => {
              const value = textareaRef.current?.value;
              if (value) {
                const rows = value.split('\n').filter(r => !!r);
                if (rows.length === 9) {
                  if (!rows.find(row => !/^\d{9}$/.test(row))) {
                    console.log('matched');
                    const newRaw: number[][] = [];
                    rows.forEach(row => {
                      const numberRow: number[] = [];
                      for (
                        let colIndex = 0;
                        colIndex < row.length;
                        colIndex++
                      ) {
                        const char = row[colIndex];
                        const num = parseInt(char, 10);
                        numberRow.push(num);
                      }
                      newRaw.push(numberRow);
                    });
                    console.log(newRaw);
                    setRaw(newRaw);
                    return;
                  }
                }
              }
              console.log('no matched');
              setRaw(undefined);
            }}
          >
            confirm
          </button>
        </div>
        {raw && <TableView rows={raw} />}
      </main>
    </div>
  );
}
