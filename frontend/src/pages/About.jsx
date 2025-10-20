import React from 'react'
import Title from '../components/Title.jsx'
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore architecto fuga ab voluptate recusandae, consequuntur harum at quos illo, error esse tenetur rerum provident similique laboriosam! Odit, voluptas maxime?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fugit earum enim cumque assumenda quae porro, quos vero, iure asperiores fuga? Pariatur nihil exercitationem fuga harum officia voluptas similique reprehenderit.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ab quibusdam consequuntur obcaecati libero dignissimos nulla sed ea iste optio, neque fuga tenetur sunt repudiandae dolorem sint magni a nihil?</p>
        </div>
      </div>

    </div>
  )
}

export default About