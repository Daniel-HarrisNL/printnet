import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import "./PhotoFrame.css"

function PhotoFrame() {
    return (
        <div className="photo-frame">
            <FontAwesomeIcon icon={faCamera} size='2x'/>
            <p>No image available</p>
        </div>
    );
}

export default PhotoFrame;
