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
        <div>
          <FaHtml5 />
          <h3>HTML5</h3>
        </div>
        <div>
          <FaCss3Alt />
          <h3>CSS3</h3>
        </div>
        <div>
          <FaJsSquare />
          <h3>JavaScript</h3>
        </div>
        <div>
          <FaGitAlt />
          <h3>GIT</h3>
        </div>
        <div>
          <FaReact />
          <h3>ReactJS</h3>
        </div>
        <div>
          <SiStyledComponents />
          <h3>Styled Components</h3>
        </div>
      </Container>
    </StyledSection>
  )
}

const StyledSection = Styled.div`
min-height: 56vh;
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
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  h3{
  font-size: 1.5rem;
}
}
@media (max-width: 768px){
  grid-template-columns: repeat(2,1fr);
  font-size: 3.30rem;
}
`

export default Skills
