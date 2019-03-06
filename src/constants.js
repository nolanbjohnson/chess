

export const BOARD_SIZE_X = 8
export const BOARD_SIZE_Y = 8

export const SQUARE_COLOR = "#FFF"
export const SQUARE_COLOR_ALT = "#DDD"

export const LETTERS = 'abcdefghijklmnopqrstuvwxyz'

export const PIECES = '♚ ♛ ♜ ♝ ♞ ♟ ♔ ♕ ♖ ♗ ♘ ♙'
const PIECES_STRING = 'KQRBNP'

export const PIECE_LOOKUP = (charRepresentation, color='black') => {
	const pieces = PIECES.split('')
	const charIndex = PIECES_STRING.split('').indexOf(charRepresentation)
	return pieces[charIndex + (color === 'black' ? 0 : 7)]
}


export const PIECE_DICTIONARY = [
	{ character: "♔", decimal: "9812", hex: "2654", color: "WHITE", piece: "KING", name: "WHITE CHESS KING" }, 
	{ character: "♕", decimal: "9813", hex: "2655", color: "WHITE", piece: "QUEEN", name: "WHITE CHESS QUEEN" }, 
	{ character: "♖", decimal: "9814", hex: "2656", color: "WHITE", piece: "ROOK", name: "WHITE CHESS ROOK" }, 
	{ character: "♗", decimal: "9815", hex: "2657", color: "WHITE", piece: "BISHOP", name: "WHITE CHESS BISHOP" }, 
	{ character: "♘", decimal: "9816", hex: "2658", color: "WHITE", piece: "KNIGHT", name: "WHITE CHESS KNIGHT" }, 
	{ character: "♙", decimal: "9817", hex: "2659", color: "WHITE", piece: "PAWN", name: "WHITE CHESS PAWN" }, 
	{ character: "♚", decimal: "9818", hex: "265A", color: "BLACK", piece: "KING", name: "BLACK CHESS KING" }, 
	{ character: "♛", decimal: "9819", hex: "265B", color: "BLACK", piece: "QUEEN", name: "BLACK CHESS QUEEN" }, 
	{ character: "♜", decimal: "9820", hex: "265C", color: "BLACK", piece: "ROOK", name: "BLACK CHESS ROOK" }, 
	{ character: "♝", decimal: "9821", hex: "265D", color: "BLACK", piece: "BISHOP", name: "BLACK CHESS BISHOP" }, 
	{ character: "♞", decimal: "9822", hex: "265E", color: "BLACK", piece: "KNIGHT", name: "BLACK CHESS KNIGHT" }, 
	{ character: "♟", decimal: "9823", hex: "265F", color: "BLACK", piece: "PAWN", name: "BLACK CHESS PAWN" }
]
// export const STARTING_POSITIONS = {
// 	a2: 'P',
// 	b2: 'P',
// 	c2: 'P',
// 	d2: 'P',
// 	e2: 'P',
// 	f2: 'P',
// 	g2: 'P',
// 	h2: 'P',
	
// 	a1: 'R',
// 	b1: 'N',
// 	c1: 'B',
// 	d1: 'Q',
// 	e1: 'K',
// 	f1: 'B',
// 	g1: 'N',
// 	h1: 'R',

// 	a8: 'R',
// 	b8: 'N',
// 	c8: 'B',
// 	d8: 'Q',
// 	e8: 'K',
// 	f8: 'B',
// 	g8: 'N',
// 	h8: 'R',
			
// 	a7: 'P',
// 	b7: 'P',
// 	c7: 'P',
// 	d7: 'P',
// 	e7: 'P',
// 	f7: 'P',
// 	g7: 'P',
// 	h7: 'P',
// }

export const STARTING_POSITIONS = {
	a2: '♙',
	b2: '♙',
	c2: '♙',
	d2: '♙',
	e2: '♙',
	f2: '♙',
	g2: '♙',
	h2: '♙',
	
	a1: '♖',
	b1: '♘',
	c1: '♗',
	d1: '♕',
	e1: '♔',
	f1: '♗',
	g1: '♘',
	h1: '♖',

	a8: '♜',
	b8: '♞',
	c8: '♝',
	d8: '♛',
	e8: '♚',
	f8: '♝',
	g8: '♞',
	h8: '♜',
			
	a7: '♟',
	b7: '♟',
	c7: '♟',
	d7: '♟',
	e7: '♟',
	f7: '♟',
	g7: '♟',
	h7: '♟',
}
