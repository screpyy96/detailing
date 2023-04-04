import styled from "styled-components";

export const ContainerWrapper = styled.div`
display: grid;
background: white;
grid-template-columns: 50% auto;
grid-gap: 2rem;
padding-bottom: 3rem;
padding-top: 3rem;
@media screen and (max-width: 768px) {
  grid-template-columns: auto;
  padding:
}
`

export const ImageComponent = styled.img`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }`

export const SecondHalf = styled.div`
  border: 1px solid grey;
  padding: 0 2rem;
  // height: 83%; 
  width: 70%;
  margin: 0  auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const Subtitle = styled.p`
  
font-weight: bold;
`;

export const ExtraSubtitle = styled.p`
  color: "#3A3A3A";
  font-weight: 200;
`;


export const Title = styled.h3`
  color: #ea1d22;
  font-size: 20px;
  color: #ec1d24;
  padding: 2rem 0;
  font-weight: 400;
`;
export const Price = styled.p`
  padding: 1rem 0 ;  
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  border-bottom: 2px solid #ea1d22;
`;
export const BookBtn = styled.button`
  padding: 1.7rem  ;  
  width: 100%;
  border: 0;
  margin: 2rem 0;
  color: white;
  font-size: 1rem;
  text-align: center;
  background: #ea1d22;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const BlinkingDotsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  animation: blink 1s step-end infinite;
  position: relative;
`;

export const BlinkingDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 10px;
  background-color: red;
  position: absolute;
  top: 50%;
  left: 20%;

  &:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid red;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%; -50%);
    animation: circular-wave 1s ease-in-out infinite;
  }

  @keyframes circular-wave {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;


export const PopUpTextContainer = styled.div`
    display: ${props => (props.showPopUpText ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    // opacity: 0.4;
  `

export const ButtonsWhite = styled.button`
  width: 30%;
  background: rgb(244, 244, 244);
  color: black;
  height: 3rem;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  `

export const PpfContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;

    & img {
      width: 100%;
      transform: translate(0, 0);
    }
  }
  `

export const ImagePff = styled.img`
 width: 50%; 
  height: 70%; 
margin: auto;
  `

export const MapsContainer = styled.div`
 display: flex;
 padding: 2rem 3rem ;

 @media screen and (max-width: 768px) {
  display: flex;
flex-direction: column;
padding: 0;
transform: translate(0, -10%);
 }
  `

