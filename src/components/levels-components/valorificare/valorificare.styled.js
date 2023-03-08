import styled from 'styled-components';

import { TabList } from '@mui/lab';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';

export const TabListStyle = styled(TabList)`
  display: block;
  '& .MuiTabs-flexContainer {
    display: block;
  }' && {
    display: block;
  }
`;
export const TabStyle = styled(Tab)`
  
    '& .MuiTabs-flexContainer {
      display: block;
  
    }';
`;
export const BoxStyled = styled(Box)`
  transform: translate(0, -4%);
  width: 100%;
  padding: 0
  /* margin: 0 auto; */
  // background: white;
  @media screen and (max-width: 768px) {
    transform: translate(0, -1.8%);
    width: 100%;
  }
`;

export const ContainerWrapper = styled.div`
  display: grid;
  background: white;
  grid-template-columns: 500px auto;
  grid-gap: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
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