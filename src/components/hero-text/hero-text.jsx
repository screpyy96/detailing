import React from 'react';
import './hero-text.css';
import { HeroTextCom } from './hero.styled';

export const HeroText = () => {
  return (
    <div className="container-text">
      <div className="main-title">
        <span className="title-hero">Detailing</span>
        <span className="title-hero">Protejare</span>
        <span className="title-hero">Intretinere</span>
        <span className="title-hero">Colantare</span>
      </div>
      <div className="text-hero">
        <HeroTextCom>
          Detailing Auto D&S ofera clientilor servicii de intalta calitate in domeniul ingrijirii auto, folosind echipamente profesionale si solutii dedicate fiecarui tip de suprafete a automobilului, agreate de producatorii auto principali
        </HeroTextCom>
      </div>
    </div>
  );
};
