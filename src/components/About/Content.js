import React from "react"
import Styled from "styled-components"
import me from "../../img/aboutimg.jpg"

const Content = () => {
  return (
    <StyledContainer>
      <img src={me} alt="img" />
      <p>
        I am a Front-End Developer residing in Hayward, CA. I love learning
        about new technology and improving everyday on the skills that I already
        know. On my free time I like hike, cook, and play my Nintendo switch!
      </p>
    </StyledContainer>
  )
}

const StyledContainer = Styled.div`
display: flex;
justify-content: center;
width: 90%;
h1{
    color: black;
}
img{
    width: 40%;
    height: 40%;
}
p{
  margin-left: 20px;
  width: 30%;
  font-size: 2rem;
  line-height: 1.5;
}
`

export default Content
