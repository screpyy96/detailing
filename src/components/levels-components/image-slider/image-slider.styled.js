import styled from "styled-components";
import { ElfsightWidget } from "react-elfsight-widget";

export const SliderContainer = styled.div`
  width: 80%;
  height: 400px;
  margin: 0 auto;
  // padding: 2rem 0;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 400px;
    padding: 0;
    height: 299px;
  }
`;

export const StyledElfsightWidget = styled(ElfsightWidget)`
  .Widget__FreeLinkLabel-sc-3jr9ts-3 {
    visibility: hidden;
  }

  a {
    display: none;
  }
`;



export const SpanBlock = styled.span`
  width: 100%;
  height: 100px;
  position: absolute;
  background: red;
  // background: #fafafa;
  top: 180%;
  left: 10%;
  z-index: 99;
  display: none;
  @media (max-width: 768px) {
    top: 38%;
    height: 100px;
    display: none;
  }
`;
