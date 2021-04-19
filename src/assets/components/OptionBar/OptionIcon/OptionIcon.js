import React from 'react'
import './OptionIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faStar, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons'


function OptionIcon(props) {
	let faName;
	switch(props.iconID) {
		case "Explore":
			faName=faSearch;
			break;
		case "Profile":
			faName=faUser;
			break;
		case "Post":
			faName=faEnvelope;
			break;
		case "Favourites":
			faName=faStar;
			break;
		case "Messages":
			faName=faComment;
			break;
		default:
			faName=faSearch;   
	      } 
	

	return (
		<div className="option-button">
			<FontAwesomeIcon className="option-icon" icon={faName} size='lg'/>
			<p className="option-text">{props.iconID}</p>
		</div>
	)
}

export default OptionIcon
