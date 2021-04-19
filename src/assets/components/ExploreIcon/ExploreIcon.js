import React from 'react';
import './ExploreIcon.css';
import InnerFrame from './InnerFrame/InnerFrame';
import { useHistory } from "react-router-dom";

function ExploreIcon(props) {
	let history = useHistory();
	let pathOnClick = `/explore/:${props.cName}`

	return (
		<div className={"exploreImage " + props.cName} onClick={()=>history.push(pathOnClick)}>
		     <InnerFrame text={props.text}/>   
		</div>
	);
}

export default ExploreIcon;
