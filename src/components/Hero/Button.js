import React from "react"
import Styled from "styled-components"
import { Link } from "react-scroll"

const Button = () => {
  return (
    <>
      <StyledButton>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}
        >
          See My Projects!
        </Link>
      </StyledButton>
    </>
  )
}

const StyledButton = Styled.button`
z-index: 10;
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
