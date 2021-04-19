import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css' 

function SearchBar(props) {
	return (
		
		<div className="search-bar">
		<label htmlFor="search-input" className="search-icon">
			<FontAwesomeIcon icon={props.innerIcon} size='lg'/>
		</label>
		<input type="text" className="search-input" id="search-input" placeholder="Search PrintNet"/>
		</div>
	);
}

export default SearchBar
