import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillEye} from 'react-icons/ai'

const Card = ({meal}) => {
  return (
    <div className=' w-60 border-2 drop-shadow-sm rounded-lg flex flex-col items-center justify-center p-5 gap-5 card'>
        <img src={meal.strMealThumb} className=" rounded-xl" width={'200px'} />
        <h3>{meal.strMeal}</h3>
        <Link to={`/detail/${meal.idMeal}`} className='flex mt-auto'>
            <button className=' px-5 py-1 text-white bg-blue-600 rounded-lg border'>
                <AiFillEye className='text-2xl'/>
            </button>
        </Link>
    </div>
  )
}

export default Card