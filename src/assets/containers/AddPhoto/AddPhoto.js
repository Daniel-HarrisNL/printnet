import React from 'react'
import './AddPhoto.css'
import CameraPackage from '../../components/CameraPackage/CameraPackage'
import DashedPlaceholder from '../../components/DashedPlaceholder/DashedPlaceholder'

function AddPhoto() {
    return (
        <div className="add-photo">
            <CameraPackage/>
            <DashedPlaceholder/>
            <DashedPlaceholder/>
            <DashedPlaceholder/>
        </div>
    )
}

 export default AddPhoto
