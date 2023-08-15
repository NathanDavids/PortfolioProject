import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Educationandxperience from './components/education & experience/educationandexperience'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Blog from './components/blog/blog'
import Contact from './components/contact/contact'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Educationandxperience/>
    <Skills/>
    <Projects/>
    <Blog/>
    <Contact/>
    </>
  )
}

export default App
