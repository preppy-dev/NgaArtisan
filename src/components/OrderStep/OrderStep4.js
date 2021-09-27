import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import OrderCheckoutSteps from "./../OrderCheckoutSteps"
import Pouces from '../../assets/pouce.svg'
import Camion from '../../assets/camion.svg'
import Outils from '../../assets/outils.svg'
import { useDispatch, useSelector } from 'react-redux'
import { detailsCategory } from '../../actions/categoryActions'
import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
import { createOrder } from '../../actions/orderActions'
import {  message } from 'antd';
import { withRouter } from 'react-router';
import { ORDER_CREATE_RESET } from '../../constants/orderConstants'
import { addToCart, saveIntervationAddress } from '../../actions/cartActions'


moment.locale('fr')




const Wrapper = styled.div`
margin-top:2rem;
background-color:#F3F4F5;
width:100%;
padding: 2rem 0;
`;

const OrderSteOne = styled.div`
max-width: 60rem;
display:grid;
grid-template-columns: 60% 40%;
@media screen and (max-width:925px){
  grid-template-columns:1fr ;
  padding: 0 2rem;
}
grid-gap: 1rem;
/* padding: 4rem; */
.row{
  border:1px solid #FF6201;
  border-radius: 1rem;
  
}
.PlaceOrder{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.prix-detail{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  h1{
    font-size:1rem;
    margin:1rem;
    font-size:1.5rem;
  font-weight: 600;
  }
  h3,h2{
    margin:.5rem 0;
  }
  h2{
    font-size:2rem;
   font-weight:bold;
  }
}
.compris-prix{
  margin-top:2rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  h3{
    max-width: 90%;
    text-align:center;
  }
}
.compris{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1rem;
  background-color: #FF6201;
  color:#fff;
  padding: 1rem;
  margin-top:1rem;
  border-radius: 1rem;

}
.compri{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width:40%;
  }
  p{
    font-size:.9rem;
  }
}

.ResumOrder{
  display:grid;
  grid-template-columns: 1fr;
  grid-gap: .5rem;
  padding:1rem;
  .card{
    border:2px #8095A0 solid;
    padding:1rem;
    width:100%;
    &>div:first-child{
      font-size: 1rem;
      font-weight:bold;
    }
  }
}
padding:3rem 0;
/* h1{
  font-size:1.5rem;
  font-weight: 500;
  margin:3rem 5rem;
} */
.button {
margin:3rem 0 0 0;
width: 100%;
color:#fff;
}
`;

const TypesForm = styled.form` 

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


function OrderStep4(props) {
  const cart = useSelector((state) => state.cart);
  const { loading:loadingcreate, success:successcreate, error,saveprestation,savedateprestation, savesousprestation} = cart;
  const [qty, setQty] = useState(1);

/*   const categoryDetails = useSelector((state) => state.categoryDetails);
  
  const { loading, error, category } = categoryDetails;
   */
  /* const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      detailsCategory(saveprestation.category)
    );
    
  }, [dispatch,saveprestation.category]);
   */
 const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemPrice = toPrice(cart.cartItem.qty * cart.cartItem.price);
    /* cart.cartItem.reduce((a, c) => a + c.qty * c.price, 0) */
  cart.interventionPrice = cart.itemPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemPrice);
  cart.totalPrice = cart.itemPrice + cart.interventionPrice + cart.taxPrice;

 

  const key = 'updatable';



  
  const dispatch = useDispatch();
  const addToCartHandler = (e) => {
     e.preventDefault();   
    dispatch(addToCart(
      { 
        name: saveprestation.prestation,
        type: savesousprestation.sousprestation,
        price: 5000,
        qty: qty,
        prestation:saveprestation.prestationId,
        category:saveprestation.category,
     }
     ));  
  
  };

  useEffect(() => {
    if (successcreate) {    
      props.history.push(`/auth/payment`);  
      //props.history.push(`/auth/connexion?redirect=payment`);  
    } 
}, [successcreate,props.history]);


  return (
    <>
    <OrderCheckoutSteps step4>
      </OrderCheckoutSteps>
      <Wrapper>
    <OrderSteOne className="container is-max-desktop">
      
     <div className="card row ResumOrder">
       <div className="card choixdeclinaison">
       <div>
        Resume
        </div>
        <div>
        {/* loading ? "" : category */}/ {saveprestation.prestation} / {savesousprestation.sousprestation}
        </div>

       </div>
       <div className="card lieux">
        <div>
        Adresse :
        </div>
        <div>
        {cart.interventionAddress.adresse}
        </div>
       </div>
       <div className="card date">
        <div>
        Date: 
        </div>
        <div>
        
        {moment(cart.interventionDate).format('LL')}
        </div>
        </div>
       
     </div>
     <div className="card row PlaceOrder">
       <div className="prix-detail">
       <h1>TARIF ESTIMATIF</h1>
           <h2>{cart.totalPrice}</h2>
           <h3>Qté ({qty})</h3>
           <button className="button primary" onClick={addToCartHandler}>
             Finalisez
           </button>
       </div>
       <div className="compris-prix">
        <h3>
        Le tarif comprend :
        </h3>
        <div className="compris">
          <div className="compri">
            <img src={Pouces} alt="" />
            <p>Déplacement</p>
          </div>
          <div className="compri">
            <img src={Camion} alt="" />
            <p>Main d'oeuvre</p>
          </div>
          <div className="compri">
            <img src={Outils} alt="" />
            <p>Fournitures</p>
          </div>
        </div>
       </div>
     </div>


    </OrderSteOne>
    </Wrapper>
    </>
  )
  
}

export default withRouter(OrderStep4)
