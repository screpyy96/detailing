import styled from "styled-components";

export const ImageColantare = styled.img`
width: 100%;
height: 70%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    height: 300px;
  }
`

export const ColantareWrapper = styled.div`
display: flex;
background: white;
gap: 2rem;
width: 90%
margin: 0 auto;
padding: 2rem;
@media screen and (max-width: 768px) {
  flex-direction: column;
  width: 100%;
  gap:1rem;
  padding: 0;
  margin: 0 auto;
  align-items: center;
}
`