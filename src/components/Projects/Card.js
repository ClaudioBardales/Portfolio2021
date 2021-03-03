import React from "react"
import Styled from "styled-components"

const Card = ({
  imgSrc,
  title,
  tech1,
  tech2,
  tech3,
  description,
  icon1,
  icon2,
}) => {
  return (
    <StyledCard>
      <img src={imgSrc} alt="img" />
      <h1>{title}</h1>
      <h3>
        {tech1}-{tech2}-{tech3}
      </h3>
      <p>{description}</p>
      <i>{icon1}</i>
      <i>{icon2}</i>
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

export default Card
