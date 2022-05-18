import React from 'react';
import { HiMenu } from 'react-icons/hi';
import './Header.scss';

const Header = () => {

  return (
    <nav className='header'>
      <div className='header__menu'>
        <a href='#about'><HiMenu /></a>
        </div>
    </nav>
  )
}

export default Header