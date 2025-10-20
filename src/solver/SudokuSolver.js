
import Node from './Node.js';
import { findEmptyCell, isValid, cloneBoard } from '../utils/board.js';

export default class SudokuSolver {
	constructor(initialBoard) {
		this.root = new Node(initialBoard);
		this.solution = null;
	}

	solve(node = this.root) {
		const empty = findEmptyCell(node.board);
		if (!empty) {
			this.solution = node.board;
			return true;
		}

		const [row, col] = empty;
		for (let num = 1; num <= 9; num++) {
			if (isValid(node.board, row, col, num)) {
				const newBoard = cloneBoard(node.board);
				newBoard[row][col] = num;

				const childNode = new Node(newBoard, node, node.depth + 1);
				if (this.solve(childNode)) return true;
			}
		}
		return false;
	}
}
