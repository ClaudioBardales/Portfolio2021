import React from "react"
import Styled from "styled-components"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { IconContext } from "react-icons"

const Card = ({
  imgSrc,
  title,
  tech1,
  tech2,
  tech3,
  description,
  projectLink,
  githubLink,
}) => {
  return (
    <Container>
      <StyledCard>
        <img src={imgSrc} alt="img" />
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>
          <div>{tech1}</div>
          <div>{tech2}</div>
          <div>{tech3}</div>
        </h3>
        <StyledIconContainer>
          <IconContext.Provider
            value={{
              style: {
                fontSize: "1.7rem",
                color: "black",
              },
            }}
          >
            <a href={githubLink}>
              <StyledGitHubIcon />
            </a>
            <a href={projectLink}>
              <StyledLinkIcon />
            </a>
          </IconContext.Provider>
        </StyledIconContainer>
      </StyledCard>
    </Container>
  )
}

const Container = Styled.div`
max-width: 450px; 
`

const StyledCard = Styled.div`
display: flex;
flex-direction: column;
width: 100%;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 4px;
img{
  width: 100%;
  object-fit: cover;
}
h1{
  width: 75%;
  display: flex;
  justify-content: flex-start;
  font-size: 21px;
  margin: 1rem;
}
h3{
  display: flex;
  justify-content: flex-start;
  width: 20.188rem;
  gap: 0.625rem;
  color: #000;
  margin: 1rem;
  font-size: 1rem;
}

p{
  margin: 1rem;
}


`

const StyledIconContainer = Styled.div`
width: 100%;
display: flex;
gap: 1.2rem;
padding: 1.2rem;
@media (max-width: 768px){
  display: flex;
  flex-direction: row;
}
`
const StyledGitHubIcon = Styled(FaGithub)`
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
  }

`

const StyledLinkIcon = Styled(FiExternalLink)`
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
  }

`

export default Card
