import React from 'react'
import './CancelBtn.css'
import { useHistory } from "react-router-dom";


	
function CancelBtn() {
    let history = useHistory();
    return (
        <div className="cancel-btn" onClick={()=>history.push('/')}>Cancel</div>
    );
}

export default CancelBtn
