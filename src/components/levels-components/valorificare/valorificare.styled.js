import styled from 'styled-components';

import { TabList } from '@mui/lab';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';

export const TabListStyle = styled(TabList)`
@media screen and (max-width: 768px) {
  transform: translate(0, 20%);
  width: 100%;
}
`;
export const TabStyle = styled(Tab)`
  // transform: perspective(0) rotateX(0);  

  & .MuiTab-wrapper {
    transform: perspective(0) rotateX(0);  
  }

  & .MuiTabs-flexContainer {
    display: block;
  }
`;
export const BoxStyled = styled(Box)`
  transform: translate(0, -2%);
  width: 100%;
  padding: 0
  @media screen and (max-width: 768px) {
    transform: translate(0, -1.8%);
    width: 100%;
  }
`;

export const ContainerWrapper = styled.div`
// margin-top: 3rem;
  display: grid;
  background: white;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding-top: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DescriptionContainer = styled.div`
  & > h4,
  h5 {
    padding: 1rem 0;
    font-size: 20px;
  }
`;

export const TitleStyle = styled.h2`
  color: #ec1d24;
  font-size: 39px;
  text-align: left;
  padding-bottom: 1rem;
`;
export const SubTitle = styled.h3`
  color: #ea1d22;
  padding: 1rem 0;
  font-size: 20px;
  color: #ec1d24;
`;
export const ListContainer = styled.div`
  /* background-color: red; */
`;

export const ImageComponent = styled.img`
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;


export const Li = styled.li`
  list-style-type: disc;
  margin-left: 1rem;
`;