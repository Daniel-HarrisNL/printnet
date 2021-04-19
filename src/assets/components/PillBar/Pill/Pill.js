import React from 'react'
import './Pill.css'

function Pill(props) {
    return (
        <div className="Pill">
            {props.text}
        </div>
    );
}

export default Pill;
