import React, { useRef } from 'react'
import '../experience/experience.css'
import LiIcon from '../experience/LiIcon'
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

const experience = ({ isDarkMode }) => {
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
    <section id='experience' className={isDarkMode ? 'dark' : 'light'}>

      {/* This contains the Experience Information */}
    <div id='experienceContainer' className={isDarkMode ? 'dark' : 'light'}>
        <h2 id='experienceHeading' className={`font-bold text-8xl mb-20 w-full text-center ${isDarkMode ? 'dark' : 'light'}`}>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div style={{scaleY: scrollYProgress}} id='scrollBar' className={`absolute left-9 top-1 w-[4px] h-full bg-white origin-top ${isDarkMode ? 'dark' : 'light'}`}/>

          <ul id='educationText' className={`w-full flex flex-col items-start justify-between ml-4 ${isDarkMode ? 'dark' : 'light'}`}>
                <Details
                position="PABX Technician Intern" company="Innovo Networks"
                time="2022 - 2023" address="century city, cape town"
                work="In my role as a PABX Technician at Innovo Networks, I specialized in installation, support, and administration of telecommunication systems. I successfully deployed and maintained PABX systems, ensuring seamless communication for clients. My expertise in troubleshooting and providing technical assistance contributed to the smooth functioning of communication networks."
                />

                <Details
                position="Software Development Intern" company="CapaCiti (UvuAfrica)"
                time="2023 - 2023" address="salt river, cape town"
                work="As a Software Developer at CapaCiTi, I was responsible for creating websites and applications. I successfully delivered high-quality deliverables to clients, ensuring efficient and user-friendly solutions. Additionally, I effectively communicated project progress and outcomes through presentations, showcasing the value of the developed products to stakeholders."
                />

                <Details
                position="Junior Software Developer" company="Younglings"
                time="2023 - 2023" address=" lower long, cape town"
                work="Currently employed at Younglings, I serve as a Software Developer, responsible for creating websites and applications. I deliver projects with agility and efficiency, ensuring prompt and successful implementation. Additionally, I confidently present the completed projects to showcase their value and impact to stakeholders and clients."
                />
          </ul>
        </div>
    </div>
    </section>
    </>
  )
}

export default experience