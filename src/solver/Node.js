
export default class Node {
	constructor(board, parent = null, depth = 0) {
		this.board = board;
		this.parent = parent;
		this.depth = depth;
	}

	getKey() {
		// Convierte el tablero en string para hashing o comparación
		return this.board.flat().join('');
	}
}
