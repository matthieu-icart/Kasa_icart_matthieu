// IMPORT REACT
import React from 'react';

// IMPORT DATAS
import { datas } from '../../datas/index';

// IMPORT STYLE
import './lodgingCard.css';

// RETURN LODGINGCARD
function LodgingCard() {
  return (
    <div className="card">
      {datas.map((lodging) => (
        <a
          className="card-link"
          href={'/housing/' + lodging.id}
          key={lodging.id}
        >
          <span className="card-img">
            <img
              src={lodging.cover}
              alt={'Illustrations du logement :' + lodging.title}
            />
          </span>
          <span className="card-title">{lodging.title}</span>
          <div className="card-overlay"></div>
        </a>
      ))}
    </div>
  );
}

export default LodgingCard;
