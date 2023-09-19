import React, { useState, useEffect } from 'react';
import '../navbar/navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import LogoDark from '../../assets/Logo_Dark.png';
import LogoLight from '../../assets/Logo_Light.png';
import { MdLightMode } from 'react-icons/md';
import { BsMoonStarsFill } from 'react-icons/bs';
import Home from '../home/home';
import About from '../about/about';
import EducationAndExperience from '../education & experience/educationandexperience'
import Experience from '../experience/experience';
import Skills from '../skills/skills';
import Projects from '../projects/projects';
import Blog from '../blog/blog'
import Contact from '../contact/contact'
import Footer from '../footer/footer'

function Navbar() {
  /* The following activates dark and light mode */
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(newTheme === 'dark');
  };
  
  const [active, setActive] = useState('navBar');
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeItemPosition, setActiveItemPosition] = useState(-1);

  const showNav = () => {
    setActive('navBar activeNavbar');
    setSelectedItem(null);
  };

  const removeNavbar = () => {
    setActive('navBar');
  };

  useEffect(() => {
    // Scroll event listener to update the active item based on the scroll position
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'blog', 'contact'];
    
      let activeIndex = -1; // To track the index of the active section
    
      for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            activeIndex = i;
            break;
          }
        }
      }
    
      setSelectedItem(sections[activeIndex]);
      setActiveItemPosition(activeIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <>
      <section className={`navBarSection ${isDarkMode ? 'dark' : 'light'}`}>
        <header className={`header flex ${isDarkMode ? 'dark' : 'light'}`}>
          <div className='logoDiv'>
            <a href="#home" className='logo flex'>
              <img src={isDarkMode ? LogoDark : LogoLight} alt="" />
            </a>
          </div>

          <div className={active}>
          <ul id='navLists' className={`navLists flex ${isDarkMode ? 'dark' : 'light'}`}>
          {['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Blog', 'Contact'].map(
            (item, index) => (
              <li
                key={item}
                className={`navItem ${selectedItem === item ? 'selected' : ''} ${isDarkMode ? 'dark' : 'light'}`}
              >
            <a
              href={`#${item.toLowerCase()}`}
              className={`navLink ${isDarkMode ? 'dark' : 'light'}`}
              onClick={() => setSelectedItem(item)} // Set selected item on click
            >
              {item}
            </a>
            {activeItemPosition === index && <div className="activeLine" />}
            </li>
            )
            )}
            <li className="navItem">
            <button className={`theme ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
            {isDarkMode ? (
              <MdLightMode className="lightIcon" />
            ) : (
              <BsMoonStarsFill className="darkIcon" />
            )}
            </button>
          </li>
          </ul>

            <div onClick={removeNavbar} className='closeNavbar'>
              <AiFillCloseCircle className={`icon ${isDarkMode ? 'dark' : 'light'}`} />
            </div>
          </div>

          <div onClick={showNav} className={`toggleNavbar ${isDarkMode ? 'dark' : 'light'}`}>
            <BiMenu className={`icon ${isDarkMode ? 'dark' : 'light'}`} />
          </div>
        </header>
      </section>
      <Home isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <EducationAndExperience isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode}/>
      <Projects isDarkMode={isDarkMode}/>
      <Blog isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </>
  );
}

export default Navbar;