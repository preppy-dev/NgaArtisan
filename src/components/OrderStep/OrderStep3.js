import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import OrderCheckoutSteps from "./../OrderCheckoutSteps"
import DatePicker from 'react-date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { saveDatePrestation, saveIntervationAddress } from '../../actions/cartActions';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

const Wrapper = styled.div`
margin-top:2rem;
background-color:#F3F4F5;
width:100%;
`;

const OrderSteOne = styled.div`
max-width: 60rem;
padding:3rem 0;
h1{
  font-size:1.5rem;
  font-weight: 500;
  margin:3rem 5rem;
}
.button {
margin:3rem 0 0 0;
width: 100%;
color:#fff;
}
`;

const TypesForm = styled.div` 

/* max-width: 60rem;
  margin: 0 auto; */
margin-top:2rem;
padding:1rem;
& >  div {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
& label {
  margin: 1rem 0;
}
.myinput input {
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

function OrderStep3(props) {
  const [value, onChange] = useState(new Date());

  
  const cart = useSelector((state) => state.cart);
  const { interventionAddress } = cart;

  const [adresse, setAdresse] = useState(interventionAddress.adresse);
  const [phone, setPhone] = useState(interventionAddress.phone);
  const [fullName, setFullName] = useState(interventionAddress.fullname);
  const [email, setEmail] = useState(interventionAddress.email);
  const [details, setDetails] = useState(interventionAddress.details);

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }


  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(saveDatePrestation(value));
    dispatch(saveIntervationAddress(
      { 
       /*  date: savedateprestation, */
        adresse: adresse,
        fullName: fullName,
        email: email,
        phone: phone,
        details: details,
     }
     ));

}, [dispatch,value,adresse,phone,details,email,fullName]);
  return (
    <>
    <OrderCheckoutSteps step3>
      </OrderCheckoutSteps>
      <Wrapper>
    <OrderSteOne className="container is-max-desktop">
      
      <TypesForm className="card" >
  
        <div className="row panel-heading info">
          <h1 className="">Et pour que le professionnel puisse intervenir :</h1>
          <p className="">Les champs comportant un (*) sont obligatoires.</p>
        </div>
        <div>

          <label htmlFor="date" style={{ padding: '1rem 0' }}>  À quelles date et heure doit-il intervenir ? *</label>
          <DatePicker

            onChange={onChange}
            value={value}
          />


        </div>
        <div className="myinput">
          <label htmlFor="fulladresse">Où l'artisan doit-il intervenir ? *</label>
          <input
            id="fulladresse"
            type="text"
            placeholder="Adresse*"
            name="fulladresse"
            required
            value={adresse} 
            onChange={(e) => setAdresse(e.target.value)}
          ></input>
        </div>
        {/* <div className="myinput">
          <label htmlFor="fulladresse">Où l'artisan doit-il intervenir ? *</label>
          <PlacesAutocomplete
        value={adresse}
        onChange={(e) => setAdresse(e.target.value)}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        </div> */}

        <div className="myinput">
          <label htmlFor="phone">Nom & Prénom *</label>
          <input
            id="phone"
            type="text"
            placeholder="Nom & Prénom"
            name="fullname"
            required
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)}
          ></input>
        </div>
        <div className="myinput">
          <label htmlFor="phone">Contact télephonique *</label>
          <input
            id="phone"
            type="tel"
            placeholder="Votre numero pour vous contactez"
            name="phone"
            pattern="^\d{4}-\d{3}-\d{4}$"
            required
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            
          ></input>
        </div>
        <div className="myinput">
          <label htmlFor="phone">Email *</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="myinput">
          <label htmlFor="description">Details supplémentaires </label>
          <textarea name="description" value={details} onChange={props.handleChange} class="textarea" placeholder="plus details supplémentaires">

        </textarea>
        </div>
        <div className="container" style={{display:'grid',gridTemplateColumns:'50% 50%',gridGap:'2rem',paddingRight:'2rem'}}>

<button className="button is-dark" onClick={props.prev}>Precedent</button>
<button className="button primary" onClick={props.next}>Suivant</button>
</div>

      </TypesForm>


    </OrderSteOne>
    </Wrapper>
    </>
  )
}

export default OrderStep3
