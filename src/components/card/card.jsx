import React from 'react';
import './card.css';
import { cards } from '../../data/db';
import { StyledImg } from './card.styled';
import { LinkStyleNav } from '../navbar/navbar.style';

export const Card = ({cardProps}) => {
  const {urlPath, frontImg, title, description} = cardProps;

  return (
    <LinkStyleNav to={urlPath}>
      <div style={{ width: '100%' }}>
        <div className="card">
          <StyledImg key={frontImg} image={frontImg}>
            <div className="front">
              <h3 className="title">{title}</h3>
            </div>
            <div className="back">
              <p className="description">{description}</p>
            </div>
          </StyledImg>
        </div>
      </div>
    </LinkStyleNav>
  );
};

export const Cards = () => {
  return (
    <div className="card-wrapper">
      {cards.map((card, idx) => <Card key={idx} cardProps={card} />)}
    </div>
  );
};

