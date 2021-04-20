import React from 'react'
import PhotoFrame from './PhotoFrame/PhotoFrame'
import ContentFrame from './ContentFrame/ContentFrame'
import "./PostObject.css"

function PostObject() {
    return (
        <div className="post-object">
            <PhotoFrame/>
            <ContentFrame/>
        </div>
    )
}

export default PostObject
