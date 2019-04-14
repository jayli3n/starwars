import React from 'react';

const SearchBox = (props) => {
	const {searchChange, total, count} = props;
	const resultsLabel = (count, total) => {
		if(total !== 0 && count <= total && !(typeof total === "undefined")){
			return <h1 id='results_label'>{`Results: ${count}/${total}`}</h1>
		}
		else if(total === 0 || typeof total === "undefined"){
			return <h1 id='results_label'>Please select a category.</h1>
		}
	}
	return(
		<div className='o-90 glow:focus pb3'>
			{resultsLabel(count, total)}
			<input className='mt1 bg-near-white pa3 ba bw2 br2' type='search' placeholder='Search...' onChange={searchChange}/>
		</div>
	)
}

export default SearchBox;