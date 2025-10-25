import React from 'react'
import { assets } from '../assets/assets.js'

const Hero = () => {
  return (
<div className="relative w-full h-[500px]">
      {/* Imágenes lado a lado */}
      <div className="flex flex-col md:flex-row w-full h-full ">
        <img
          className="w-1/2 h-full object-cover"
          src={assets.heroTree}
          alt="Left"
        />
        <img
          className="w-1/2 h-full object-cover"
          src={assets.heroTree} 
          alt="Right"
        />
      </div>

      {/* Texto encima de las imágenes */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-[#414141] px-4 z-10">
            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
      </div>
    </div>
  );
};

export default Hero