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
          <Typography className={classes.heading}>Beneficiile PPF</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block" }}>
          <Typography className={classes.title}>
            Protectie
          </Typography>
          <p>PPF-ul nostru protejează vopseaua mașinii de ciobituri, zgârieturi minore și lovituri ușoare, factori de mediu precum petele de insecte și protejează suprafața împotriva defectelor din cauza tehnicilor proaste de spălare.</p>
          <br></br>
          <Typography className={classes.title}>
            Imbunatatire
          </Typography>
          <p>PPF-ul nostru are o claritate optică superioară și este foarte ușor de întreținut. Odată îngrijit corect, oferă un nivel de strălucire similar cu vopseaua recenă detaliată timp de mulți ani.</p>
          <br></br>
          <Typography className={classes.title}>
          Vindecare autonomă
          </Typography>
          <p>PPF-ul nostru are un strat de vindecare autonom. Pietricele, zgârieturi, ciobituri și vârtejuri care nu pătrund acest strat dispăr complet prin aplicarea căldurii produse din apă caldă de la robinet, motorul mașinii sau chiar de soare.</p>
          <br></br>
          <Typography className={classes.title}>
            Inlocuire
          </Typography>
          <p>Dacă o bucată necesita înlocuire, nu veți sta foarte mult pe marginea drumului. Majoritatea panourilor pot fi înlocuite în câteva ore, spre deosebire de reparațiile tradiționale la vopsitorie, care adesea durează zile sau chiar săptămâni.</p>
          <br></br>
          <Typography className={classes.title}>
            Cost
          </Typography>
          <p>Datorită faptului că PPF-ul nostru este conceput să se potrivească fiecărui panou în parte, acesta poate fi înlocuit individual, ceea ce reduce la minimum necesitatea demontării panourilor și a aplicării vopselei suplimentare pentru a se asigura o culoare uniformă.</p>
          <br></br>
        </AccordionDetails>
      </Accordion>
      {/* second */}
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Care este cea mai buna optiune pentru acoperirea cu PPF?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            
            <Typography>
            Film de protectie pentru vopsea poate proteja masina impotriva deteriorarii, cum ar fi cioburile de piatra, zgarieturi din parcari si exfolieri si zgarieturi zilnice.
            </Typography>
            <br></br>
            <Typography>
            Cu ajutorul designurilor personalizate, putem acoperi ORICE suprafață vopsită, din fibră de carbon sau finisată fină a mașinii, chiar și elementele interioare. Avem diferite opțiuni pentru a se potrivi fiecărei părți a mașinii: folie mai grosă pentru zonele care sunt în partea de jos a mașinii, cum ar fi praguri și paraurti, unde impactul este maxim și o folie mai clară pentru panourile mari, plane, cum ar fi capotele și acoperișurile. Toate foliile noastre vin atât în variante mat cât și lucios pentru a putea acoperi vopsele mate și cu fibră de carbon prețioase.
            </Typography>
            <br></br>
            <h3 >Unde apar daunele:</h3>
            <br />
            <h3> (bara fata-spate, capota, aripi frontale, parbriz, marginile usilor, praguri, faruri, oglinzi laterale).</h3>
            <br />
            <h3>Zone cu impact mediu: (aripi spate, usile).</h3>
            <br />
            <h3>Zone cu impact redus: (portbagaj, plafon).</h3>
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
        <AccordionDetails style={{display: "block", margin: "0 1rem"}}>
          <Typography>
          Toate kiturile noastre de film de protecție a vopselei sunt concepute de la zero de către echipa noastră, iar nu adaptate după modelele producătorilor de folii. Acest lucru asigură o protecție optimă în conformitate cu standardele noastre stricte de detaliere Auto Suceava.
          </Typography>
          <br />
          <ol>
            <li>La sosirea mașinii pe site, se efectuează o inspectare completă a stării acesteia, indiferent dacă este vorba despre un vehicul nou sau folosit.</li>
            <li>Vopseaua mașinii este inspectată în continuare utilizând un sun gun pentru evidențierea oricăror defecte, swirls-uri, holograme și clienții li se oferă opțiuni de corecție a vopselei, dacă este necesar, înainte de începerea instalării foliei.</li>
       
            <li>Acum putem trece la instalarea completă a PPF-ului nostru.
            </li>
            <li>În cele din urmă, trecem la prima dintre cele trei etape de control al calității înainte ca mașina să fie curățată complet pentru a fi pregătită pentru returnarea proprietarului.</li>
          </ol>
        </AccordionDetails>
      </Accordion>
      {/* fourth */}
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Aftercare si intretinere</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display: "block"}}>
          <Typography>
          Dupa ce masina ta a fost protejata de instalatorii D&S ai parte de linistea faptului ca intretinerea aspectului lucios al PPF-ului este inca foarte simpla, iti oferim instructiuni de ingrijire impreuna cu documentatia garantiei, dar cateva detalii importante:
          </Typography>
          <br />
      <ul>
        <li>
        Cum instalarea foliei este un proces umezit, noi recomandăm să nu spălați mașina în primele 7 zile după aplicare deoarece umiditatea dintre folie și vopsea încă se evaporă în acest timp și utilizarea șampoanelor poate afecta calitățile adezive în jurul marginilor fiecărui panou.
        </li>
        <br />
        <li>
        Odată ce filmul s-a întărit, puteți să spălați mașina ca de obicei (dacă este posibil, folosiți metoda celor două găleți și o mănușă lambswool pentru spălat), dacă utilizați un pistol de presiune, asigurați-vă că păstrați lancea spray-ul cel puțin la 40 cm distanță de suprafața filmului, în special marginile, deoarece presiunea poate ridica marginea filmului; recomandăm un șampon neutru la PH și produse de îngrijire a mașinii precum Gtechnic sau Swissvax.
        </li>
        <br />
        <li>
        Dacă există insecte sau excremente de pasăre pe mașina ta, este important să le îndepărtezi cât mai curând posibil. Deși PPF are rolul de a proteja suprafața mașinii tale, stratul superior are o compoziție similară cu lacul original al mașinii tale și poate fi afectat de acizi care pătrund în el. Așadar, recomandăm să acționezi la timp și să îndepărtezi cu grijă orice murdărie de pe suprafața mașinii.
        </li>
        <br />
        <li>Micile zgârieturi din folia de protecție se vor vindeca treptat în timp, dar dacă dorești să accelerezi procesul atunci poți turna apă călduță (nu fierbinte) pe zona afectată, acest lucru va ajuta stratul superior al peliculei să revină la starea sa originală.</li>
      </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionText;
