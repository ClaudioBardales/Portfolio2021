import hero from "../../img/hero.jpg"
import Button from "./Button"
import Styled from "styled-components"
import React from "react"

const Hero = () => {
  return (
    <StyledContainer>
      <Button />
      <Img src={hero} alt="" />
    </StyledContainer>
  )
}

const Img = Styled.img`
width: 100%;
height: 100%;
`

const StyledContainer = Styled.div`
height: 100vh;
`

export default Hero
