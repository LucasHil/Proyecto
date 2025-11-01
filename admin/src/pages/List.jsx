import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets.js'

const List = ({token}) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {

      const response = await axios.get(backendUrl + '/api/product/list')
      console.log(response)
      if (response.data.success) {
        setList(response.data.product);
      } 
      else {
        console.log(error);
        toast.error(response.data.message);
      }


    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) =>{
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers:{token}})

      if(response.data.success){
        toast.success(response.data.message)
        await fetchList();
      }else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchList()
  },[])

  

  return (
    <>
        <p className='mb-2'>All Products List</p>

        <div className='flex flex-col gap-2'>
          {/* List Title */}
          <div className=' grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 gap-2 bg-gray-100 text-sm'>
            <b>Image</b>
            <b>Name</b>
            <b>Catagory</b>
            <b>Price</b>
            <b>Action</b>
            
          </div>

          {/* Product List */}

          {
            list.map((item, index)=>(
              <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border border-gray-200'>
                <img className='w-13' src={item.image[0]} alt="" />
                <p className='text-xs md:text-base'>{item.name} </p>
                <p className='text-xs md:text-base'>{item.category} </p>
                <p className='text-xs md:text-base'>{currency} {item.price}</p>
                <img onClick={()=>removeProduct(item._id)} className='h-5 cursor-pointer hover:scale-120' src={assets.circle_xmark} alt="" />
              </div>
            ))
          }





        </div>
    </>
  )
}

export default List