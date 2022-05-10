export const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export class Area {
  public index: number;
  public arr: Cell[] = [];
  public done = false;

  constructor(i: number) {
    this.index = i;
  }

  load(cell: Cell, at: number) {
    this.arr[at] = cell;
  }
  canFillNumber(num: number) {
    return !this.has(num);
  }
  getRemains() {
    const filled = this.arr.map(c => c.value).filter(v => v);
    const remains = validNumbers.filter(n => !filled.includes(n));
    this.done = !remains.length;
    return remains;
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
    return this.row
      .getRemains()
      .filter(n => this.col.getRemains().includes(n))
      .filter(n => this.block.getRemains().includes(n));
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
        console.log('load row', rowIndex, colIndex, 'with', col);
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

  private findOnlyOneChoiceCell(areas: Area[]) {
    areas.forEach(area => {
      if (!area.done) {
        const emptyCellsHere = area.getEmptyCells();
        area.getRemains().forEach(remaining => {
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
          }
        });
      }
    });
  }
  public updateCellChoices() {
    // 1. 列出每个格子可能的值
    this.blanks.forEach(cell => {
      cell.choices = cell.getRemains();
    });

    // 2. 如果一个数在当前区域只有一个可能出现的格子，那么剔除该格子其他可能的值
    this.findOnlyOneChoiceCell(this.rows);
    this.findOnlyOneChoiceCell(this.columns);
    this.findOnlyOneChoiceCell(this.blocks);

    // 3. 如果当前区域内有 n 个格子都可能出现相同的 n 个数字，那么将这 n 个数字从其他格子剔除（2<n<9）
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
