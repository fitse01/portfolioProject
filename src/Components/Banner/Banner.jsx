import React from 'react'
import img from "../../assets/portfolioImage.png"
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <div className='bg-skin-fill mx-32 py-20'>  
        <div className='flex justify-center mx-10 gap-48'>
            <div className='flex flex-col'>
            <div className='flex justify-start w-[600px] h-96 py-10 items-center'>
                <h2 className='text-3xl'>
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Hi am Metages Tafese',
                    1000,
                    'Hi am Metages Tafese   a Full-Stack web  Developer',
                    1000,
                    'Hi am Metages Tafese UX / UI Designer',
                    1000,
                    'Hi am Metages Tafese  Programer',
                    1000,
                    1000,
                    'Hi am Metages Tafese Problem Solver',
                    1000,
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
                />
                </h2>
            </div>
                <div className='flex gap-10'>
                    <div className='p-5 bg-slate-900  text-white hover:bg-white hover:text-black' >Download CV </div>
                    <div className='p-5 bg-slate-600 text-white hover:bg-white hover:text-black '>Got Project</div>
                </div>
            </div>
            <div> 
                <img src={img} alt=""  className='w-[500px] h-[500px] flex justify-end'/>
            </div>
        </div>
    </div>
  )
}

export default Banner