import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchBar.css' 
import { useHistory } from "react-router-dom";



function SearchBar(props) {
	let history = useHistory();

	const iconClickHandler = ()=>{
		if (props.iconName === "arrowLeft") {
			history.push("/");
		}else {
			// Do drawer stuff
		}
	}
	
	return (	
		<div className="search-bar">
		<label className="search-icon" onClick={iconClickHandler}>
			<FontAwesomeIcon icon={props.innerIcon} size='lg'/>
		</label>
		<input type="text" className="search-input" id="search-input" placeholder="Search PrintNet"/>
		</div>
	);
}

export default SearchBar;
