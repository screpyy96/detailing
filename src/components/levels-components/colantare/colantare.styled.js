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

export const Spliter = styled.div`
// padding-top: 1rem;
width: 100%;
height: 50px;
background: #fafafa;
display: block;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    height: 10px;
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

 export const TextWrapper = styled.div`
  height: 200px;
  width: 100%;
  background: rgb(244, 244, 244);
  display: flex;
  color: #ea1d22;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  @media screen and (max-width: 768px){
    padding: 0 1rem;
  }
`