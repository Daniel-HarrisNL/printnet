import React from 'react'
import './Explore.css';
import ExploreContainer from './assets/containers/ExploreContainer/ExploreContainer'
import OptionBar from './assets/components/OptionBar/OptionBar'
import HeadNav from './assets/containers/HeadNav/HeadNav'



function Explore() {
    return (<div className="Explore">
		<HeadNav/>
		<OptionBar/>
	</div>);
}

export default Explore
