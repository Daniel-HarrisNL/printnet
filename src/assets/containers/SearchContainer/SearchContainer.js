import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchContainer.css'
import SearchBar from '../../components/SearchBar/SearchBar'

function SearchContainer(props) {
	return (
		<div className="search-container">
			<SearchBar/>
			<FontAwesomeIcon className="fa-icon" icon={props.icon} size='lg'/>    
		</div>
	)
}

export default SearchContainer
