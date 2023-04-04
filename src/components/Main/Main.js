import React, { useEffect, useState } from 'react';
import "./Main.css"
import Card from '../Card/Card';
import Bookmark from '../Bookmark/Bookmark';

const Main = () => {
    const [cards, setCards] = useState([]);
    const [bookmark, setBookmark] = useState([]);


    useEffect(() => {
        fetch("developer.json")
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    const addToBookmark = (card) => {
        const newBookmark = [...bookmark, card]
            setBookmark(newBookmark);
            
    }

    return (
        <div className='main'>
            <div className='cards'>
                {
                    cards.map(card => <Card 
                        card={card}
                        key={card.id}
                        addToBookmark={addToBookmark}
                        ></Card>)
                }
                
            </div>
            <div className='Bookmarks'>
                <Bookmark bookmark={bookmark}></Bookmark>
            </div>
        </div>
    );
};

export default Main;