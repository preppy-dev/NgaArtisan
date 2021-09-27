import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useRouteMatch } from "react-router-dom";
import { Step, Steps } from 'react-step-builder';
import styled, { css } from 'styled-components'
import { detailsCategory, detailsPrestationCategory } from '../../actions/categoryActions';
import { detailsPrestation } from '../../actions/prestationActions';
import { Button } from '../../components/Button';
import Entreprisebanner from "../../assets/entreprise.png"
import CheckoutSteps from "../../components/CheckoutSteps"
import OrderStep1 from "../../components/OrderStep/OrderStep1"
import OrderStep2 from "../../components/OrderStep/OrderStep2"
import OrderStep3 from "../../components/OrderStep/OrderStep3"
import OrderStep4 from "../../components/OrderStep/OrderStep4"


const PrestationContainer = styled.div `
.button{
/*   margin:4rem; */
  /* width:40%; */
  padding: .6rem;
  
  color:#fff;
  font-weight: 500;
  font-size: 14px;
  border:none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}
.primary{
  background-color: #FF6201;
}

`;
const ReturnToReservation = styled.div `
padding:1rem;

`;
const HeroPrestationSection = styled.section `
height: 30vh;

 background-color: #F3F4F5;

`;

const HeroPrestationWrapper = styled.div` 

width:100%;
height: 100%;
display: flex;
flex-wrap:wrap;
  align-items: center;
  h1,p{
  
  color:#212223;
}
h1{
  font-size: 2.5em;
  text-align: center;
}
p{
  margin:1rem 0;
  font-size: 14px;
  font-weight: normal;
  text-align: center;

}

`;

function Prestation() {
  const { url, path,params } = useRouteMatch();
  const categoryLink = params.prestation
  const { name } = useParams();
  console.log(params)
  console.log("UsePara"+ useParams())
  console.log("UsepRoute"+ useRouteMatch())

  const prestationDetails = useSelector((state) => state.prestationDetails);
  const categoryDetails = useSelector((state) => state.categoryDetails);
  /* const [state, setstate] = useState([{}]) */

  const { loading, error, category } = categoryDetails;
  const cart = useSelector((state) => state.cart);
  const { saveprestation} = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      detailsPrestation(categoryLink)
    );
  }, [dispatch,categoryLink]);

  useEffect(() => {
    document.body.classList.add('no-header');

    return () => {
      document.body.classList.remove('no-header');
    };
  }, []);



  /* useEffect(() => {
    dispatch(
      detailsCategory(saveprestation.category)
    );
    
  }, [dispatch,saveprestation.category]); */
  
 

  return (
    <PrestationContainer>
      <ReturnToReservation className="container card is-fluid">
        <Button to="/reservations" primary>
          annuler
        </Button>
      </ReturnToReservation>
     {/*  <HeroPrestationSection className="Prestation">
        <HeroPrestationWrapper className="container is-max-descktop">
          <span ></span>
        <h1 className="title">Électricité </h1>     
        </HeroPrestationWrapper>
        
      </HeroPrestationSection> */}
      <Steps>
        <Step title="Selection" component={OrderStep1} />
        <Step title="Besoin" component={OrderStep2} />
        <Step title="Quantiter" component={OrderStep3} />
        <Step title="Commande" component={OrderStep4} />
        </Steps>
      
      
    </PrestationContainer>
  )
}

export default Prestation
