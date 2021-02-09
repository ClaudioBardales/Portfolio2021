import React from "react"
import GlobalStyle from "../GlobalStyles"
import Navbar from "../components/Nav/Navbar"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  )
}
