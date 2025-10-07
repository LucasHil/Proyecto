import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { assets } from '../assets/assets.js';
import Title from '../components/Title.jsx'

const Collection = () => {

  const {products} =useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'>
        {/*Filters */}
        <div className='min-w-60'>
          <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-1'>FILTERS <img src={assets.chevron_right} className={`h-5 sm:hidden pt-0.5 ${showFilter ? 'rotate-90': ''}`} alt="" /></p>
          {/*Category*/}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3 accent-black cursor-pointer' type="checkbox" value={'Men'} />Men
              </p>
              <p className='flex gap-2'>
                <input className='w-3 accent-black cursor-pointer' type="checkbox" value={'Women'} />Women
              </p>
              <p className='flex gap-2'>
                <input className='w-3 accent-black cursor-pointer' type="checkbox" value={'Kids'} />Kids
              </p>
            </div>
          </div>
          {/* Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3 accent-black cursor-pointer' type="checkbox" value={'Athletic'} />Athletic
              </p>
              <p className='flex gap-2'>
                <input className='w-3 accent-black cursor-pointer' type="checkbox" value={'Casual'} />Casual
              </p>
              <p className='flex gap-2'>
                <input className='w-3 accent-black cursor-pointer' type="checkbox" value={'Fashion'} />Fashion
              </p>
            </div>
          </div>
        </div>

        {/*Right Side*/}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'}/>
            {/*Product Sort*/}
            <select className='border-1 border-gray-300 text-sm px-3' name="" id="">
              <option value="relevent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low </option>
            </select>
          </div>

          {/*Products*/}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            
          </div>

        </div>
        
    </div>
    
  )
}

export default Collection