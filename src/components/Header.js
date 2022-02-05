import React from 'react';
import logo from '../images/logo.svg'

function Header() {
  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} alt='logo' />
      </header>
    </div>
  );
}

export default Header;
