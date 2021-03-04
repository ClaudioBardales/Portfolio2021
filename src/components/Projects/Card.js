import React from "react"
import Styled from "styled-components"
import { FaGithub } from "react-icons/fa"
import { SiNetlify } from "react-icons/si"
import { IconContext } from "react-icons/lib"

const Card = ({ imgSrc, title, tech1, tech2, tech3, description }) => {
  return (
    <StyledCard>
      <img src={imgSrc} alt="img" />
      <h1>{title}</h1>
      <h3>
        {tech1}-{tech2}-{tech3}
      </h3>
      <p>{description}</p>
      <IconContext.Provider>
        <StyledIconContainer>
          <FaGithub />
          <SiNetlify />
        </StyledIconContainer>
      </IconContext.Provider>
    </StyledCard>
  )
}

const StyledCard = Styled.div`
border: 1px solid red;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 30%;
img{
  width: 100%;
}
h1{
  font-size: 20px;
  padding: 10px !important;
}
h3{
  font-size: 14px;
  color: #000;
  margin: 1rem;
  text-align: center;
}
p{
  border: 1px solid blue;
  text-align: center;
}
`

const StyledIconContainer = Styled.div`
border: 1px solid black;
width: 100%;
text-align: center;
padding: 1rem;

`

export default Card
