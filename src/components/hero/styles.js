import styled, { css } from 'styled-components'
import Entreprisebanner from "../../assets/entreprise.png"


export const HeroSection = styled.section`
height: 50vh;

  background:url(${Entreprisebanner}) no-repeat center center ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

`;
export const HeroWrapper = styled.div` 
background-color: rgba(0,0,0,0.4);

width:100%;
height: 100%;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1,p{
  
  color:#ffffff;
}
h1{
  font-size: 2.5em;
  text-align: center;
}
p{
  margin:2rem 0;
  font-size: 14px;
  font-weight: normal;
  text-align: center;

}

`;