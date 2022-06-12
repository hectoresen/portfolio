import React, { useContext, useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { HackBgContext } from '../../../../Shared/Contexts/BgContext';
import { Link } from 'react-scroll';

import './HackConsole.scss';

const ConsoleHook = () => {
    const { text } = useTypewriter({
        words: ['CV', 'ABOUT', 'PROJECTS'],
        loop: 6,
        // typeSpeed: 20,
    });
    return (
        <div className='introduction__name'>
            <p style={{color: 'orange'}}>{text}</p>
        </div>
    )
};

const HackConsole = () => {
    const [consoleValue, setConsoleValue] = useState('');
    const [{activeHackBg}, toggleHackBg] = useContext(HackBgContext);

    const items = [
        {id: 1, name: 'cv'},
        {id: 2, name: 'about'},
        {id: 3, name: 'projects'}
    ]

    useEffect(() =>{
        const consoleInput = document.getElementById('hackconsole__input');
        consoleInput.addEventListener('keypress', function(event) {
            if(event.key === 'Enter'){
                event.preventDefault();
                setConsoleValue(consoleInput.value);
            }
        })
    });

    useEffect(() =>{
        document.onkeydown = function(event){
            if(event.key === 'Escape'){
                toggleHackBg();
            }
        }
    });

    const closeHackConsole = (ev) => {
        setTimeout(() =>{
            toggleHackBg()
        },500)
    };

    const getHackPortfolio = () =>{
        const getItem = items.find(element => element.name.toLowerCase() === consoleValue.toLowerCase());

        if(getItem){
            if(getItem.name === 'about'){
                closeHackConsole()
                return document.getElementById('about').scrollIntoView({behavior: 'smooth'});
            }else if(getItem.name === 'cv'){
                closeHackConsole()
                return document.getElementById('cv').scrollIntoView({behavior: 'smooth'});
            }else if(getItem.name === 'projects'){
                closeHackConsole()
                return document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
            }
        }else{
            return;
        }
    }

    return (
        <div className='hackconsole'>
            <div className='hackconsole__header'>
                <p>You can try typing...</p>
                <ConsoleHook />
            </div>
            <div className='hackconsole__console'>
                <p><Cursor /></p><input
                                    className='hackconsole__input'
                                    id='hackconsole__input'
                                    >
                                </input>
            </div>
            <div className='hackconsole__portfolio'>
                {getHackPortfolio()}
            </div>
        </div>
    )
}

export default HackConsole