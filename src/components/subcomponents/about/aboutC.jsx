/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import React from "react";
import {
  AboutCWrapper,
  MainContent,
  StyledBtn,
  StyledText,
} from "../subcomponents.styled";
import { Link } from "@reach/router";

// eslint-disable-next-line react/prop-types
export const AboutC = ({ about }) => {
  return (
    <>
      <AboutCWrapper>
        <MainContent>
          <Typography>{about.title}</Typography>
          <StyledText>
            <p style={{ fontSize: "16px" }}>{about.mainText}</p>
            <p>{about.subText}</p>
          </StyledText>
          <StyledBtn>
            <Link style={{ textDecoration: "none", color: "white" }} to="/despre">
              {about.button}
            </Link>
          </StyledBtn>
        </MainContent>
      </AboutCWrapper>
    </>
  );
};
