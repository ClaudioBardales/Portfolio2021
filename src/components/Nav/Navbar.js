import React from "react"
import Styled from "styled-components"
import Burger from "./Burger"
const Navbar = () => {
  return (
    <StyledNav>
      <Container>
        <div>
          <h1>[CLAUDIO]</h1>
        </div>
        <Burger />
      </Container>
    </StyledNav>
  )
}

const StyledNav = Styled.nav`
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 7vh;
  padding: 5px;
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
