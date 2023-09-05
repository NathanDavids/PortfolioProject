import React, { useState, useEffect } from 'react';
import '../navbar/navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import LogoDark from '../../assets/Logo_Dark.png';
import LogoLight from '../../assets/Logo_Light.png';

function Navbar({ isDarkMode }) {
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
    </>
  );
}

export default Navbar;