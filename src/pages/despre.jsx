import React, { useEffect } from 'react';
import Hero from "../components/subcomponents/hero/hero"
import image from "../assets/images/despre.webp"
import FirstComponent from '../components/despre/1stComponent';
import {despre} from '../data/despre.js';
import DespreDetailing from '../components/despre/despreDetailing';
import Banner from '../components/banner-social/banner';
import hala from '../data/images/garaj-suceava-detailing.webp'
import Directie from '../components/directii/directie';

const Despre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Despre - Detailing Auto Suceava";
  }, []);

  return (
    <div>
      <Hero style={{height: "50%"}} data="Despre | D&S Detailing" image={image} />
      <FirstComponent despre={despre} hala={hala}/>
      <DespreDetailing despre={despre}/>
      <Banner/>
      <Directie/>
      </div>
  );
};

export default Despre;
