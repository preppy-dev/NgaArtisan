import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import styled, { css } from 'styled-components'
import { listDevis } from '../actions/devisActions';
import { DEVIS_DELETE_RESET } from '../constants/devisConstants';


const DevisesContainer = styled.div `
padding-top:2rem;
h1{
  font-weight: 900;
  font-size:2rem;
  padding:2rem 0;
}
`;


export default function DevisListScreen(props) {
  
  const devisList = useSelector((state) => state.devisList);
  const { loading, error, devises } = devisList;
 /*  const devisDelete = useSelector((state) => state.devisDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = devisDelete; */

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: DEVIS_DELETE_RESET });
    dispatch(listDevis());
  }, [dispatch, userInfo._id]);
  /* }, [dispatch,successDelete, userInfo._id]); */
/*   const deleteHandler = (order) => {
    if (window.confirm('Tu est sure de le supprimer ?')) {
      dispatch(deleteOrder(order._id));
    }} */
  
  return (
    <DevisesContainer className="container is-max-desktop">
      <h1>Les Demmandes de devis</h1>
      {/* {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>} */}
      
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DEVIS</th>
              <th>DESCRIPTION</th>
              <th>ADRESSE</th>
              <th>DATE</th>
    
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {devises.map((devis) => (
              <tr key={devis._id}>
                <td>{devis.category}</td>
                <td>{devis.description}</td>
                <td>{devis.adresse}</td>
                <td>{devis.date}</td>
                <td>{devis.createdAt.substring(0, 10)}</td>
                
                {/* <td>
                  {devis.isisDone
                    ? devis.isDoneAt.substring(0, 10)
                    : 'Non'}
                </td> */}
                <td>
                  <button
                    type="button"
                    className="button small"
                    /* onClick={() => {
                      props.history.push(`/commande/${order._id}`);
                    }} */
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="button small"
                    /* onClick={() => deleteHandler(order)} */
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DevisesContainer>
  );
}
