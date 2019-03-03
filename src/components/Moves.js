import React, { useState, useEffect, useRef } from 'react';
import Move from './Move.js'

function Moves({moves, undoToMove, previewUndo, previewUndoEnd}) {
	
	const movesDiv = useRef(null)

	// useEffect(() => {
	// 	movesDiv.current.scrollTop = movesDiv.current.scrollHeight;
	// })

	const singleMoves = moves.map(move => <Move notation={move['notation']} 
                                          moveNumber={move['moveNumber']} 
                                          positions={move['positions']} 
                                          onClick={undoToMove} 
                                          onHover={previewUndo} 
                                          onMouseOut={previewUndoEnd} />)

	return ( 
		<div>
			<div className="board-moves__fade-before"></div>
	        	<div ref={ movesDiv } className="board-moves">
	              { singleMoves }
	            </div>
	        <div className="board-moves__fade-after"></div>
        </div>
	)
} 

export default Moves;
