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
      <div className="container-housing">
        <SlideShow imageSlider={imageSlider} />

        {/* CONTAINER INFOS */}
        <div className="container-infos">
          {/* LEFT INFOS */}
          <div className="left-details detail-product">
            <h2>{detailsLogement.title}</h2>
            <p className="city">{detailsLogement.location}</p>
            <div className="tag">
              {detailsLogement.tags.map((item) => (
                <Tag key={item} tagTitle={item}></Tag>
              ))}
            </div>
          </div>

          {/* RIGHT INFOS */}
          <div className="right-details detail-product">
            <div className="container-owner">
              <p className="owner-name">{detailsLogement.host.name}</p>
              <img
                className="owner-picture"
                src={detailsLogement.host.picture}
                alt={'Logement + ' + detailsLogement.title}
              />
            </div>
            <Rating ratingValue={+detailsLogement.rating} />
          </div>
        </div>

        <div className="collapse-product">
          <Collapse className="collapse-housing" title={'Description'}>
            {detailsLogement.description}
          </Collapse>
          <Collapse
            className="collapse-housing"
            title={'Équipements'}
            children={detailsLogement.equipments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          />
        </div>
      </div>
    );
  }
  return <Error />;
}

export default Lodging;
