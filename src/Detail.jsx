import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'
import Loading from './Loading';


const Detail = () => {
    const {id} = useParams();
    const [meal, setMeal] = useState({});
    const [isLoading, setLoading] = useState(true)

    const getSingleMeal = async() => {
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setMeal(data.meals[0]);
        console.log(data.meals[0])
        setLoading(false)
    }

    useEffect(() => {
        getSingleMeal();
    }, [])

  return (
   <>
    {
        isLoading ? <Loading/> :  <div>
        <img src={meal.strMealThumb} className=" rounded-xl shadow-xl" width={"500px"} />
        <div className=" flex flex-col gap-5">
            <div className=' bg-blue-600 w-20 text-center font-bold text-white rounded-xl mt-5'>{meal.strCategory}</div>
            <h1 className=' text-2xl '>{meal.strMeal}</h1>
            <div className="">
                <h3 className='text-xl mb-1'>Instruction</h3>
                <p className=' text-gray-500 leading-7 tracking-widest'>{meal.strInstructions}</p>
            </div>
            <div className="flex items-center gap-5">
                <a href={meal.strYoutube} target={'_blank'}>
                <AiFillYoutube className='text-5xl text-red-600'/>
                </a>
                <p className='text-gray-500'>Watch on YouTube</p>
            </div>
        </div>
    </div>
    }
   </>
  )
}

export default Detail