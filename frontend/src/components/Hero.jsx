import React from 'react'
import { assets } from '../assets/assets.js'

const Hero = () => {
  return (
<div className="w-full h-[500px]">
      {/* Imágenes lado a lado */}

      {/* Texto encima de las imágenes */}
      <div className="top-0 left-0 w-full h-full flex flex-col justify-center items-center text-[#414141] px-4 z-10">
            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
      </div>
    </div>
  );
};

export default Hero