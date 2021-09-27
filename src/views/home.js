import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Link, NavLink, useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import {Button} from '../components/Button'
import TopCategory from '../components/TopCategory'
import Image1 from "./../assets/Image1.png"
import Image2 from "./../assets/Image1.png"
import Image3 from "./../assets/Image1.png"
import WorkIcon from "./../assets/autres.png"
import Entreprisebanner from "./../assets/entreprise.png"
import { useDispatch, useSelector } from 'react-redux'
import { listCategories, topListCategories } from './../actions/categoryActions'
import LoadingBox from '../components/LoadingBox'

const ExplanBox = styled.section`
padding: 3rem 0;
display:flex;
justify-content: center;
flex-direction: column;
text-align: center;
h1{
  color:#FF6201;
  /* font-size: 2.2rem;
  font-weight:bold; */
}
`;
const ExplanCards = styled.div`
margin-top:1rem;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 3rem;
@media screen and (max-width:925px){
  grid-template-columns: 1fr;
  padding:0 1.5rem;

}
.explancard{
text-align: center;
h2{
 /*  font-size: 1.2rem; */
  font-weight:600;
  margin: 0.6rem 0;
  color:#FF6201;
}
}
`;
const HomeServices = styled.section`
background-color: #F3F4F5;
padding: 4rem 0;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
h1{
  color:#FF6201;
  /* font-size: 2.2rem;
  font-weight:bold; */
}
`;
const WorksCards = styled.div`
width:100%;
display:grid;
grid-template-columns: repeat(3,1fr);
@media screen and (max-width:925px){
  grid-template-columns:repeat(2,1fr);

}
@media screen and (max-width:500px){
  grid-template-columns:1fr;

}
grid-gap:3rem;
margin: 3rem 0;
`;
const WorksCard = styled(Link)`
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
h2{
  font-weight:600;
}
`;

const HeroEntrepriseSection = styled.section `
height: 50vh;

  background:url(${Entreprisebanner}) no-repeat center center ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

`;
const HeroEntrepriseWrapper = styled.div` 
background-color: rgba(0,0,0,0.4);
width:100%;
height: 100%;
@media screen and (max-width:925px){
  padding:0 2rem;

}

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
  margin:1rem 0;
  font-size: 14px;
  font-weight: normal;
  max-width:40rem;
  text-align: center;

}

`;

function Home() {
  const { pageNumber = 1, pageSize = 6 } = useParams();
  const categoryList = useSelector((state) => state.categoryList);

  const { loading, error, categories } = categoryList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      listCategories({pageSize,pageNumber})
    );
  }, [dispatch,pageSize,pageNumber]);
  return (
    <>
      <Hero/>
      <TopCategory />
      <ExplanBox className="container">
        <h1 className="title">Vous êtes perdus ?</h1>
        <ExplanCards className="explancards">
          <div className="explancard">
            <img src={Image1} alt="" srcset="" />
            <h2 className="subtitle">Dites-nous</h2>
            <p>Dites-nous ce don’t vous avez besoin, puis choisissez la date et l’heure qui vous conviennent le mieux pour ces travaux. </p>
          </div>
          <div className="explancard">
            <img src={Image2} alt="" srcset="" />
            <h2 className="subtitle"> Nous sélectionnons l’artisan </h2>
            <p>Une fois votre réservation effectuée ou le devis validé, nous sélectionnons le meilleur artisan pour la réalisation de la prestation en fonction de l’urgence, de sa spécificité, et de votre localisation.  </p>
          </div>
          <div className="explancard">
            <img src={Image3} alt="" srcset="" />
            <h2 className="subtitle">On s’occupe de tout</h2>
            <p>Une fois l’intervention terminée, vous réglez votre facture en espèces ou par mobile money. Vous pouvez enfin évaluer la prestation et recommander Mon Artisan autour de vous.  </p>
          </div>
        </ExplanCards>
      </ExplanBox>
      <HomeServices className="works">
        <h1 className="title">Travaux et Dépannages</h1>
        <WorksCards className="workscards">
          {
            loading ? <LoadingBox></LoadingBox> : error ? "" :<>
            {
              categories.map(category=>(
                <WorksCard to={`/reservation/prestation/${category.link}`} key={category._id} className="workcard">
            <div><img src={category.icon ==="sample icon"? WorkIcon : category.icon} alt="" /></div>
            <h2 className="subtitle">{category.link}</h2>
          </WorksCard>
              ))
            }
            </>
          }
          
        </WorksCards>
        <Button  primary to="/reservations">
        Voir tout nos prestations
        </Button>
      </HomeServices>
      <HeroEntrepriseSection className="entreprise">
        <HeroEntrepriseWrapper >
        <h1 className="title">Solutions Entreprises </h1>
        <p className="subtitle">A force de travailler avec des professionnels, nous avons développé une expertise avérée dans la maintenance pour les entreprises. Mon Artisan est votre interlocuteur privilégié pour tous vos soucis de maintenance et vos projets de rénovations.</p>
        <Button>
        En savour plus
        </Button>
        </HeroEntrepriseWrapper>
      </HeroEntrepriseSection>
      
    </>
  )
}

export default Home
