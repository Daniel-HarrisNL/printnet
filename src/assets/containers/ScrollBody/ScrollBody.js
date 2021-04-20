import React from 'react'
import './ScrollBody.css'
import AdObject from '../../components/AdObject/AdObject'
import PostObject from '../../components/PostObject/PostObject'

function ScrollBody() {
    return (
        <div className="scroll-body">
            <AdObject/>
            <PostObject/>
        </div>
    );
}

export default ScrollBody
