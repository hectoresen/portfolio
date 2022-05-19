import React from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import './About.scss';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about__container '>
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
            </div>
        </div>
    )
}

export default About