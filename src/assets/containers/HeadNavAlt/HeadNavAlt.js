import React from 'react'
import './HeadNavAlt.css'
import { faBars, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import InlineContent from './InlineContent/InlineContent'


function HeadNavAlt() {
    return (
        <div className="head-nav-alt">
            <div className="place-holder-bar"/>
            <InlineContent innerIcon={faBars} outerIcon={faInfoCircle}/>    
        </div>
    )
}

export default HeadNavAlt
