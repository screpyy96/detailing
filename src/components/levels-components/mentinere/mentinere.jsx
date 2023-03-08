import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { TabListStyle, TabStyle } from "../valorificare/valorificare.styled";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Hero from "../../subcomponents/hero/hero";
import { BoxStyled } from "../valorificare/valorificare.styled";
import image from "../../../assets/images/protejare.jpg";
import MentinereComponent from "./mentinereComponent";
import CeramicComponent from "./ceramica/ceramica";

const useStyles = makeStyles((theme) => ({
        root: {
            top: "100px",
            right: "30px",
            width: "60%",
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
                  borderBottom: "2px solid black",
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
  


    const Mentinere = ({ mentinere }) => {
        const classes = useStyles();
        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
        useEffect(() => {
            window.scrollTo(0, 0);
            document.title = "Mentinere |  D&S Suceava";
        }, []);

        const [value, setValue] = useState("1");

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };
        return (
            <div>
                <Hero data="Mentinere" image={image} />
                <BoxStyled sx={{ typography: "body1" }} style={{transform: "translate(0, -3.5%)"}}>
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
                                <TabStyle label="Spalare " value="1" />
                                <TabStyle label="Ceramic Coating" value="2" />
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
                                <TabStyle label="Spalare" value="1" />
                                <TabStyle label="Ceramic Coating" value="2" />
                            </TabListStyle>
                        )}

                        {mentinere.map((i, id) => {
                            return (
                                <TabPanel
                                    style={{ background: "white", padding: "0" }}
                                    value={`${i.id}`}
                                    key={id}
                                >
                                    <div>
                                        {i.id === 1 ? (
                                            <MentinereComponent data={i} />
                                        ) : i.id === 2 ? (
                                            <CeramicComponent data={i} />
                                        ) : <MentinereComponent data={i} />}
                                    </div>
                                </TabPanel>
                            );
                        })}

                    </TabContext>
                </BoxStyled>
            </div>
        );
    };

    export default Mentinere;
