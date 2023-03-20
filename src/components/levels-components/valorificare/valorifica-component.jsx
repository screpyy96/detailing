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
import audiImg from '../../../data/images/audi.jpeg'

export const ValorificaComponent = ({ data }) => {


  return (
    <div>
      <ContainerWrapper>
        <div>
          <ImageComponent src={data.imgPath} alt="polish suceava" width={"100%"} height={'100%'} />
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

          <div style={{padding: "2rem 0"}}>
            <AccordionText2 />
          </div>

        <Banner/>
        <Directie/>
    </div>
  );
};
