import React, { useState, useEffect, useRef } from 'react';
import Move from './components/Move.js'

function Moves({moves, undoToMove, previewUndo, previewUndoEnd}) {
	
	const movesDiv = useRef(null)

	useEffect(() => {
		movesDiv.current.scrollTop = moves.current.scrollHeight;
	})

	const moves = moves.map(move => <Move notation={move['notation']} 
                                          moveNumber={move['moveNumber']} 
                                          positions={move['positions']} 
                                          onClick={undoToMove} 
                                          onHover={previewUndo} 
                                          onMouseOut={previewUndoEnd} />)

	return ( 
		<div>
			<div className="board-moves__fade-before"></div>
	        	<div ref={ movesDiv } className="board-moves">
	              { moves }
	            </div>
	        <div className="board-moves__fade-after"></div>
        <div>
	)
} 

export default Moves;
