import React from 'react'
import PhotoFrame from './PhotoFrame/PhotoFrame'
import ContentFrame from './ContentFrame/ContentFrame'
import "./PostObject.css"

function PostObject(props) {
    return (
        <div className="post-object">
            <PhotoFrame/>
            <ContentFrame headline={props.headline} price={props.price} time={props.time} location={props.location}/>
        </div>
    )
}

export default PostObject
