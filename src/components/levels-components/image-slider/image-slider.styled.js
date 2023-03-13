import styled from 'styled-components';
import {ElfsightWidget} from 'react-elfsight-widget';

export const SliderContainer = styled.div`
    width: 80%;
    height: 300px;
    margin: 0 auto;
    padding: 2rem;
    @media and screen(max-width: 768px) {
        width: 100%;
        padding: 0;
    }
`

export const StyledElfsightWidget = styled(ElfsightWidget)`
&& {
    .Widget__FreeLinkLabel-sc-3jr9ts-3 {
      display: none !important;
    }
  }
`;
