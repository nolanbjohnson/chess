import React, { useState, useEffect, useRef } from 'react';
import Square from './components/Square.js'

function Board({boardSizeX, boardSizeY, activeSquare, activateSquare, positions, preview, previewPositions}) {

	const boardSquares = Array(boardSizeY).fill(Array(boardSizeX).fill(0)).map((row, rowIndex) => {
        let cells = row.map((column, columnIndex) => {
          const square = indexToLetter(columnIndex)+Math.abs(rowIndex-8) // board is from bottom left to top right, so swap row index
          return <Square key={square} 
                         idx={square} 
                         selected={ activeSquare === square }
                         piece={ preview ? previewPositions[square] : positions[square]} 
                         onClick={ activateSquare} />
        })
        return <tr key={rowIndex}>{cells}</tr>

      })

	return ( <table className={ preview ? "preview" : ""}>
              <tbody>
                { boardSquares }
              </tbody>
              </table> )
} 

export default Board;
