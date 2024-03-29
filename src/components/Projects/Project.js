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
    <>
      <Title className="title">Projects</Title>
      <StyledContainer id="projects">
        <Container>{projects}</Container>
      </StyledContainer>
    </>
  )
}

const Title = Styled.h1`
    color: #000;
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    letter-spacing: 3px;
`

const StyledContainer = Styled.div`
min-height: 70vh;
h1{
    color: #000;
    width: 75%;
    text-align: center;
}
`

const Container = Styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 1.5rem;
padding: 15px;
width: 100%;
justify-items: center;
align-items: center;
@media (max-width: 1160px){
  grid-template-columns: 1fr;
}
`

export default Project
