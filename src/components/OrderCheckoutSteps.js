import React from 'react';
import styled, { css } from 'styled-components'
import StepIcon1 from "./../assets/step1.png"
import StepIcon2 from "./../assets/step2.png"
import StepIcon3 from "./../assets/step3.png"
import StepIcon4 from "./../assets/step4.png"

const StepContainer = styled.div `
margin-top:3vh;
display: flex;
align-items: center;
.active{
  opacity: 1;
}
`;
const StepCard = styled.div `
opacity:0.6;

width:100%;
display:grid;
grid-template-columns: 50% 50%;
text-align: center;
align-items: center;
position: relative;


span{
  position: absolute;
  border-bottom: 2px solid #FF6201;
  width:60%;
  right: 0;
  display:block;
  top:28%;
}
.step{
  display: flex;
  z-index:99;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width:28%;
    margin-bottom:.7rem;
  }
  font-weight: 600;
  font-size: 14px;
}
`;


export default function CheckoutSteps(props) {
  return (
    <StepContainer className="container checkout-steps">
      <StepCard className={props.step1 ? 'active' : ''}>
      <div className="step">
        <img src={StepIcon1} alt="step 1" />
        Selection
        </div>
        <span></span>
        </StepCard>
        <StepCard className={props.step2 ? 'active' : ''}>
      <div className="step">
      <img src={StepIcon2} alt="step2" />
      Besoin
      </div>
      <span></span>
      </StepCard>
      <StepCard className={props.step3 ? 'active' : ''}>
      <div className="step">
      <img src={StepIcon3} alt="step3" />
      Date et Lieux
        </div>
        <span></span>
        </StepCard>
      <StepCard className={props.step4 ? 'active' : ''}>
      <div className="step">
      <img src={StepIcon4} alt="step4" />
      Resume
        </div>

        </StepCard>
    </StepContainer>
  );
}
