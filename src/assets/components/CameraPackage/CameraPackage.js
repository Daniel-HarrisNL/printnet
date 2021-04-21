import React from 'react'
import './CameraPackage.css'
import CameraIcon from './CameraIcon/CameraIcon'

function CameraPackage() {
    return (
        <div className="camera-package">
            <CameraIcon/>
            <div>0/3</div>
        </div>
    )
}

export default CameraPackage
