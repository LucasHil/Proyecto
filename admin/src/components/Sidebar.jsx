import React from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/assets.js'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-gray-300'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2" to="/add">
                <img className='w-7 h-7' src={assets.add} alt="" />
                <p className='hidden md:block'>Add Items</p>
            </NavLink>

            <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2" to="/list">
                <img className='w-7 h-7' src={assets.task_checklist} alt="" />
                <p className='hidden md:block'>List Items</p>
            </NavLink>

            <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2" to="/orders">
                <img className='w-7 h-7' src={assets.order_food_online} alt="" />
                <p className='hidden md:block'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar