import React, { useRef } from 'react'
import '../education & experience/educationandexperience.css'
import LiIcon from '../education & experience/LiIcon'
import { motion, useScroll } from "framer-motion"

// This allows provides the format and styling for the points in the list, while also ensuring the use of the bullet point styling from "Lilcon.jsx"
const Details = ({position, company, time, address, work}) => {
  return (<li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between'>

      <LiIcon/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
          <h3 className='capitalize font-bold text-3xl'>{position}&nbsp;<a href="www.google.com" target='_blank' className='companyText text-[#D9171F] capitalize text-2xl'>@{company}</a></h3>
          <span className='capitalize font-semibold text-dark/75'>
              {time} | {address}
          </span>
          <p className='font-medium w-full'>
              {work}
          </p>
      </motion.div>
  </li>
  )
}

const educationandexperience = ({ isDarkMode }) => {
  // Provides the scroll animation
  const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <>
    <section id='education' className={isDarkMode ? 'dark' : 'light'}>

      {/* This contains the Education Information */}
    <div id='educationandexperienceContainer' className={isDarkMode ? 'dark' : 'light'}>
        <h2 id='educationHeading' className={`font-bold text-8xl mb-20 w-full text-center ${isDarkMode ? 'dark' : 'light'}`}>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div style={{scaleY: scrollYProgress}} id='scrollBar' className={`absolute left-9 top-1 w-[4px] h-full bg-white origin-top ${isDarkMode ? 'dark' : 'light'}`}/>

          <ul id='educationText' className={`w-full flex flex-col items-start justify-between ml-4 ${isDarkMode ? 'dark' : 'light'}`}>
            <Details
            position="Information Management " company="Damelin"
            time="2018 - 2021" address="mowbray, cape town"
            work="A Bachelor of Commerce in Information Management blends business knowledge with technical skills to manage data effectively. Graduates learn to design efficient information systems, make data-driven decisions, and ensure data security. Career options include data analysts, IT consultants, and information systems managers."
            />
            <Details
                position="Information Systems" company="University of the Western Cape"
                time="2021 - 2021" address="bellville, cape town"
                work="A Bachelor of Commerce Honours in Information Systems provides advanced knowledge in managing complex IT solutions and data analysis. Graduates align information systems with organizational strategies, ensuring a competitive edge through innovation. The program emphasizes cybersecurity, emerging technologies, and practical experience, preparing students for leadership roles in the technology-driven business landscape."
                />

                <Details
                position="CompTIA Security +" company="CompTIA"
                time="2022 - 2022" address="milnerton, cape town"
                work="The CompTIA Security+ certificate offers a practical education in cybersecurity fundamentals, recognized globally by employers. It covers a wide range of security topics, preparing individuals for various cybersecurity roles. This certification serves as a stepping stone for advanced cybersecurity credentials and opens doors to entry-level cybersecurity positions. Graduates gain hands-on skills to address real-world security challenges and contribute to securing IT infrastructures effectively."
                />
          </ul>
        </div>
    </div>
    </section>
    </>
  )
}

export default educationandexperience