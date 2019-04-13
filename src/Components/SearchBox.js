import React from 'react';

const SearchBox = (props) => {
	const {searchChange} = props;
	return(
		<div className='o-90 glow:focus pa2'>
			<input className='bg-near-white pa3 ba bw2 br2' type='search' placeholder='Search...' onChange={searchChange}/>
		</div>
	)
}

export default SearchBox;