import React from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {BsArrowDownSquare, BsArrowLeftSquare,BsArrowRightSquare } from 'react-icons/bs';
import Technologies from './Technologies/Technologies';
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
                    <h2>About me:</h2>
                    <p>
                        Welcome to my portfolio!
                        <br></br>
                        I am 30 years old, I am a lover of sports, outdoor activities and animals.
                        <br></br>
                        I am currently working while making several Front and Back projects that you can see on my GitHub. As an organized and motivated person, I am able to adapt to any circumstance and always give my best in each project. Throughout my years of work experience I have acquired several skills that allow me to adapt to different work methodologies and maintain continuous communication with the rest of the team to analyze, improve and offer the best solution at all times.
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
                    <p>PROJECTS</p>
                    <p className='about__container-cvicon' onClick={goToProjects}><BsArrowDownSquare /></p>
                </div>
                <div className='about__container__technologies'>
                    <p className='about__container__technologies-techicon' onClick={goTech}> <BsArrowLeftSquare/></p>
                    <p>technologies</p>
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