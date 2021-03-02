import React from "react"
import Styled from "styled-components"
import ContactForm from "../Contact/ContactForm"

const Contact = () => {
  return (
    <StyledContainter>
      <h1>CONTACT ME</h1>
      <ContactForm />
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
