import React from 'react';

const Buttons = (props) => {
	const {btnClick, done_loading} = props;
	let style;
	if(!done_loading){
		style = {
			'cursor': 'not-allowed',
	        'pointerEvents': 'none',
	        'color': '#c0c0c0',
	        'opacity': '0.65'
		}
	}
	return(
		<div className='flex-wrap'>
			<button style={style} id='0' disabled={!done_loading} className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>Planets</button>
			<button style={style} id='1' disabled={!done_loading} className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>Spaceships</button>
			<button style={style} id='2' disabled={!done_loading} className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>Vehicles</button>
			<button style={style} id='3' disabled={!done_loading} className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>People</button>
			<button style={style} id='4' disabled={!done_loading} className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>Films</button>
			<button style={style} id='5' disabled={!done_loading} className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>Species</button>
		</div>
	)
}

export default Buttons;