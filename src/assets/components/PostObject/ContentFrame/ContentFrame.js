import React from 'react'
import "./ContentFrame.css"
import FrameLower from './FrameLower/FrameLower'
import FrameUpper from './FrameUpper/FrameUpper'

function ContentFrame(props) {
    return (
        <div className="content-frame">
            <FrameUpper headline={props.headline} time={props.time}/>
            <FrameLower price={props.price} location={props.location}/>
        </div>
    );
}

export default ContentFrame;
