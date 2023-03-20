import React from "react";
import { Typography } from "@material-ui/core";

import {
  CeramicaWrapper,
  TitleCeramic,
  GridContainer,
  AditionalDetails,
  ParagraphSize,
} from "../mentinere.styled";
import Banner from "../../../banner-social/banner";
import Directie from "../../../directii/directie";

function CeramicComponent({ data }) {
  return (
    <>
      <CeramicaWrapper>
        <TitleCeramic>{data.title}</TitleCeramic>
        <div>
          <img src={data.imgPath} alt="ceramica suceava" />
        </div>
        <div style={{ borderBottom: "2px solid red" }}>
          <ParagraphSize>{data.price}</ParagraphSize>
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
      <Banner />
      <Directie />
    </>
  );
}

export default CeramicComponent;
