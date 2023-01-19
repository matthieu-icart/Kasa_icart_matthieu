// IMPORT REACT
import React from 'react';

// IMPORT STYLE
import './rating.css';

// RETURN RATING
function Rating(props) {
  const ratingValue = props.ratingValue;
  const range = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {range.map((rangeElement) =>
        ratingValue >= rangeElement ? (
          // AFFICHAGE DES ETOILES
          <span className="rating-star" key={rangeElement.toString()}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill="#FF6060"
              />
            </svg>
          </span>
        ) : (
          // AFFICHAGE DES ETOILES GRISES
          <span className="rating-star" key={rangeElement.toString()}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill="#E3E3E3"
              />
            </svg>
          </span>
        )
      )}
    </div>
  );
}

export default Rating;
