// IMPORT REACT
import React from 'react';

// IMPORT COMPONENTS
import HomeBanner from '../../components/Banner/Home/index';
import LodgingCard from '../../components/LodgingCard/index';

// IMPORT STYLE
import './home.css';

// RETURN BANNER AND THUMBS
function Home() {
  return (
    <div className="home-container">
      <HomeBanner />
      <LodgingCard />
    </div>
  );
}

export default Home;
