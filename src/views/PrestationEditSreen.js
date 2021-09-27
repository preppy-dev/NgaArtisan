import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createType, detailsPrestation, updatePrestation } from '../actions/prestationActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRESTATION_TYPE_CREATE_RESET, PRESTATION_UPDATE_RESET } from '../constants/prestationConstants';
import ImageUploader from 'react-images-upload';
import AvatarUpload from "./../assets/avatar-upload.png";
import axios from 'axios';
import styled, { css } from 'styled-components'
import { listAllCategories } from '../actions/categoryActions';

const PrestationForm = styled.form` 

  /* max-width: 60rem;
  margin: 0 auto; */
  margin-right: .5rem;

& > div {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
& label {
  margin: 1rem 0;
}
input {
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
  border-radius: 0.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input:hover,
select:hover,
textarea:hover,
button:hover {
  border: 0.1rem #624193 solid;
}
.fileContainer{
  box-shadow:none;
  margin: 0 auto;
  padding: 10px 0;
  .chooseFileButton{
    padding: 4px 20px;
    background: #FF6201;
    border-radius: 30px;
    color: white;
    font-weight: 300;
    font-size: 14px;
    margin: 8px 0;
  }
}

`;
const PrestationTypeListContainer = styled.div` 
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

const TypesForm = styled.form` 

/* max-width: 60rem;
  margin: 0 auto; */

& > div {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
& label {
  margin: 1rem 0;
}
input {
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
  border-radius: 0.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input:hover,
select:hover,
textarea:hover,
button:hover {
  border: 0.1rem #624193 solid;
}
.fileContainer{
  box-shadow:none;
  margin: 0 auto;
  padding: 10px 0;
  .chooseFileButton{
    padding: 4px 20px;
    background: #FF6201;
    border-radius: 30px;
    color: white;
    font-weight: 300;
    font-size: 14px;
    margin: 8px 0;
  }
}
`;

export default function PrestationEditScreen(props) {
  const prestationId = props.match.params.id;
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [typeName, setTypeName] = useState('');
  const [price, setPrice] = useState(0);
  const [typeDescription, setTypeDescription] = useState('');

  const prestationDetails = useSelector((state) => state.prestationDetails);
  const { loading, error, prestation } = prestationDetails;

  const allCategoryList = useSelector((state) => state.allCategoryList);
  const { loading: loadingCategories, error: errorLoandingCategories, categories } = allCategoryList;

  const prestationUpdate = useSelector((state) => state.prestationUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = prestationUpdate;

  const prestationTypeCreate = useSelector((state) => state.prestationTypeCreate);
  const {
    loading: loadingTypeCreate,
    error: errorTypeCreate,
    success: successTypeCreate,
  } = prestationTypeCreate;



  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/prestationlist');
    }
    if (successTypeCreate) {
      window.alert('Type de prestation creez avec success');
      setTypeName('');
      setPrice('');
      setTypeDescription('');
      dispatch({ type: PRESTATION_TYPE_CREATE_RESET });
      dispatch(detailsPrestation(prestationId));
    }
    if (!prestation || prestation._id !== prestationId || successUpdate) {
      dispatch({ type: PRESTATION_UPDATE_RESET });
      dispatch(detailsPrestation(prestationId));
      dispatch(listAllCategories());
    } else {
      setName(prestation.name);
      setCategory(prestation.category);
      setDescription(prestation.description);
    }
  }, [prestation, dispatch, prestationId, successUpdate, successTypeCreate, props.history]);

  /*   useEffect(() => {
      if (successTypeCreate) {
        window.alert('Type de prestation creez avec success');
        setRating('');
        setComment('');
        dispatch({ type: PRESTATION_TYPE_CREATE_RESET });
      }
      dispatch(detailsPrestation(prestationId));
    }, [dispatch, prestationId, successTypeCreate]);
   */

  const submitTypeHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      createType(
        prestationId, {
        typeName,
        price,
        typeDescription,
      }
      )
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updatePrestation({
        _id: prestationId,
        name,
        category,
        description,
      })
    );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  return (
    <div className="container is-fluid columns" style={{paddingTop:'2rem'}}>
      <PrestationForm className="form card column is-half" onSubmit={submitHandler}>
  
        <div className="row panel-heading info">
        <h1>Modifier la prestation </h1>
              </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>


            <div>
              <label htmlFor="name">Nom</label>
              <input
                id="name"
                type="text"
                placeholder="Entrer le nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="categories">Associer a un categorie</label>

              <div className="select">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
          
                >
                  {loadingCategories ? "" : categories.map(
                    (x) => (
                      <option key={x._id} value={x._id}>
                        {x.name}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea"
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="button is-dark primary" type="submit">
                Mise à jours
              </button>
            </div>
          </>
        )}
      </PrestationForm>

      <PrestationTypeListContainer className="form column">
        <>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              

              <div className="card">
              <div className="row panel-heading info">
                <h1 className="">les types de prestation associer</h1>
              </div>

                <div>
                {loadingTypeCreate && <LoadingBox></LoadingBox>}
                {errorTypeCreate && (
                  <MessageBox variant="danger">
                    {errorTypeCreate}
                  </MessageBox>
                )}
              </div>

              <table className="table is-bordered is-striped is-narrow is-hoverable">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PRIX</th>
                    <th>DESCRIPTION</th>
                  </tr>
                </thead>

                <tbody>

                  <>
                    {prestation.types.map((type) => (
                      <tr key={type._id}>
                        <td>{type._id}</td>
                        <td>{type.name}</td>
                        <td>{type.price}</td>
                        <td>{type.description}</td>
                        {/*       <td>
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
                  </td> */}
                      </tr>
                    ))}
                  </>
                </tbody>
              </table>
              </div>
              <TypesForm className="card" onSubmit={submitTypeHandler}>
              <div className="row panel-heading info">
                <h1 className="">Ajouter un type de prestation associer</h1>
              </div>
              <div>
              <label htmlFor="typename">Nom</label>
              <input
                id="typename"
                type="text"
                placeholder="Entrer le nome du type de prestation"
                value={typeName}
                onChange={(e) => setTypeName(e.target.value)}
              ></input>
            </div>
              <div>
              <label htmlFor="price">Prix</label>
              <input
                id="price"
                type="number"
                placeholder="Entrer le prix de la prestation"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
              <div>
              <label htmlFor="typedesc">Description</label>
              <input
                id="typedesc"
                type="text"
                placeholder="Description du type de prestation"
                value={typeDescription}
                onChange={(e) => setTypeDescription(e.target.value)}
              ></input>
            </div>
            <div>
            <label></label>
              <button className="button is-dark primary" type="submit">
                Creez un type prestation 
              </button>
            </div>
              </TypesForm>
            </>
          )}
        </>

      </PrestationTypeListContainer>

    </div>
  );
}
