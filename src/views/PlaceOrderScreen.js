import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import {CheckoutFinalSteps } from '../components/CheckoutSteps';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsCategory } from '../actions/categoryActions';
import styled, { css } from 'styled-components'
import { CART_EMPTY } from '../constants/cartConstants';


const PlaceorderContainer = styled.div `
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.row.center {
  justify-content: center;
}
.row.top {
  align-items: flex-start;
}
.row.start {
  justify-content: flex-start;
}
.col-1 {
  flex: 1 1 25rem;
}
.col-2 {
  flex: 2 1 50rem;
}
.col-3 {
  flex: 32 1 75rem;
}
.min-30 {
  min-width: 30rem;
}
.p-1 {
  padding: 1rem;
}

/* Card */
.card {
  border: 0.1rem #c0c0c0 solid;
  background-color: #f8f8f8;
  border-radius: 0.5rem;
  margin: 1rem;
}
.card-body {
  padding: 1rem;
}
.card-body > * {
  margin-bottom: 0.5rem;
}
.price {
  font-size: 2rem;
}
button{
  border:none;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #FF6201;
  color:#fff;
}
`;

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push('/auth/payment');
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  

  const categoryDetails = useSelector((state) => state.categoryDetails);
  
  const { loading:loadingcategory, error:errorloadingcat, category } = categoryDetails;

  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItem: cart.cartItem }));
  };
  useEffect(() => {
    dispatch(
      detailsCategory(cart.cartItem.category)
    );
    
  }, [dispatch,cart.cartItem.category]);

  useEffect(() => {
    if (success) {
      props.history.push(`/commande/${order._id}`);
      dispatch({ type: CART_EMPTY });
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);
  return (
    <PlaceorderContainer>
      <CheckoutFinalSteps  step1 step2 step3 step4></CheckoutFinalSteps >
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Adresse et Date d'intervention</h2>
                <p>
                  <strong>Date:</strong> {cart.interventionDate} <br />
                  <strong>Addresse: </strong> {cart.interventionAddress.adresse}<br />
                  <strong>Contact : </strong> {cart.interventionAddress.phone}
                   {/*, {cart.interventionAddresse.postalCode} */}
                  
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payement</h2>
                <p>
                  <strong>Methode:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Prestation Commander</h2>
                <ul>
                 
                    <li >
                      <div className="row">
                        <div>
                        {
                          loadingcategory ? "" : <Link to={`/reservation/prestation/${category.link}`}>
                          {category.name}
                            </Link>
                        }
                        </div>
                        <div className="min-30">
                          {cart.cartItem.name} / {cart.cartItem.type}
                        </div>

                      </div>
                    </li>

                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Resumer du commande</h2>
              </li>
              <li>
                <div className="row">
                  <div>La prestation</div>
                  <div>${cart.itemPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Quantiter</div>
                  <div>{cart.cartItem.qty}</div>
                </div>
              </li>
              
              <li>
                <div className="row">
                  <div>
                    <strong> Commande Totale</strong>
                  </div>
                  <div>
                    <strong>{cart.totalPrice} FCFA</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="button primary block"
                  disabled={cart.cartItem.length === 0}
                >
                  Passer la commande
                </button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </PlaceorderContainer>
  );
}
