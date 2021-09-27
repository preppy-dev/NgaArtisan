import React, { useEffect, useState } from 'react'
import CheckoutSteps from "./../CheckoutSteps"
import styled, { css } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { listAllCategories } from '../../actions/categoryActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { Radio } from 'antd';
import 'antd/dist/antd.css';
import { saveNeedQuote } from '../../actions/devisActions';


const DevisStep = styled.div`

`;
const DevisSelect = styled.div`
margin:2rem 0;
h1{
  margin:1rem 0;
}
`;
const SelectBox = styled.form`
 display:grid;
 grid-template-columns: repeat(4,1fr);
 @media screen and (max-width:925px){
  grid-template-columns:1fr ;
  
padding: 2rem;
}
 grid-gap: 1rem;
 div{
   display: flex;
   align-items: center;
   width:100%;
   label{
     
   }
   input[type=radio] {
    border: 0px;
    width: 30%;
    height: 2em;
}
 }

`;
const DevisDetails = styled.form`
h1{
  margin:1rem 0;
}
@media screen and (max-width:925px){
  
padding:0 2rem;
}

`;
const DetailsBox = styled.div`

`;

function DevisStep1(props) {
  const allCategoryList = useSelector((state) => state.allCategoryList);
  const { loading, error, categories } = allCategoryList;
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    dispatch(
      saveNeedQuote(e.target.value)
    );
};
 
  
  const submitHandler = (e) => {
    e.preventDefault();
      dispatch(
        saveNeedQuote(value)
      );
  };
  

  useEffect(() => {

      dispatch(listAllCategories());
 
  }, [dispatch]);

  return (
    <>
          <h1 className="titlestep">{props.title}</h1>

<CheckoutSteps step1 title="e">

</CheckoutSteps>


<DevisSelect >
  <h1>Pour quel métier souhaitez-vous un devis ? *</h1>
  <SelectBox class="control">
    {
      loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
        {
      categories.map((category=>(
        <Radio.Group onChange={onChange} value={value}>
      <Radio key={category._id}  value={category._id}>{category.name}</Radio>
    </Radio.Group>
        
      )))
        }
       {/*  <div key={category._id} >
      <input type="radio" name="Besoin" value={props.getState('Besoin', category.name)} onChange={props.handleChange} />
      <label className="radio">
        {
          category.name
        }
      </label>
    </div> */}
        
        </>
      )
    }

  </SelectBox>
</DevisSelect>
<DevisDetails>
  <h1>Détails supplémentaires *</h1>
  <DetailsBox>
  <textarea name="description" value={props.getState('description', '')} onChange={props.handleChange} class="textarea" placeholder="Décrivez votre besoin">

  </textarea>
  </DetailsBox>
</DevisDetails>
{/* <button type="submit">Suivant</button> */} 
<button className="button-first button primary" onClick={props.next}>Suivant</button>
      
    </>
  )
}

export default DevisStep1
