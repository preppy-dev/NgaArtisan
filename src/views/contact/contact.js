import React from 'react'
import HeroGeneric from '../../components/hero/index'
import {Container,ContactsDetails} from "./styles"
import {FaAt,FaPhoneAlt,FaMapMarkedAlt} from "react-icons/fa"


function contact() {
  return (
    <Container>
        <HeroGeneric
        title ="Contactez-nous
        "
        subtitle ="N'hesitez pas à dire ce que vous pensez , c'est gratuit !
        "   
        />
   
    <ContactsDetails className="container is-max-desktop">
    <div className="contacts-details-simple card">
         <FaMapMarkedAlt />
         Bamako, Mali <br/>
         Kalaban Coura, près de l'hôtel wassolo au bord du guindron
    </div>
    <div className="contacts-details-simple card">  
            <FaAt />
            <strong><a href="mailto:contact@ngaartisan.com">contact@ngaartisan.com</a></strong> <br/>
            <strong><a href="mailto:ngaartisan@gmail.com">ngaartisan@gmail.com</a></strong>
    </div>
    <div className="contacts-details-simple card">
        <FaPhoneAlt />
        <a href="tel:+22368742020">(+223) 68 74 20 20 </a> <br/>
        <a href="tel:+22382151547">(+223) 82 15 15 47</a>
    </div>
   </ContactsDetails>
      
   <form className="container is-max-desktop" id="home_page">
     <div className="field">
     <label class="label">Nom</label>
      <div className="control">
       <input className="input" id="nom_prenoms" type="text" name="nom_prenoms" placeholder="Nom"/>
      </div>
     </div>
     <div className="field">
     <label class="label">Email</label>

      <div className="control">
        <input className="input" id="email" type="email" name="email" placeholder="Email"/>
      </div>
     </div>
     <div className="field">
       <label class="label">Numéro de telephone.</label>
        <div className="control">
          <input id="telephone" type="text" name="telephone" className="input" placeholder="Numéro de telephone." maxlength="10" onkeypress="if(event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;if(event.which < 45 || event.which > 57) return false;"/>
        </div>
        </div>
     <div className="field">
       <label class="label">Message</label>
        <div className="control">
            <textarea id="message" name="message" placeholder="Message" className="textarea">

            </textarea>
     </div>
    </div>
     <div className="container" style={{display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "center",}}>
      <button type="button" className="button is-medium" style={{borderRadius: '25rem'}}>
          Envoyer maintenant
     </button>
     </div>
    </form>
    </Container>
  )
}

export default contact
