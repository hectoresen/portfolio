import React from 'react';
import HackConsole from './HackConsole/HackConsole';
import { HackBgContext } from '../../../Shared/Contexts/BgContext';
import './HackBg.scss';
import { FormattedMessage  as T} from 'react-intl';
import { useContext } from 'react';

const HackBg = () => {
    const [{activeHackBg}, toggleHackBg] = useContext(HackBgContext);

    return (
        <div className='hackbg'>
            <div className="noise"></div>
                <div className="overlay"></div>
                <div className="terminal">
                <h1>Error <span className="errorcode">409</span> <span><small>(<T id="Hackconsole.title" />)</small></span></h1>
                <p className="output"><T id="Hackconsole.error" /></p>
                <p className="output"> <small><T id="Hackconsole.lookingdeveloper" /></small></p>
                <p className="output"><small><T id="Hackconsole.useconsole" /></small>&nbsp;<a href="#" onClick={toggleHackBg}>ESC</a>.</p>
                <div className='hackbg__console'>
                    <HackConsole />
                </div>
            </div>
        </div>
    )
};

export default HackBg;