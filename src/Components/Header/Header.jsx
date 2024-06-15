import React from 'react'

export const Header = () => {
  return (
    <header className='fixed top-0  z-50 '>
        <nav className='flex justify-center w-screen  md:gap-x-[550px] mb-10 py-5  bg-skin-fill '>
          <div className='text-5xl'>
            Meti
          </div>
          <div className='gap-10 flex text-xl font-skin-base'>
            <a href="#" className='text-gray-600 font-skin-base'> Home</a>
            <a href="#about" className='text-gray-600 font-skin-base'>About</a>
            <a href="#resume" className='text-gray-600 font-skin-base'>Resume</a>
            <a href="#service" className='text-gray-600 font-skin-base'> Service</a>
            <a href="#projects" className='text-gray-600 font-skin-base'> Projects</a>
            <a href="#contact" className='text-gray-600 font-skin-base'>Contact</a>
          </div>
        </nav>
        {/* <hr className='mx-32'/> */}
    </header>
  )
}
