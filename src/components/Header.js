import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Navbar from './Navbar'


function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  
   
  return (
    <>  
    <Navbar toggle={toggle}/> 
        <Dropdown isOpen={isOpen} toggle={toggle}/>
    {/* {
       window.location.pathname === '/auth/connexion' ? null : window.location.pathname === '/auth/creer-compte' ? null : <>
        <Navbar toggle={toggle}/> 
        <Dropdown isOpen={isOpen} toggle={toggle}/>
       </>
    } */}
     
    </>
  )
}

export default Header