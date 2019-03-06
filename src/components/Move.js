import React, { useEffect, useRef } from 'react';

let pauseEvents = false // Not supposed to use module level variable, but want var to be shared and don't know where debounce-style state would belong

function Move({notation, moveNumber, positions, onClick, onHover, onMouseOut}) {

	const move = useRef(null)

	function handleClick(e) {
		pauseEvents = true
		onClick([move.current.dataset.moveNumber, positions])
		setTimeout(() => {
			pauseEvents = false
		}, 500)
	}

	function handleHover(e) {
		if (!pauseEvents) onHover(positions, moveNumber)
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
