
export function findEmptyCell(board) {
	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			if (board[row][col] === 0) return [row, col];
		}
	}
	return null;
}

export function isValid(board, row, col, num) {
	// Fila
	if (board[row].includes(num)) return false;
	// Columna
	for (let r = 0; r < 9; r++) if (board[r][col] === num) return false;
	// Bloque 3x3
	const br = Math.floor(row / 3) * 3;
	const bc = Math.floor(col / 3) * 3;
	for (let r = br; r < br + 3; r++)
		for (let c = bc; c < bc + 3; c++)
			if (board[r][c] === num) return false;
	return true;
}

export function cloneBoard(board) {
	return board.map(row => [...row]);
}
