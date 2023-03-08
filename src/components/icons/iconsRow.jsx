import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
// import TikTokIcon from '@material-ui/icons/TikTok';

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: 'flex',
    alignItems: 'center'

  },
  icon: {
    margin: theme.spacing(1),
    color: 'black',
    fontSize: '3rem',
  },
}));

function IconsRow() {
  const classes = useStyles();

  return (
    <div className={classes.iconContainer}>
      <a rel="noopener noreferrer" href="https://www.facebook.com">
        <FacebookIcon className={classes.icon} />
      </a>
      <a rel="noopener noreferrer" href="https://www.instagram.com">
        <InstagramIcon className={classes.icon} />
      </a>
    </div>
  );
}

export default IconsRow;
