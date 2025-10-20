
import SudokuSolver from './src/solver/SudokuSolver.js';

const sudoku_easy = [
		[0,	4,	0,		0,	2,	0,		0,	9,	0],
		[8,	0,	0,		7,	0,	0,		0,	2,	0],
		[6,	0,	0,		1,	0,	4,		0,	7,	0],

		[0,	0,	0,		0,	7,	0,		0,	0,	2],
		[5,	0,	6,		0,	0,	0,		9,	0,	3],
		[2,	0,	0,		0,	6,	0,		0,	0,	0],

		[0,	3,	0,		6,	0,	2,		0,	0,	4],
		[0,	8,	0,		0,	0,	5,		0,	0,	7],
		[0,	6,	0,		0,	1,	0,		0,	8,	0]
	];

const sudoku_hard = [
		[0,	6,	0,		4,	0,	0,		3,	0,	0],
		[0,	4,	0,		2,	0,	0,		0,	5,	1],
		[0,	0,	7,		0,	0,	0,		9,	0,	0],

		[0,	0,	3,		0,	0,	6,		0,	0,	5],
		[4,	0,	0,		0,	0,	8,		0,	0,	0],
		[0,	0,	0,		0,	9,	1,		7,	4,	0],

		[0,	5,	0,		0,	3,	0,		0,	0,	0],
		[0,	0,	2,		0,	0,	0,		0,	6,	0],
		[0,	0,	0,		0,	0,	0,		0,	8,	0]
	];


const sudoku_broken = [
		[0,	6,	0,		4,	0,	0,		3,	0,	0],
		[0,	4,	0,		2,	0,	0,		0,	5,	1],
		[0,	0,	7,		0,	0,	0,		9,	0,	0],

		[0,	0,	3,		0,	0,	6,		0,	0,	5],
		[4,	0,	0,		0,	0,	8,		0,	0,	0],
		[0,	0,	0,		0,	9,	1,		7,	4,	0],

		[0,	5,	0,		0,	3,	0,		0,	0,	0],
		[0,	0,	2,		0,	0,	0,		0,	0,	0],
		[0,	6,	0,		0,	0,	0,		0,	6,	0]
	];

let solver = new SudokuSolver(sudoku_easy);
solver.solve();

console.log("✅ Solución encontrada para 'sudoku_easy':");
console.table(solver.solution);

solver = new SudokuSolver(sudoku_hard);
solver.solve();

console.log("✅ Solución encontrada para 'sudoku_hard':");
console.table(solver.solution);

solver = new SudokuSolver(sudoku_broken);
solver.solve();

console.log("✅ Solución encontrada para 'sudoku_broken':");
console.table(solver.solution);