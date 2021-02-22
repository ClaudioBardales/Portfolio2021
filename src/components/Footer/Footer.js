import React, { useState, useEffect } from "react"
import Styled from "styled-components"

function Footer() {
  const today = new Date()
  return (
    <StyledFooter>
      <p>Made With Love ❤ by Claudio Bardales &#169; {today.getFullYear()} </p>
    </StyledFooter>
  )
}

const StyledFooter = Styled.div`
min-height: 5vh;
background: #201F1F;
display: flex;
justify-content: center;
p{
    color: #fff;
    display: flex;
    align-items: center;
    padding: 7px;
    font-weight: bold;
}
`

export default Footer
