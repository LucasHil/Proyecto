import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext.jsx'
import Title from './Title.jsx'
import ProductItem from './ProductItem.jsx'


const LatestCollection = () => {
    
    const {products} = useContext(ShopContext);
    {/* Variable de estado para los productos */}
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
      setLatestProducts(products.slice(0,10));
    }, [products])

  return (
    <div className='my-10' >
        <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 lato-thin'>
          Discover the newest styles that elevate your performance and style.
          </p>
        </div>
        {/* Renderizacion de productos - Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProducts.map((item, index)=>(
              <ProductItem key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price} />
            ))
          }
        </div>
    </div>
  )
}

export default LatestCollection