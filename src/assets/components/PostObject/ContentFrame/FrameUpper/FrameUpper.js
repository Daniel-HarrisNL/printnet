import React from 'react'
import './FrameUpper.css'

function FrameUpper(props) {
    return (
        <div className="frame-upper">
            <div>{props.headline}</div>
            <div className="time-stamp">{props.time}</div>
        </div>
    )
}

export default FrameUpper
