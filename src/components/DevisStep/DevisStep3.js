import React from 'react'
import CheckoutSteps from "./../CheckoutSteps"
import styled, { css } from 'styled-components'

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

function DevisStep3(props) {
  return (
    <>
      <h1 className="titlestep">{props.title}</h1>

<CheckoutSteps step3>
  BESOIN 3
</CheckoutSteps>
<TypesForm className="card" >
              <div className="row panel-heading info">
                <h1 className="">Les champs comportant un (*) sont obligatoires.</h1>
              </div>
              <div>
              <label htmlFor="fullName">Nom & Prénoms *</label>
              <input
                id="fullname"
                type="text"
                placeholder="Entrer votre nom complet"
                name="fullName"
                required
                value={props.getState('fullName', '')} 
                onChange={props.handleChange}
              ></input>
            </div>
              <div>
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                placeholder="Entrer votre email"
                name="email"
                value={props.getState('email', '')} 
                onChange={props.handleChange}
                required
              ></input>
            </div>
              <div>
              <label htmlFor="phone">Contact télephonique *</label>
              <input
                id="phone"
                type="number"
                placeholder="Votre numero pour vous contactez"
                name="phone"
                value={props.getState('phone', '')} 
                onChange={props.handleChange}
                required               
              ></input>
            </div>
            <div>
            <label></label>
<button className="button is-dark" onClick={props.prev}>Precedent</button>
<button className="button primary" onClick={props.next}>Suivant</button>
      </div>
            
              </TypesForm>


    </>
  )
}

export default DevisStep3
