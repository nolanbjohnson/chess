import React, { useState, useEffect, useRef } from 'react';

function Move({notation, moveNumber, positions, onClick, onHover, onMouseOut}) {
	const [stateBeforeMove, setStateBeforeMove] = useState(positions)
	const move = useRef(null)

	function handleClick(e) {
		onClick(move.current.dataset.moveNumber, stateBeforeMove)
	}

	function handleHover(e) {
		onHover(stateBeforeMove, moveNumber)
	}

	function handleMouseOut(e) {
		onMouseOut()
	}

	useEffect(() => {
		move.current.addEventListener('click', handleClick)
		return () => move.current.removeEventListener('click', handleClick)
	})

	useEffect(() => {
		move.current.addEventListener('mouseover', handleHover)
		return () => move.current.removeEventListener('mouseover', handleHover)
	})

	useEffect(() => {
		move.current.addEventListener('mouseout', handleMouseOut)
		return () => move.current.removeEventListener('mouseout', handleMouseOut)
	})

	return ( <div ref={move} className="notation" data-move-number={moveNumber}><small>[{moveNumber}]</small><span> </span>{notation}</div> )
} 

export default Move;
