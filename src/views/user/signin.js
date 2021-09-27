import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signinAction } from "../../actions/userActions";
import styled from 'styled-components'
import LoginCover from "../../assets/logincover.png"
import LogoArtisan from "../../assets/artisan.png"



const LoginContainer = styled.div`
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
const LoginForm = styled.div`
width:100%;
`;
const LoginFormWrapper = styled.form`
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

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signinAction(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <LoginContainer>
      <ImageContainer>

      </ImageContainer>
      <LoginForm>
        <LoginFormWrapper onSubmit={submitHandler}>
          <div className="logocontainer">
            <img src={LogoArtisan} alt="logo N'ga Artisan" />
            <h1>ESPACE UTILISATEUR</h1>
          </div>
          <div class="control ">

            <label htmlFor="">Email (*)</label>
            <input className="input" 
            type="email" 
            placeholder="Enter votre Email" 
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            >

            </input>
            <span className="">
            
            </span>
            <span className="">
              
            </span>

          </div>
          <div class="control">

            <label htmlFor="password">Mot de passe (*)</label>

            <input className="input" 
            type="password"
            id="password"
             placeholder="Enter votre mot de passe " 
            required
            onChange={(e) => setPassword(e.target.value)}
             >
            </input>
            <span class="icon is-small is-left">
         
            </span>

          </div>
          <div>
            <a href="/" >
              Mot de passe oublié ?
            </a>
          </div>
          <div>

            <button className="primary" type="submit">
              Entrer
            </button>
          </div>

            <div style={{display:'flex'}}>
            <span>Pas encore inscrit(e) ? <Link 
            to={`/auth/creer-compte?redirect=${redirect}`}
            
            >
              Créer un compte maintenant !
              </Link></span>
              
          </div>
        </LoginFormWrapper>
      </LoginForm>
    </LoginContainer>
  )
}

export default Signin
