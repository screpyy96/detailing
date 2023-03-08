import Hero from "../../subcomponents/hero/hero";
import HotBtns from "./hot-btns/hotButtons";
import * as PC from "./protejare.styled";
import { Grid, Typography } from "@material-ui/core";
import image from "../../../assets/images/despre.jpg"
import AccordionText from "../accordion/accordion";

const ProtejareComponent = ({ data }) => {
  return (
    <>
      <PC.ContainerWrapper>
        <div>
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
      <Hero data="Text " image={image} />
      <div>
      <Grid container spacing={2} style={{transform: "translate(0, 10%)", width: "100%", margin:"0 auto", background: "#f4f4f4"}}>
          {/* left side text */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" style={{color: "red", paddingBottom: "1rem"}}>{data.contentTitle}</Typography>
            <Typography variant="body1" style={{paddingBottom: "1rem"}} >{data.desc1}</Typography>
            <Typography variant="body1" style={{paddingBottom: "1rem"}} >{data.desc2}</Typography>
            <Typography variant="body1" style={{paddingBottom: "1rem"}} >{data.desc3}</Typography>
          </Grid>
          {/* right side image */}
          <Grid item xs={12} sm={6}>
            <img
              src={data.imgDesc}
              alt="description"
              style={{ maxWidth: "60%", height: "60%", transform: "translate(30%, 20%)" }}
            />
          </Grid>
        </Grid>
      </div>
      {/* accordion */}
      <div>
        <AccordionText/>
      </div>
    </>
  );
};

export default ProtejareComponent;
