import React from 'react';

const Buttons = (props) => {
	const {btnClick} = props;
	return(
		<div className='flex-wrap'>
			<button id='0' className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>Planets</button>
			<button id='1' className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>Spaceships</button>
			<button id='2' className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>Vehicles</button>
			<button id='3' className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>People</button>
			<button id='4' className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>Films</button>
			<button id='5' className='o-90 bg-near-black yellow tc ma2 ph4 pv2 br4 grow bw2 b--yellow ba' type="button" onClick={btnClick}>Species</button>
		</div>
	)
}

export default Buttons;