import Axios from 'axios';
/* import { PayPalButton } from 'react-paypal-button-v2'; */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';

import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
import { detailsCategory } from '../actions/categoryActions';


const OrderContainer = styled.div `
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
h1 {
  font-size: 1.8rem;
  padding: 1rem 0;
}
`;

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;

  const categoryDetails = useSelector((state) => state.categoryDetails);
  
  const { loading:loadingcategory, error:errorloadingcat, category } = categoryDetails;
  const [state, setstate] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
      
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, orderId, sdkReady, successPay, successDeliver, order]);

  /* setstate(order.orderItem.category) */
  /* useEffect(() => {
    dispatch(
      detailsCategory(state)
    );
    
  }, [dispatch,state,order.orderItem.category]); */

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <OrderContainer>
      <h1>Commande {order._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Adresse et date d'intervention</h2>
                <p>
                  <strong>Date:</strong> {moment(order.interventionDate).format('LL')} <br />
        

                  <strong>Address: </strong> {order.interventionAddress.adresse},
                  <strong>Contact: </strong> {order.interventionAddress.contact},
          
                </p>
                {order.isDone ? (
                  <MessageBox variant="success">
                    Intervenir le {order.isDoneAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Pas encore intervenir</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payement</h2>
                <p>
                  <strong>Methode:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Payer le {moment(order.paidAt).format('LL')}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Pas encore payer </MessageBox>
                )}
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
                          {order.orderItem.name} / {order.orderItem.type}
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
                  <div>${order.itemPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Quantiter</div>
                  <div>{order.orderItem.qty}</div>
                </div>
              </li>
              
              <li>
                <div className="row">
                  <div>
                    <strong> Commande Totale</strong>
                  </div>
                  <div>
                    <strong>{order.totalPrice} FCFA</strong>
                  </div>
                </div>
              </li>
 
              {!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    <>
                      {errorPay && (
                        <MessageBox variant="danger">{errorPay}</MessageBox>
                      )}
                      {loadingPay && <LoadingBox></LoadingBox>}

                     {/*  <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton> */}
                      <button
                    type="button"
                    className="button primary block"
                    
                  >
                   Payer
                  </button>
                      
                    </>
                  )}
                </li>
              )}
              {userInfo.isAdmin && order.isPaid && !order.isDone && (
                <li>
                  {loadingDeliver && <LoadingBox></LoadingBox>}
                  {errorDeliver && (
                    <MessageBox variant="danger">{errorDeliver}</MessageBox>
                  )}
                  <button
                    type="button"
                    className="primary block"
                    onClick={deliverHandler}
                  >
                   Intervention effectuer
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </OrderContainer>
  );
}
