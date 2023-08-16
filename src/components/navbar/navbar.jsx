import React, {useState} from 'react'
import '../navbar/navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi'

function Navbar() {
    const [active, setActive] = useState('navBar')
    // Function to toggle the navbar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    // Function to remove the navbar
    const removeNavbar = ()=>{
        setActive('navBar')
    }
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
                    <li className='navItem'>
                        <a href="#home" className='navLink'>Home</a>
                    </li>

                    <li className='navItem'>
                        <a href="#about" className='navLink'>About</a>
                    </li>

                    <li className='navItem'>
                        <a href="#educationandexperience" className='navLink'>Education</a>
                    </li>

                    <li className='navItem'>
                        <a href="#experience" className='navLink'>Experience</a>
                    </li>

                    <li className='navItem'>
                        <a href="#skills" className='navLink'>Skills</a>
                    </li>

                    <li className='navItem'>
                        <a href="#projects" className='navLink'>Projects</a>
                    </li>

                    <li className='navItem'>
                        <a href="#blog" className='navLink'>Blog</a>
                    </li>

                    <li className='navItem'>
                        <a href="#contact" className='navLink'>Contact</a>
                    </li>
                </ul>

                <div onClick={removeNavbar} className='closeNavbar'>
                    <AiFillCloseCircle className="icon"/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <BiMenu className="icon"/>
            </div>

        </header>
    </section>
    </>
  )
}

export default Navbar