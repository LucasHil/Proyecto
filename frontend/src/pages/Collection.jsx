import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { assets } from '../assets/assets.js';
import Title from '../components/Title.jsx'
import ProductItem from '../components/ProductItem.jsx';

const Collection = () => {

  const {products} =useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }  

  }

  const toggleSubCategory = () => {
    if (subCategory.includes(e.target.value)) {
      
    }
  }

  useEffect(()=>{
    setFilterProducts(products);
  }, [])

  
  useEffect(()=>{
    console.log(category);
  }, [category])

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
                <input className='w-3 accent-black cursor-pointer' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
              </p>
              <p className='flex gap-2'>
                <input className='w-3 accent-black cursor-pointer' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
              </p>
              <p className='flex gap-2'>
                <input className='w-3 accent-black cursor-pointer' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
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
            {
              filterProducts.map((item, index) =>(
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
              ))
            }
          </div>

        </div>
        
    </div>
    
  )
}

export default Collection