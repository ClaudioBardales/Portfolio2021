import hero from "../../img/hero.jpg"
import Button from "./Button"
import Styled from "styled-components"
import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

const Hero = () => {
  return (
    <StyledContainer>
      <h1>Claudio Bardales</h1>
      <StyledIconContainer>
        <IconContext.Provider
          value={{
            style: {
              color: "white",
            },
          }}
        >
          <a href="https://www.linkedin.com/in/claudiobardales/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ClaudioBardales">
            <FaGithub />
          </a>
        </IconContext.Provider>
      </StyledIconContainer>
      <p>&#60;Web Developer &#47;&#62;</p>
      <Button />
    </StyledContainer>
  )
}

const StyledIconContainer = Styled.div`
z-index: 1;
font-size: 2.5rem;
margin: 1rem;
width: 30%;
display: flex;
align-items: center;
justify-content: space-evenly;
`

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
  letter-spacing: 3px;
  font-size: 3.5rem;
  text-align: center;
  z-index: 10;
}
p{
z-index: 10;
font-size: 1.70rem;
margin: 0.75rem;
color: #fff;
}
`

export default Hero
