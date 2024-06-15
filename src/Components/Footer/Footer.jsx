import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='py-8 mt-20 flex flex-col gap-8 justify-center items-center bg-skin-fill w-screen' >
        <div className='text-gray-400 font-skin-base text-3xl'>
            <i>LET'S BUILD SOMETHING <br />
            <b>AMAZING </b>TOGETHER</i>
        </div>

        <div className='flex justify-around gap-48'>
            <div className='flex justify-center items-center gap-5'>
                <a href=""><FaFacebook className='w-7 h-7 hover:text-red-400'/></a>
                <a href=""><FaTelegram className='w-7 h-7 hover:text-red-400'/></a>
                <a href=""><FaLinkedin className='w-7 h-7 hover:text-red-400'/></a>
                <a href=""><FaInstagram className='w-7 h-7 hover:text-red-400'/></a>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='bg-gray-200 py-3 px-3 my-3 text-2xl text-gray-400 font-skin-base '>NAVIGATION</div>
                <a href="#" className=' hover:text-red-400 text-gray-600 font-skin-base'>HOME</a>
                <a href="#resume" className=' hover:text-red-400 text-gray-600 font-skin-base '>PORTFOLIO</a>
                <a href="#about" className=' hover:text-red-400 text-gray-600 font-skin-base'>ABOUT</a>
                <a href="#contact" className=' hover:text-red-400 text-gray-600 font-skin-base'>CONTACT</a>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='bg-gray-200 py-3 px-3 my-3 text-2xl text-gray-400 font-skin-base'>CONTACT</div>
                <p className='text-gray-600 font-skin-base'>T : +251 938096211</p>
                <p className='text-gray-600 font-skin-base'>F :+001 225 3351</p>
                <p>E : <a className='hover:text-red-400  hover:scale-[100]' href="#contact"><i className='text-xl text-gray-400 hover:text-red-400  '>metagestafese@gmail.com</i></a></p>

            </div>
            <div className='flex flex-col gap-3'>
                <div className='bg-gray-200 py-3 px-3 my-3 text-2xl text-gray-400 font-skin-base'>ADDRESS </div>
                <p className='text-gray-600 font-skin-base'>El-Mahalla El-Kubra 37</p>
                <p className='text-gray-600 font-skin-base'>1776 Damietta</p>
                <p>Ethiopia</p>
            </div>

        </div>

        <hr className='mx-32 w-screen h-1 bg-slate-50'/> 
        <div>© 2022 Copy Right Developer <a href="fitsum.net" className='hover:text-red-400  hover:scale-[100]' >Fitsum Tafese</a></div>
    </div>
  )
}
