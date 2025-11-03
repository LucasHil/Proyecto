import React from 'react'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.nike} className='mb-5 w-20' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Powered by innovation and passion for sport.
                    At Nike, we believe greatness comes from pushing beyond limits.
                    Every product we create is designed to inspire movement and confidence.
                    Join the global community that never stops striving for better.
                    Your journey doesn't end here it only begins with every step you take.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-12 mt-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-12 mt-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+54 341-5662188</li>
                    <li>contacto@nikeargentina.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                Copyright 2025@ Nike.com - All Right Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer