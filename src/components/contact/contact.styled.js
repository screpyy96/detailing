import { Button } from "@mui/material";
import styled from "styled-components";

export const ContactWrapper = styled.div`
  background: #ececec;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 71vh; */
  /* background-color: #f5f5f5; */
  padding: 0px;
  margin: 0px;
  /* min-height: 89vh; */
`;

export const SendBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorStyle = styled.div`
  color: red;
`;
export const BtnMui = styled(Button)`
  && {
    background-color: hsl(234, 12%, 34%);
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 86%; */

  padding: 10px;
  margin: 0px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

export const DetailsContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: auto;
  padding-top: 2rem; 
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const DetailsContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: center;
  
  word-wrap: break-word;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  /* align-items: start */
  flex-direction: column;
  /* justify-content: center; */
  line-height: 2;
  padding-top: auto;
  width: 40%;
  /* background: red; */
  transform: translate(0, 1%);
  margin: 0 auto;
  text-align: left;

  & h1 {
    font-size: 1.5rem;

    color: red;
    padding-bottom: 1.6rem;
  }

  & p {
    font-size: 1rem;

    color: black;
    text-align: left;
  }
`;

export const DirectionBtn = styled.button`
  cursor: pointer;
  /* margin: 0 auto; */

  color: white;
  padding: 13px 17px;
  text-transform: uppercase;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: red;
  letter-spacing: 2px;
  margin-top: 2rem;
  border: 0;
  width: 71%;
`;
