import React from 'react';
import "./Bookmark.css"
import SingleBookmark from '../SingleBookmark/SingleBookmark';

const Bookmark = (props) => {
    const {bookmark} = props;
    return (
        <div className='bookmarks'>
            <h2>Bookmarked blogs: {props.bookmark.length}</h2>
            <div>
                {
                    bookmark.map(bookmark => <SingleBookmark
                    bookmark = {bookmark}
                    key={bookmark.id}
                    ></SingleBookmark>)
                }
                
            </div>
        </div>
    );
};

export default Bookmark;