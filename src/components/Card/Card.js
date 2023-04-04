import React from 'react';
import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {img, name, Day, massage, ratings, title, url, read} = props.card;
    const addToBookmark = props.addToBookmark;
    return (
        <div>
            <div className='card'>
                <img className='main-img' src={img} alt="" />
                <div className='card-author-info'>
                    <div className='author-info'>
                        <img className='author-img' src={url} alt="" />
                        <div className='author-name-date'>
                            <h3 className='author-name'>{name}</h3>
                            <p className='publish-date'>{Day}</p>
                        </div>
                    </div>
                    <div className='bookmark-icon'>
                        <p>{ratings}</p>
                        <FontAwesomeIcon onClick={() => addToBookmark(props.card)} className='icon' icon={faBookmark} />
                    </div>
                </div>
                <div className='title'>
                    <h2>{title}</h2>
                </div>
                <div className='button'>
                    <button>{read}</button>
                </div>
            </div>  
        </div>
    );
};

export default Card;