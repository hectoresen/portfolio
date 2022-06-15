import React from 'react';
import { useState } from 'react';
import enIcon from '../../Assets/English.png'
import esIcon from '../../Assets/Spanish.png';
import './Header.scss';

const Header = () => {
  const [iconLanguage, setIconLanguage] = useState(enIcon)

  const handleLanguage = () =>{
    (iconLanguage === enIcon) ? setIconLanguage(esIcon) : setIconLanguage(enIcon)
  }

  return (
    <nav className='settings'>
      <div className='settings__menu'>
        <div className='settings__menu-language' onClick={handleLanguage}>
          <img className="settings__menu-language-icon" src={iconLanguage} />
        </div>
        </div>
    </nav>
  )
}

export default Header;