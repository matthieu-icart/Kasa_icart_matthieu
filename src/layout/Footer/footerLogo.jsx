// IMPORT REACT
import React from 'react';
import { NavLink } from 'react-router-dom';

// IMPORT LOGO
import footerLogo from '../../assets/footerLogo.svg';

// RETURN FOOTER LOGO
export default function FooterLogo() {
  return (
    <div className="footer-logo">
      <NavLink to="/home">
        <img src={footerLogo} alt="Logo de l'entreprise Kasa" />
      </NavLink>
    </div>
  );
}
