// IMPORT REACT
import React from 'react';
import { useState } from 'react';

// IMPORT STYLE
import './slideshow.css';

// RETURN SLIDESHOW
function SlideShow({ imageSlider }) {
  // HOOK USESTATE
  const [index, setIndex] = useState(0);

  // SUIVANT
  function nextSlide() {
    setIndex((oldIndex) => {
      if (oldIndex === imageSlider.length - 1) {
        oldIndex = 0;
      } else {
        oldIndex = oldIndex + 1;
      }
      return oldIndex;
    });
  }

  // PRECEDENT
  function previousSlide() {
    setIndex((oldIndex) => {
      if (oldIndex <= 0) {
        oldIndex = imageSlider.length - 1;
      } else {
        oldIndex = oldIndex - 1;
      }
      return oldIndex;
    });
  }

  // AFFICHAGE NUMERO PHOTO
  if (imageSlider.length === 1) {
    return (
      <div className="slider">
        <img src={imageSlider[index]} alt="Illustration du logement" />
      </div>
    );
  } else {
    return (
      <div className="slider">
        <img src={imageSlider[index]} alt="Illustration du logement" />
        <button id="previous" onClick={previousSlide}>
          {'<'}
        </button>
        <button id="next" onClick={nextSlide}>
          {'>'}
        </button>
        <span className="countImage">
          {index + 1 + '/' + imageSlider.length}
        </span>
      </div>
    );
  }
}

export default SlideShow;
