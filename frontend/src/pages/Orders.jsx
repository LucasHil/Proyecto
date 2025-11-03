import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from '../components/Title.jsx';
import { useEffect } from 'react';
import axios from 'axios';

const Orders = () => {

  const {backendUrl, token, currency} = useContext(ShopContext);
  const [orderData, setorderData] = useState([])

  const loadOrderData = async () =>{
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {},{headers:{token}})

      if(response.data.success){
        let allOrdersItems = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItems.push(item)
          })
        })
        setorderData(allOrdersItems.reverse())
      }

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  }, [token])

  return (
    <div className='pt-16'>
        <div className='text-2xl'>
          <Title text1={'My'} text2={'Orders'}/>
        </div>

        <div>
          {
            orderData.map((item, index)=>(
              <div key={index} className='py-4 bg-gray-100 mt-2 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                  <div className='flex items-start gap-6 text-sm px-2'>
                    <img src={item.image[0]} alt="" className='w-16 sm:w-20' />
                    <div>
                      <p className='sm:text-base font-medium'>{item.name}</p>
                      <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                        <p className='text-lg'> {currency} {item.price} </p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Size: {item.size} </p>
                      </div>
                      <p className='mt-1'>Date: <span className='text-gray-600'>{new Date(item.date).toDateString()}</span> </p>
                      <p className='mt-1'>Payment: <span className='text-gray-600'>{item.paymentMethod}</span> </p>
                    </div>
                  </div>
                  <div className='mx-5 md:w-1/2 flex justify-between'>
                    <div className='flex items-center gap-2'>
                      <p className='min-w-2 h-2 rounded-full bg-green-400'></p>
                      <p> {item.status} </p>
                    </div>
                    <button onClick={loadOrderData} className='mx-8 border px-4 py-2 text-sm font-medium rounded-md border-gray-300 text-gray-500 cursor-pointer'>Cancel</button>
                  </div>

              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Orders