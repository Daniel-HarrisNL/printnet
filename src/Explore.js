import React from 'react'
import './Explore.css';
import OptionBar from './assets/components/OptionBar/OptionBar'
import HeadNav from './assets/containers/HeadNav/HeadNav'
import ScrollBody from './assets/containers/ScrollBody/ScrollBody'


function Explore() {
    return (<div className="Explore">
		<HeadNav extended={true}/>
		<ScrollBody/>
		<OptionBar/>
	</div>);
}

export default Explore
