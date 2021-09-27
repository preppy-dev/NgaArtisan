import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { Link } from 'react-router-dom'
import NgaArtisanLogo from "../../assets/artisan.png"
import { FaUserAlt,FaPhoneSquareAlt,FaAngleDown } from "react-icons/fa";
import { signout } from '../../actions/userActions';
import {Dropdown,Logo,MenuHamburger,Nav,NavMenuLogo,NavWrapper,NavbarContainer,NavbarEnd,NavbarStart,ProfileBox} from './styles'



const Navbar = ({ toggle }, props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenAdmin, setisOpenAdmin] = useState(false)
  const toggleProfile = () => {
    setIsOpen(!isOpen)
  }
  const toggleProfileAdmin = () => {
    setisOpenAdmin(!isOpenAdmin)
  }

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const checkoutHandler = () => {
    props.history.push('/signin?redirect=myevents');
  };

  return (
    <Nav className="">
      <NavWrapper>
      <Logo to="/">   
          <NavMenuLogo src={NgaArtisanLogo} alt="N'ga Artisan" />
      </Logo>

      <MenuHamburger onClick={toggle} data-target="navbarExampleTransparentExample">
      <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
      </MenuHamburger>

      <NavbarContainer className="">
      <NavbarStart className="">
            
            <div className="navbar-item">
              <a href="tel:+22330626391" className="your-contact">
                <span><FaPhoneSquareAlt /></span>
                <span>+223 30 62 63 91</span>
              </a>
            </div>
            <Link to="/entreprise" className="navbar-item" >
              Solutions Enterprise
            </Link>
          </NavbarStart>

        <NavbarEnd className="field is-grouped">
          
            <p className="control">
              <Link to="/demande-de-devis" className="is-devis is-medium button is-rounded" >
                {/* <span className="icon">
                <i className="fab fa-twitter"></i>
              </span> */}
                <span>
                  Demander un Devis
                </span>
              </Link>
            </p>
            {
              userInfo ? (
                <Dropdown className="dropdown" isOpen={isOpen} onClick={toggleProfile}>
                  <ProfileBox>
                    <Link to="#">
                      {/* <img src={!userInfo.logo ? AvatarUpload : userInfo.logo} alt={userInfo.firstname+userInfo.lastname} /> */}<span><FaUserAlt /></span> {' '} {userInfo.firstname} {userInfo.lastname} <span><FaAngleDown /></span>
                    </Link>
                  </ProfileBox>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/commandes">Mes commandes</Link>
                    </li>

                    <li>
                      <Link to="/profile">
                        <i className="fa fa-user-o" aria-hidden="true"></i>{' '}
                        Gérer mon profil
                      </Link>
                    </li>

                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Deconnectez
                      </Link>
                    </li>
                  </ul>
                </Dropdown>
              ) : (
                <p className="control">
                  <Link to="/auth/connexion" className="button is-medium is-my-login is-rounded " href="/">
                    <span className="icon">
                      <FaUserAlt />
                    </span>
                    <span>Espace Client</span>
                  </Link>
                </p>
              )
            }
        </NavbarEnd>
      </NavbarContainer>
      </NavWrapper>
    </Nav>
  )
}

export default Navbar
