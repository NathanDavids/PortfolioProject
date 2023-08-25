import React from 'react'
import '../contact/contact.css'
import {FaMapMarkedAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function contact({ isDarkMode }) {
  return (
    <>
    <section id='contact' className={isDarkMode ? 'dark' : 'light'}>
    <div id='contactContainer' className={`flex w-full min-h-screen max-w-4xl p-8 rounded-xl shadow-lg ${isDarkMode ? 'dark' : 'light'}`}>
      <div id='form' className={`form flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 sm:p-12 w-full max-w-7xl p-8 rounded-xl shadow-lg text-white ${isDarkMode ? 'dark' : 'light'}`}>
        <div className={`flex flex-col space-y-8 justify-between ${isDarkMode ? 'dark' : 'light'}`}>
          <div>
            <h1 id='heading' className={`flex justify-center font-bold text-4xl tracking-wide ${isDarkMode ? 'dark' : 'light'}`}> Contact <span id='heading2'> Me </span> </h1>
            <br />
            <p id='subheading' className={`flex justify-center text-center pt-2 text-white-100 text-sm ${isDarkMode ? 'dark' : 'light'}`}> It would be amazing to chat, exchange ideas, and explore potential collaboration opportunities.
              Let's schedule a call or grab a coffee sometime soon. Looking forward to hearing from you and embarking on an exciting journey of creativity together. </p>
          </div>
          <div id='icon' className={`flex flex-col items-center space-y-4 ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="inline-flex space-x-2 items-center">
              <FaMapMarkedAlt className="icon text-white-300 text-xl"/>
              <span>Cape Town, South Africa</span>
            </div>
            <div className={`inline-flex space-x-2 items-center ${isDarkMode ? 'dark' : 'light'}`}>
              <MdEmail className="icon text-white-300 text-xl"/>
              <span>nathandavids935@gmail.com</span>
            </div>
            <div className={`inline-flex space-x-2 items-center ${isDarkMode ? 'dark' : 'light'}`}>
              <BsFillTelephoneFill className="icon text-white-300 text-xl"/>
              <span>+27 61 679 2852</span>
            </div>
          </div>
          <div className="flex justify-center text-4xl tracking-wide">
            <h2 id='socialHeading' className={isDarkMode ? 'dark' : 'light'}>Socials</h2>
          </div>
          <div id='socialContainer' className={`flex justify-center justify-around space-x-4 text-4xl ${isDarkMode ? 'dark' : 'light'}`}>
            <a href="https://www.linkedin.com/in/nathan-davids-7a857b233" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/NathanDavids" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
            <a href="https://wa.link/38j3gp" target="_blank" rel="noopener noreferrer"><BsWhatsapp/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
          </div>
          <div id='inputContainer' className={`bg-black rounded-xl shadow-lg p-8 ${isDarkMode ? 'dark' : 'light'}`}>
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="text-sm"> Name </label>
                <input type="text" placeholder="Name" className="text-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <div>
                <label htmlFor="" className="text-sm"> Email </label>
                <input type="email" placeholder="Email" className="text-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <div>
                <label htmlFor="" className="text-sm"> Phone Number </label>
                <input type="number" placeholder="Phone Number" className="text-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <div>
                <label htmlFor="" className="text-sm"> Message </label>
                <textarea type="text" placeholder="Message" rows="4" className="text-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <button id='sendBtn' className={`inline-block self-center text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-[#D9171F] ${isDarkMode ? 'dark' : 'light'}`}> Send Message </button>
            </form>
          </div>
          <div id='copyright' className={`flex justify-center justify-between items-center ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 id='copyrightText'>COPYRIGHT © NATHAN DAVIDS | 2023 </h1>
            <a href="Home"><button id='backToTop' className={isDarkMode ? 'dark' : 'light'}> ↑ </button></a>    
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default contact