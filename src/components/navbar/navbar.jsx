import React, { useState } from 'react';
import '../navbar/navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import LogoDark from '../../assets/Logo_Dark.png'
import LogoLight from '../../assets/Logo_Light.png'

function Navbar({ isDarkMode }) {
  const [active, setActive] = useState('navBar');
  const [selectedItem, setSelectedItem] = useState(null);

  const showNav = () => {
    setActive('navBar activeNavbar');
    setSelectedItem(null);
  };

  const removeNavbar = () => {
    setActive('navBar');
  };

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
                (item) => (
                  <li id='tags'
                    key={item}
                    className={`navItem ${selectedItem === item ? 'selected' : ''} ${isDarkMode ? 'dark' : 'light'}`}
                    onClick={() => setSelectedItem(item)} // Set selected item on click
                  >
                    <a href={`#${item.toLowerCase()}`} className={`navLink ${isDarkMode ? 'dark' : 'light'}`}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>

            <div onClick={removeNavbar} className='closeNavbar'>
              <AiFillCloseCircle className='icon' />
            </div>
          </div>

          <div onClick={showNav} className='toggleNavbar'>
            <BiMenu className='icon' />
          </div>
        </header>
      </section>
    </>
  );
}

export default Navbar;