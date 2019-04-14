import React from 'react';
import Card from './Card';

const CardList = (props) => {
	let {items} = props;
	items = items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
	return(
		<div>
			{items.map((item, i) => {
				const array = Object.entries(item);
				return(
					<Card key={i} name={array[0][1]} p1={array[1]} p2={array[1]} p3={array[2]} p4={array[3]} p5={array[4]} />
				)
			})}
		</div>
	)
}

export default CardList;