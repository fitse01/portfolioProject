import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AfroStyles from "./afroStyles";
import "./testimonial.css"


export const Testimonial = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
        
  return (
    <div>
         <div className='py-28 flex flex-col gap-8 justify-center items-center'>
            <div className='text-gray-400 font-skin-base'>TESTINOMIALS</div>
            <div className='text-6xl  font-normal pb-10'> What clients say!</div>
            

            <div className=' bg-skin-fill mx-32'>
            <div className="content py-20 px-8 border border-solid rounded-md  mx-10">
                <div className="container">
                    <Slider {...settings}>
                    {AfroStyles.map((item) => (
                        <div key={item.id} className='flex justify-center items-center mx-40'>
                            <div >
                                <img src={item.src} alt={item.alt} className='rounded-full w-40 h-40 flex  justify-center'/>
                            </div>
                            <div className='py-5'>
                                <h2>{item.title}</h2>
                                <p className='w-96 flex flex-col justify-center'> {item.description}</p>
                            </div>
                            <div>
                                <h2>{item.name}</h2>
                                <p className='w-96 flex flex-col justify-center'> {item.position}</p>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
