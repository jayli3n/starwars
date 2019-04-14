import React from 'react';

const Card = (props) => {
	const {name, p1, p2, p3, p4, p5} = props;

	const capitalize = (string) => {
		if(typeof string === "string"){
    		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
		}
		else{
			return string;
		}
	}

	return(
		<div className='tc bg-yellow br3 ma2 pa2 dib grow bw2 b--black ba mw6'>
			<h3>{name}</h3>
			<div className='tl ph4'>
				<p className=''><strong>{capitalize(p1[0]).replace('_', ' ')}: </strong>{capitalize(p1[1])}</p>
				<p className=''><strong>{capitalize(p2[0]).replace('_', ' ')}: </strong>{capitalize(p2[1])}</p>
				<p className=''><strong>{capitalize(p3[0]).replace('_', ' ')}: </strong>{capitalize(p3[1])}</p>
				<p className=''><strong>{capitalize(p4[0]).replace('_', ' ')}: </strong>{capitalize(p4[1])}</p>
				<p className=''><strong>{capitalize(p5[0]).replace('_', ' ')}: </strong>{capitalize(p5[1])}</p>
			</div>
		</div>
	)
}

export default Card;