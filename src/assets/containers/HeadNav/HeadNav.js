import React from 'react'
import './HeadNav.css'
import SearchContainer from '../SearchContainer/SearchContainer'
import { faBell, faFilter, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function HeadNav() {
    return (
        <div className="head-nav">
            <div className="place-holder-bar"/>
            <SearchContainer icon={faBell}/>
        </div>
    );
}

export default HeadNav;
