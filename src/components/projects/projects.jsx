import React, { useEffect, useRef, useState } from 'react'
import '../projects/projects.css'
import { List } from './List'
import Car from '../../assets/car.jpg'
import Project1 from '../../assets/Project1.jpg'
import Project2 from '../../assets/Project2.jpg'
import Project3 from '../../assets/Project3.jpg'
import Project4 from '../../assets/Project4.jpg'

function projects() {
  const [activeItem, setActiveItem] = useState(0);
  const wrapperRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, [activeItem]);

  return (
    <>
    <section id='projects'>
    <div id='projectsContainer' className='flex h-full w-full items-center justify-center'>
      <div className='w-[1200px] max-w-full h-full max-h-full'>
        <ul className='group flex flex-col mt-20 md:h-[640px] md:flex-row md:gap-[1.5%]'>
          {List.map((Lists, index) => (
           <li id='contentContainer'
           onClick={() => setActiveItem(index)}
           aria-current={activeItem === index}
           className={`relative md:w-[12%] md:[transition:width_var(--transition,200ms_ease-in)] md:hover:w-[12%] md:[&:not(:hover), &:not(:first),&:not(:last)]:group-hover:w-[7%] overflow-hidden [&[aria-current="true"]]:w-[60%] before:hidden md:before-block before:bg-red-300 before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px] before:absolute ${
             activeItem === index ? 'active' : ''
           }`}
           key={Lists.name}
         >
           <div className='listBox relative h-[125px] md:h-[99%] w-[90%] overflow-hidden rounded-4xl mb-4'>
             <img id='websiteImg'
               className={`absolute right-0 max-w-none h-auto w-[150px] md:h-[640px] md:w-[800px] left-1/2 top-1/2 md:-translate-x-1/2 -translate-y-1/2 object-cover grayscale ${
                 activeItem === index ? 'opacity-1' : 'opacity-0'
               }`}
               src={Lists.image}
               alt={Lists.name}
               width={800}
               height={640}
             />
              <div id='projectName'>
                <h1 id='number'>{Lists.number}</h1>
                <h1><span className='letter'>{Lists.displayName1}</span></h1>
                <h1 id='letter'><span className='letter'>{Lists.displayName2}</span></h1>
                <h1 id='letter'><span className='letter'>{Lists.displayName3}</span></h1>
                <h1 id='letter'><span className='letter'>{Lists.displayName4}</span></h1>
                <h1 id='letter'><span className='letter'>{Lists.displayName5}</span></h1>
                <h1 id='letter'><span className='letter'>{Lists.displayName6}</span></h1>
              </div> 
              <div className={`flex justify-center left-8 top-8 -translate-y-36 p-10 md:p-10 w-[800px] transition-[transform,opacity] ${
              activeItem === index ? 'md:translate-x-0 md:opacity-100' : 'md:translate-x-4 md:opacity-0'
              }`}>
                <a href={Lists.link}><button id='linkBtn' className='text-lg uppercase text-[#FFFFFF] md:text-4xl'>Explore</button></a>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </section>
    </>
  )
}

export default projects
