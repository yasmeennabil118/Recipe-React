import React from 'react'
import { Link } from 'react-router-dom'

export default function MealItem({ prod }) {

    let { strMealThumb, strMeal, strArea, idMeal } = prod

    return (
        <div className="meal mt-14 px-4 py-6 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="text-center hover:shadow-xl group bg-white p-12 pb-4 rounded-[35px]">
                <img src={strMealThumb} className="w-full mealImg rounded-full -translate-y-20 shadow-2xl" />
                <h3 className="mb-2 font-bold -mt-12 text-xl">{strMeal}</h3>
                {strArea ? <h5 className="my-2 flex justify-center items-center gap-2 text-emerald-600 font-bold">
                    <i className="fa-earth fa-solid" />
                    {strArea}
                </h5> : ''}
                <Link to={`/mealdetails/${idMeal}`} className="view block text-white bg-emerald-400 hover:bg-emerald-600 font-semibold hover:shadow-lg px-8 py-2 rounded-full">View Recipe</Link>
            </div>
        </div>)
}
