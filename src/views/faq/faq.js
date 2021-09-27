import React from 'react'
import HeroGeneric from '../../components/hero/index'
import {Container,FaqContainer} from "./styles"
import Faq from 'react-faq-component';

const data = {
  title: "Foire Aux Questions (questions les plus courantes)",
  rows: [
    {
      title: "GENERALITÉS",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "CLIENT - PARTICULIERS ",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "CLIENT - ENTREPRISES ",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "ARTISAN",
      content: "Pour s'inscrire, il vous suffit de renseigner notre formulaire en précisant le nom de votre entreprise, votre adresse email, votre contact téléphonique. Vos coordonnées sont conservées sur notre serveur sécurisé et ne sont transmises à aucune tierce partie"
    }]
}


function FaqPage() {
  return (
    <Container >
        <HeroGeneric
        title ="Foire aux questions
        "
        subtitle ="A la recherche d’une information ?
        Trouvez en quelques clics des réponses à vos questions.
        "   
        />
      
    <FaqContainer className="container is-max-desktop card">
      
     <div>
     <Faq data={data}/>
     </div>

    </FaqContainer>

    </Container>
  )
}

export default FaqPage
