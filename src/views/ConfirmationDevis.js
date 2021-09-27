import React from 'react'
import styled, { css } from 'styled-components'
import Entreprisebanner from "./../assets/entreprise.png"
import { Result, Button } from 'antd';


const HeroDevisSection = styled.section`
height: 50vh;

  background:url(${Entreprisebanner}) no-repeat center center ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

`;
const HeroDevisWrapper = styled.div` 
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
  margin:1rem 0;
  font-size: 14px;
  font-weight: normal;
  text-align: center;

}

`;

function ConfirmationDevis(props) {
  return (
    <>
    <HeroDevisSection className="Devis">
        <HeroDevisWrapper className="container is-max-desktop">
          <h1 className="title">Confirmation de votre demande</h1>
          {/* <p className="subtitle">Demander un devis en toute simplicité, c’est gratuit !</p> */}

        </HeroDevisWrapper>
      </HeroDevisSection>
      <Result
    status="success"
    title="Nous avons bien reçu votre demande."
    subTitle="Merci de nous avoir contacté, nous vous répondrons dans les plus brefs délais."
    extra={[
      <Button key="/" onClick={()=>props.history.push(`/`)}>Retour à l'accueil</Button>,
    ]}
  />
      
    </>
  )
}

export default ConfirmationDevis
