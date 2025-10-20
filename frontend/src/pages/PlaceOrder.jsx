import React, { useContext, useState } from 'react'
import Title from '../components/Title.jsx'
import CartTotal from '../components/CartTotal.jsx'
import { assets } from '../assets/assets.js'
import { ShopContext } from '../context/ShopContext.jsx'

const PlaceOrder = () => {

  const [method, setMethod] = useState('visa');
  const{navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      {/* left */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'}/>
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3 w-full font-medium' />
          <input type="text" placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3 w-full font-medium' />

        </div>
        <input type="text" placeholder='Email' className='border border-gray-300 rounded py-1.5 px-3 w-full font-medium' />
        <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3 w-full font-medium' />
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3 w-full font-medium' />
          <input type="text" placeholder='Province' className='border border-gray-300 rounded py-1.5 px-3 w-full font-medium' />
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='Zip code' className='border border-gray-300 rounded py-1.5 px-3 w-full font-medium' />
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3 w-full font-medium' />
        </div>
        <input type="number" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3 w-full font-medium' />
      </div>

      {/* Right */}
      <div className='mt-8'>
        
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'}/>

          <div className='flex gap-3 sm:flex-col max-w-40'>
            <div onClick={()=> setMethod('paypal')} className='flex items-center gap-3 p-2 px-3 cursor-pointer border rounded-md border-gray-300'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'paypal' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.payment1} alt="" />
            </div>
            <div onClick={()=> setMethod('masterd')} className='flex items-center gap-3 p-2 px-3 cursor-pointer border rounded-md border-gray-300'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300  rounded-full ${method === 'masterd' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.payment2} alt="" />
            </div>
            <div onClick={()=> setMethod('pay')} className='flex items-center gap-3 p-2 px-3 cursor-pointer border rounded-md border-gray-300'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300  rounded-full ${method === 'pay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.payment3} alt="" />
            </div>
            <div onClick={()=> setMethod('visa')} className='flex items-center gap-3 p-2 px-3 cursor-pointer border rounded-md border-gray-300'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'visa' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.payment4} alt="" />
            </div>
          </div>

          <div className='w-full text-end mt-8'>

            <button onClick={()=> navigate('/orders')} className='bg-black cursor-pointer text-white px-16 py-3 text-sm rounded-full'>Place Order</button>

          </div>

        </div>

        

      </div>
        
    </div>
  )
}

export default PlaceOrder