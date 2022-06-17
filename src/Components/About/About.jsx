import React from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {BsArrowDownSquare, BsArrowLeftSquare,BsArrowRightSquare } from 'react-icons/bs';
import Technologies from './Technologies/Technologies';
import { FormattedMessage  as T} from 'react-intl';
import './About.scss';

const About = () => {
    const goToProjects = () =>{
        return document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
    };

    const goTech = () =>{
        let i = 100 ;
        window.setInterval(() => {
            if (i >= 0 ) {
                i--;
                document.getElementById('about__techcontainer').style.left = `${i}vw` ;
            }
        } , 5);

        let o = 0;
        window.setInterval(() => {
            if (o >= -100 ) {
                o--;
                document.getElementById('about__container').style.left = `${o}vw` ;
            }
        } , 5);
    };

    const goAbout = () =>{
        let i = -100 ;
            window.setInterval(() => {
                if (i <= 0 ) {
                    i++;
                    document.getElementById('about__container').style.left = `${i}vw` ;
                }
            } , 5);

        let o = 0;
        window.setInterval(() => {
            if (o <= 100 ) {
                o++;
                document.getElementById('about__techcontainer').style.left = `${o}vw` ;
            }
        } , 5);
    }

    return (
        <div className='about' id='about'>
            <div className='about__container' id='about__container'>
                <div className='about__container-me'>
                    <h2><T id="About.title" /></h2>
                    <p>
                        <T id="About.content" />
                    </p>
                </div>
                <div className='about__container-socials'>
                    <ul>
                        <li><a href="https://github.com/hectoresen" target='_blank'><BsGithub/> GitHub</a></li>
                        <li><a href='https://linkedin.com/in/hector-escolante-enriquez' target='_blank'><BsLinkedin/> LinkedIn</a></li>
                        <li><a href='mailto: inforeshector@gmail.com'><AiOutlineMail/> Email</a></li>
                    </ul>
                </div>
                <div className='about__container-socials-gocv'>
                    <p><T id="About.tech.projects" /></p>
                    <p className='about__container-cvicon' onClick={goToProjects}><BsArrowDownSquare /></p>
                </div>
                <div className='about__container__technologies'>
                    <p className='about__container__technologies-techicon' onClick={goTech}> <BsArrowLeftSquare/></p>
                    <p><T id="About.tech.btn" /></p>
                </div>
            </div>

            <div className='about__techcontainer' id='about__techcontainer'>
                <div className='about__techcontainer-abouticon'>
                    <p>About</p>
                    <p className='about__techcontainer-abouticon-icon' onClick={goAbout}><BsArrowRightSquare/></p>
                </div>
                <Technologies />
            </div>
        </div>
    )
}

export default About;