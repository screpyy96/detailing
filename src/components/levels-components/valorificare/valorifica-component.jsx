/* eslint-disable react/prop-types */
import React from "react";
import Banner from "../../banner-social/banner";
import Directie from "../../directii/directie";
import AccordionText2 from "../accordion/accordion2";
import { Typography } from '@material-ui/core';

import {
  ContainerWrapper,
  DescriptionContainer,
  ImageComponent,
  ListContainer,
  SubTitle,
  TitleStyle,
} from "./valorificare.styled";
// import audiImg from '../../../data/images/audi.jpeg'

export const ValorificaComponent = ({ data }) => {
  return (
    <>
      <ContainerWrapper>
        <ImageComponent src={data.imgPath} alt="polish suceava" />

        <DescriptionContainer>
          <TitleStyle>{data.title}</TitleStyle>
          <SubTitle>{data.include}</SubTitle>
          <SubTitle>{data.subTitle}</SubTitle>
          <ListContainer>
            {data.description.map((i, key) => {
              return (
                <ul key={key}>
                  <li>{i}</li>
                </ul>
              );
            })}
          </ListContainer>

          <h5 style={{ color: "#ec1d24" }}>{data.subDescription.title}</h5>
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
          </ListContainer>
       <br />
          <SubTitle>{data.sealent}</SubTitle>

          <div>
            <Typography variant="h5">Recomandari:</Typography>
         
            <p>{data.disclaimer1}</p>
            <br />
            <p>{data.disclaimer2}</p>
          </div>
        </DescriptionContainer>
      </ContainerWrapper>

      <div style={{ padding: "2rem 0" }}>
        <AccordionText2 />
      </div>

      <Banner />
      <Directie />
    </>
  );
};
