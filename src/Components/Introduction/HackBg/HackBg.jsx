import React from 'react';
import HackConsole from './HackConsole/HackConsole';
import { HackBgContext } from '../../../Shared/Contexts/BgContext';
import './HackBg.scss';
import { useContext } from 'react';

const HackBg = () => {
    const [{activeHackBg}, toggleHackBg] = useContext(HackBgContext);

    return (
        <div className='hackbg'>
            <div className="noise"></div>
                <div className="overlay"></div>
                <div className="terminal">
                <h1>Error <span className="errorcode">409</span> <span><small>(conflict)</small></span></h1>
                <p className="output">There have been several conflicts uploading my precious profile picture, the app has entered safe mode.</p>
                <p className="output"> <small>Are you looking for a good developer?</small></p>
                <p className="output"><small>Use the console to navigate the portfolio. You can exit this mode using the </small><a href="#" onClick={toggleHackBg}>ESC</a> <small>key</small>.</p>
                <div className='hackbg__console'>
                    <HackConsole />
                </div>
            </div>
        </div>
    )
};

export default HackBg;