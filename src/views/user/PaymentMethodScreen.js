import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../actions/cartActions';
import {CheckoutFinalSteps} from '../../components/CheckoutSteps';
import styled, { css } from 'styled-components'

const PayementContainer = styled.div `
.form {
  max-width: 60rem;
  margin: 0 auto;
}
.form > div {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
.form label {
  margin: 1rem 0;
}
button{
  border:none;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #FF6201;
  color:#fff;
}

`;

export default function PaymentMethodScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);

  //const { userInfo } = userSignin;
 /*  if (!userInfo) {
    props.history.push('/auth/connexion');
  } */
  const [paymentMethod, setPaymentMethod] = useState('Mobile Money');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/passer-commande');
  };
  return (
    <PayementContainer>
      <CheckoutFinalSteps step1 step2></CheckoutFinalSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Moyen de Payment</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="mobilemoney"
              value="Mobilemoney"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="mobilemoney">Mobile money</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="cash"
              value="Cash"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="cash">Cash</label>
          </div>
        </div>
        <div>
          <label />
          <button className="button primary" type="submit">
            Continuer
          </button>
        </div>
      </form>
    </PayementContainer>
  );
}
