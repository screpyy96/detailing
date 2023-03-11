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
    // padding: "2rem",
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
          Termenul "Detailing" poate fi interpreta greșit și confundat cu un serviciu mult mai simplu; spălare. Spălarea poate fi descrisă ca "curățarea exterioară/interioară pentru îndepărtarea prafului, murdăriei și mizeriei, lăsând suprafețele curate și strălucitoare". Deși este o sarcină foarte simplă și directă, daunele la vopsea și imperfecțiunile suprafeței sunt adesea cauzate de tehnici de spălare incorecte. La D&S Detailing, nu doar reparam aceste daune, ci le depășim, creând o finisare "mai bună decât nouă". "Arta de a face o mașină frumoasă este timpul". Acest timp se referă nu numai la timpul petrecut pe mașina ta, ci la timpul necesar pentru a acumula experiență și cunoștințe, permițându-ne să oferim un serviciu care se potrivește cu frumusețea, eleganța și rafinamentul mașinilor cu care lucram, restaurând, îmbunătățind și protejând vehiculul tău.
          </Typography>
          <br></br>
        </AccordionDetails>
      </Accordion>
      {/* second */}
      
      {/* third */}
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Cum este afectată vopseaua?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display: "Block"}}>
          <Typography>
          Dacă murdăria, praful și mizeria nu sunt îndepărtate corect de pe mașină, procesul de curățare va freca și măcina aceste particule în suprafața vopselei provocând daune vizibile. Găjicii ar fi putut fi utilizate pe numeroase vehicule înainte de a atinge mașina ta, colectând murdărie și nisip. Acest lucru duce la apariția defectelor cunoscute sub numele de "urme circulare" și pot fi observate mai jos. Alte efecte secundare ale tehnicilor de spălare incorecte sunt deteriorarea componentelor. Produsele chimice cu aciditate ridicată, concepute special pentru curățarea betonului, sunt folosite pentru a curăța jantele și secțiunile inferioare ale mașinii. Aceste produse dăunătoare cauzează ruginirea etrierelor de frână, piulițelor de roată, vârfurilor de evacuare și înconjurătorului discului de frână. Companiile de detailing oferă și ceea ce este cunoscut sub numele de "Lustruire" sau "Lustruire mecanică" ca serviciu de prezentare de elită pentru mașini. Produsele, procesele și tehnologiile utilizate în aceste anumite "vopsitorii complete" fac mai mult rău decât bine vopselei. Se obțin zgârieturi circulare și caneluri foarte evidente în stratul superior al vehiculului. Compusurile foarte abrazive și utilizarea improprie a unei polizoare rotative sunt utilizate pentru a distruge imperfecțiunile vopselei. Înlătură o cantitate imensă din stratul clar al vehiculului, provocând "holograme" și urme de tamponare.
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      {/* fourth */}
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Ce se întâmplă cu mașinile noi?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display: "block"}}>
          <Typography>
          Întristător, frecvent primim vehicule noi cu defecte cauzate de dealer. În timpul PDI "Inspeției prelivrare", îndepărtarea grabită a cerii și a învelișului protector de fabrica duce la imperfecțiuni ale vopselei cum ar fi urmele de rotire și zgârieturi fine. D&S Detailing oferă un serviciu ce nu doar redă aspectul autovehiculului, ci depășește chiar și așteptările estetice.
          </Typography>
         
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionText2;
