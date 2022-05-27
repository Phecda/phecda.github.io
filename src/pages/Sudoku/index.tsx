import { useRef, useState } from 'preact/hooks';
import styles from './styles.module.css';
import { TableView } from './viewModel';

export default function SudokuPage() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [raw, setRaw] = useState<number[]>();

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
                const str = value.replace(/[^\d]/g, '');
                if (str.length !== 81) {
                  window.alert(`Only ${str.length} cells, not enough!`);
                } else {
                  const numbers = str.split('').map(e => parseInt(e, 10));
                  setRaw(numbers);
                }
                return;
              }
              setRaw(undefined);
            }}
          >
            confirm
          </button>
        </div>
        {raw && <TableView raw={raw} />}
      </main>
    </div>
  );
}
