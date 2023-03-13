import Hero from "../../subcomponents/hero/hero";
import image from "../../../data/images/poza-colantare.jpeg";
import {
  SecondHalf,
  Title,
  Subtitle,
  ExtraSubtitle,
  BookBtn,
} from "../protejare/protejare.styled";
import { Link } from "@reach/router";
import { ImageColantare, ColantareWrapper, TextWrapper } from "./colantare.styled";
import ImageSlider from "../image-slider/image-slider";
import { SliderContainer, SpanBlock } from "../image-slider/image-slider.styled";
import Banner from "../../banner-social/banner";
import Directie from "../../directii/directie";
const TextComponent = () => {
  return (
    <TextWrapper>
      <h2>INAINTE SI DUPA COLANTARE VINYL</h2>
    </TextWrapper>
  )
}

const Colantare = () => {
  return (
    <>
      <Hero
        data="D&S - Colantare Auto"
        image={
          "https://i.shgcdn.com/c6fb8f43-a342-40f3-afb7-69c482940d74/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        }
      />
      <ColantareWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            paddingTop: "1rem",
          }}
        >
          <ImageColantare src={image} />
        </div>
        <SecondHalf>
          <Title>Detalii Colantare</Title>
          <Subtitle>Specificare Serviciu</Subtitle>
          <br />
          <ExtraSubtitle>Durata Serviciului: 7 zile</ExtraSubtitle>
          <ExtraSubtitle>
            include: La D&S ne specializăm în decorațiuni și autocolante pentru
            masini. Oferim două niveluri de colantari cu folie de vinil pentru
            protecția mașinii tale: instalarea autocolantelor de protecție și a
            logo-urilor; și schimbarea completă de culoare cu autocolante de
            protecție și logo-uri.{" "}
          </ExtraSubtitle>
          <Title>Detalii Colantare</Title>
          <ExtraSubtitle>
            La Detailing Auto Suceava suntem capabili să proiectăm și să
            producem decorațiuni și autocolante pentru mașini de tot felul la
            sediul nostru, instalând autocolante/accente și logo-uri pe culoarea
            existentă sau schimbând complet culoarea mașinii folosind folia de
            vinil. Oferim această ultimă opțiune cu sau fără împachetarea
            compartimentului pentru uși, în funcție de preferința clienților.
          </ExtraSubtitle>
          <div>
            <BookBtn>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "100%",
                }}
                to="/contact"
              >
                Programeaza-te
              </Link>
            </BookBtn>
          </div>
        </SecondHalf>
      </ColantareWrapper>
        <TextComponent/>
      <SliderContainer>
        <ImageSlider />
        <SpanBlock/>
      </SliderContainer>
      <br />
        <Banner/>
        <Directie/>
    </>
  );
};

export default Colantare;
