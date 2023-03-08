import Hero from "../../subcomponents/hero/hero";
import HotBtns from "./hot-btns/hotButtons";
import * as PC from "./protejare.styled";
import { Grid, Typography } from "@material-ui/core";
import image from "../../../assets/images/despre.jpg"
import AccordionText from "../accordion/accordion";
import { DirectionBtn, InfoContainer } from "../../contact/contact.styled";
import { Link } from "@reach/router";
import IconsRow from "../../icons/iconsRow";

const ProtejareComponent = ({ data }) => {

  const mapStyle = {
    border: 0,
    width: "100%",
    height: "450px",
    padding: 0,
    margin: 0,
  };

  return (
    <>
      <PC.ContainerWrapper>
        <div  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
        }}>
          <PC.ImageComponent src={data.imgPath} />
          <HotBtns data={data} />
        </div>
        <PC.SecondHalf>
          <PC.Title>{data.title}</PC.Title>
          <PC.Subtitle>{data.subTitle}</PC.Subtitle>
          <PC.ExtraSubtitle>{data.extraSubtitle}</PC.ExtraSubtitle>
          <PC.Title>{data.title1}</PC.Title>
          <PC.ExtraSubtitle>{data.serviceDescription}</PC.ExtraSubtitle>
          <PC.Price>{data.price}</PC.Price>
          <PC.BookBtn>{data.button}</PC.BookBtn>
        </PC.SecondHalf>
      </PC.ContainerWrapper>
      <Hero  image={image} />
 
        <Grid container spacing={2} style={{  width: "100%", margin: "0 auto", background: "#f4f4f4", padding: "3rem"}}>
          {/* left side text */}
          <PC.PpfContainer>
            <Grid item xs={12} sm={6} style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
              <Typography variant="h4" style={{ color: "red", paddingBottom: "1rem" }}>{data.contentTitle}</Typography>
              <Typography variant="body1" style={{ paddingBottom: "1rem" }} >{data.desc1}</Typography>
              <Typography variant="body1" style={{ paddingBottom: "1rem" }} >{data.desc2}</Typography>
              <Typography variant="body1" style={{ paddingBottom: "1rem" }} >{data.desc3}</Typography>
            </Grid>
            {/* right side image */}
            
              <PC.ImagePff
                src={data.imgDesc}
                alt="description"
              />
           
          </PC.PpfContainer>
        </Grid>
   
      {/* accordion */}
      <div>
        <AccordionText />
      </div>
      {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "60%", margin: "0 auto", paddingTop: "3rem" }}>
        <PC.ButtonsWhite variant="contained">Car Care Instruction</PC.ButtonsWhite>
        <PC.ButtonsWhite variant="contained">After Car Instruction</PC.ButtonsWhite>
        <PC.ButtonsWhite variant="contained">D&S Garantie</PC.ButtonsWhite>
      </div> */}
      <PC.MapsContainer >
      <InfoContainer >
            <div >
              <h1>/ D&S Suceava</h1>
              <p>Nicolaie Aritonovici nr 7, </p>
              <p>Scheia, Suceava  727525</p>
              <p>Tel: +40748 455 547</p>
                <IconsRow />
            </div>
            <DirectionBtn>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
                href="https://maps.app.goo.gl/bS3GUsaaNMcXLwhPA"
              >
                DIRECTII
              </a>
            </DirectionBtn>
            <DirectionBtn>
              <Link to="/contact" style={{color: "white", textDecoration: "none"}}>
                FA O PROGRAMARE
              </Link>
            </DirectionBtn>
          </InfoContainer>
          <iframe
          title="map"
          srcDoc={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.3094432496814!2d26.21106101499875!3d47.65898469235204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734fc012d3a10f5%3A0x2057b68470b413c3!2sDetailing%20Auto%20D%26S!5e0!3m2!1sen!2sro!4v1678187777830!5m2!1sen!2sro" width="100%" height="450px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
          style={mapStyle}
          allowFullScreen
          loading="lazy"
        ></iframe>
       <style>
        {`@media screen and (max-width: 600px) {
          iframe {
            width: 100%;
            padding-top: 2rem;
          }
        }`}
      </style>
      </PC.MapsContainer>
    </>
  );
};

export default ProtejareComponent;
