import styled from "styled-components";

export const ContainerWrapper = styled.div`
  border: 2px solid black;
  width: 70%;
  margin: 0 auto;

  & div p {
    font-size: 13px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ServiciiContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  h3 {
    padding-bottom: 1rem;
  }

  img {
    height: 400px;
    width: 350px;
    padding: 2rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: auto;
      padding: 1rem;
    }
  }
`;

export const ExteriorWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  border: 2px solid grey;
  background: #efefef;
  padding: 2rem 3rem;
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    border: 2px solid grey;
    background: #efefef;
    padding: 2rem 1.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const MonthsPlan = styled.div`
  width: 75%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 2fr 2fr;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px; /* adaugă spațiu între rânduri */
  grid-column-gap: 10px; /* adaugă spațiu între coloane */

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
    width: 90%;
    padding: 1rem 0;
  }
`;

export const MonthItem = styled.div`
  background: #efefef;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    margin: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  &media screen and(max-width: 768px) {
  }
`;

// ceramica

export const TitleCeramic = styled.h1`
  text-align: center;
  color: red;
  padding: 2rem;
  font-weight: normal;
  @media screen and (max-width: 768px){
    padding: 2rem 0;
  }
`;
export const CeramicaWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: 2rem;
  & img {
    width: 100%;
    height: 400px;
  }

  @media screen and (max-width: 768px){
    width: 90%;
    transform: translate(0, 1%);
    margin-bottom: 2rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const AditionalDetails = styled.div`
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 2rem;
`;

export const ParagraphSize = styled.p`
  text-align: center;
  font-size: 1.8rem;
  padding: 1rem;

  @media screen and (max-width: 768px){
    padding: 1rem 0;
  }
`