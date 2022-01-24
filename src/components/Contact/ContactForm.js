import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import Styled from "styled-components"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("meqnobzl")
  if (state.succeeded) {
    return (
      <StyledHeading>
        <h3>Thank you for your Interest!</h3>
        <h4>I will get back to you soon!</h4>
      </StyledHeading>
    )
  }
  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <input type="name" placeholder="Name" required />
        <input id="email" type="email" name="email" placeholder="Email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="10"
          placeholder="Enter Message Here"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </StyledForm>
    </div>
  )
}

const StyledHeading = Styled.div`
color: white;
min-height: 50vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 2.7rem;
gap: 40px;
`

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

button[type='submit'] {
  display: inline-block;
  border: 0.1rem solid white;
  background-color: #000;
  border-radius: 0.12em;
  width: 40%;
  margin: 0 auto;
  color: white;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 12px;
  &:hover{
    color: black;
    background-color: #ffffff;
  }
}

`

export default ContactForm
