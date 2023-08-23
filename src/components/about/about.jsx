import React, { useEffect, useState } from 'react';
import '../about/about.css'
import '../home/home'
import AboutPicture from '../../assets/AboutPicture.jpg'
import {FaGreaterThan} from 'react-icons/fa'

function about() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    // Apply theme to your page's CSS classes based on isDarkMode
    // For example, add 'dark' or 'light' class to the body element
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  const projects = document.querySelector('#projectsBlock');
  const counter = document.querySelectorAll('.counter');
  let bol = false; 

  useEffect(() => {
    const projects = document.querySelector('#projectsBlock');
    const counter = document.querySelectorAll('.counter');
    let bol = false;

    const sectionOffset = projects.offsetTop + projects.offsetHeight;

    const updateCount = () => {
      counter.forEach((counter) => {
        const target = +counter.getAttribute('data-target');
        const speed = +counter.getAttribute('data-speed');
        const count = +counter.innerText;

        if (count < target) {
          counter.innerText = count + 1;
          setTimeout(updateCount, speed);
        } else {
          counter.innerText = target;
        }
      });
    };

    const handleScroll = () => {
      const pageOffset = window.innerHeight + window.pageYOffset;
      if (pageOffset > sectionOffset && !bol) {
        updateCount();
        bol = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <section id='about' className={isDarkMode ? 'dark' : 'light'}>
    <div id='aboutContainer' className={isDarkMode ? 'dark' : 'light'}>
      <div id="aboutTop" className={isDarkMode ? 'dark' : 'light'}>
        <div id='aboutHead'>
          <h1 id='aboutHeading'> About Me </h1>
          <hr id='aboutLine'/>
        </div>
        <div id='aboutTopContent'>
          <div id='imgContainer'>
            <img src={AboutPicture} alt="" id='aboutImg'/>
          </div>
          <div id='textContainer'>
            <h1 id='Heading'>FULL-STACK DEVELOPER</h1>
            <br />
            <h2 id='subHeading'> Hi there, I'm Nathan Davids, a passionate software developer with a love for coding and creating elegant, efficient solutions. </h2>
            <br />
            <div id='keyTop'>
            <h2 id='key1'> > Age: 23 </h2>  
            <h2 id='key2'> > City: Cape Town, South Africa </h2>      
            </div>
            <div id='keyBottom'>
              <h2><h2 id='key3'> > Occupation: Junior Software Developer </h2></h2>
            </div>
            <br />
            <div id='bodyText'>
              <h3>I'm a natural problem-solver, always eager to tackle new challenges and find creative solutions to complex issues.
              I'm always eager to explore new technologies to improve my skills and stay ahead of the curve.
              But beyond just coding, I'm also a team player who thrives in collaborative environments, and I'm committed to delivering high-quality code that's reliable, scalable, and easy to maintain.So if you're looking for a dedicated and experienced software developer to help take your project to the next level, feel free to get in touch!</h3>
            </div>
          </div>
        </div>
      </div>
      <div id='aboutBottom'>
        <div id='interestHead'>
          <h1 id='aboutHeading'> Interests </h1>
          <hr id='aboutLine'/>
        </div>
        <div id='aboutBottomContent'>
          <div id='topRow'>
            <div id='sports'>
              <h1>Sports</h1>
            </div>
            <div id='gaming'>
              <h1>Gaming</h1>
            </div>
            <div id='webDev'>
              <h1>Web Development</h1>
            </div>
          </div>
          <div id='bottomRow'>
            <div id='appDev'>
              <h1>App Development</h1>
            </div>
            <div id='cyber'>
              <h1>Cyber-Security</h1>
            </div>
            <div id='ai'>
              <h1>Artificial Intelligence</h1>
            </div>
          </div>
        </div>
        <div id='workHead'>
          <hr id='workLine1'/>
          <h1 id='workHeading'> Work </h1>
          <hr id='workLine2'/>
        </div>
        <div id='workContent'>
          <div id='projectsBlock'>
            <h1 className='counter' data-target='10' data-speed='500' >00</h1>
            <h1 className='projectLabel'>Projects</h1>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default about