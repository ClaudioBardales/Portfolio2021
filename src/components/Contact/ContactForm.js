import React from "react"
import Styled from "styled-components"

const ContactForm = () => {
  return (
    <div>
      <StyledForm
        method="POST"
        action="https://formspree.io/claudioeduardobardales@gmail.com"
      >
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
  background-color: #201F1F;
  width: 30%;
  margin: 0 auto;
  color: white;
  font-weight: bold;
}

`

export default ContactForm
