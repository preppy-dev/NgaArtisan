import styled from 'styled-components'
import { Link} from 'react-router-dom'


export const Nav = styled.nav`

z-index:999;
position: sticky;
top: 0;
width:100%;
/* overflow:hidden; */
background-color:#fff;
box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);

/* .card{
  border-radius: none !important;
} */
/* .active {
  color:#2755A1;
}

.active .check-item {

background-color: #2755A1;
height: 2px;
transition: all .2s linear;

display: block;
position: absolute;
width: 100%;
bottom: 0;
} */
.is-my-login{
  background-color:#FF6201;
  border:0;
  color:#fff
}
.is-my-login:hover{
  
  color:#212223;
}
.is-devis{
border-color: #FF6201;
}
.button.is-medium {
    font-size: 1.2rem;
}
a{

  color:#C1BEBE;

}
a:hover{
  color:#FF6201;
}
a:focus{
  color:#C1BEBE;
}

.your-contact{
  display: flex;
  align-items: center;
  svg{
    color:#FF6201;
    width:35px;
    height: 35px;
    margin-right: 0.5rem;
  }
}
`;
export const NavWrapper = styled.div` 
display:flex;
justify-content:space-between;
align-items: center;
padding:1rem;
/* height: 10vh; */
`;

/* const Logo = styled.div` 
.navbar-item img {
    max-width: 3.5rem;
    max-height: 3.5rem;
}
`; */

export const ProfileBox = styled.div`
background-color:#fff;
padding:0.7rem 1rem;
border-radius:25px;
box-shadow: rgba(25 31 40 / 15%) 2px 1px 5px 3px ;
margin-left:.5rem;
`;

export const Dropdown = styled.div`
  display: inline-block;
  position: relative;
.dropdown-content {
  position: absolute;
  display:${({ isOpen, isOpenAdmin }) => (isOpen ? 'block' : isOpenAdmin ? 'block' : 'none')};
  right: 0;
  min-width: 15rem;
  padding: 1rem;
  z-index: 10;
  background-color: #fff;
  box-shadow: rgba(25 31 40 / 15%) 2px 1px 5px 3px ;
  margin: 0;
  margin-top: 0.3rem;
  border-radius: 0.5rem;
  list-style-type:none;
  li{
    padding:0.6rem;
    i{
      font-size:4rem;
    }
  }
}
/* & .dropdown-content {
  display: block;
} */

`;
export const Logo = styled(Link)` 
/* margin: 0 16px; */
`;

export const NavMenuLogo = styled.img `
width:60px;
`;
export const MenuHamburger = styled.div `
display:none;

@media screen and (max-width:925px){
  display: block;
  .line {
    display: block;
    width: 18px;
    height: 1px;
    background-color: #323232;
    margin: 5px 0;
  }
}
`;

export const NavbarContainer = styled.div `
display:flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
 @media screen and (max-width:925px){
  display:none;
}

`;
export const NavbarEnd = styled.div `

 @media screen and (max-width:1045px){
  width:100%;
  margin-right: 0;
}


`;


export const NavbarStart = styled.div `
display:flex;
justify-content: space-between;
align-items: center;
margin-right: 1rem;
@media screen and (max-width:1045px){
  width:100%
}
`;