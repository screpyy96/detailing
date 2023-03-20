import React, { useEffect, useRef, useState, useCallback } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemText,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuList,
  MenuItem
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { AccordionStyle, LinkStyle, ListItemStyle } from './navbar.style';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'blue',
    fontSize: '20px'
  },
  icon: {
    color: 'black'
  },
  accordion: {
    margin: '0',
    padding: '0',
    marginLeft: '13px'
  }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setOpenDrawer(prevOpenDrawer => !prevOpenDrawer);
  }, []);

  const anchorRef = useRef(null);
  const prevOpen = useRef(openDrawer);

  useEffect(() => {
    if (prevOpen.current && !openDrawer) {
      anchorRef.current.focus();
    }

    prevOpen.current = openDrawer;
  }, [openDrawer]);

  return (
    <>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemStyle style={{ textAlign: 'center' }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <LinkStyle to="/" className={classes.link}>
                Acasa
              </LinkStyle>
            </ListItemText>
          </ListItemStyle>
          <Divider />
          <ListItemStyle onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <LinkStyle to="/despre" className={classes.link}>
                Despre
              </LinkStyle>
            </ListItemText>
          </ListItemStyle>
          <Accordion
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
            <AccordionSummary
              className={classes.accordion}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <AccordionStyle>Servicii</AccordionStyle>
            </AccordionSummary>
            <AccordionDetails>
              <MenuList
                autoFocusItem={openDrawer}
                id="composition-menu"
                aria-labelledby="composition-button">
                <Divider />
                <MenuItem onClick={() => setOpenDrawer(false)}>
                  <LinkStyle to="/detailing">Detailing</LinkStyle>
                </MenuItem>
                <MenuItem onClick={() => setOpenDrawer(false)}>
                  <LinkStyle to="/protejare">Protejare</LinkStyle>
                </MenuItem>
                <MenuItem onClick={() => setOpenDrawer(false)}>
                  <LinkStyle to="/intretinere">Intretinere</LinkStyle>
                </MenuItem>
                <MenuItem onClick={() => setOpenDrawer(false)}>
                  <LinkStyle to="/colantare">Colantare</LinkStyle>
                </MenuItem>
              </MenuList>
            </AccordionDetails>
          </Accordion>
          <Divider />
          <ListItemStyle onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <LinkStyle to="/contact" className={classes.link}>
                Contact
              </LinkStyle>
            </ListItemText>
          </ListItemStyle>

          <Divider />
        </List>
      </Drawer>
      <IconButton onClick={handleToggleMenu} className={classes.icon} ref={anchorRef}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default React.memo(DrawerComponent);