import React from 'react'
import {RiRestaurant2Fill} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className="flex items-center gap-2">
        <RiRestaurant2Fill className=' text-3xl text-red-600 my-8'/>
        <p className=' text-xl text-gray-500'>Foodie</p>
    </div>
  )
}

export default Navbar