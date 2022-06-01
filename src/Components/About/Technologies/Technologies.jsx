import React from 'react';
import './Technologies.scss';

const Technologies = () => {
  const techList = [
    'html',
    'css',
    'sass',
    'js',
    'react',
    'angular',
    'node',
    'mongodb',
    'npm',
    'git'
  ];

  return (
    <div className='technologies'>
      <div className='technologies__icons'>
        {techList.map(element =>{
          return <div className="technologies__icons-icon" key={element}>
            <div className={(element) ? `technologies__icons__icon ${element}` : ''}>
              <p>{element}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Technologies;