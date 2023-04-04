import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  textContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: theme.palette.common.white
  }
}));

const BoxWrapper = styled(Box)`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 30vh;
  display: flex;
  align-items: center;
  && {@media screen and (max-width: 765px) {
    height: 50vh;
  }}
`;


const Hero = ({ data, image }) => {
  const classes = useStyles();

  return (
    <BoxWrapper image={image}>
      <Container className={classes.textContainer}>
        <Typography variant="h3" className={classes.title}>
          {data}
        </Typography>
      </Container>
    </BoxWrapper>
  );
};

export default Hero;
