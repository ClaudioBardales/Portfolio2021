import React from "react"
import Styled from "styled-components"
import ContactForm from "../Contact/ContactForm"

const Contact = () => {
  return (
    <StyledContainter id="contact">
      <h1>Contact Me</h1>
      <ContactForm />
    </StyledContainter>
  )
}

const StyledContainter = Styled.div`
min-height: 100vh;
background-color: #000;
h1{
    letter-spacing: 3px;
    color: #fff;
    width: 50%;
    padding: 1.5rem;
    text-align: center;
    margin: auto;
}
`

export default Contact
