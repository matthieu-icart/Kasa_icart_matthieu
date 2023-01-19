// IMPORT REACT & REACT-ROUTER-DOM
import React from 'react';
import { NavLink } from 'react-router-dom';

// IMPORT STYLE
import './error.css';

// RETURN ERROR
function Error() {
  return (
    <div className="error">
      <h1 className="error-title">404</h1>
      <p className="error-text">
        Oups! La page que <br className="error-returnLine" /> vous demandez
        n'existe pas.
      </p>
      <NavLink to="/home" className="linkErrorToHome">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default Error;
