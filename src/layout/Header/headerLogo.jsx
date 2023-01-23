// IMPORT REACT
import React from 'react';
import { NavLink } from 'react-router-dom';

// IMPORT LOGO
import headerLogo from '../../assets/headerLogo.svg';

// COMPONENT HEADERLOGO
export default function HeaderLogo() {
  return (
    <div className="header-logo">
      <NavLink to="/home">
        <img src={headerLogo} alt="Logo de l'entreprise Kasa" />
      </NavLink>
    </div>
  );
}
