import React, { useEffect, useState } from 'react';

import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import { BoxStyled, TabListStyle, TabStyle } from './valorificare.styled';

import { ValorificaComponent } from './valorifica-component';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Hero from '../../subcomponents/hero/hero';
import image from "../../../assets/images/valorificare.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
      top: "100px",
      right: "30px",
      width: "90%",
      margin: "0 auto",
      "& .MuiPaper-root": {
        top: "100px",
        right: "30px",
        marginLeft: theme.spacing(1),
      },
      "& .MuiTab-root": {
        border: "1px solid #E1E1E1",
        transform: "perspective(100px) rotateX(30deg)",
        backgroundColor: "#e6e4e4",
        [theme.breakpoints.down("xs")]: {
          transform: "perspective(25px) rotateX(8deg)",
        },
  
        "&:first-child": {
          marginLeft: "2rem",
          [theme.breakpoints.down("xs")]: {
            marginLeft: "1rem",
          },
        },
        "&:last-child": {
          marginRight: "2rem",
          [theme.breakpoints.down("xs")]: {
            marginRight: "1rem",
          },
        },
      },
      "& .MuiTab-root.Mui-selected": {
        backgroundColor: "#EC1D24",
        borderRadius: "4px 4px 0 0",
        color: "white",
      },
      "& .MuiTabs-indicator": {
        display: "none",
      },
      "& .MuiTouchRipple-root": {
        margin: "0",
      },
    },
  }));


const Valorificare = ({ valorificare }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Valorificare |  D&S Suceava';
  }, []);

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Hero data="Valorificare |  D&S Suceava" image={image}/>
      <BoxStyled sx={{ typography: 'body1' }} style={{transform: "translate(0, -4.8%)"}}>
        <TabContext value={value}>
          <BoxStyled sx={{ borderBottom: 1, borderColor: 'divider' }}>
            {isMobile ? (
              <TabListStyle
                className={classes.root}
                orientation="vertical"
                centered
                variant="fullWidth"
                onChange={handleChange}
                aria-label="full width tabs example">
                <TabStyle label="Level 1" value="1" />
                <TabStyle label="Level 2" value="2" />
                <TabStyle label="Level 3" value="3" />
                <TabStyle label="Level 4" value="4" />
                <TabStyle label="Level 5" value="5" />
                {/* <TabStyle  label="Level 6" value="6" /> */}
              </TabListStyle>
            ) : (
              <TabListStyle
                className={classes.root}
                orientation="horizontal"
                centered
                variant="fullWidth"
                onChange={handleChange}
                aria-label="full width tabs example">
                <TabStyle label="Level 1" value="1" />
                <TabStyle label="Level 2" value="2" />
                <TabStyle label="Level 3" value="3" />
                <TabStyle label="Level 4" value="4" />
                <TabStyle label="Level 5" value="5" />
                {/* <TabStyle  label="Level 6" value="6" /> */}
              </TabListStyle>
            )}
          </BoxStyled>
          {valorificare.map((i, id) => {
            return (
              <TabPanel value={`${i.id}`} key={id}>
                <div>
                  <ValorificaComponent data={i} />
                </div>
              </TabPanel>
            );
          })}
        </TabContext>
      </BoxStyled>
    </div>
  );
};

export default Valorificare;
