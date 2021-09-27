import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components'
import {
  createCategory,
  deleteCategory,
  listCategories,
} from '../actions/categoryActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  CATEGORY_CREATE_RESET,
  CATEGORY_DELETE_RESET,
} from '../constants/categoryConstants';

const CategoryListContainer = styled.div` 
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

 function Category(props) {
  const { pageNumber = 1 } = useParams();
  const categoryList = useSelector((state) => state.categoryList);

  const { loading, error, categories, page, pages } = categoryList;

  const categoryCreate = useSelector((state) => state.categoryCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    category: createdCategory,
  } = categoryCreate;

  const categoryDelete = useSelector((state) => state.categoryDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = categoryDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: CATEGORY_CREATE_RESET });
      props.history.push(`/category/${createdCategory._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: CATEGORY_DELETE_RESET });
    }
    dispatch(
      listCategories( {pageNumber})
    );
  }, [
    createdCategory,
    dispatch,
    props.history,
    successCreate,
    successDelete,
    pageNumber,
  ]);

  const deleteHandler = (category) => {
    if (window.confirm("Tu est sur d'effacer ?")) {
      dispatch(deleteCategory(category._id));
    }
  };
  const createHandler = () => {
    dispatch(createCategory());
  };

  return (
    <CategoryListContainer className="container is-max-desktop">
      <div className="row panel-heading info">
        <h1 className="">Categories</h1>

        <button type="button" className="button primary" onClick={createHandler}>
          Creez un Categorie 
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
                <th>IMAGE</th>
                <th>ICON</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id}>
                  <td>{category._id}</td>
                  <td>{category.name}</td>
                  <td>{category.icon}</td>
                  <td>{category.image}</td>
                  <td>{category.description}</td>
                  <td>
                    <button
                      type="button"
                      className="button small"
                      onClick={() =>
                        props.history.push(`/category/${category._id}/edit`)
                      }
                    >
                      Editer
                    </button>
                    <button
                      type="button"
                      className="button small"
                      onClick={() => deleteHandler(category)}
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
                to={`/categorylist/pageNumber/${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </CategoryListContainer>
  )
}

export default Category
