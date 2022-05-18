import React from 'react';
import './HackBg.scss';
import HackConsole from './HackConsole/HackConsole';

const HackBg = () => {

    return (
        <div className='hackbg'>
            <div className="noise"></div>
                <div className="overlay"></div>
                <div className="terminal">
                <h1>Error <span className="errorcode">409</span> <span><small>(conflict)</small></span></h1>
                <p className="output">There have been several conflicts uploading my precious profile picture, the app has entered safe mode.</p>
                <p className="output"> <small>Are you looking for a good developer?</small></p>
                <p className="output"><small>Use the console to navigate the portfolio. You can exit this mode using the <a href="#">Q</a> key</small> <small>or</small> <a href="#">⬇️</a>.</p>
                <div className='hackbg__console'>
                    <HackConsole />
                </div>
            </div>
        </div>
    )
};

export default HackBg;