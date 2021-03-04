import React from "react"
import Styled from "styled-components"
import Card from "./Card"
import ProjectCardContent from "./CardContent"

const Project = () => {
  const projects = ProjectCardContent.map((project, index) => {
    return (
      <Card
        imgSrc={project.projectImg}
        key={index}
        title={project.projectTitle}
        tech1={project.tech1}
        tech2={project.tech2}
        tech3={project.tech3}
        description={project.description}
      />
    )
  })
  return (
    <StyledContainer>
      <h1>PROJECTS</h1>
      <div>{projects}</div>
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
    background-color: teal;
}
`

export default Project
