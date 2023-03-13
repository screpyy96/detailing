import styled from 'styled-components';
import { ElfsightWidget } from 'react-elfsight-widget';

const StyledWidget = styled(ElfsightWidget)`
  .Widget__FreeLinkLabel-sc-3jr9ts-3 {
    display: none;
  }
`;

function ImageSlider() {
  return (
    <StyledWidget widgetID="eee6f124-015f-43cc-a0bc-e4c2265b5362" />
  )
}

export default ImageSlider;
