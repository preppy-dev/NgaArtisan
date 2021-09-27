import React, { useEffect, useState } from 'react'
import CheckoutSteps from "./../CheckoutSteps"
import styled, { css } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { createDevis } from '../../actions/devisActions';
import { DEVIS_CREATE_RESET } from '../../constants/devisConstants';
import {  message } from 'antd';
import { withRouter } from 'react-router';

const TypesForm = styled.form` 

/* max-width: 60rem;
  margin: 0 auto; */
margin-top:2rem;
padding:1rem;
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

function DevisStep4(props) {
  const [state, setstate] = useState()
  const devisCreate = useSelector((state) => state.devisCreate);
  const { loading:loadingcreate, success:successcreate, error, devis } = devisCreate;
  const deviscart = useSelector((state) => state.deviscart);

  const { needquote, savedate } = deviscart;
  const key = 'updatable';

  
  const dispatch = useDispatch();
  const placeDevisHandler = (e) => {
     e.preventDefault();
    dispatch(createDevis(
      { 
        name: needquote,
        description: props.state.description,
        date: savedate,
        adresse: props.state.adresse,
        fullName: props.state.fullName,
        email: props.state.email,
        phone: props.state.phone,
        cniRecto: props.state.cniRecto,
        cniVerso: props.state.cniVerso,
     }
     ));  
  };

  useEffect(() => {
    /* if (loadingcreate) {
      message.loading({ 
        content: 'Chargement...', 
        key ,
        className: 'custom-class',
        style: {
          marginTop: '20vh',
          padding: '4rem',
        },
        })
    } */
    if (successcreate) {
      message.success({ content: 'Demande de devis recus', key, duration: 2 });
      props.history.push(`/confirmation-demande`);
      dispatch({ type: DEVIS_CREATE_RESET });
    }
  }, [dispatch, devis, props.history,loadingcreate, successcreate]);

  return (
    <>
      <h1 className="titlestep">{props.title}</h1>

<CheckoutSteps step4>
  BESOIN 3
</CheckoutSteps>
<TypesForm className="card" >
              <div className="row panel-heading info">
                <h1 className="">Les champs comportant un (*) sont obligatoires.</h1>
              </div>
              <div>
              <label htmlFor="fullName">CARTE D'IDENTITE RECTO</label>
              <input
                id="fullname"
                type="file"
                placeholder="Entrer votre nom complet"
                name="CeniRecto"
                value={props.getState('CeniRecto', '')} 
                onChange={props.handleChange}
              ></input>
            </div>
              <div>
              <label htmlFor="ceniverso">CARTE D'IDENTITE VERSO</label>
              <input
                id="ceniverso"
                type="file"
                placeholder="Selectionner votre email"
                name="CeniVerso"
                value={props.getState('CeniVerso', '')} 
                onChange={props.handleChange}
              ></input>
            </div>
            <div>
            <label></label>
<button className="button is-dark" onClick={props.prev}>Precedent</button>
<button className="button primary" onClick={placeDevisHandler}>Validez</button>

      </div>
            
              </TypesForm>
    </>
    
  )
}

/* export default DevisStep4 */
export default withRouter(DevisStep4);
