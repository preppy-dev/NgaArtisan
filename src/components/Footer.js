import React from 'react'
import styled, { css } from 'styled-components'
import Image4 from "./../assets/Image4.png"
import Image5 from "./../assets/Image5.png"
import Image6 from "./../assets/Image6.png"
import Image7 from "./../assets/Image7.png"
import LogoArtisan from "./../assets/artisan.png"
import {Button} from './Button'
import HideNavFooter from './HideNavFooter'
import { useSelector } from 'react-redux'
import LoadingBox from './LoadingBox'
import { Link } from 'react-router-dom'

const FooterSection = styled.footer` 
.copyright{
  text-align:center;
  color:#fff;
  background-color:#FF6201;
  padding: 1rem;
}

` ;
const FooterInfo = styled.footer` 
  background-color: #E6E9EB;
` ;
const FooterInfoWrapper = styled.footer` 
  display:grid;
  grid-template-columns: 35% 20% 20% 25%;

  @media screen and (max-width:950px){
grid-template-columns: 1fr;
padding: 3rem;

}
  grid-gap: 1rem;
  padding: 3rem 0;
  .footerabout{
    img{
      width: 100px;
    }
  }
  h1{
    color:#FF6201;
    font-weight: 700;
  }
  a,p{
    color:#8095A0;
  }
` ;
const ExplanBox = styled.section`
padding: 4rem 0;
display:flex;
justify-content: center;
flex-direction: column;
text-align: center;

h1{
  color:#FF6201;
  /* font-size: 2.2rem;
  font-weight:bold; */
}
grid-template-columns: repeat(2,1fr);

padding: 4rem 2rem;

`;

const ExplanCards = styled.div`
margin-top:1rem;
display: grid;
grid-template-columns: repeat(4,1fr);
@media screen and (max-width:925px){
grid-template-columns: repeat(2,1fr);

  padding:0 1rem;
  

}
@media screen and (max-width:500px){
grid-template-columns: repeat(1,1fr);

  padding:0 1rem;

}
grid-gap: 3rem;
.explancard{
text-align: center;
h2{
 /*  font-size: 1.2rem; */
  font-weight:600;
  margin: 0.6rem 0;
  color:#FF6201;
}
img{
  width: 35%;
}
}
`;
const FooterNewLetter = styled.div` 
background-color: #FF6201;
/* height: 12vh; */
padding:1rem 0;
` ;
const FooterNewLetterWrapper = styled.div`
height: 100%;

display:grid;
grid-template-columns: 80% 20%;
align-items: center;
padding:.6rem;
@media screen and (max-width:950px){
grid-template-columns: 1fr;
grid-gap: 1rem;
justify-content: center;

}
input{
  border-radius:200px;
  border: 1px #fff solid;
  outline:none;
  font-size: 1rem;
  margin:0 0.2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FF6201;
  padding:.9rem;
  color:#fff;
}
input::placeholder {
  font-size: 15px;
  font-weight:bold;
  color:#fff;
  text-align:center;

}
input::active input::focus{
  border-color: #fff;
}
button{
  margin-left:.7rem;
  white-space:nowrap;
outline:none;
border:none;
border-radius:200px;
background-color: #fff;
max-width:200px;
padding:1rem;
color:#FF6201;
font-weight:bold;
cursor:pointer;
-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
display:flex;
align-items: center;
justify-content: center;
@media screen and (max-width:950px){
width:100%;

}
}

` ;

function Footer() {
  const topCategoryList = useSelector((state) => state.topCategoryList);
  const { loading, error, topcategories } = topCategoryList;

  return (
    
    <FooterSection>
      <ExplanBox className="container motivation">
      <h1 className="title">Pour vous simplifier la vie, on s’engage !</h1>
        <ExplanCards className="explancards">
          <div className="explancard">
            <img src={Image4} alt="" srcset="" />
            <h2 className="subtitle">Une équipe impliquée</h2>
            <p>+200 Prestations
 forfaitisées à prix fixes</p>
          </div>
          <div className="explancard">
            <img src={Image5} alt="" srcset="" />
            <h2 className="subtitle">  Qualité garantie  </h2>
            <p>98% Des clients
très satisfaits  </p>
          </div>
          <div className="explancard">
            <img src={Image6} alt="" srcset="" />
            <h2 className="subtitle">Artisans fiables</h2>
            <p>+350 Artisans professionnels 
à votre service </p>
          </div>
          <div className="explancard">
            <img src={Image7} alt="" srcset="" />
            <h2 className="subtitle"> Qualité garantie </h2>
            <p>+4000 Interventions 
réalisées </p>
          </div>
          </ExplanCards>
      </ExplanBox>
      <FooterNewLetter className="newsletter">
        <FooterNewLetterWrapper className="container is-max-desktop">
      <input class="" type="text" placeholder="S’inscrire a Notre news letter"/>
      <button>Je m’abonne</button>
      </FooterNewLetterWrapper>
      </FooterNewLetter>
      <FooterInfo className="footer-info">
        <FooterInfoWrapper className="container is-desktop">
        <div className="footerabout">
         <img src={LogoArtisan} alt="Logo N'ga Artisan" />
         <p>Fort de son réseau d’artisans qualifiés 
           et de sa plateforme en ligne, N’gaARTISAN 
           est le spécialiste du dépannage et des 
           travaux de rénovationau Mali pour les
            particuliers et les professionnels.</p>
        </div>
        <div className="footeraboutmenu">
        <h1 >À propos</h1>
         <ul className="menu-about">
           <li><Link to="/a-propos">Qui sommes-nous ?</Link></li>
           <li><Link to="/nous-rejoindre">Devenir Pro</Link></li>
         </ul>
        </div>
        <div className="workmenucategory">
        <h1>Nos prestations</h1>
         <ul className="menu-about">
         {
        loading ? <LoadingBox></LoadingBox> : error ? "" : 
          <>
            {
              topcategories.map(category => (
                <li key={category._id}><Link to={`/reservation/prestation/${category.link}`}>{category.name === "Plomberie et Cusine"? "Plomberie":category.name   } </Link></li> 
        
              ))
            }
            
          </>
        
      }
           <li><Link to="/reservations"> Autre</Link></li>
         </ul>
        </div>
        <div className="support">
        <h1>Liens utiles</h1>
         <ul className="menu-about">
           <li><Link to="/faq">FAQ</Link></li>
           <li><Link to="/contact">Contact</Link></li>
         </ul>
         <div className="social">
           <ul>
             <li>
               <Link to=""><img src="" alt="" /></Link>
             </li>
             <li>
               <Link to=""><img src="" alt="" /></Link>
             </li>
           </ul>
         </div>
        </div>
        </FooterInfoWrapper>
      </FooterInfo>
      <div className="copyright">
        <p>
        © Copyright N’ga Artisan 2021. Tous droits reservés.
        </p>
      </div>
      
    </FooterSection>
  
  )
}

export default Footer
