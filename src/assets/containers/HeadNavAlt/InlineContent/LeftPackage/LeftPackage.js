import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LeftPackage.css'


function LeftPackage(props) {
    return (
        <div className="left-package">
            <FontAwesomeIcon className="left-package-icon" icon={props.innerIcon} size='lg'/> 
            <div>Post</div> 
        </div>
    )
}

export default LeftPackage
