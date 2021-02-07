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
border-radius: 50px;
border: none;
padding: 0.75rem;
font-weight: Bold;
font-size: 1rem;
&:hover{
  background-color: black:
  color: white;
  cursor: pointer;
}
`

export default Button
