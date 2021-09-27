import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELETE_RESET } from '../constants/orderConstants';
import styled, { css } from 'styled-components'


const OrdersContainer = styled.div `
padding-top:2rem;
h1{
  font-weight: 900;
  font-size:2rem;
  padding:2rem 0;
}
`;


export default function OrderListScreen(props) {
  
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders());
  }, [dispatch,successDelete, userInfo._id]);
  const deleteHandler = (order) => {
    if (window.confirm('Tu est sure de le supprimer ?')) {
      dispatch(deleteOrder(order._id));
    }
  };
  return (
    <OrdersContainer className="container is-max-desktop">
      <h1>Les Commandes</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>CLIENT</th>
              <th>DATE</th>
              <th>TOTALE</th>
              <th>PAYER</th>
              <th>INTERVENIR</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'Non'}</td>
                <td>
                  {order.isisDone
                    ? order.isDoneAt.substring(0, 10)
                    : 'Non'}
                </td>
                <td>
                  <button
                    type="button"
                    className="button small"
                    onClick={() => {
                      props.history.push(`/commande/${order._id}`);
                    }}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="button small"
                    onClick={() => deleteHandler(order)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </OrdersContainer>
  );
}
