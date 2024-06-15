import React from 'react'
import meti from "../../assets/Metages.jpg"
export const About = () => {
  return (
    <div>
        <div className='flex  mx-32 gap-40 my-20'>
            <div>
                <div className='absolute'>
                    <img src={meti} alt=""  className='w-[400px] h-[300px' />
                </div>
                <div className='relative top-96 left-[310px] w-40 shadow-md bg-skin-fill py-5  rounded-md'>
                    <p ><i className='text-6xl flex justify-center items-center pb-5 '>2 <sup>+</sup></i></p>
                    <p className='text-xl flex justify-center items-center'>Years Experience</p>
                </div>
            </div>
            <div>
                <div className='pl-40'>
                    <div className='flex justify-center  text-gray-400 text-3xl mt-10'>ABOUT ME</div>
                    <div className='mt-10  mx-10'>
                        <p className='py-10'>Hello there! My name is  <a className='hover:text-red-400  hover:scale-[100]' href="#contact"><b className='text-2xl'>Metages Tafese</b></a> . I am a full-stack web developer, and I'm very passionate and dedicated to my work.</p>
                        <p>With 1 years experience as a professional a web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the development process, from discussion and collaboration.</p>
                    </div>
                    <div className='flex gap-10 my-10 mx-10'>
                        <div>
                            <p className='text-xl text-gray-400'>Age</p>
                            <p><i><b>17</b></i></p>
                        </div>
                        <div>
                            <p className='text-xl text-gray-400'>Born IN</p>
                            <p><b className='hover:text-red-400'>Adama Ethiopia</b> </p>
                        </div>
                        <div>
                            <p className='text-xl text-gray-400'>MAIL </p>
                            <a className='hover:text-red-400  hover:scale-[100]' href="#contact"><i className='text-xl text-gray-400 hover:text-red-400  '>metagestafese@gmail.com</i></a>
                        </div>
                        <div>
                            <p className='text-xl text-gray-400'>Phone</p>
                            <p><i><b className='hover:text-red-400'>+251938096211</b></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
