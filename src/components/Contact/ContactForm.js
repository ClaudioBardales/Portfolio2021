import React from "react"
import Styled from "styled-components"

const ContactForm = () => {
  return (
    <div>
      <StyledForm method="POST" action="https://formspree.io/f/mdoyogrg">
        <input type="name" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Enter Message Here"
        ></textarea>
        <input type="Submit" value="SUBMIT" />
      </StyledForm>
    </div>
  )
}

const StyledForm = Styled.form`
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 1rem;
  max-width: 950px;
  margin: auto;
  padding: 1.5rem;
  position: relative;
  input[type],
    textarea {
  padding: 1rem;
  font-size: 20px;
  border-radius: 5px;
}

input[type='submit'] {
  display: inline-block;
  border: 0.1rem solid white;
  background-color: #201F1F;
  border-radius: 0.12em;
  width: 40%;
  margin: 0 auto;
  color: white;
  transition: all 0.3s;
  &:hover{
    color: black;
    background-color: #ffffff;
  }
}

`

export default ContactForm
