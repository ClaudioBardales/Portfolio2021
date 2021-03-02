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
      <h1>MY SKILLS!</h1>
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
min-height: 60vh;
background-color: #000;
color: #fff;
h1{
  margin: auto;
  width: 50%;
  padding: 3rem;
  text-align: center;
}
`
const Container = Styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
font-size: 5rem;
grid-gap: 4rem;
width: 50%;
margin: 0 auto;
justify-items: center;
@media (max-width: 768px){
  grid-template-columns: repeat(2,1fr);
  font-size: 3.30rem;
}
`

export default Skills
