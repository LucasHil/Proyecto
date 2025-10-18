import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx';

const Product = () => {

  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {

    products.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(()=>{
    fetchProductData();
  },[productId, products]) 

  return productData ? (
    <div className='pt-10 transition-opacity ease-in duration-500 opacity-100' >
        {/*Product data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/*Product Images */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
              <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] w-full'>
                {
                  productData.image.map((item, index)=>(
                    <img onClick={()=>setImage(item)} src={item} key={index} className='w-[25%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                  ))
                }
              </div>
              <div className='w-full sm:w-[70%] ' >
                <img className='w-full h-auto' src={image} alt="" />
              </div>
            </div>

          {/* Product Information */}
            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-0.5' >{productData.name}</h1>
              <p className='mt-1 text-gray-500'>{productData.description}</p>
              <p className='mt-5 text-2xl font-medium'>{currency}{productData.price}</p>
              <p className='text-gray-500'>Hasta 6x $12.300 sin interés.</p>
              <img className='w-[20%] border-1 rounded-lg border-gray-500 mt-1.5' src={image} alt="" />
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
              </div>
            </div>
        </div>

    </div>
  ) : <div className='opacity-0' ></div>
}

export default Product