import React from 'react'
import '../footer/footer.css'

function footer({ isDarkMode }) {
  return (
    <>
    <section id='footer' className={isDarkMode ? 'dark' : 'light'}>
    <div id="footerContainer" className="flex h-[50px] w-full ml-12 items-center">
    <p id='copyrightText' className="flex-grow text-center w-full pl-12">COPYRIGHT © NATHAN DAVIDS | 2023 </p>
    
    {/* Empty space to push the button to the right */}
    <div className="flex-grow"></div>
    
    <a href="#home"><button id='copyrightBtn' className="text-white py-2 px-5 mr-10 rounded-xl"> ↑ </button></a>
    </div>
    </section>
    </>
  )
}

export default footer