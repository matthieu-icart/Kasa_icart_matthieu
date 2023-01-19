// IMPORT REACT
import React from 'react';

// IMPORT IMAGE
import homePageBanner from '../../../assets/homePageBanner.png';

// IMPORT STYLE
import './banner.css';

// RETURN BANNER FOR HOMEPAGE
function HomeBanner() {
  return (
    <div className="HomeBanner">
      <div className="HomeBanner-img">
        <img
          src={homePageBanner}
          alt="Récif au bord d'un océan servant d'illustration pour la page d'acceuil du site."
        />
        <div className="HomeBanner-overlay"></div>
      </div>
      <div className="HomeBanner-text">
        <p>
          Chez vous,
          <br className="HomeBanner-line_return" />
          partout et ailleurs
        </p>
      </div>
    </div>
  );
}

export default HomeBanner;
