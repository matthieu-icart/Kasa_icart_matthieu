// IMPORT REACT & REACT-ROUTER-DOM
import React from 'react';
import { NavLink } from 'react-router-dom';

// IMPORT STYLE
import './navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <li>
        <NavLink to="/home">Accueil</NavLink>
      </li>
      <li>
        <NavLink to="/about">A Propos</NavLink>
      </li>
    </nav>
  );
}

export default Navigation;
