import React from 'react'
import ExplorePairCard from './ExplorePairCard/ExplorePairCard'
import './ExploreContainer.css'

function ExploreContainer() {
	return (
		<div className="exploreContainer">
			<ExplorePairCard text_left="3D Print" cName_left="printer" text_right="Optimize STL" cName_right="curagr"/>

			<ExplorePairCard text_left="CAD Design" cName_left="cad" text_right="Design Sketch" cName_right="sketch"/>

			<ExplorePairCard text_left="All Services" cName_left="otherservice" text_right="Printer Repair" cName_right="repair"/>
		</div>
	);
}

export default ExploreContainer;
