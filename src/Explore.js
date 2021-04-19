import React from 'react'
import './Explore.css';
import OptionBar from './assets/components/OptionBar/OptionBar'
import HeadNav from './assets/containers/HeadNav/HeadNav'



function Explore() {
    return (<div className="Explore">
		<HeadNav extended={true}/>
		<OptionBar/>
	</div>);
}

export default Explore
