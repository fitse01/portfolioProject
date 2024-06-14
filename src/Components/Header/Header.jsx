import React from 'react'

export const Header = () => {
  return (
    <header className=''>
        <nav className='flex mx-32 gap-[770px] my-10 '>
          <div className='text-5xl'>
            Meti
          </div>
          <div className='gap-20 flex text-xl font-skin-base '>
            <div>Home</div>
            <div>About</div>
            <div>Resume</div>
            <div>Service</div>
            <div>Projects</div>
            <div>Cotact</div>
          </div>
        </nav>
        <hr className='mx-32'/>
    </header>
  )
}
