import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import enIcon from '../../Assets/English.png'
import esIcon from '../../Assets/Spanish.png';
import { LanguageContext } from '../../Shared/Contexts/LanguageContext';
import './Header.scss';

const Header = () => {
  const [iconLanguage, setIconLanguage] = useState(esIcon);
  const {locale, changeLanguage} = useContext(LanguageContext);

  const handleLanguage = () =>{

    if(iconLanguage === enIcon){
      setIconLanguage(esIcon);
      changeLanguage('es');
    }else{
      setIconLanguage(enIcon)
      changeLanguage('en');
    }
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