import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import Entreprisebanner from "./../assets/entreprise.png"
import { Button } from '../components/Button'
import { Link } from "react-router-dom"
import WorkIcon from "./../assets/autres.png"
import { useDispatch, useSelector } from 'react-redux'
import { listAllCategories } from '../actions/categoryActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'




const ReservationContainer = styled.div`

`;
const HeroReservationSection = styled.section`
height: 50vh;

  background:url(${Entreprisebanner}) no-repeat center center ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

`;
const HeroReservationWrapper = styled.div` 
background-color: rgba(0,0,0,0.4);
max-width:40rem;
padding:0 1rem;
width:100%;
height: 100%;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1,p{
  
  color:#ffffff;
}
h1{
  font-size: 2.5em;
  text-align: center;
}
p{
  margin:2rem 0;
  font-size: 14px;
  font-weight: normal;
  text-align: center;

}

`;

const PrestationContainer = styled.section`
background-color: #F3F4F5;
padding: 4rem 0;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
@media screen and (max-width:925px){
  grid-template-columns:1fr ;
  padding: 4rem 2rem;
}
h1{
  color:#FF6201;
  /* font-size: 2.2rem;
  font-weight:bold; */
}
`;
const PrestationCards = styled.div`
width:100%;
display:grid;
grid-template-columns: repeat(3,1fr);
@media screen and (max-width:925px){
  grid-template-columns:1fr ;

}
grid-gap:3rem;
margin: 3rem 0;
`;

const PrestationCard = styled.div`
display:flex;
flex-direction: column;
gap:2rem;
  justify-content: center;
  align-items: center;
div{
  display:flex;
  justify-content: center;
  align-items: center;
  background-color:#fff;
  border-radius:50%;
  width: 6rem;
  height: 6rem;
  img{
    width: 50%;
  }
  
}
a{
  font-weight:600;
}
`;
const CallToDevis = styled.div`
color:#FF6201;
font-weight: 600;
margin:1rem 0;
a{
  margin:1rem 0;
}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

function Reservation() {
  const allCategoryList = useSelector((state) => state.allCategoryList);
  /* const [state, setstate] = useState([{}]) */

  const { loading, error, categories } = allCategoryList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      listAllCategories()
    );
  }, [dispatch]);
 

  return (
    <ReservationContainer>
      <HeroReservationSection className="Reservation">
        <HeroReservationWrapper className="container is-max-desktop">
          <h1 className="title">Prix et devis pour vos petits
            travaux et vos projets
            de rénovation </h1>
          <p className="subtitle">A force de travailler avec des professionnels, nous avons développé une expertise avérée dans la maintenance pour les Reservations. Mon Artisan est votre interlocuteur privilégié pour tous vos soucis de maintenance et vos projets de rénovations.</p>

        </HeroReservationWrapper>
      </HeroReservationSection>

      <PrestationContainer className="works">
        <h1 className="title">Que souhaitez-vous ?</h1>
        <PrestationCards className="Prestationcards">
        {
        loading ? <LoadingBox></LoadingBox> : error ? <MessageBox></MessageBox> : 
          <>
            {
            categories.map(category=>(
              <PrestationCard key={category._id} className="workcard">
            <div><img src={category.icon === "sample icon" ? WorkIcon : category.icon} alt="" /></div>
            <Button to={`/reservation/prestation/${category.link}`} primary="false" className="subtitle">{category.name}</Button>
          </PrestationCard>

            ))
            }
            </>
           }      
        </PrestationCards>
        <CallToDevis className="container is-max-desktop">
          <p>Pas le temps de chercher ? Gratuit, Rapide, Efficace ! Obtenez 3 devis bâtiment</p>
          <Button to="/demande-de-devis" primary="true">
            Obtenir 3 devis
          </Button>
        </CallToDevis>
      </PrestationContainer>


    </ReservationContainer>
  )
}

export default Reservation
