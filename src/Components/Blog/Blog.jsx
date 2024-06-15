import React from 'react'
import img1 from "../../assets/projects/10004.jpg"
import img2 from "../../assets/projects/10005.jpg"


export const Blog = () => {
  return (
    <div id='blog'>
        <div className='py-28 flex flex-col gap-8 justify-center items-center mx-32'>
            <div className='text-gray-400 font-skin-base'>BLOG</div>
            <div className='text-6xl  font-skin-base pb-10'> Latest Blog</div>

            <div className='grid md:grid-cols-3 ms:grid-cols-1 gap-7'>
                <div>
                    <div>
                        <div className='mb-3'><img src={img1} alt="" /></div>
                        <div className='py-5 px-5 bg-skin-fill rounded-b-xl'>
                            <div className='text-gray-400 font-skin-base py-5'>January 15, 2024</div>
                            <div  className='text-xl  font-skin-base pb-5'>Spotlight — Equinox Collection by Shane Griffin</div>
                            <div className='text-gray-400 font-skin-base pb-5'>Looking for inspiration to kick it off, I stumbled across the work of Shane...</div>
                            <hr className='w-5 h-2 pb-5'/>
                            <div> <div className='p-5 bg-slate-900  text-white hover:bg-white hover:text-black w-40' >Read More </div></div>
                        </div>
                    </div>
                </div>
                <div>
                <div>
                    <div className='mb-3'><img src={img2} alt="" /></div>
                    <div className='py-5 px-5 bg-skin-fill  rounded-b-xl '>
                        <div className='text-gray-400 font-skin-base py-5'>January 15, 2024</div>
                        <div  className='text-xl  font-skin-base pb-5'>Spotlight — Equinox Collection by Shane Griffin</div>
                        <div className='text-gray-400 font-skin-base pb-5'>Looking for inspiration to kick it off, I stumbled across the work of Shane...</div>
                        <hr className='w-5 h-2 pb-5'/>
                        <div> <div className='p-5 bg-slate-900  text-white hover:bg-white hover:text-black w-40' >Read More </div></div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className='mb-3'><img src={img2} alt="" /></div>
                    <div className='py-5 px-5 bg-skin-fill  rounded-b-xl'>
                        <div className='text-gray-400 font-skin-base py-5'>January 15, 2024</div>
                        <div  className='text-xl  font-skin-base pb-5'>Spotlight — Equinox Collection by Shane Griffin</div>
                        <div className='text-gray-400 font-skin-base pb-5'>Looking for inspiration to kick it off, I stumbled across the work of Shane...</div>
                        <hr className='w-5 h-2 pb-5'/>
                        <div> <div className='p-5 bg-slate-900  text-white hover:bg-white hover:text-black w-40' >Read More </div></div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}
