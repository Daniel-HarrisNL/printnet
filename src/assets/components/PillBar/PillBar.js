import React from 'react'
import './PillBar.css'
import Pill from './Pill/Pill'

function PillBar() {
    return (
        <div className="Pill-bar">
            <Pill text="St. John's"/>
            <Pill text="3D Printers"/>
        </div>
    );
}

export default PillBar;
