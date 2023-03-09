import React from "react";
import { Typography } from "@material-ui/core";

import {
  CeramicaWrapper,
  TitleCeramic,
  GridContainer,
  AditionalDetails,
} from "../mentinere.styled";
import { MapsContainer } from "../../protejare/protejare.styled";
import { DirectionBtn, InfoContainer } from "../../../contact/contact.styled";
import IconsRow from "../../../icons/iconsRow";
import { Link } from "@reach/router";
import Banner from "../../../banner-social/banner";

function CeramicComponent({ data }) {
  const mapStyle = {
    border: 0,
    width: "100%",
    height: "450px",
    padding: 0,
    margin: 0,
  };

  return (
    <>
      <CeramicaWrapper>
        <TitleCeramic>{data.title}</TitleCeramic>
        <div>
          <img src={data.imgPath} alt="" />
        </div>
        <div style={{ borderBottom: "2px solid red" }}>
          <p
            style={{ textAlign: "center", fontSize: "1.8rem", padding: "2rem" }}
          >
            {data.price}
          </p>
        </div>
        <GridContainer>
          <div>
            <Typography style={{ color: "red", fontSize: "1.8rem" }}>
              {data.titleService}
            </Typography>
            <br />
            <p style={{ fontWeight: "800", paddingBottom: "0.5rem" }}>
              For Vinyl
            </p>
            <p>{data.serviceDescription}</p>
          </div>
          <div>
            <Typography style={{ color: "red", fontSize: "1.8rem" }}>
              {data.titleService2}
            </Typography>
            <br />
            <p style={{ fontWeight: "800", paddingBottom: "0.5rem" }}>
              {data.subtitleServiceCeramic2}
            </p>
            <ul>
              <li>{data.serviceDescription2}</li>
              <li>{data.serviceDescription3}</li>
              <li>{data.serviceDescription4}</li>
              <li>{data.serviceDescription5}</li>
              <li>{data.serviceDescription6}</li>
              <li>{data.serviceDescription7}</li>
            </ul>
          </div>
        </GridContainer>
        <AditionalDetails>
          <Typography>{data.subTitleCeramica}</Typography>

          {data.planLunar.map((plan, i) => (
            <div key={i}>
              <Typography style={{ padding: "1rem" }}>{plan.title}</Typography>
              <p>{plan.desc}</p>
            </div>
          ))}
        </AditionalDetails>
      </CeramicaWrapper>
      <Banner/>
      <MapsContainer>
        <InfoContainer>
          <div>
            <h1>/ D&S Suceava</h1>
            <p>Nicolaie Aritonovici nr 7, </p>
            <p>Scheia, Suceava 727525</p>
            <p>Tel: +40748 455 547</p>
            <IconsRow />
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
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
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
    </>
  );
}

export default CeramicComponent;
