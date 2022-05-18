import React, { useContext } from 'react';
import { HackBgContext } from '../../Shared/Contexts/BgContext';
import './Photo.scss';

const Photo = () => {
  const [{activeHackBg}, toggleHackBg] = useContext(HackBgContext);

  return (
    <div className="headshot headshot-3"
    onClick={toggleHackBg}></div>
  )
}

export default Photo