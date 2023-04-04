import React from 'react';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <div  className='header'>
                <div>
                    <h2>Knowledge Cafe</h2>
                </div>
                <div>
                    <h2><FontAwesomeIcon icon={faCoffee} /></h2>
                </div>
            </div>
            <hr />
            
        </div>
    );
};

export default Header;