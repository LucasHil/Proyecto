import React from 'react'
import Title from '../components/user/Title.jsx'
import { assets } from '../assets/assets.js'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8'>
        <Title text1={'About'} text2={'Us'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.heroTree} alt="" />
        <div className='flex flex-col  gap-6 md:w-2/4 text-gray-600'>
          <p>At Nike, we believe in the power of movement to change lives. Since day one, our mission has been to bring inspiration and innovation to every athlete in the world — and if you have a body, you are an athlete. Driven by curiosity, creativity, and a relentless pursuit of progress, we design products that empower people to push beyond their limits and redefine what’s possible. </p>
          <p>From cutting-edge performance gear to sustainable materials, every detail is crafted with purpose.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>But Nike is more than just a brand — it’s a global community united by passion, diversity, and the belief that sport can make the world a better place. Whether on the field, the court, or the street, we celebrate those who dare to dream, to move, and to make a difference. This is who we are. This is Nike.</p>
        </div>
      </div>

    </div>
  )
}

export default About