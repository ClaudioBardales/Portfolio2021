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
          <StyledHTML5Icon />
          <h3>HTML5</h3>
        </div>
        <div>
          <StyledCssIcon />
          <h3>CSS3</h3>
        </div>
        <div>
          <StyledJsIcon />
          <h3>Javascript</h3>
        </div>
        <div>
          <StyledGitIcon />
          <h3>Git</h3>
        </div>
        <div>
          <StyledReactIcon />
          <h3>ReactJS</h3>
        </div>
        <div>
          <StyledComponentsIcon />
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
font-size: 6.5rem;
grid-gap: 6rem;
min-height: 65vh;
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
  font-size: 4.30rem;
}
`

const StyledHTML5Icon = Styled(FaHtml5)`
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
  }
`
const StyledCssIcon = Styled(FaCss3Alt)`
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
  }
`
const StyledJsIcon = Styled(FaGitAlt)`
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
  }
`
const StyledGitIcon = Styled(FaJsSquare)`
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
  }
`
const StyledReactIcon = Styled(FaReact)`
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
  }
`
const StyledComponentsIcon = Styled(SiStyledComponents)`
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
  }
`

export default Skills
