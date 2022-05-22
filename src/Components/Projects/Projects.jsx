import React from 'react';
import './Projects.scss';


const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='projects__container'>
        <div className='card-section'>
          <div className='card-box'>
            <div className='card-text'>
              <div className='heading'>E-Commerce</div>
              <div className='para'>MERN STACK</div>
            </div>
            <div className='card-info'>
              <div className='info-para'>Final project for the Upgrade Hub bootcamp (Full Stack), <span>MongoDB, Express, React, Node</span></div>
              <button className='card-btn'><a href='https://github.com/hectoresen/Proyecto-Final-Upgrade-Hub' target='_blank'>See more</a></button>
            </div>
          </div>


          <div className='card-box'>
            <div className='card-text'>
              <div className='heading'>UpgradeFly</div>
              <div className='para'>Angular / TypeScript</div>
            </div>
            <div className='card-info'>
              <div className='info-para'>Project with Angular for the Upgrade Hub bootcamp (Full Stack) </div>
              <div>
              <button className='card-btn'><a href="https://isnt-hectoresen-awesome.netlify.app/" target='_blank'> Test website</a></button>
              </div>
              <button className='card-btn'><a href="https://github.com/hectoresen/upgrade-angular-project" target='_blank'> See More</a></button>
            </div>
          </div>
          <div className='card-box'>
            <div className='card-text'>
              <div className='heading'>Intranet</div>
              <div className='para'>MERN STACK</div>
            </div>
            <div className='card-info'>
              <div className='info-para'>12 day personal challenge, <span style={{color: 'orange'}}>MongoDB, Express, React, Node</span></div>
              <button className='card-btn'>Find More</button>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Projects