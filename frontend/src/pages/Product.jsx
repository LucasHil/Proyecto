import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx';
import { assets } from '../assets/assets.js';
import RelatedProducts from '../components/RelatedProducts.jsx'

const Product = () => {

  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] =useState('');

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
                <p className='font-extralight'>Select Size</p>
                <div className='flex gap-2'>
                  {
                    productData.sizes.map((item, index)=>(
                      <button  onClick={()=>setSize(item)} className={` py-2 px-4 bg-gray-200 cursor-pointer rounded ${item === size ? 'bg-gray-300' : ''}`} key={index}>{item}</button>
                    ))
                  }
                </div>
              </div>
              <button className='bg-black text-white px-8 py-3 text-sm font-medium active:bg-gray-600 rounded-full'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5 text-gray-400'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>Seis cuotas sin interés con todos los bancos a partir de $149.999.</p>
                <p>El reembolso está disponible para este producto.</p>
                <p>Política de devolución y cambio en un plazo de 7 días.</p>
              </div>
            </div>
        </div>

        {/* Related Products */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0' ></div>
}

export default Product