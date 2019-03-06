import React, { useEffect, useRef } from 'react';

function Square({idx, piece, selected, onClick}) {

	let square = useRef(null)

	function handleClick(e) {
		onClick(idx, piece || '')
	}

	useEffect(() => {
		square.current.addEventListener('click', handleClick)
		return function cleanup() { square.current.removeEventListener('click', handleClick) }
	})

	return ( <td ref={square} data-idx={idx} className={ selected && piece ? "square__selected" : ""}><span className="piece">{piece}</span></td> )
} 

export default Square;
