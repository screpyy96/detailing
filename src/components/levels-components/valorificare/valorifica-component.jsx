/* eslint-disable react/prop-types */
import React from 'react';
import Banner from '../../banner-social/banner';
import Directie from '../../directii/directie';
import AccordionText2 from '../accordion/accordion2';
import {
  ContainerWrapper,
  DescriptionContainer,
  ImageComponent,
  ListContainer,
  SubTitle,
  TitleStyle
} from './valorificare.styled';

export const ValorificaComponent = ({ data }) => {


  return (
    <div>
      <ContainerWrapper>
        <div>
          <ImageComponent src={data.imgPath} alt="car" width={"100%"} height={'100%'} />
        </div>
        <DescriptionContainer>
          <TitleStyle>{data.title}</TitleStyle>
          <SubTitle>{data.subTitle}</SubTitle>
          <h4>{data.header}</h4>
          <ListContainer>
            {data.description.map((i, key) => {
              return (
                <ul key={key}>
                  <li>{i}</li>
                </ul>
              );
            })}
          </ListContainer>
          <SubTitle>{data.sealent}</SubTitle>
          <h5 style={{color: "#ec1d24"}}>{data.subDescription.title}</h5>
          <ListContainer>
            {data.subDescription.description.map((i, key) => {
              return (
                <div key={key}>
                  <ul>
                    <li>{i}</li>
                  </ul>
                </div>
              );
            })}
          </ListContainer>
          <ListContainer>
            <p>{data.title1}</p>
            {data.whyChooseUS.map((i, key) => {
              return (
                <div key={key}>
                  <ul>
                    <li>{i}</li>
                  </ul>
                </div>
              );
            })}
          </ListContainer>
        </DescriptionContainer>
      </ContainerWrapper>
        <ContainerWrapper>
          <AccordionText2 />
          <ImageComponent style={{width: "100%", height: "400px"}}
          src="https://i.shgcdn.com/8ef12e42-d9f0-486c-aff1-9ac2c3b6963f/-/format/auto/-/preview/3000x3000/-/quality/lighter/"/>
        </ContainerWrapper>
        <Banner/>
        <Directie/>
    </div>
  );
};
