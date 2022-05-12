export const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export class Area {
  public index: number;
  public arr: Cell[] = [];
  public done = false;

  constructor(i: number) {
    this.index = i;
  }

  get remains() {
    const filled = this.arr.map(c => c.value).filter(v => v);
    const remains = validNumbers.filter(n => !filled.includes(n));
    this.done = !remains.length;
    return remains;
  }

  load(cell: Cell, at: number) {
    this.arr[at] = cell;
  }
  canFillNumber(num: number) {
    return !this.has(num);
  }

  getEmptyCells() {
    if (this.done) return [];
    return this.arr.filter(c => !c.value);
  }
  has(num: number) {
    return this.arr.map(c => c.value).includes(num);
  }
  getCell(index: number) {
    return this.arr[index];
  }

  getRemainPositionMap() {
    const rpMap: Record<number, number[]> = {};
    this.arr.forEach((cell, pos) => {
      if (cell.value) return;
      cell.choices.forEach(remaining => {
        const record = rpMap[remaining];
        if (!record) {
          rpMap[remaining] = [pos];
        } else {
          record.push(pos);
        }
      });
    });
    return rpMap;
  }

  getPositionRemainMap() {
    const prMap: Record<number, number[]> = {};
    this.arr.forEach((cell, pos) => {
      if (cell.value) return;
      prMap[pos] = cell.choices;
    });
    return prMap;
  }

  /**
   *
   * @param n n >= 2
   * @returns
   */
  reduceChoices(n: number) {
    const prMap = this.getPositionRemainMap();
    const temp1 = Object.entries(prMap);
    const temp2 = temp1.filter(([, s]) => s.length === n);
    if (temp2.length < n || temp1.length === temp2.length) return;
    const states: number[][] = [];
    temp2.forEach(([, state], _, arr) => {
      if (states.find(v => arrayIdentical(v, state))) return;
      const identicalPositions = arr.filter(([, s]) =>
        arrayIdentical(s, state)
      );
      if (identicalPositions.length === n) {
        states.push(state);
      }
    });
    if (states.length) {
      const emptyCells = this.getEmptyCells();
      emptyCells.forEach(cell => {
        states.forEach(state => {
          if (arrayIdentical(cell.choices, state)) return;
          const newChoices = cell.choices.filter(v => !state.includes(v));
          if (!arrayIdentical(newChoices, cell.choices)) {
            cell.choices = newChoices;
          }
        });
      });
    }
  }
}

/**
 * 只适用于 a b 均没有重复元素的情况
 */
function arrayIdentical(a: number[], b: number[]) {
  return a.length > 0 && a.length === b.length && a.every(v => b.includes(v));
}

export class Cell {
  public value: number;
  private row: Area;
  private col: Area;
  private block: Area;
  public readonly editable: boolean;
  public choices: number[] = [];
  constructor(v: number, r: Area, c: Area, b: Area) {
    this.value = v;
    this.editable = v === 0;
    this.row = r;
    this.col = c;
    this.block = b;
  }
  canFillNumber(num: number) {
    return (
      this.editable &&
      this.row.canFillNumber(num) &&
      this.col.canFillNumber(num) &&
      this.block.canFillNumber(num)
    );
  }
  getRemains() {
    return this.row.remains
      .filter(n => this.col.remains.includes(n))
      .filter(n => this.block.remains.includes(n));
  }
}

export class Table {
  private rows: Area[] = [];
  private columns: Area[] = [];
  private blocks: Area[] = [];

  private blanks: Cell[] = [];

  public load(raw: number[][]) {
    this.rows = new Array(9).fill(true).map((_, i) => new Area(i));
    this.columns = new Array(9).fill(true).map((_, i) => new Area(i));
    this.blocks = new Array(9).fill(true).map((_, i) => new Area(i));
    raw.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        const rowArea = this.rows[rowIndex];
        const colArea = this.columns[colIndex];
        const blockIndex =
          Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3);
        const blockArea = this.blocks[blockIndex];
        const cell = new Cell(col, rowArea, colArea, blockArea);

        const indexInRow = colIndex;
        const indexInCol = rowIndex;
        const indexInBlock = (rowIndex % 3) * 3 + (colIndex % 3);

        rowArea.load(cell, indexInRow);
        colArea.load(cell, indexInCol);
        blockArea.load(cell, indexInBlock);
        if (cell.editable) {
          this.blanks.push(cell);
        }
      });
    });
  }

  private findOnlyOneChoiceCellIn(areas: Area[]) {
    let changed = false;
    areas.forEach(area => {
      if (!area.done) {
        const emptyCellsHere = area.getEmptyCells();
        area.remains.forEach(remaining => {
          let count = 0;
          let prevIndex = -1;
          emptyCellsHere
            .map(c => c.choices)
            .forEach((c, i) => {
              if (c.includes(remaining)) {
                count += 1;
                prevIndex = i;
              }
            });
          if (count === 1) {
            const cell = emptyCellsHere[prevIndex];
            cell.choices = [remaining];
            changed = true;
          }
        });
      }
    });
    return changed;
  }
  private findOnlyOneChoiceCell() {
    return (
      this.findOnlyOneChoiceCellIn(this.rows) ||
      this.findOnlyOneChoiceCellIn(this.columns) ||
      this.findOnlyOneChoiceCellIn(this.blocks)
    );
  }

  private reduceChoicesIn(areas: Area[], num: number) {
    areas.forEach(area => {
      area.reduceChoices(num);
    });
  }

  public updateCellChoices() {
    // 1. 列出每个格子可能的值
    this.blanks.forEach(cell => {
      cell.choices = cell.getRemains();
    });

    // 2. 如果一个数在当前区域只有一个可能出现的格子，那么剔除该格子其他可能的值
    if (this.findOnlyOneChoiceCell()) return;

    // 3. 如果当前区域内有 n 个格子都可能出现相同的 n 个数字，那么将这 n 个数字从其他格子剔除（2<n<9）
    this.reduceExclusiveN();
  }

  private reduceExclusiveN() {
    let num = 2;
    const queue = [this.rows, this.columns, this.blocks];
    let index = 0;
    while (num <= 4) {
      const current = queue[index];
      this.reduceChoicesIn(current, num);
      console.log('loop changed', num, index);
      num = num + Math.floor(index / 2);
      index = (index + 1) % 3;
    }
  }

  public fillBlanks() {
    this.blanks.forEach(blank => {
      if (blank.choices.length === 1) {
        blank.value = blank.choices[0];
        blank.choices = [];
      }
    });
    this.blanks = this.blanks.filter(c => !c.value);
  }

  public getNumberCount(num: number) {
    let count = 0;
    this.rows.forEach(row => {
      if (row.has(num)) count += 1;
    });
    return count;
  }

  public getNumberRemainCount(num: number) {
    return 9 - this.getNumberCount(num);
  }

  public getCell(row: number, column: number) {
    return this.rows[row].getCell(column);
  }
}
