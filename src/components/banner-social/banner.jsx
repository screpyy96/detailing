import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  banner: {
    height: 200,
    background: "rgb(244, 244, 244)",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 100,
    },
  },
  text: {
    color: 'grey',
    textAlign: 'center',
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.banner}>
      <Typography variant="h4" className={classes.text}>
        / D&S - Social
      </Typography>
    </Box>
  );
};

export default Banner;
