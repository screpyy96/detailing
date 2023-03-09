import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // transform: "translate(0, 20%)"
    paddingTop: "5rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 auto"
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
  title: {
    fontWeight: "800"
  }
}));

const AccordionText2 = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Ce este Detailing-ul?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block" }}>

          <Typography >
          The term “Detailing” can be misinterpreted and confused with a much more basic service; valeting. Valeting can be described as “the cleaning of the exterior / interior to remove visible dust, dirt and grime, leaving the surfaces clean and shiny” Although a very simple and straight forward task, paint damage and surface imperfections are often caused by incorrect washing techniques. At Topaz Detailing we not only repair this damage but exceed this, creating a “better than new” finish. “The art of making a car beautiful is time”. This time refers not only to the time spent on your car but the time taken to gather expertise and knowledge, allowing us to provide a service that fits the beauty, elegance and sophistication of the cars we work with, restoring, enhancing and protecting your vehicle.​
          </Typography>
          <br></br>
        </AccordionDetails>
      </Accordion>
      {/* second */}
      
      {/* third */}
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>How paint is inflicted?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display: "Block"}}>
          <Typography>
          If dirt, dust and grime are not correctly removed from the vehicle, the cleaning process will rub and grind these particles into the surface of the paint inflicting noticeable damage. Sponges may have been used on numerous vehicles prior to touching your car, collecting dirt and grit. This problem induces defects known as “swirl marks” and can be seen below. Other side effects of incorrect washing techniques are component damage. Harmful acidic products, specifically designed for cleaning concrete are used to clean wheels and lower sections of the car. These harmful products cause rusted brake callipers, wheel nuts, exhaust tips and brake disc surrounds. Valeting companies also offer what is known as a “Polish” or “Machine polish” as an elite car presentation service. The products, processes and techniques used in these so called “full valets” are actually doing more harm than good to the paintwork. They result in circular scratches and very visible grooves in the vehicle’s top coat. Very abrasive compounds and improper use of a rotary polishing machine are used to butcher the paint imperfections. They remove huge amounts of the vehicles clear coat, whilst inflicting “holograms” and buffer trails.
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      {/* fourth */}
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>What about new cars?!</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display: "block"}}>
          <Typography>
          Unfortunately we also receive new cars with defects caused by the dealer. During the PDI “Pre Delivery inspection”, the rushed removal of the factory applied wax and protective wrapping causes paint imperfections such as swirl marks and micro scratches. Topaz detailing provides a service that will not only restore you vehicles appearance but will exceed your aesthetic expectations.
          </Typography>
         
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionText2;
