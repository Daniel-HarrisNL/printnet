import React from 'react'
import './OptionIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faStar, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";


	


function OptionIcon(props) {
	let faName;
	let history = useHistory();
	let pathOnClick;
	switch(props.iconID) {
		case "Explore":
			faName=faSearch;
			pathOnClick = '/explore';
			break;
		case "Profile":
			faName=faUser;
			pathOnClick = '/profile';
			break;
		case "Post":
			faName=faEnvelope;
			pathOnClick = '/newpost';
			break;
		case "Favourites":
			faName=faStar;
			pathOnClick = '/favourites';
			break;
		case "Messages":
			faName=faComment;
			pathOnClick = '/messages';
			break;
		default:
			faName=faSearch;   
	      } 
	

	return (
		<div className="option-button" onClick={()=>history.push(pathOnClick)}>
			<FontAwesomeIcon className="option-icon" icon={faName} size='lg' />
			<p className="option-text">{props.iconID}</p>
		</div>
	)
}

export default OptionIcon
