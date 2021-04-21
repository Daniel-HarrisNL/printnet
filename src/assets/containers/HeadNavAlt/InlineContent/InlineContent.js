import React from 'react'
import './InlineContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LeftPackage from './LeftPackage/LeftPackage'

function InlineContent(props) {
    return (
        <div className="inline-content">
            <LeftPackage innerIcon={props.innerIcon}/>
            <FontAwesomeIcon className="inline-icon" icon={props.outerIcon} size='lg'/>
        </div>
    )
}

export default InlineContent
