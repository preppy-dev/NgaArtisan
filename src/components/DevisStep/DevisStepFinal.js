import React from 'react'
import CheckoutSteps from "./../CheckoutSteps"
import styled, { css } from 'styled-components'

function DevisStep4(props) {
  return (
    <>
      <h1 className="titlestep">{props.title}</h1>

<CheckoutSteps step4>
  BESOIN 3
</CheckoutSteps>
<div>
<button onClick={props.prev}>Precedent</button>
<button onClick={props.next}>Envoyer</button>
      </div>
    </>
    
  )
}

export default DevisStep4
