import React from 'react'
import './CameraIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

function CameraIcon() {
    return (
        <div className="camera-icon">
            <FontAwesomeIcon icon={faCamera} size='3x' />
        </div>
    )
}

export default CameraIcon
