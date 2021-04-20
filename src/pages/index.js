import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import GlobalStyle from "../GlobalStyles"
import Navbar from "../components/Nav/Navbar"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Project from "../components/Projects/Project"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </Router>
    </>
  )
}
