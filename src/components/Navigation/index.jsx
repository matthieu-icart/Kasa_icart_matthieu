// IMPORT REACT & REACT-ROUTER-DOM
import React from 'react';
import { NavLink } from 'react-router-dom';

// IMPORT STYLE
import './navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <li>
        <NavLink
          to="/home"
          className={(nav) => (nav.isActive ? 'nav-active' : null)}
        >
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? 'nav-active' : null)}
        >
          A Propos
        </NavLink>
      </li>
    </nav>
  );
}

export default Navigation;
