import React from 'react';

function Header() {
  return (
    <div className="header">
        <img className='header__logo' src={require('../UI_logo.png')} />
        <p className='header__title'>Devices</p>
        <p className='header__name'>Micky Rivera</p>
    </div>
  );
}

export default Header;
