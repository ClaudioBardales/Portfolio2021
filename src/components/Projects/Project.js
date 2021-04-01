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
        projectLink={project.projectLink}
        githubLink={project.githubLink}
        description={project.description}
      />
    )
  })
  return (
    <StyledContainer id="projects">
      <h1>PROJECTS</h1>
      <Container>{projects}</Container>
    </StyledContainer>
  )
}

const StyledContainer = Styled.div`
min-height: 100vh;
h1{
    color: #000;
    width: 50%;
    padding: 1.5rem;
    text-align: center;
    margin: auto;
}
div{
 @media (max-width: 768px){
   margin: auto;
 }
`

const Container = Styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 1.5rem;
padding: 15px;
justify-items: center;
align-items: center;
@media (max-width: 768px){
  grid-template-columns: 1fr;
}
`

export default Project
