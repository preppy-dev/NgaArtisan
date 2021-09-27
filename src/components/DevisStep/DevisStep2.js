import React, { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import CheckoutSteps from "./../CheckoutSteps"
import styled, { css } from 'styled-components'
import { useDispatch } from 'react-redux';
import { saveDate } from '../../actions/devisActions';


const DataPikerBlock = styled.div`
margin-top:2rem; 
padding:'1rem';
button{
  border-radius: none;
  background-color: none ;
color: none;
width: none;
}

`;


const TypesForm = styled.div` 

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

function DevisStep2(props) {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();


  useEffect(() => {

    dispatch(saveDate(value));

}, [dispatch,value]);
  return (
    <>
      <h1 className="titlestep">{props.title}</h1>

<CheckoutSteps step2>

</CheckoutSteps>
<div className=" card row panel-heading info" style={{marginTop:'3rem'}}>
                <h1 className="">Les champs comportant un (*) sont obligatoires.</h1>
              </div>
     <DataPikerBlock className="card is-danger" >
    
     
              <div style={{padding:'2rem'}}>
              <label htmlFor="fullName" style={{padding:'1rem'}}>  Choisir Date *</label>
              <DatePicker
              
        onChange={onChange}
        value={value}
      />
            </div>

     </DataPikerBlock>

      <TypesForm className="card" >
              
            <div >
            <label htmlFor="fullName">Adresse *</label> 
         <input required type="text" name="adresse" value={props.getState('adresse', '')} onChange={props.handleChange} />
         
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

export default DevisStep2
