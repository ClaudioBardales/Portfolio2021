import React from "react"
import Styled from "styled-components"
import Content from "./Content"
const About = () => {
  return (
    <StyledContainer>
      <h1>ABOUT</h1>
      <Content />
    </StyledContainer>
  )
}

const StyledContainer = Styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        margin: 3rem;
        color: #000;
        padding: 20px;
    }
`
export default About
