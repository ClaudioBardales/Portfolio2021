import React from "react"
import Styled from "styled-components"

const RightNav = ({ open }) => {
  return (
    <StyledUL open={open}>
      <li>About</li>
      <li>Project</li>
      <li>Contact Us</li>
    </StyledUL>
  )
}

const StyledUL = Styled.ul`
    display: flex;
    list-style: none;
    flex-flow:row nowrap;
    li{
        color: white;
        padding: 18px 10px;
        
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

export default RightNav
