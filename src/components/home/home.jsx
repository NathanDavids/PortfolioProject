import React from 'react'
import '../home/home.css'
import HomePicture from '../../assets/HomePicture.png'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdLightMode } from 'react-icons/md'

function home() {
  return (
    <>
    <section id='home'>
      <div id='homeContainer'>
        <div id='mainContainer'>
          <div id='nameContainer'>
            <h1>Nathan <span>Davids</span> Nathan <span> Davids</span></h1>         
          </div>
          <div id='homeImgContainer'>
            <img src={HomePicture} alt="" className='homeImg'/>
          </div>
        </div>
        <div id='homeTextContainer'>
          <h1 id='homeQuote'>
          "Hard Work Beats Talent When Talent <span className='quoteRed'> Doesn't Work Hard"</span>
          </h1>
        </div>
        <div id='homeSocialsContainer'>
          <BsLinkedin className='icon'/>
          <BsGithub className='icon'/>
          <IoLogoWhatsapp className='icon'/>
          <MdLightMode className='icon'/>
        </div>
        <div id='btnContainer'>
          <button id='downloadBtn' >Download CV</button>
          </div>
      </div>
    </section>
    </>
  )
}

export default home