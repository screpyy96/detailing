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
    width: "90%",
    margin: "0 auto",
    // transform: "translate(0, 20%)"
    padding: "2rem 0",
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

const AccordionText = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Beneficiile PPE</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block" }}>
          <Typography className={classes.title}>
            Protection
          </Typography>
          <p>Our PPF protects your paintwork from chips, minor scuffs and scrapes, environmental factors such as bug splatter and protects the finish against defects from poor washing techniques.</p>
          <br></br>
          <Typography className={classes.title}>
            Enhancement
          </Typography>
          <p>Our PPF has a superior optical clarity and is very easy to maintain. When looked after correctly it gives a depth of shine like freshly detailed paint for many years.</p>
          <br></br>
          <Typography className={classes.title}>
            Self Healing
          </Typography>
          <p>Our PPF has a self healing layer. Stone chips, scuffs, scratches and swirls that don’t penetrate this layer disappear with the application of heat from hot tap water, the car’s engine or even just the sun.</p>
          <br></br>
          <Typography className={classes.title}>
            Replacement
          </Typography>
          <p>If a panel needs replacing, you won’t be off the road for long. Most panels can be replaced within a couple of hours – unlike traditional paint repairs, which often take days or even weeks.</p>
          <br></br>
          <Typography className={classes.title}>
            Cost
          </Typography>
          <p>Because our PPF is specifically designed to fit each panel it can be replaced individually meaning little or no need to strip the panels and no extra paint to blend the colour to adjacent panels.</p>
          <br></br>
        </AccordionDetails>
      </Accordion>
      {/* second */}
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>What PPF coverage to choose?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography>
              Traditionally PPF was installed on wheel arches, the leading edge of the bonnet or the forward panels of the car. Today, many clients wants us to cover the entire vehicle. Such is the quality of the modern films and our design and installation processes that it really does make sense to protect the whole car.
            </Typography>
            <br></br>
            <Typography>
              Paint protection film can protect your car against damage such as stone chips, car park nudges and chipping, and day-to-day scratches.
            </Typography>
            <br></br>
            <Typography>
              With our custom designs, we can cover ANY painted, carbon fibre or smooth finished surface of the car, even interior trims. We have various options to suit each part of the car: thicker film for low down, high impact areas such as bumpers and sills, and clearer film for large, flat panels such as bonnets and roofs. All our film comes in matte, as well as traditional high-gloss options, to cover expensive matte paints and carbon fibre paints.
            </Typography>
            <br></br>
            <h3 >Where the Damage Occurs:</h3>
            <br />
            <h3> (bumpers, bonnet, front wings, wing mirrors, lower doors, wheel arches, sills, headlamps, lower doors, wing mirrors).</h3>
            <br />
            <h3>Medium impact areas (rear wings, upper doors).</h3>
            <br />
            <h3>Low impact areas (boot lid, engine cover).</h3>
          </div>
          <img src="https://i.shgcdn.com/98143c49-880a-4761-bb50-379380c592fd/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="detailing suceava"/>
          <br></br>
        </AccordionDetails>
      </Accordion>
      {/* third */}
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Ce ne face diferiti?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display: "Block"}}>
          <Typography>
            All of our paint protection film kits are designed in house from scratch and are not amended from film manufacturers patterns. Resulting in optimum protection in accordance to our stringent Topaz standards.
          </Typography>
          <br />
          <ol>
            <li>Once a car arrives onsite a full inspection of the car’s condition is carried out, whether it is a new or used vehicle.</li>
            <li>The car’s paint is inspected further using a sun gun to highlight any defects, swirls, holograms and customers are offered optional paint correction where necessary before the film installation begins.</li>
            <li>New models get patterned panel at a time, then digitised and loaded into our CAD programme for the design work to be done.</li>
            <li>Now we can move to the full installation of our PPF.
            </li>
            <li>Finally we move to the first of three Quality Control stages before the car receives final cleaning ready for return to it’s owner.</li>
          </ol>
        </AccordionDetails>
      </Accordion>
      {/* fourth */}
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>After care and maintenance</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display: "block"}}>
          <Typography>
          Once your car has been protected by our Topaz Installers you can also enjoy the peace of mind knowing that maintaining the glossy appearance of the PPF is still very simple, we provide After Care instructions along with your warranty documentation but a few key points
          </Typography>
          <br />
      <ul>
        <li>
        As the installation of the film is a wet process we advise to not wash the car for the first 7 days afterwards, the moisture in between the film and paint is still evaporating during this time and using shampoos can affect this and the adhesive qualities around the edges of each panel.
 
        </li>
        <br />
        <li>
          Once the film has cured, you are able to wash the car as normal (if possible use the twin bucket method and a lambswool wash mitt), if using a pressure washer ensure that you keep the spray lance at least 3 feet away from the surface of the film especially the edges as the pressure may lift the edge of the film, we recommend a PH neutral shampoo and car care products such as Gtechnic or Swissvax.
        </li>
        <br />
        <li>
        If you get bug splatter or bird dropping you should still remove this as soon as possible as you would with bare paint, while the PPF adds protection the top layer has a similar make up to your cars own lacquer and will also be marked from the acids etching into it.
        </li>
        <br />
        <li>
        If you like to polish or wax your car you can continue to do this on PPF covered panels although more careful selection of the products must be taken. Polishes that are resin, solvent based or abrasive can mark the film leaving a haze or damaging the self healing abilities and must be avoided. A good quality natural wax like Carnauba can be used, of course if you are unsure our team can advise on specific recommended products.
        </li>
        <br />
        <li>Surface scratches and swirl marks in the film will heal over a period of time, if you needed to accelerate the process then pour warm water (not boiling) over the desired area, that will help the upper most layer of the film to morph back into its original state.</li>
      </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionText;
