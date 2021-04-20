import React from "react"
import Styled from "styled-components"
import me from "../../img/aboutimg.jpg"
import resume from "../../img/Resume.pdf"

const Content = () => {
  return (
    <StyledContainer>
      <img src={me} alt="img" />
      <p>
        I am a Front-End Developer based in Hayward, CA. I love learning about
        new technologies and improving everyday on the skills that I already
        know. On my free time I like hike, cook, and play my Nintendo switch!
      </p>
      <p>
        You can download my resume
        <a href={resume} download>
          {" "}
          Here.
        </a>
      </p>
    </StyledContainer>
  )
}

const StyledContainer = Styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 80%;
h1{
    color: black;
}
img{
    width: 40%;
    margin: 3rem;
}
p{
  margin: 1.5rem;
  width: 70%;
  font-size: 1.5rem;
  line-height: 1.5;
}
@media (max-width: 768px){
  img{
    width: 80%;
  }
  p{
    width: 90%;
  }
}
@media(max-width: 500px){
  img{
    width: 90%;
  }
  p{
    width: 90%;
  }
}
`

export default Content
