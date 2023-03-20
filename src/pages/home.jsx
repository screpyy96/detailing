import React, { useEffect } from 'react';
import Banner from '../components/banner-social/banner';
import { Cards } from '../components/card/card';
import Carousele from '../components/carousel/carousel';
import Directie from '../components/directii/directie';
import { HeroText } from '../components/hero-text/hero-text';
import { SubComponents } from '../components/subcomponents/subComponents';


const Home = ({title}) => {




  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title;
  }, [title]);
  return (
    <div>
      <Carousele />
      <HeroText />
      <Cards />
      {/* <SubComponents /> */}
      {/* <br />
      <br /> */}
      <Banner/>
     <Directie/>
    </div>
  );
};

export default Home;
