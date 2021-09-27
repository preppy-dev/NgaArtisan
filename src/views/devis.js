import React from 'react'
import styled, { css } from 'styled-components'
import Entreprisebanner from "./../assets/entreprise.png"
import ExplainIconPng from "./../assets/explainicon.png"
import Step1 from "./../assets/step1.png"
import Step2 from "./../assets/step2.png"
import Step3 from "./../assets/step3.png"
import CheckoutSteps from "./../components/CheckoutSteps"
import { Steps, Step } from "react-step-builder";
import DevisStep1 from '../components/DevisStep/DevisStep1'
import DevisStep2 from '../components/DevisStep/DevisStep2'
import DevisStep3 from '../components/DevisStep/DevisStep3'
import DevisStep4 from '../components/DevisStep/DevisStep4'

const DevisContainer = styled.div`

`;
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
const ExplainContainer = styled.div`
background-color: #F3F4F5;
padding: 2rem 0;
`;
const ExplainContainerWrapper = styled.div`
margin-top: 1rem;
display: grid;
grid-template-columns: 30% 70%;
@media screen and (max-width:925px){
  grid-template-columns:1fr;
  justify-content: center;
  grid-gap: 1rem;
padding: 2rem 4rem;
}
align-items: center;
`;
const ExplainIcon = styled.div`
img{
  width:100px;
}
`;
const ExplainStep = styled.div`

`;
const ExplainStepCards = styled.div`

`;
const ExplainStepCard = styled.div`
max-width: 35rem;
margin: 1rem 0;
display:flex;
align-items: center;
img{
  width: 70px;
  height: 70px;
  
}
h2{
  font-weight: 700;
}
span{
  margin: 0 1rem;
}
`;

const DevisStepContainer = styled.form`
padding:1rem 0;
.titlestep{
  text-align:center;
  margin:2.5rem 0;
  font-size: 1.3rem;
}
h1{
  font-size: 1rem;
  font-weight: 700;
}
.button{
  margin:1rem 0;
  width:100%;
  padding: .6rem;
  
  color:#fff;
  font-weight: 500;
  font-size: 14px;
  border:none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  
}
.button-first{
  @media screen and (max-width:925px){
    margin:2rem;
    width:90%;
}
}
.primary{
  background-color: #FF6201;
}
`;
const DevisStep = styled.div`

`;
const DevisSelect = styled.div`
margin:2rem 0;
h1{
  margin:1rem 0;
}
`;
const SelectBox = styled.div`
 display:grid;
 grid-template-columns: repeat(4,1fr);
 grid-gap: 1rem;
 div{
   display: flex;
   align-items: center;
   width:100%;
   label{
     
   }
   input[type=radio] {
    border: 0px;
    width: 30%;
    height: 2em;
}
 }

`;
const DevisDetails = styled.div`
h1{
  margin:1rem 0;
}
`;
const DetailsBox = styled.div`

`;







function devis() {
  return (
    <DevisContainer>
      <HeroDevisSection className="Devis">
        <HeroDevisWrapper className="container is-max-desktop">
          <h1 className="title">Demander un devis </h1>
          <p className="subtitle">Demander un devis en toute simplicité, c’est gratuit !</p>

        </HeroDevisWrapper>
      </HeroDevisSection>
      <ExplainContainer>
        <div className="container is-max-desktop"><h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'1.5rem'}}>Comment ça marche ?</h1>
        </div>
        <ExplainContainerWrapper className="container is-max-desktop">
          <ExplainIcon>
            <img src={ExplainIconPng} alt="" />
          </ExplainIcon>
          <ExplainStep>
            <ExplainStepCards>
              <ExplainStepCard>

                <img src={Step1} alt="" />

                <span className="explain">
                  <h2>Description des travaux</h2>
                  <p>Décrivez-nous ce que vous souhaitez faire</p>
                </span>
              </ExplainStepCard>
              <ExplainStepCard>

                <img src={Step2} alt="" />

                <span className="explain">
                  <h2>Prise de contact</h2>
                  <p>Un conseiller travaux vous rappelle
                    pour mieux comprendre le besoin
                  </p>
                </span>
              </ExplainStepCard>
              <ExplainStepCard>

                <img src={Step3} alt="" />

                <span className="explain">
                  <h2>Prise de contact</h2>
                  <p>Un conseiller travaux vous rappelle
                    pour mieux comprendre le besoin
                  </p>
                </span>
              </ExplainStepCard>
            </ExplainStepCards>
          </ExplainStep>
        </ExplainContainerWrapper>
      </ExplainContainer>
     
      <DevisStepContainer className="container is-max-desktop">
           <Steps>
           <Step title="Description des traveaux" component={DevisStep1} />
        <Step title="Lieu et date" component={DevisStep2} />
        <Step title="Contact" component={DevisStep3} />
        <Step  title="pièce jointe" component={DevisStep4} />
          </Steps>
      </DevisStepContainer>
    </DevisContainer>
  )
}

export default devis
