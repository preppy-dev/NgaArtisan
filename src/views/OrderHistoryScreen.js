import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import styled, { css } from 'styled-components'

const OrderHystoryContainer = styled.div `
padding-top:2rem;
h1{
  font-weight: 900;
  font-size:2rem;
  padding:2rem 0;
}
`;

export default function OrderHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  return (
    <OrderHystoryContainer className="container is-max-desktop">
      <h1>Hystorique de commande</h1>    
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAYER</th>
              <th>INTERVENIR</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'Non'}</td>
                <td>
                  {order.isDone
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </OrderHystoryContainer>
  );
}
