import React from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa"
import { SiStyledComponents } from "react-icons/si"
import Styled from "styled-components"

const Skills = () => {
  return (
    <StyledSection>
      <h1>My Skills!</h1>
      <Container>
        <FaHtml5 />
        <FaCss3Alt />
        <FaJsSquare />
        <FaGitAlt />
        <FaReact />
        <SiStyledComponents />
      </Container>
    </StyledSection>
  )
}

const StyledSection = Styled.div`
min-height: 70vh;
background-color: #000;
color: #fff;
h1{
  letter-spacing: 3px;
  margin: auto;
  width: 80%;
  padding: 1.5rem;
  text-align: center;
}
`
const Container = Styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
font-size: 5rem;
grid-gap: 6rem;
width: 75%;
margin: 0 auto;
justify-content: space-evenly;
justify-items: center;
align-content: space-evenly;
align-items: center;
@media (max-width: 768px){
  grid-template-columns: repeat(2,1fr);
  font-size: 3.30rem;
}
`

export default Skills
