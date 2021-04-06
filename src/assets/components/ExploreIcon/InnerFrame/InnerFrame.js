import React from 'react';
import './InnerFrame.css';

function InnerFrame(props) {
        return (
                <div className="innerFrame"><p className="innerFrameText">{props.text}</p></div>
        );
}

export default InnerFrame;
