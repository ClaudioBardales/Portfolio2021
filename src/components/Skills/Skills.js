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
min-height: 50vh;
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
font-size: 6rem;
grid-gap: 4rem;
width: 50%;
margin: 0 auto;
justify-items: center;
`

export default Skills
