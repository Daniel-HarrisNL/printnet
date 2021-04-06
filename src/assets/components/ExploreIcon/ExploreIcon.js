import React from 'react';
import './ExploreIcon.css';
import InnerFrame from './InnerFrame/InnerFrame';

function ExploreIcon(props) {
        return (
                <div className={"exploreImage " + props.cName}>
                     <InnerFrame text={props.text}/>   
                </div>
        );
}

export default ExploreIcon;
