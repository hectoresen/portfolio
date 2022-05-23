import React from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {BsArrowDownSquare, BsArrowLeftSquare} from 'react-icons/bs';
import './About.scss';
import Technologies from './Technologies/Technologies';

const About = () => {
    const goToCv = () =>{
        return document.getElementById('cv').scrollIntoView({behavior: 'smooth'});
    };
    const goTech = () =>{
        /* document.getElementById('about__techcontainer').style.left = 0; */
        /* document.getElementById('about__container').style.left = '-100vw'; */
        var i = 100 ;
        window.setInterval(() => {
            if (i >= 0 ) {
                i--;
                document.getElementById('about__techcontainer').style.left = `${i}vw` ;
            }
        } , 5);

        var o = 0;
        window.setInterval(() => {
            if (o >= -100 ) {
                o--;
                document.getElementById('about__container').style.left = `${o}vw` ;
            }
        } , 5);
    }

    return (
        <div className='about' id='about'>
            <div className='about__container' id='about__container'>
                <div className='about__container-me'>
                    <h2>About me:</h2>
                    <p>
                    I am 30 years old, currently working while
                    I carry out several projects both in Front and
                    in Back that you can see on my GitHub. What
                    organized person with a great
                    motivation, I am able to adapt to
                    any circumstance and always give what
                    best of me in each project. Throughout my years
                    of work experience I have acquired several skills
                    that allow me to adapt to different work methodologies
                    and maintain continuous communication with the rest of
                    the team to analyze, improve and offer the best solution
                    at all times.
                    </p>
                </div>
                <div className='about__container-socials'>
                    <ul>
                        <li><a href="https://github.com/hectoresen" target='_blank'><BsGithub/> GitHub</a></li>
                        <li><a href='https://linkedin.com/in/hector-escolante-enriquez' target='_blank'><BsLinkedin/> LinkedIn</a></li>
                        <li><a href='mailto: inforeshector@gmail.com'><AiOutlineMail/> EMAIL</a></li>
                    </ul>
                </div>
                <div className='about__container-socials-gocv'>
                    <p>CV</p>
                    <p className='about__container-cvicon' onClick={goToCv}><BsArrowDownSquare /></p>
                </div>
                <div className='about__container__technologies'>
                    <p className='about__container__technologies-techicon' onClick={goTech}> <BsArrowLeftSquare/></p>
                    <p>technologies</p>
                </div>
            </div>

            <div className='about__techcontainer' id='about__techcontainer'>
                <Technologies />
            </div>
        </div>
    )
}

export default About;