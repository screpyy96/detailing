import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  tiktok: {
    fontSize: '2.4rem',
    color: "black",
    padding: "1rem",
    marginTop: "-3px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-4px",
      fontSize: '2.3rem',
    },
  }
}));

function IconsRow() {
  const classes = useStyles();

  return (
    <div className={classes.iconContainer}>
      <a rel="noopener noreferrer" href="https://www.facebook.com/detailingsuceava">
        <FacebookIcon className={classes.icon} />
      </a>
      <a rel="noopener noreferrer" href="https://www.instagram.com/detailingsuceava/">
        <InstagramIcon className={classes.icon} />
      </a>
      <a rel="noopener noreferrer" href="https://www.tiktok.com/@detailingsuceavadns?is_from_webapp=1&sender_device=pc">
        <FontAwesomeIcon className={classes.tiktok} icon={faTiktok} />
      </a>
    </div>
  );
}

export default IconsRow;
