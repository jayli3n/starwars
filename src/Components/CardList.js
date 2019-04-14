import React from 'react';
import Card from './Card';

const CardList = (props) => {
	let {items} = props;
	if(typeof items[0] === "string" && items[0] === "loading"){
		return(
			<div className='pa3'>
				<h1 id='loading'>LOADING...</h1>
			</div>
		)
	}
	else{
		items = items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
		return(
			<div className='pa3'>
				{items.map((item, i) => {
					const array = Object.entries(item);
					return(
						<Card key={i} name={array[0][1]} p1={array[1]} p2={array[2]} p3={array[3]} p4={array[4]} p5={array[5]} />
					)
				})}
			</div>
		)
	}
}

export default CardList;