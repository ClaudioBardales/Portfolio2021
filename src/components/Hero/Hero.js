import hero from "../../img/hero.jpg"
import Button from "./Button"
import Styled from "styled-components"
import React from "react"

const Hero = () => {
  return (
    <StyledContainer>
      <h1>Claudio Bardales</h1>
      <p>Web Developer</p>
      <Button />
    </StyledContainer>
  )
}

const StyledContainer = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-image:url(${hero});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
min-height: 100vh;
&:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  background: linear-gradient(to bottom, transparent 0%, black 100%);
}

h1{
  font-size: 3.5rem;
  z-index: 10;
}
p{
z-index: 10;
font-size: 2rem;
margin: 2rem;
color: #fff;
}
`

export default Hero
