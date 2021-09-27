import React,{useState,useEffect} from 'react'

function HideNavFooter(props) {
const [state, setstate] = useState(props.children)
useEffect(() => {
  window.location.pathname === '/auth/connexion' ? setstate(null) : window.location.pathname === '/auth/creer-compte' ? setstate(null) : setstate(props.children)
        
}, [props.children])
  return (
    <>
    {  state }   
    </>
  )
}

export default HideNavFooter
