import React from 'react';
import { Helmet } from 'react-helmet';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './carousel.css';
import poza2 from '../../data/images/mercedes.jpeg';
import poza4 from '../../data/images/porche.jpeg';
import poza3 from '../../data/images/benz.jpeg';
import poza1 from '../../data/images/camaro.jpeg';

const poze = [poza1, poza2, poza3, poza4];
const Carousele = () => {
  return (
    <>
      <Helmet>
        {/* Adaugarea linkului carte ca si asa sa precarce imaginea */}
        <link rel="preload" as="image" href={poza1} />
        <link rel="preload" as="image" href={poza2} />
        <link rel="preload" as="image" href={poza3} />
        <link rel="preload" as="image" href={poza4} />
      </Helmet>

      <div className="filter height">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={false}
          showIndicators={true}
          onSwipeMove={false}>
          
          {poze.map((p, key) => {
            return (
              <div className="inaltime" key={key}>
                <img src={p} alt="Detailing Suceava"/>
                
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Carousele