import React, { useState } from "react"
import ModalImage from "react-modal-image";
import img1 from "../../assets/projects/10008.jpeg"
import img2 from "../../assets/projects/10001.jpeg"
import img3 from "../../assets/projects/10006.jpeg"
import img4 from "../../assets/projects/10007.jpeg"



export const Works = ({ src, alt, caption, onClose }) => {
  return (
    <div className='mx-32 ' id="project">
        <div className='py-28 flex flex-col gap-8 justify-center items-center'>
            <div className='text-gray-400 font-skin-base'>WORKS</div>
            <div  className='text-6xl  font-medium pb-10'>Creative Portfolio</div>

            {/* Projects */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-9'>
                <div className='border border-gray-300 rounded-2xl'>
                    <div>
                        <img src={img1} alt="" />
                    </div>

                    <div className='py-3 mx-5'>
                        <div className='text-gray-400 font-skin-base '>Branding</div>
                        <div className='text-xl  font-medium pb-4'>Mobile Application Design</div>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-2xl'>
                    <div>
                        <img src={img2} alt="" />
                    </div>

                    <div className='py-3 mx-5'>
                        <div className='text-gray-400 font-skin-base '>Design</div>
                        <div className='text-xl  font-medium pb-4'>
                        Website Makeup Design</div>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-2xl'>
                    <div>
                        <img src={img3} alt="" />
                    </div>

                    <div className='py-3 mx-5'>
                        <div className='text-gray-400 font-skin-base '>Graphics</div>
                        <div className='text-xl  font-medium pb-4'>
                        Brand Identity and Motion Design</div>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-2xl'>
                    <div>
                        <img src={img4} alt="" />
                    </div>

                    <div className='py-3 mx-5'>
                        <div className='text-gray-400 font-skin-base '>Graphics</div>
                        <div className='text-xl  font-medium pb-4'>
                        Brand Identity and Motion Design</div>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-2xl'>
                    <div>
                        <img src={img1} alt="" />
                    </div>

                    <div className='py-3 mx-5'>
                        <div className='text-gray-400 font-skin-base '>Graphics</div>
                        <div className='text-xl  font-medium pb-4'>
                        Brand Identity and Motion Design</div>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-2xl'>
                    <div>
                        <img src={img2} alt="" />
                    </div>

                    <div className='py-3 mx-5'>
                        <div className='text-gray-400 font-skin-base '>Graphics</div>
                        <div className='text-xl  font-medium pb-4'>
                        Brand Identity and Motion Design</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
