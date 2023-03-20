import { Paper } from "@mui/material";
import styled from "styled-components";

export const Papercontainer = styled(Paper)`
  background-color: #fafafa;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    gap: 40px;
  }
`;

export const ImageDespre = styled.img`
  width: 100%;
  @media and screen(max-width: 768px){
      display: none;
    }
  }
`;
