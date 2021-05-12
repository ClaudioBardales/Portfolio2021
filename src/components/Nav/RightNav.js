import React from "react"
import Styled from "styled-components"
import { Link } from "react-scroll"
import resume from "../../img/Resume.pdf"

const RightNav = ({ open }) => {
  return (
    <StyledUL open={open}>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <li>ABOUT</li>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <li>PROJECTS</li>
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <li>CONTACT</li>
      </Link>
      <li>
        <StyledButton href={resume} download>
          RESUME
        </StyledButton>
      </li>
    </StyledUL>
  )
}

const StyledUL = Styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    flex-flow:row nowrap;
    a{
      text-decoration: none;
    }
    li{
        color: white;
        padding: 18px 10px;
        cursor: pointer;
    }

    @media (max-width: 768px){
      align-items: center;
      justify-content: space-between;
      flex-flow: column;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 50vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
        li{
            color: white;
        }
    }

`
const StyledButton = Styled.a`
          display: inline-block;
          border: 0.1rem solid white;
          padding:0.35em 1.2em;
          background-color: #000;
          border-radius: 0.12em;
          margin: 0 auto;
          color: white;
          text-align: center;
          transition: all 0.3s;
          &:hover {
          color: black;
          background-color: #fff;
        }
    `

export default RightNav
