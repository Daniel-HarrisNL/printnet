import React from 'react'
import './ScrollBody.css'
import AdObject from '../../components/AdObject/AdObject'
import PostObject from '../../components/PostObject/PostObject'
import PageArrows from '../../components/PageArrows/PageArrows'

function ScrollBody() {
    return (
        <div className="scroll-body">
            <AdObject/>
            <PostObject headline={"This is a sample headline"} price="$5 / ft" time="<1hr" location="St. John's"/>
            <PostObject headline={"Different example"} price="$25 / hr" time="<1hr" location="St. John's"/>
            <PostObject headline={"This is a sample headline"} price="$5 / ft" time="<1hr" location="St. John's"/>
            <PostObject headline={"Different example"} price="$25 / hr" time="<1hr" location="St. John's"/>
            <PostObject headline={"This is a sample headline"} price="$5 / ft" time="<1hr" location="St. John's"/>
            <PostObject headline={"Different example"} price="$25 / hr" time="<1hr" location="St. John's"/>
            <AdObject/>
            <PostObject headline={"This is a sample headline"} price="$5 / ft" time="<1hr" location="St. John's"/>
            <PageArrows/>
        </div>
    );
}

export default ScrollBody
