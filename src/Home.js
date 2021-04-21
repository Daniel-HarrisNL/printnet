import React from 'react'
import './Home.css';
import ExploreContainer from './assets/containers/ExploreContainer/ExploreContainer'
import OptionBar from './assets/components/OptionBar/OptionBar'
import HeadNav from './assets/containers/HeadNav/HeadNav'



function Home() {
    return (<div className="Home">
		<HeadNav extended={false}/>
		<div className="explore-text">Find services near you</div>
		<ExploreContainer/>
		<OptionBar/>
	</div>);
}

export default Home
