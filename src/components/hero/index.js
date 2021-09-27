import React from 'react'
import {HeroSection,HeroWrapper} from "./styles"

function HeroGeneric({title,subtitle}) {
  return (
    <HeroSection className="">
<HeroWrapper className="container is-max-desktop">
  <h1 className="title">{title}</h1>
  <p className="subtitle">{subtitle}</p>

</HeroWrapper>
</HeroSection>
  )
}

export default HeroGeneric
