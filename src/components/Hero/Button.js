import React from "react"
import Styled from "styled-components"

const Button = () => {
  return (
    <>
      <StyledButton>See My Projects!</StyledButton>
    </>
  )
}

const StyledButton = Styled.button`
color: #000;
background-color: white;

`

export default Button
