import Hero from "../../subcomponents/hero/hero";
import HotBtns from "./hot-btns/hotButtons";
import * as PC from "./protejare.styled";
import { Grid, Typography } from "@material-ui/core";
import image from "../../../assets/images/despre.webp"
import AccordionText from "../accordion/accordion";
import Banner from "../../banner-social/banner";
import Directie from "../../directii/directie";

const ProtejareComponent = ({ data }) => {


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
          <PC.ExtraSubtitle>{data.serviceDescription}</PC.ExtraSubtitle>
          <div>
          <PC.Price>{data.price}</PC.Price> 
          <PC.BookBtn>{data.button}</PC.BookBtn>

          </div>
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
   

      <div>
        <AccordionText />
      </div>
      
      <Banner/>
      <Directie/>
    </>
  );
};

export default ProtejareComponent;
