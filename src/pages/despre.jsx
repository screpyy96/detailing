import React, { useEffect } from 'react';
import Hero from "../components/subcomponents/hero/hero"
import image from "../assets/images/despre.jpg"
import FirstComponent from '../components/despre/1stComponent';
import {despre} from '../data/despre.js';
import DespreDetailing from '../components/despre/despreDetailing';

const Despre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Despre - Detailing Auto Suceava";
  }, []);

  return (
    <div>
      <Hero style={{height: "50%"}}data="Despre | D&S Detailing" image={image} />
      <FirstComponent despre={despre}/>
      <DespreDetailing despre={despre}/>
      {/* second component */}
      {/* third component */}
    </div>
  );
};

export default Despre;
