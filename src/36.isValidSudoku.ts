function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    const rowSet = new Set<string>();
    const colSet = new Set<string>();
    const gridSet = new Set<string>();

    for (let j = 0; j < board.length; j++) {
      const rowEl = board[i][j];
      const colEl = board[j][i];

      const x = (i % 3) * 3 + (j % 3);
      const y = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      const gridEl = board[x][y];

      if (rowEl !== ".") {
        if (rowSet.has(rowEl)) return false;
        rowSet.add(rowEl);
      }

      if (colEl !== ".") {
        if (colSet.has(colEl)) return false;
        colSet.add(colEl);
      }

      if (gridEl !== ".") {
        if (gridSet.has(gridEl)) return false;
        gridSet.add(gridEl);
      }
    }
  }

  return true;
}

const board1: string[][] = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board2: string[][] = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board1)); // true
console.log(isValidSudoku(board2)); // false
