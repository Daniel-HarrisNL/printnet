import React from 'react'
import './Home.css';
import ExploreContainer from './assets/containers/ExploreContainer/ExploreContainer'
import OptionBar from './assets/components/OptionBar/OptionBar'
import SearchContainer from './assets/containers/SearchContainer/SearchContainer'
import { faBell, faFilter, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (<div className="Home">
		<SearchContainer icon={faBell}/>
		<h1 className="explore">Find services near you</h1>
		<ExploreContainer/>
		<OptionBar/>
	</div>);
}

export default Home
