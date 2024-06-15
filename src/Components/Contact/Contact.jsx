import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";

export const Contact = () => {
  return (
    <div className=''  id='contact'>
        <div className='py-28 flex flex-col gap-8 justify-center items-center'>
            <div className='text-gray-400 font-skin-base'>CONTACT</div>
            <div className='text-5xl  font-medium pb-10'>Get in Touch with Me!</div>

            <div>
                <div className='flex gap-16 '>
                    {/* left side */}
                    <div className='bg-skin-fill  py-16 h-[500px]   pl-10 pr-52 mt-10 rounded-xl  '>
                        <div className='flex flex-col item-center'>
                            <div className='mb-8'>
                                <small  ><SlLocationPin  className='w-5 h-5'/></small>
                                <h3 className='mt-3 text-xl'>Our Office:</h3>
                                <p className='text-gray-400 font-skin-base py-2'>Adis Abeba ,Legehar </p>
                            </div>

                            <div className='mb-8'>
                                <small><MdOutlinePhoneInTalk className='w-5 h-5'/></small>
                                <h3  className='mt-3 text-xl'>Contact Number:</h3>
                                <p className='text-gray-400 font-skin-base py-2'>+251901725663</p>
                            </div>

                            <div  >
                                <small><CiMail className='w-5 h-5'/></small>
                                <h3 className='mt-3 text-xl'>Email Us:</h3>
                                <p className='text-gray-400 font-skin-base py-2'>fitsumtafese01@gmail.com</p>
                            </div>
                        </div>
                    </div>

                        {/* right side */}
                    <div className='border border-s-violet-100 py-5  px-10'>
                        <div> 
                            <div className='flex gap-5 mb-5'>   
                                {/* Name input */}
                                <div className='flex flex-col'>
                                    <p className='text-gray-400  text-xl font-skin-base '> Full Name</p>
                                    <input type="text" placeholder='Fitsum tafese'  className='bg-gray-100  py-5 pl-10  pr-32 mt-10 rounded-xl hover:border hover:border-s-4'/>
                                </div>
                                <div className='flex flex-col '>
                                <p className='text-gray-400  text-xl font-skin-base '> Email Address</p>
                                        <input type="text" placeholder='fitse@websitename.com'  className='bg-gray-100  py-5 pl-10  pr-32 mt-10 rounded-xl hover:border hover:border-s-4'/>
                                </div>
                            </div>
                            {/* subject */}
                            <div className='flex flex-col mb-5'>   
                                <p className='text-gray-400  text-xl font-skin-base '> Subjct</p>
                                <input type="text" placeholder='Question!'  className='bg-gray-100  py-5 pl-10  pr-32 mt-10 rounded-xl hover:border hover:border-s-4'/>
                            </div>

                            <div className='flex flex-col mb-5'>
                                <p className='text-gray-400  text-xl font-skin-base '>Your Message</p>
                                <textarea name="message" id=""  className='bg-gray-100  py-8 pl-10  pr-32 mt-10 rounded-xl hover:border hover:border-s-4' placeholder='Write your Mesage'></textarea>
                            </div>
                            <div className='flex gap-5'>
                                <button className='py-5 px-6 w-54 bg-slate-900  text-white hover:bg-white hover:text-black flex gap-3'  ><p>Send Massage</p> <small><CiMail className='w-8 h-8 pl-3  ' /></small></button>
                                 
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div>
      <h1 className='flex justify-center item-center mx-32 py-9 text-2xl'>This is my Google Maps web page</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2819621269364!2d39.29187997473251!3d8.568863696022456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe4c294e6cb%3A0x6b86d6a89f24215c!2sAdama%20Science%20And%20Technology%20University%20-%20ASTU!5e0!3m2!1sen!2set!4v1718461597216!5m2!1sen!2set"
        width="1300"
        height="450"
        style={{ border: '0', display: 'block' }} // Object for style
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='flex justify-center item-center mx-32'
      ></iframe>
    </div>
    </div>
  )
}
