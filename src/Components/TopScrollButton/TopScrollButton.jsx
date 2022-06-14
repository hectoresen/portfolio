import React from 'react';
import {ImArrowUp2} from 'react-icons/im';
import './TopScrollButton.scss';

const TopScrollButton = () => {

    const goTop = () =>{
        document.getElementById('portfolio').scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='topscrollbutton'>
            <span className='topscrollbutton-icon' onClick={goTop}><ImArrowUp2 /></span>
        </div>
    )
}

export default TopScrollButton;