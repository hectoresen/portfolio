import React, { useContext, useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { HackBgContext } from '../../../../Shared/Contexts/BgContext';
import myCv from '../../../../Assets/CV.pdf';
import { FormattedMessage  as T} from 'react-intl';
import './HackConsole.scss';

const ConsoleHook = () => {
    const { text } = useTypewriter({
        words: ['CV', 'ABOUT', 'PROJECTS'],
        loop: 6,
    });
    return (
        <div className='introduction__name'>
            <p style={{color: 'orange'}}>{text}</p>
        </div>
    )
};

const HackConsole = () => {
    const [{activeHackBg}, toggleHackBg] = useContext(HackBgContext);
    const [helpConsoleInput, setHelpConsoleInput] = useState(false);
    const [consoleData, setConsoleData] = useState('');

    const items = [
        {id: 1, name: 'cv'},
        {id: 2, name: 'about'},
        {id: 3, name: 'projects'}
    ]

    useEffect(() =>{
        document.onkeydown = function(event){
            if(event.key === 'Escape'){
                toggleHackBg();
            }
        }
    });

    const closeHackConsole = () => {
        setTimeout(() =>{
            toggleHackBg()
        },1000)
    };

    const handleInput = (ev) =>{
        const {value} = ev.target;
        let lowerValue = value.toLowerCase();
        setConsoleData(lowerValue)
        if(items.find(element => element.name.toLowerCase() === lowerValue)){
            setHelpConsoleInput(true)
        }else{
            setHelpConsoleInput(false)
        }
    };


    const submitConsole = () =>{
        const getItem = items.find(element => element.name.toLowerCase() === consoleData);
        console.log(getItem);

        if(getItem){
            if(getItem.name === 'about'){
                closeHackConsole()
                return document.getElementById('about').scrollIntoView({behavior: 'smooth'});
            }else if(getItem.name === 'cv'){
                closeHackConsole();
                return window.open(myCv, '_blank');
            }else if(getItem.name === 'projects'){
                closeHackConsole()
                return document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
            }
        }else{
            setHelpConsoleInput(getItem)
        }
    }

    return (
        <div className={(helpConsoleInput === undefined) ? 'hackconsole error' : 'hackconsole'}>
            <div className='hackconsole__header'>
                <p><T id="Hackconsole.trytyping" />&nbsp;</p>
                <ConsoleHook />
            </div>
            <div className='hackconsole__console'>
                <p><Cursor /></p><input
                                    className='hackconsole__input'
                                    id='hackconsole__input'
                                    onChange={handleInput}
                                    onKeyPress={event => {
                                        if(event.key === 'Enter'){
                                            submitConsole();
                                        }
                                    }}
                                    autoFocus
                                    >
                                </input>
            </div>
            {
                (helpConsoleInput && <p><small>Pulsa la tecla ENTER</small></p>)
            }
            {
                (helpConsoleInput === undefined && <p><small>No hemos encontrado nada</small></p>)
            }

            <div className='hackconsole__portfolio'>
            </div>
        </div>
    )
}

export default HackConsole