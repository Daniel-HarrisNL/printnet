import React from 'react'
import './OptionBar.css'
import OptionIcon from './OptionIcon/OptionIcon'

function OptionBar() {
	return (
		<div className="option-bar">
			<OptionIcon iconID="Explore"/>
			<OptionIcon iconID="Profile"/>
			<OptionIcon iconID="Post"/>
			<OptionIcon iconID="Favourites"/>
			<OptionIcon iconID="Messages"/>
		</div>
	)
}

export default OptionBar
