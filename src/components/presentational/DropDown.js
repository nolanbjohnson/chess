import React from 'react';

function FreeTextDropDown ({
	name,
	options,
	onChange
	}) {

	const name_list = `${name}_list`
	return (
		<form>
		<input type="text" name={ name } list={ name_list } onChange={ onChange } />
		<datalist id={ name_list }>
		  { options.map((option, i) => <option key={ i } value={ option } />) }
		</datalist>
		</form>
    )
}

export default FreeTextDropDown;

