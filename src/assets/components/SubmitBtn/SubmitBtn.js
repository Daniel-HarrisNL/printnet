import React from 'react'
import './SubmitBtn.css'
import { useHistory } from "react-router-dom";


function SubmitBtn() {
    let history = useHistory();
    return (
        <div className="submit-btn" onClick={()=>history.push('/explore')}>Post Ad</div>
    );
}

export default SubmitBtn