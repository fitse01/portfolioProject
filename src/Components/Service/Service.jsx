import React from 'react'

const Service = () => {
  return (
    <div className='flex flex-col justify-center item-center mx-32 my-5' id='service'>
        <div className='flex justify-center  my-10'>SERVICES</div>
        <div className='flex justify-center'>
            <h2 className='text-5xl font-semibold mb-20'>Quality Services</h2>
        </div>

        <div className='flex gap-20'>
        <div className='px-6 bg-skin-fill  flex flex-col gap-8 py-12 w-[600px] font-skin-base hover:border-solid rounded-2xl'>
            <div>Icone</div>
            <div><h3 className='text-2xl'>Brand Identity Design</h3></div>
            <div><p className='text-gray-400 font-skin-base'>Kane gives you the blocks & kits you need to create a true website within minutes.</p></div>
        </div>

        <div className='px-6 bg-skin-fill  flex flex-col gap-8 py-12 w-[600px] font-skin-base rounded-2xl'>
            <div>Icone</div>
            <div><h3 className='text-2xl'>Website Design</h3></div>
            <div><p className='text-gray-400 font-skin-base'>Kane gives you the blocks & kits you need to create a true website within minutes.</p></div>
        </div>

        <div className='px-6 bg-skin-fill  flex flex-col gap-8 py-12 w-[600px] font-skin-base rounded-2xl'>
            <div>Icone</div>
            <div><h3 className='text-2xl'>Application Design</h3></div>
            <div><p className='text-gray-400 font-skin-base'>Kane gives you the blocks & kits you need to create a true website within minutes.</p></div>
        </div>
        </div>
    </div>
  )
}

export default Service