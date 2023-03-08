/* eslint-disable react/react-in-jsx-scope */
import {
  // AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Button,
  Paper,
  ClickAwayListener,
  MenuList,
  Grow,
  Popper
} from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuItem } from '@mui/material';
import { Link } from '@reach/router';
import { useEffect, useRef, useState } from 'react';

import DrawerComponent from './drawer';
import { AppBarStyled, LinkStyle } from './navbar.style';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: 'flex'
    // marginTop: '12 rem'
  },
  root: {
    top: '100px',
    right: '30px',
    '&MuiPaper-root': {
      top: '100px',
      right: '30px'
    }
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
    color: 'black'
  },
  navbar: {
    background: 'white'
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    color: 'black',
    marginLeft: theme.spacing(1),
    '&:hover': {
      borderBottom: '1px solid black'
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open, anchorRef]);

  return (
    <AppBarStyled position="static" className={classes.navbar}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Detailing Auto Suceava
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Button>
              <Link to="/" className={classes.link}>
                Acasa
              </Link>
            </Button>
            <Button>
              <Link to="/despre" className={classes.link}>
                Despre
              </Link>
            </Button>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}>
              <p to="" className={classes.link}>
                Servicii
              </p>
              <ExpandMoreIcon />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef?.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
              style={{ position: 'relative', zIndex: '2' }}>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'top-start' ? 'right top' : 'right top'
                  }}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}>
                          <LinkStyle to="/valorificare">Valorificare</LinkStyle>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <LinkStyle to="/protejare">Protejare</LinkStyle>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <LinkStyle to="/mentinere">Mentinere</LinkStyle>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <LinkStyle to="/personalizare">Personalizare</LinkStyle>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Button>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBarStyled>
  );
};

export default Navbar;
