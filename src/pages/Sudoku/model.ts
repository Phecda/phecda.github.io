export const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export class Area {
  public index: number;
  public arr: Cell[] = [];

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
    return remains;
  }
  has(num: number) {
    return this.arr.map(c => c.value).includes(num);
  }
  getCell(index: number) {
    return this.arr[index];
  }
}

export class Cell {
  public readonly value: number;
  private row: Area;
  private col: Area;
  private block: Area;
  public readonly editable: boolean;
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
    const firstStep = this.row
      .getRemains()
      .filter(n => this.col.getRemains().includes(n))
      .filter(n => this.block.getRemains().includes(n));
    /**
     *  752136948
        184070000
        396480100
        070👈(shall be 3)010060
        000300400
        000007300
        000003001
        861200700
        000801250
     */
    // TODO: 通过夹击确定值的算法
    return firstStep;
  }
}

export class Table {
  private rows: Area[] = [];
  private columns: Area[] = [];
  private blocks: Area[] = [];

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
      });
    });
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
