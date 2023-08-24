import React, { useEffect, useState } from 'react';
import '../home/home.css'
import '../about/about'
import About from '../about/about'
import EducationAndExperience from '../education & experience/educationandexperience'
import Experience from '../experience/experience';
import Skills from '../skills/skills';
import Projects from '../projects/projects';
import Typed from 'typed.js'; // Import the Typed library
import HomePicture from '../../assets/HomePicture.png'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdLightMode } from 'react-icons/md'
import CV from '../../assets/NathanDavids_CV.pdf'

function home() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(newTheme === 'dark');
    // You might also want to emit an event or use a context to inform other components about the theme change.
  };

  useEffect(() => {
    // Initialize Typed within the useEffect hook
    const typed = new Typed(".multiple-text", {
      strings: ["Doesn't Work Hard"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
    <section id='home' className={isDarkMode ? 'dark' : 'light'}>
      <div id='homeContainer'>
        <div id='mainContainer'>
          <div id='nameContainer'>
            <h1 className='name'>Nathan <span className='surnameText'>Davids</span> Nathan <span className='surnameText'> Davids </span>
            Nathan <span className='surnameText'>Davids </span> Nathan <span className='surnameText'> Davids </span> Nathan 
            <span className='surnameText'>Davids</span>
            </h1>         
          </div>
          <div id='homeImgContainer'>
            <img src={HomePicture} alt="" className='homeImg'/>
          </div>
        </div>
        <div id='homeTextContainer'>
          <h1 id='homeQuote'>
          "Hard Work Beats Talent When Talent <span className='multiple-text'> Doesn't Work Hard"</span>
          </h1>
        </div>
        <div id='homeSocialsContainer'>
          <a href="https://www.linkedin.com/in/nathan-davids-7a857b233/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='icon'/></a>
          <a href="https://github.com/NathanDavids" target="_blank" rel="noopener noreferrer"><BsGithub className='icon'/></a>
          <a href="https://wa.link/38j3gp" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp className='icon'/></a>
          <button onClick={toggleDarkMode}><MdLightMode/> </button>
        </div>
        <div id='btnContainer'>
          <a href={CV} target="_blank" rel="noopener noreferrer"><button id='downloadBtn' >Download CV</button></a>
          </div>
      </div>
    </section>
    <About isDarkMode={isDarkMode} />
    <EducationAndExperience isDarkMode={isDarkMode} />
    <Experience isDarkMode={isDarkMode} />
    <Skills isDarkMode={isDarkMode}/>
    <Projects isDarkMode={isDarkMode}/>
    </>
  )
}

export default home