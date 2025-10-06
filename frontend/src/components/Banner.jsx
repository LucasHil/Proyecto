import React from 'react'
import { assets } from '../assets/assets.js'

const Banner = () => {
  return (
    <div>
        <div className='flez flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.adidas} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Banner