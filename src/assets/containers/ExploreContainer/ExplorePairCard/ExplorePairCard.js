import React from 'react'
import ExploreIcon from '../../../components/ExploreIcon/ExploreIcon'
import './ExplorePairCard.css'

function ExplorePairCard(props) {
        return (
                <div className="pairCard">
                        <ExploreIcon text={props.text_left} cName={props.cName_left}/>
                        <ExploreIcon text={props.text_right} cName={props.cName_right}/> 
                </div>
        );
}

export default ExplorePairCard;
