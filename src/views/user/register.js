import React from 'react'
import styled from 'styled-components'
import LoginCover from "../../assets/logincover.png"
import LogoArtisan from "../../assets/artisan.png"

const RegisterContainer = styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);
height: 100vh;
`;
const ImageContainer = styled.div`
background:url(${LoginCover}) no-repeat center center ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
`;
const RegisterForm = styled.div`
width:100%;
`;
const RegisterFormWrapper = styled.form`
 width: 30rem;
  margin: 0 auto;
  padding-top: 4rem;
/* display:flex;
flex-direction: column;
justify-content: center;
align-items: center; */
div {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
label {
  margin: 1rem 0;
}
.logocontainer{
  img{
    width: 20%;
    margin-bottom: 1rem;
  }
  h1{
    font-size:1.5rem;
    font-weight: 700;
    margin:1rem 0;
  }
}
button{
  border:none;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #FF6201;
  color:#fff;
}
a{
  color:#FF6201;
  text-decoration: underline;
}

`;

function register() {
  return (
    <RegisterContainer>
      <ImageContainer>

      </ImageContainer>
      <RegisterForm>
        <RegisterFormWrapper>
          <div className="logocontainer">
            <img src={LogoArtisan} alt="logo N'ga Artisan" />
            <h1>CRÉATION DE COMPTE</h1>
          </div>
          <div class="control ">

            <label htmlFor="">Email (*)</label>
            <input class="input" type="email" placeholder="Enter votre Email" />
            <span class="">
            
            </span>
            <span class="">
              
            </span>

          </div>
          <div class="control">

            <label htmlFor="">Mot de passe (*)</label>

            <input class="input" type="password" placeholder="Enter votre mot de passe " />
            <span class="icon is-small is-left">
         
            </span>

          </div>
          <div class="control">

            <label htmlFor="">Confirmation du mot de passe (*)</label>

            <input class="input" type="password" placeholder="Enter votre mot de passe " />
            <span class="icon is-small is-left">
         
            </span>

          </div>
          
          <div>

            <button className="primary" type="submit">
              Entrer
            </button>
          </div>

            <div style={{display:'flex'}}>
            <span>Vous aves deja un compte ? <a href="/auth/connexion" >
            Connexion
              </a></span>
              
          </div>
        </RegisterFormWrapper>
      </RegisterForm>
    </RegisterContainer>
  )
}

export default register
