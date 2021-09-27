import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components'
import {
  createPrestation,
  deletePrestation,
  listPrestations,
} from '../actions/prestationActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  PRESTATION_CREATE_RESET,
  PRESTATION_DELETE_RESET,
} from '../constants/prestationConstants';

const PrestationListContainer = styled.div` 
height: 100%;
padding-top: 2rem;
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
.row{
  margin-bottom: 2rem;
}
.pagination a.active {
  font-weight: bold;
}
`; 

 function PrestationList(props) {
  const { pageNumber = 1 } = useParams();
  const prestationList = useSelector((state) => state.prestationList);

  const { loading, error, prestations, page, pages } = prestationList;

  const prestationCreate = useSelector((state) => state.prestationCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    prestation: createdPrestation,
  } = prestationCreate;

  const prestationDelete = useSelector((state) => state.prestationDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = prestationDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRESTATION_CREATE_RESET });
      props.history.push(`/prestation/${createdPrestation._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PRESTATION_DELETE_RESET });
    }
    dispatch(
      listPrestations( {pageNumber})
    );
  }, [
    createdPrestation,
    dispatch,
    props.history,
    successCreate,
    successDelete,
    pageNumber,
  ]);

  const deleteHandler = (prestation) => {
    if (window.confirm("Tu est sur d'effacer ?")) {
      dispatch(deletePrestation(prestation._id));
    }
  };
  const createHandler = () => {
    dispatch(createPrestation());
  };

  return (
    <PrestationListContainer className="container is-max-desktop">
      <div className="row panel-heading info">
        <h1 className="">Les prestations</h1>

        <button type="button" className="button primary" onClick={createHandler}>
          Creez un prestation 
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table is-bordered is-striped is-narrow is-hoverable">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>CATEGORY ID</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {prestations.map((prestation) => (
                <tr key={prestation._id}>
                  <td>{prestation._id}</td>
                  <td>{prestation.name}</td>
                  <td>{prestation.category}</td>
                  <td>{prestation.description}</td>
                  <td>
                    <button
                      type="button"
                      className="button small"
                      onClick={() =>
                        props.history.push(`/prestation/${prestation._id}/edit`)
                      }
                    >
                      Editer
                    </button>
                    <button
                      type="button"
                      className="button small"
                      onClick={() => deleteHandler(prestation)}
                    >
                      Effacer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination is-small row center pagination">
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === page ? 'pagination-link is-current active' : 'pagination-link'}
                key={x + 1}
                to={`/prestationlist/pageNumber/${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </PrestationListContainer>
  )
}

export default PrestationList
