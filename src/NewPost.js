import React from 'react'
import './NewPost.css'
import HeadNavAlt from './assets/containers/HeadNavAlt/HeadNavAlt'
import ButtonContainer from './assets/containers/ButtonContainer/ButtonContainer'
import NewPostScrollBody from './assets/containers/NewPostScrollBody/NewPostScrollBody'

function NewPost() {
    return (
        <div className="New-post">
            <HeadNavAlt/>
            <NewPostScrollBody/>
            <ButtonContainer/>
        </div>
    );
}

export default NewPost
