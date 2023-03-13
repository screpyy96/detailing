import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import styled from "styled-components"

const useStyles = makeStyles((theme) => ({
  text: {
    color: "grey",
    textAlign: "center",
  },
}));

const BannerWrapper = styled(Box)`
    height: 200px;
    background: rgb(244, 244, 244);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    position: relative;
    bottom: -80px;
    left: 0;
    @media screen and (max-width: 768px){
    height: 100px;
    position: relative;
    bottom: 122px;
    left: 0;
}
`;

const Banner = () => {
  const classes = useStyles();

  return (
    <BannerWrapper>
      <Typography variant="h4" className={classes.text}>
        / D&S - Social
      </Typography>
    </BannerWrapper>
  );
};

export default Banner;
