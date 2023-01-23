// IMPORT REACT & REACT-ROUTER-DOM
import React from 'react';
import { useParams } from 'react-router-dom';

// IMPORT DATAS
import { datas } from '../../datas/index.jsx';

// IMPORT PAGES
import Error from '../Error/index';

// IMPORT COMPONENTS
import Collapse from '../../components/Collapse/index';
import Tag from '../../components/Tag/index';
import Rating from '../../components/Rating/index';
import SlideShow from '../../components/SlideShow/index';

// IMPORT STYLE
import './lodging.css';

// RETURN LODGING
function Lodging() {
  let { id } = useParams();
  let detailsLogement = datas.find((logement) => logement.id === id);

  if (detailsLogement !== undefined) {
    let imageSlider = detailsLogement.pictures;

    return (
      <div className="lodging">
        {/* SLIDESHOW */}
        <SlideShow imageSlider={imageSlider} />

        {/* INFOS */}
        <div className="infos">
          {/* LODGING INFOS */}
          <div className="product-infos">
            <h2>{detailsLogement.title}</h2>
            <p className="city">{detailsLogement.location}</p>
            <div className="tag">
              {detailsLogement.tags.map((item) => (
                <Tag key={item} tagTitle={item}></Tag>
              ))}
            </div>
          </div>

          {/* OWNER INFOS */}
          <div className="product-infos owner-responsive">
            <div className="lodging-owner">
              <p className="owner-name">{detailsLogement.host.name}</p>
              <img
                className="owner-picture"
                src={detailsLogement.host.picture}
                alt={'Photo de profil de' + detailsLogement.host.name}
              />
            </div>
            <Rating ratingValue={detailsLogement.rating} />
          </div>
        </div>

        {/* COLAPSES */}
        <div className="collapse">
          <div className="collapse-informations">
            {/* DESCRIPTION */}
            <Collapse className="collapse-description" title={'Description'}>
              {detailsLogement.description}
            </Collapse>
          </div>

          <div className="collapse-informations">
            {/* EQUIPËMENTS */}
            <Collapse
              className="collapse-equipements"
              title={'Équipements'}
              children={detailsLogement.equipments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            />
          </div>
        </div>
      </div>
    );
  }
  return <Error />;
}

export default Lodging;
