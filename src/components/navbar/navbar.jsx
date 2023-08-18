import React, { useState } from 'react';
import '../navbar/navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

function Navbar() {
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
      <section className='navBarSection'>
        <header className='header flex'>
          <div className='logoDiv'>
            <a href="#" className='logo flex'>
              <h1>Logo</h1>
            </a>
          </div>

          <div className={active}>
            <ul className='navLists flex'>
              {['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Blog', 'Contact'].map(
                (item) => (
                  <li
                    key={item}
                    className={`navItem ${selectedItem === item ? 'selected' : ''}`}
                    onClick={() => setSelectedItem(item)} // Set selected item on click
                  >
                    <a href={`#${item.toLowerCase()}`} className='navLink'>
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