import React from 'react'
import { assets } from '../../assets/assets.js'

const Hero = () => {
  return (
  <div className="w-full h-[700px]">
        <div className="top-0 left-0 w-full h-full flex flex-col items-center overflow-hidden">
              <h1 className="mb-10 mt-10 text-[60px] sm:text-[100px] font-extrabold md:text-[120px] lg:text-[150px]">JUST <span className='text-green-600'>DO</span> IT</h1>
              <div className='relative w-full flex items-center justify-center overflow-hidden bg-green-600 rounded-4xl'>
                <div className=' bg-[#bef35c] border absolute h-12 w-50 flex items-center top-0 left-1/10 justify-center p-1 rounded-bl-2xl rounded-br-2xl'> 
                  <img className='w-10' src={assets.icons_nike} alt="" />
                  <p className='text-[10px] pl-3 pb-0.5 montserrat-bold'>PRODUCT OF THE DAY</p>
                </div>
                <img className='z-10 mb-15 sm:mb-18 ' src={assets.nikegreen_rem} alt="" />
                <p className='text-center text-[200px] sm:text-[290px] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-0 anton-sc-regular'>NIKE</p>
                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={assets.white_nike} alt="" />
              </div>
              
        </div>
  </div>
  );
};

export default Hero