import { Link } from "@reach/router";
import { DirectionBtn, InfoContainer } from "../contact/contact.styled";
import IconsRow from "../icons/iconsRow";
import { MapsContainer } from "../levels-components/protejare/protejare.styled";
import maps from '../../data/images/maps.png'
import { ImageMaps } from "./directie.styled";

const Directie = () => {
  return (
    <MapsContainer>
      <InfoContainer>
        <div>
          <h1>/ D&S Suceava</h1>
          <p>Nicolaie Aritonovici nr 7, </p>
          <p>Scheia, Suceava 727525</p>
          <p>Tel: +40748 455 547</p>
          <IconsRow />
        </div>
        <DirectionBtn>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white", width: "100%"}}
            href="https://maps.app.goo.gl/bS3GUsaaNMcXLwhPA"
          >
            DIRECTII
          </a>
        </DirectionBtn>
        <DirectionBtn>
          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none", width: "100%" }}
          >
            FA O PROGRAMARE
          </Link>
        </DirectionBtn>
      </InfoContainer>
      <ImageMaps
        src={maps}
        alt="Detailing Suceava adresa"
        width={"100%"}
        height={"450px"}
      />
    </MapsContainer>
  );
};

export default Directie;
