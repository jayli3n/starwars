import React from 'react';

const ScrollView = (props) => {
	return(
		<div style={{overflowY: 'scroll', border: '3px solid black', height: '800px'}}>
			{props.children}
		</div>
	)
}

export default ScrollView;