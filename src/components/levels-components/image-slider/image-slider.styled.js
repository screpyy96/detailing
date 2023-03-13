import styled from 'styled-components';
import {ElfsightWidget} from 'react-elfsight-widget';

export const SliderContainer = styled.div`
    width: 80%;
    height: 300px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    @media screen and(max-width: 768px) {
        width: 400px
        padding: 0;
        padding: 0;
        height: 500px;
    }
`

export const StyledElfsightWidget = styled(ElfsightWidget)`
  && {
    .Widget__FreeLinkLabel-sc-3jr9ts-3 {
      visibility: hidden;
    }
    
    && a {
      display: none;
    }
  }
`; 

export const SpanBlock = styled.span`

    width: 100%;
    height: 100px;
    position: absolute;
    background: #fafafa;
    top: 120%;
    left: 10%;
    z-index: 99;
    @media (max-width: 768px) {
        background: #fafafa;
        top: 61%;
        left: 10%;
        height: 50px;
    }
`