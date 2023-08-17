import React, { useEffect, useRef, useState } from 'react'
import '../projects/projects.css'
import { List } from './List'
import Car from '../../assets/car.jpg'

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
      <div className='w-[1200px] max-w-full'>
        <ul className='group flex flex-col md:h-[640px] md:flex-row md:gap-[1.5%]'>
          {List.map((Lists, index) => (
            <li onClick={() => setActiveItem(index)} aria-current={activeItem === index} className='relative md:w-[12%] md:[transition:width_var(--transition,200ms_ease-in)] md:hover:w-[12%] md:[&:not(:hover), &:not(:first),&:not(:last)]:group-hover:w-[7%] overflow-hidden [&[aria-current="true"]]:w-[60%] before:hidden md:before-block before:bg-red-300 before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px] before:absolute' key={Lists.name}>
              <div className='listBox relative h-[100%] w-[98%] overflow-hidden rounded-4xl bg-[grey] mb-4'>
              <img className=' absolute right-0 max-w-none h-auto w-[150px] md:h-[640px] md:w-[800px] left-1/2 top-1/2 md:-translate-x-1/2 -translate-y-1/2 object-cover grayscale' src={Car} alt={Lists.name} width={"800px"} height={"640px"} />
              <div id='purpleglow' className={"inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top[-148px] before:z-10 before activeitem === index ? md:opacity-25 : md:opacity-0"}>
                
              </div> 
              <div className={`left-8 top-8 p-10 md:p-10 w-[800px] transition-[transform,opacity] ${
              activeItem === index ? 'md:translate-x-0 md:opacity-100' : 'md:translate-x-4 md:opacity-0'
              }`}>
                <p className='text-sm md:text-lg uppercase text-[#FFFFFF]'>{Lists.title}</p>
                <p className='text-lg uppercase text-[#FFFFFF] md:text-4xl'>{Lists.name}</p>
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