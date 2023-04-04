import React from 'react';
import "./SingleBookmark.css"

const SingleBookmark = (props) => {
    const {massage} = props.bookmark;
    console.log(props.bookmark)
    return (
        <div className='massage'>
            <h4>{massage}</h4>
        </div>
    );
};

export default SingleBookmark;