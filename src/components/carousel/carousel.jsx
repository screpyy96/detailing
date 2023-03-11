import React from 'react';
import { Helmet } from 'react-helmet';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Img } from 'react-image';

import './carousel.css';
import poza1 from '../../data/images/poza2.webp';
import poza2 from '../../data/images/interior.webp';
import poza3 from '../../data/images/poza1.webp';

const poze = [poza1, poza2, poza3];

const Carousele = () => {
  return (
    <>
      <Helmet>
        {/* Adaugarea linkului carte ca si asa sa precarce imaginea */}
        <link rel="preload" href={poza1} as="image"/>
        <link rel="preload" href={poza2} as="image"/>
        <link rel="preload" href={poza3} as="image"/>
      </Helmet>

      <div className="filter height">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={false}
          stopOnHover={true}
          showIndicators={false}
          onSwipeMove={false}>
          
          {poze.map((p, key) => {
            return (
              <div className="inaltime" key={key}>
                <Img src={p} alt="Detailing Suceava"/>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Carousele;
