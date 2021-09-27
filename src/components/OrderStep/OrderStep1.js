import React, { useState } from 'react'
import { Radio } from 'antd';
import ReactSimpleOptionsSelector from "../ReactSimpleOptionsSelector"
import styled, { css } from 'styled-components'
import OrderCheckoutSteps from "./../OrderCheckoutSteps"
import { useDispatch, useSelector } from 'react-redux';
import { savePrestation } from '../../actions/cartActions';


const Wrapper = styled.div`
/* margin-top:2rem;
background-color:#F3F4F5; */
width:100%;
`;
const OrderSteOne = styled.div`
max-width: 60rem;
padding:3rem 0;
h1{
  font-size:1.5rem;
  font-weight: 500;
  margin:3rem 0;
}

.button {
margin:3rem 0 0 0 !important;
width: 50%;
color:#fff;
}
.ant-radio-group{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 2rem;
  /* margin:0 2rem; */
}
.ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
    border-right-color: none;
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {
    border-color: none;
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    z-index: 1;
    color: #fff;
    background: #FF6201;
    border-color: none !important;
}
.ant-radio-button-wrapper:first-child {
  border: 2px #FF6201 solid;
    border-radius: 2rem;
}
.ant-radio-group-large .ant-radio-button-wrapper {
    height: 40px;
    font-size: 16px;
    line-height: 38px;
}
.ant-radio-button-wrapper {
    position: relative;
    display: inline-block;
    height: 32px;
    margin: 0;
    text-align:center;
    padding: 0 15px;
    color: #FF6201;
    font-size: 14px;
    line-height: 30px;
    background: #FFF;
    border: 2px #FF6201 solid;
    border-radius: 2rem;
    cursor: pointer;
    transition: color 0.3s, background 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.ant-radio-button-wrapper .ant-radio-inner, .ant-radio-button-wrapper input[type='checkbox'], .ant-radio-button-wrapper input[type='radio'] {
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
}
.ant-radio-button-wrapper:not(:first-child)::before {
    position: absolute;
    top: -1px;
    left: -1px;
    display: block;
    box-sizing: content-box;
    width: 0;
    height: 0;
    padding: 0;
    background-color: #fff;
    transition: none;
    content: '';
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {
    /* color: #096dd9; */
    border-color: none;
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    /* color: #40a9ff; */
    border-color: none;
}
.ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
  border-right-color: none !important;
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {
    /* color: #096dd9; */
    border-color: none;
}
.ant-radio-button-wrapper-checked .ant-radio-button-wrapper-disabled:first-child {
    border-color: none;
}

`;


function OrderStep1(props) {
  const prestationDetails = useSelector((state) => state.prestationDetails);
  const [value, setValue] = useState({});
  const { loading, error, prestations } = prestationDetails;
  

  const dispatch = useDispatch();
  
  const onChange = e => {
    //setValue(e.target.value);
   // console.log(e)
    dispatch(
      //savePrestation(e.target.value)
      savePrestation(value)
    );
};

  return (
    <>
    <OrderCheckoutSteps step1>
    </OrderCheckoutSteps>
    <Wrapper>
    <OrderSteOne className="container is-max-desktop">
      
      <h1>Que souhaitez-vous ?</h1>
      <>
    {/*   <Radio.Group  onChange={onChange} value={value} size="large">
        {
          loading ? "" :
          prestations.map(prestation=>(
            <Radio.Button value={{
              prestationId:prestation._id,
              prestation:prestation.name,
              sousprestation:prestation.types,
              category:prestation.category
            }}>
              {prestation.name}
              </Radio.Button>
          ))
        }

    </Radio.Group> */}
    {
      loading ? "" : <ReactSimpleOptionsSelector  /* value={{
        prestationId:prestation._id,
        prestation:prestation.name,
        sousprestation:prestation.types,
        category:prestation.category
      }} */
      align="left"
      selected_background_color="#FF6201"
      selected_border_color="none"
      onSelectionChange={(name, selected)=>{
        dispatch(
          //savePrestation(e.target.value)
          savePrestation(selected[0])
        );
      }}
      options={
        prestations.map((prestation, index)=>{
          return {
            id:prestation._id,
            label:prestation.name,
            value:{
              prestationId:prestation._id,
              prestation:prestation.name,
              sousprestation:prestation.types,
              category:prestation.category
            }
          }
        })
      }
      >

        </ReactSimpleOptionsSelector>
    }
    
  </>

  <div className="">
  <button className="button primary" onClick={props.next}>Suivant</button>
  
  </div>
      
    </OrderSteOne>
    </Wrapper>
    </>
  )
}

export default OrderStep1
