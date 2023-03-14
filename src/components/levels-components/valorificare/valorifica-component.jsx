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
        <ContainerWrapper>
          <AccordionText2 />
          <ImageComponent style={{width: "100%", height: "400px"}}
          alt="colantare suceava"
          src="https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/325478881_740900417599102_8574081450617345345_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7ZrcJTTB3QsAX-msR58&_nc_ht=scontent.fias1-1.fna&oh=00_AfBMuryq_LrlMBzlx_CgpnE3tnInLiI4tKPulLuvVIAMxA&oe=641595DA"/>
        </ContainerWrapper>
        <Banner/>
        <Directie/>
    </div>
  );
};
