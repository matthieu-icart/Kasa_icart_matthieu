// IMPORT REACT
import React from 'react';

// IMPORT IMAGE
import AboutPageBanner from '../../../assets/aboutPageBanner.png';

// IMPORT STYLE
import './banner.css';

// RETURN BANNER FOR ABOUTPAGE
function AboutBanner() {
  return (
    <div className="AboutBanner">
      <div className="AboutBanner-image">
        <img
          src={AboutPageBanner}
          alt="Vallée au milleu de montagne servant d'illustration pour la page d'acceuil du site."
        />
      </div>
    </div>
  );
}

export default AboutBanner;
