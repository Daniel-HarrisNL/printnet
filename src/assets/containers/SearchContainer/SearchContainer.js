import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchContainer.css'

function SearchContainer(props) {
	return (
		<div className="search-container">
			<FontAwesomeIcon className="fa-icon" icon={props.icon} size='lg'/>    
		</div>
	)
}

export default SearchContainer
