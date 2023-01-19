// IMPORT REACT
import React from 'react';

// IMPORT COMPONENTS
import Navigation from '../../components/Navigation/index';
import HeaderLogo from './headerLogo.jsx';

// IMPORT STYLE
import './header.css';

// RETURN HEADER
function Header() {
  return (
    <header>
      <HeaderLogo />
      <Navigation />
    </header>
  );
}

export default Header;
