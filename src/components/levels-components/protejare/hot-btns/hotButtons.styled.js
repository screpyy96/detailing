import styled from 'styled-components';

export const HiddenText = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  top: 27%;
  left: 0%;
  width: 50%;

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
