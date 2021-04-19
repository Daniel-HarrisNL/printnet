import React from 'react'
import './SaveSearch.css'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch as SwitchMUI } from '@material-ui/core';

function SaveSearch() {
    return (
        <div className="save-search">
            <div className="save-search-inner">
                <FontAwesomeIcon className="search-icon" icon={faBookmark} size='lg'/>
                <p>Save this search and get notified</p>
            </div>
            <SwitchMUI></SwitchMUI>
        </div>
    );
}

export default SaveSearch;
