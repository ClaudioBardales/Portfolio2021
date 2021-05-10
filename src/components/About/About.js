import React from "react"
import Styled from "styled-components"
import Content from "./Content"
const About = () => {
  return (
    <StyledContainer id="about">
      <h1>About Me</h1>
      <Content />
    </StyledContainer>
  )
}

const StyledContainer = Styled.div`
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      letter-spacing: 3px;
      margin: auto;
      width: 50%;
      padding: 1.5rem;
      text-align: center;
      color: #000;
    }
`
export default About
