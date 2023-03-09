import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { TabListStyle, TabStyle } from "../valorificare/valorificare.styled";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Hero from "../../subcomponents/hero/hero";
import { BoxStyled } from "../valorificare/valorificare.styled";
import image from "../../../assets/images/protejare.jpg";
import ProtejareComponent from "../protejare/protejare-component";

const useStyles = makeStyles((theme) => ({
  root: {
      top: "100px",
      right: "30px",
      width: "60%",
      margin: "0 auto",
      "& .MuiPaper-root": {
        top: "100px",
        right: "30px",
        // marginLeft: theme.spacing(1),
      },
      "& .MuiTab-root": {
        border: "1px solid #E1E1E1",
        transform: "perspective(100px) rotateX(30deg)",
        backgroundColor: "#e6e4e4",
        [theme.breakpoints.down("xs")]: {
          transform: "perspective(25px) rotateX(0)",
        },
  
        "&:first-child": {
          marginLeft: "2rem",
          [theme.breakpoints.down("xs")]: {
            marginLeft: "0",
          },
        },
        "&:last-child": {
          marginRight: "2rem",
          [theme.breakpoints.down("xs")]: {
            marginRight: "0",
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


const Protejare = ({ protejare }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Protejare |  D&S Suceava";
  }, []);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Hero data="Protejare" image={image} />
      <BoxStyled sx={{ typography: "body1" }}>
        <TabContext value={value}>
          {isMobile ? (
            <TabListStyle
              className={classes.root}
              orientation="vertical"
              centered
              variant="fullWidth"
              onChange={handleChange}
              aria-label="full width tabs example"
            >
              <TabStyle label="Full Front Kit" value="1" />
              <TabStyle label="Complet Kit" value="2" />
              <TabStyle label="Full Custom Design Kit" value="3" />
            </TabListStyle>
          ) : (
            <TabListStyle
              className={classes.root}
              orientation="horizontal"
              centered
              variant="fullWidth"
              onChange={handleChange}
              aria-label="full width tabs example"
            >
              <TabStyle label="Full Front Kit" value="1" />
              <TabStyle label="Complet Kit" value="2" />
              <TabStyle label="Full Custom Design Kit" value="3" />
            </TabListStyle>
          )}

          {protejare.map((i, id) => {
            return (
              <TabPanel
                style={{ background: "white", padding: "0" }}
                value={`${i.id}`}
                key={id}
              >
                <div>
                  <ProtejareComponent data={i} />
                </div>
              </TabPanel>
            );
          })}
        </TabContext>
      </BoxStyled>
    </div>
  );
};

export default Protejare;
