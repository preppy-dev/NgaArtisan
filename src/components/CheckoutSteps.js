import React from 'react';
import styled, { css } from 'styled-components'
import StepIcon1 from "./../assets/step1.png"
import StepIcon2 from "./../assets/step2.png"
import StepIcon3 from "./../assets/step3.png"
import StepIcon4 from "./../assets/step4.png"

const StepContainer = styled.div `
display: flex;

  justify-content: space-between;
  align-items: center;
.active{
  opacity: 1;
}
@media screen and (max-width:925px){
  display:grid;
  grid-template-columns: repeat(2,1fr);
}
`;
const CheckFinalContainer = styled.div `
 display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

&> div {
  border-top: 0.3rem #c0c0c0 solid;
  color: #c0c0c0;
  flex: 1;
  padding: 1rem;
  font-weight: bold;
}
&> div.active {
  border-top-color: #f08000;
  color: #f08000;
}
`;
const StepCard = styled.div `
opacity:0.6;

width:100%;
display:grid;
grid-template-columns: 50% 50%;
align-items: center;
position: relative;
@media screen and (max-width:925px){
  grid-template-columns:1fr ;

}


span{
  position: absolute;
  border-bottom: 2px solid #FF6201;
  width:50%;
  right: 0;
  display:block;
  top:28%;
}
.step{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width:35%;
    margin-bottom:.7rem;
  }
  font-weight: 600;
  font-size: 14px;
}
`;


export default function CheckoutSteps(props) {
  return (
    <StepContainer className=" container is-max-desktop checkout-steps">
      <StepCard className={props.step1 ? 'active' : ''}>
      <div className="step">
        <img src={StepIcon1} alt="step 1" />
        Besoin
        </div>
        <span></span>
        </StepCard>
        <StepCard className={props.step2 ? 'active' : ''}>
      <div className="step">
      <img src={StepIcon2} alt="step2" />
      Date et Lieux
      </div>
      <span></span>
      </StepCard>
      <StepCard className={props.step3 ? 'active' : ''}>
      <div className="step">
      <img src={StepIcon3} alt="step3" />
        Votre Contact
        </div>
        <span></span>
        </StepCard>
      <StepCard className={props.step4 ? 'active' : ''}>
      <div className="step">
      <img src={StepIcon4} alt="step4" />
      pièce jointe
        </div>

        </StepCard>
    </StepContainer>
  );
}

export function CheckoutFinalSteps(props) {
  return (
    <CheckFinalContainer className="checkout-steps">
     {/*  <div className={props.step1 ? 'active' : ''}>Connexion</div> */}
      <div className={props.step2 ? 'active' : ''}>Payement</div>
      <div className={props.step3 ? 'active' : ''}>Passer la commande</div>
    </CheckFinalContainer>
  );
}

