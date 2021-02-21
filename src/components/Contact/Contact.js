import React from "react"
import Styled from "styled-components"

const Contact = () => {
  return (
    <StyledContainter>
      <h1>CONTACT ME</h1>
    </StyledContainter>
  )
}

const StyledContainter = Styled.div`
min-height: 100vh;
background-color: #000;
h1{
    color: #fff;
    width: 50%;
    padding: 3rem;
    text-align: center;
    margin: auto;
}


`

export default Contact