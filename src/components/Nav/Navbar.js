import React from "react"
import Styled from "styled-components"
import Burger from "./Burger"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <StyledNav>
      <Container>
        <Logo />
        <Burger />
      </Container>
    </StyledNav>
  )
}

const StyledNav = Styled.nav`
  z-index: 20;
  position: fixed;
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 9vh;
   }
`
const Container = Styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 90%;
margin: auto;
`

export default Navbar
