import React from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Notfound from './Notfound'

export default function MealDetails() {

    let { idMeal } = useParams()
    let Ingredients = []
    let Measures = []     //I didnt use useState because it gave me this error 'Too many re-renders. React limits the number of renders to prevent an infinite loop'

    function getMealDetails() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    }

    let { data, isError, isLoading } = useQuery({
        queryKey: ['mealsDetails', idMeal],
        queryFn: getMealDetails,
        select: (data) => data?.data?.meals[0]
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    if (isError) {
        return <Notfound></Notfound>
    }

    Object.keys(data).forEach(element => {
        if (element.includes('strIngredient') && data[element] !== '' && data[element] != null) {
            Ingredients.push(data[element])
        }
    });

    Object.keys(data).forEach(element => {
        if (element.includes('strMeasure') && data[element] !== ' ' && data[element] != null) {
            Measures.push(data[element])
        }
    });

    return (
        <div id='mealsDetails' className="py-4 px-8 sm:ml-64">
            <div className='flex flex-col gap-4 lg:flex-row'>
                <div className='lg:w-3xl'>
                    <h1 className='text-5xl font-semibold mb-4'>{data?.strMeal}</h1>
                    <div className='grid gap-4 lg:grid-cols-2 items-stretch'>
                        <div>
                            <img src={data?.strMealThumb} className='rounded-2xl mb-8 w-full' alt="" />
                            <ul className='flex gap-4 justify-center'>
                                <li className="bg-red-600 font-bold text-white py-2 px-4 rounded-lg ">
                                    <a target="_blank" href={data?.strYoutube} className="flex gap-2 justify-center items-center">
                                        <i className="fa-brands fa-youtube" />
                                        youtube
                                    </a>
                                </li>
                                <li className="bg-green-400 font-bold text-white py-2 px-4 rounded-lg ">
                                    <a target="_blank" href={data?.strSource} className="flex gap-2 justify-center items-center">
                                        <i className="fa-earth fa-solid" />
                                        source
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className='font-bold text-lg'>{data?.strInstructions}</p>
                    </div>
                </div>
                <div className='p-4 lg:w-100'>
                    <div className='bg-white rounded-2xl p-4'>
                        <h3 className='text-2xl font-bold mb-4 border-b-4 p-2'>Ingredients</h3>
                        {Ingredients.map((ele, ind) => <div key={ele} className='flex justify-between p-2 border-b-2 last-of-type:border-b-0'>
                            <span className='font-bold'>{ele}:</span>
                            <span className='font-bold'>{Measures[ind]}</span>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
