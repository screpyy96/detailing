import React, { useEffect } from 'react';
import Hero from "../components/subcomponents/hero/hero"
import image from "../assets/images/despre.jpg"
import FirstComponent from '../components/despre/1stComponent';
import {despre} from '../data/despre.js';
import DespreDetailing from '../components/despre/despreDetailing';
import Banner from '../components/banner-social/banner';
import { MapsContainer } from '../components/levels-components/protejare/protejare.styled';
import { DirectionBtn, InfoContainer } from '../components/contact/contact.styled';
import IconsRow from '../components/icons/iconsRow';
import hala from '../data/images/garaj-suceava-detailing.jpg'
import { Link } from '@reach/router';

const Despre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Despre - Detailing Auto Suceava";
  }, []);


  const mapStyle = {
    border: 0,
    width: "100%",
    height: "450px",
    padding: 0,
    margin: 0,
  };

  return (
    <div>
      <Hero style={{height: "50%"}}data="Despre | D&S Detailing" image={image} />
      <FirstComponent despre={despre} hala={hala}/>
      <DespreDetailing despre={despre}/>
      <Banner/>
      <MapsContainer >
      <InfoContainer >
            <div >
              <h1>/ D&S Suceava</h1>
              <p>Nicolaie Aritonovici nr 7, </p>
              <p>Scheia, Suceava, 727525</p>
              <p>Tel: +40748 455 547</p>
                <IconsRow />
            </div>
            <DirectionBtn>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
                href="https://maps.app.goo.gl/bS3GUsaaNMcXLwhPA"
              >
                DIRECTII
              </a>
            </DirectionBtn>
            <DirectionBtn>
              <Link to="/contact" style={{color: "white", textDecoration: "none"}}>
                FA O PROGRAMARE
              </Link>
            </DirectionBtn>
          </InfoContainer>
          <iframe
          title="map"
          srcDoc={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.3094432496814!2d26.21106101499875!3d47.65898469235204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734fc012d3a10f5%3A0x2057b68470b413c3!2sDetailing%20Auto%20D%26S!5e0!3m2!1sen!2sro!4v1678187777830!5m2!1sen!2sro" width="100%" height="450px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
          style={mapStyle}
          allowFullScreen
          loading="lazy"
        ></iframe>
       <style>
        {`@media screen and (max-width: 600px) {
          iframe {
            width: 100%;
            padding-top: 2rem;
          }
        }`}
      </style>
      </MapsContainer>
      {/* second component */}
      {/* third component */}
    </div>
  );
};

export default Despre;
