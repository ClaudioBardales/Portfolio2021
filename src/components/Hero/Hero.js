import hero from "../../img/hero.jpg"
import Styled from "styled-components"
import React from "react"

const Hero = () => {
  return (
    <>
      <StyledImg img={hero} alt="hero" />
    </>
  )
}

const StyledImg = Styled.img`
 background-image: url(${hero});
 background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
 min-height: 100vh;

`

export default Hero
