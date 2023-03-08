import styled from 'styled-components';

export const HiddenText = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  // display: block;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  top: 5%;
  left: 2%;
  width: 50%;


  @media (max-width: 600px) {
    position: absolute;
    top: 160px;
    left: 0%;
    width: 100%;
    // height: 200px;

  }
`;
export const TextComponent = styled.p`
  color: black;
  text-align: center;

`;

export const RedBtn = styled.button`
  height: 20px;
  width: 20px;
  background: red;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  border: 2px solid white;
  animation: pulse 1s infinite;

  /* Mobile positioning */
  @media (max-width: 600px) {
    top: ${props => props.mobileTop}px;
    left: ${props => props.mobileLeft}px;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.7);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(0.7);
    }
  }
`;
