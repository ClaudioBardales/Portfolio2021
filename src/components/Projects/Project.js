import React from "react"
import Styled from "styled-components"
import Card from "./Card"

const Project = () => {
  return (
    <StyledContainer>
      <h1>PROJECTS</h1>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </StyledContainer>
  )
}

const StyledContainer = Styled.div`
min-height: 100vh;
h1{
    color: #000;
    width: 50%;
    padding: 3rem;
    text-align: center;
    margin: auto;
}
`

export default Project
