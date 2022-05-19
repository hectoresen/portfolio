import React, { useContext, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { HackBgContext } from '../../Shared/Contexts/BgContext';
import HackBg from './HackBg/HackBg';
import Photo from '../Photo/Photo';
import './Introduction.scss';

const NameHook = () => {
    const { text } = useTypewriter({
        words: ['Hector Escolante Enriquez', 'Full Stack Developer'],
        loop: 1,
        // typeSpeed: 20,
    });
    return (
        <div className='introduction__name'>
            <h1 style={{color: 'orange'}}><Cursor /> {text}</h1>
        </div>
    )
};



const Introduction = () => {

    const goToAbout = () =>{
        return document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    };

    const [{activeHackBg}, toggleHackBg] = useContext(HackBgContext);

    return (
        <div className='introduction' style={{ padding: 20 }}>
            <div className='introduction__me'>
                <h1>I'm</h1>
                <NameHook />
            </div>
            <Photo/>
            <div className='introduction__btn'>
                <a /* href="#about" */ onClick={goToAbout} className="animated-button2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    About me
                </a>
            </div>
            {
                (activeHackBg)
                ?
                <div className='hack-activated'>
                    <HackBg />
                </div>
                :
                ''
            }
        </div>
    )
}

export default Introduction;