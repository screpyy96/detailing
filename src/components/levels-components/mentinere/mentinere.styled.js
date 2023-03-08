import styled from "styled-components";

export const ContainerWrapper = styled.div`
    // height: 100vh;
    border: 2px solid black;
    width: 70%;
    margin: 0 auto;


    & div  p {
        font-size: 13px;
    }
`

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
  }
`;

export const MonthItem = styled.div`
  background: #efefef;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem;
`;

