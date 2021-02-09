import React from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa"
import { SiStyledComponents } from "react-icons/si"
import Styled from "styled-components"

const Skills = () => {
  return (
    <StyledSection>
      <FaHtml5 />
      <FaCss3Alt />
      <FaJsSquare />
      <FaGitAlt />
      <FaReact />
      <SiStyledComponents />
    </StyledSection>
  )
}

const StyledSection = Styled.div`
min-height: 50vh;
background-color: #000;
color: #fff;
display:grid;

`

export default Skills
