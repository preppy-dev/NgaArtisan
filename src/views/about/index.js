/* eslint-disable react/style-prop-object */
import React from 'react'
import HeroGeneric from '../../components/hero/index'
import {AboutContainer,Container} from "./styles"

function About() {
  return (
    <Container>
      <HeroGeneric
      title ="Qui sommes-nous ?"
      subtitle ="Maintenant, terminé les interventions douteuses dont le prix vous fait sauter au plafond ! Vous savez qui appeler en cas de besoin."   
      />
    
    <AboutContainer>
    <div className="container is-max-desktop">
      <h1>Qui Sommes-nous ?</h1>
    </div>

    <div className="container is-max-desktop">
                        
    <p className="text-big">
        <strong>NGA ARTISAN</strong> est Le professionnel spécialiser dans l’exécution des travaux de dépannage,
        rénovation, et de maintenance à domicile et entreprise au Mali.
    </p>
    <p className="text-big">
        N’GA ARTISAN est la seule plateforme en ligne au Mali qui permet aux ménages et entreprises en un
        clic ou un appel, quelle que soit leur localité, leur activité et leur taille d’avoir accès au meilleur
        artisan (plomberie, électricité, froid, maçonnerie, climatisation etc.…). à proximité de leur ménage
        ou de leur entreprise pour l’exécution de leurs travaux. Elle regroupe en un seul lieu plus 250 artisans
        qualifiés de plusieurs nationalités.
    </p>
    <p className="text-big">
        Elle a pour but de simplifier la recherche d’un bon artisan pour la réalisation de travaux à domicile et
        en entreprise. En outre un numéro vert est mise à la disposition des clients qui ne sont pas
        familiarisés avec les nouvelles technologies.
    </p>
    <p className="text-big">
    Nos artisans sont sélectionnés minutieusement et doter d’une expertise et des formations dans leur
        domaine respectif, pour la bonne exécution de vos travaux en un temps record avec un délai
        d’intervention urgente plus cours de moins 30 minutes et plus longue de moins de 24h. Nos artisans
        sont formés, orienter et conditionner pour la satisfaction de vos besoins.
    </p>
    
     <p className="text-big">
        Offrir une plus grande diversité de choix d’artisans auprès des entreprises et
        particuliers ainsi qu’une meilleure visibilité aux professionnels du Mali, tel est
        l’objectif de la plate-forme N’GA ARTISAN. De quoi trouver le bon artisan au
        bon moment, au bon endroit, à moindre coût et en toute confiance !
     </p>
        <p className="text-big">
            <strong>
            N’GA ARTISAN des services d’artisan professionnel.
            </strong> 
        </p>
    
     </div>

  <div className="container is-max-desktop">
    <h1> 
      <span>Notre</span>
       Histoire
    </h1>
    </div>
    <div className="container is-max-desktop">
                        
      <p className="text-big">
                        Il s’agit d’un jeune Malien passionné par le travail, le changement, l’entreprenariat et l’évolution
technologique qui à décider d’utiliser cette passion pour la technologie pour satisfaire les besoins
de la population.
</p>
                        <p className="text-big"> Pour nous la technologie vient pour aider et faciliter la vie des hommes, notre entreprise N’GA
ARTISAN à exactement les mêmes buts car nous sommes une solution à un problème récurrent
dans notre pays. </p>
                        
                        <p className="text-big">
                        Nous nous sentons vivant que quand nous sommes utiles aux autres, que quand nous pouvons être
une solution aux artisans, aux particuliers, aux entreprises et l’Afrique.
                        </p>
                        <p className="text-big">
                        Le travail, l’innovation et l’impacter positivement notre communauté africaine sont nos priorités.
                        </p>
                        <p className="text-big">
                        Nous souhaitons à être une référence dans le domaine de l’économie numérique et à
révolutionner ainsi le secteur économique.
                        </p>
                        <p className="text-big">
                        Nous cherchons à valoriser les compétences locales, à assurer leur compétitivité sur le marché, à
donner un nouvel espoir à cette jeunesse Africaine à travers, le travail, la valorisation de la
compétence locale, l’innovation et l’expertise.
                        </p>
    </div>
       <div className="container is-max-desktop">
         <p className="text-big">
            <strong>Rejoignez notre Dream Team</strong>
         </p>

                        <p style={{fontSize:"17px"}}>
                            N'hésitez pas à postuler, nous apprécions tous les talents.
                        </p>
                        <div className="text-center">
                            <a href="contact" class="button">
                                Contactez-nous<i className=""></i>
                            </a>
                        </div>
                    </div>

        </AboutContainer>
     </Container>

  )
}

export default About
