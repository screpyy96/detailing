/* eslint-disable react/prop-types */
import { Link } from '@reach/router';
import React from 'react';
import Banner from '../../banner-social/banner';
import { DirectionBtn, InfoContainer } from '../../contact/contact.styled';
import IconsRow from '../../icons/iconsRow';
import AccordionText2 from '../accordion/accordion2';
import { MapsContainer } from '../protejare/protejare.styled';
import {
  ContainerWrapper,
  DescriptionContainer,
  ImageComponent,
  ListContainer,
  SubTitle,
  TitleStyle
} from './valorificare.styled';

export const ValorificaComponent = ({ data }) => {
  const mapStyle = {
    border: 0,
    width: "100%",
    height: "450px",
    padding: 0,
    margin: 0,
  };


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
        <MapsContainer >
      <InfoContainer >
            <div >
              <h1>/ D&S Suceava</h1>
              <p>Nicolaie Aritonovici nr 7, </p>
              <p>Scheia, Suceava  727525</p>
              <p>Tel: +40748 455 547</p>
                <IconsRow/>
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
    </div>
  );
};
