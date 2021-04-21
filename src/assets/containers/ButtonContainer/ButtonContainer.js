import React from 'react'
import './ButtonContainer.css'
import SubmitBtn from '../../components/SubmitBtn/SubmitBtn'
import CancelBtn from '../../components/CancelBtn/CancelBtn'

function ButtonContainer() {
    return (
        <div className="button-container">
            <CancelBtn/>
            <SubmitBtn/>
        </div>
    )
}

export default ButtonContainer
