import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import MealItem from './MealItem';
import Loading from './Loading';
import Notfound from './Notfound';

export default function Meals() {

    let [activeCategory, setActiveCategory] = useState(null)

    function getCat() {
        return axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    }

    let { data: catData, isError: catisError, isLoading: catLoad } = useQuery({
        queryKey: ['categories'],
        queryFn: getCat,
        select: (catData) => catData?.data?.categories,
    })

    function getAllMeals() {
        return axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s');
    }

    let { data: allMealsData, isError: allMealsisError, isLoading: allMealsLoad } = useQuery({
        queryKey: ['AllMeals'],
        queryFn: getAllMeals,
        select: (allMealsData) => allMealsData?.data?.meals
    })

    function getMealsByCat() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`);
    }

    let { data: mealsByCat, isError: mealsCatisError, isLoading: mealsCatLoad } = useQuery({
        queryKey: ['mealsById', activeCategory],
        queryFn: getMealsByCat,
        select: (mealsByCat) => mealsByCat?.data?.meals
    })

    if (catLoad || allMealsLoad || mealsCatLoad) {
        return <Loading></Loading>
    }

    if (catisError || allMealsisError || mealsCatisError) {
        return <Notfound></Notfound>
    }

    return (
        <>
            <div className="sm:hidden mt-8">
                <select id="tabs" onChange={(e) => setActiveCategory(e.target.value)} className="font-bold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F29724] focus:border-[#F29724] block w-full p-2.5">
                    {catData?.map(ele =>
                        <option key={ele.idCategory} value={ele.strCategory}>{ele.strCategory}</option>
                    )}
                </select>
            </div>
            <ul className="sm:flex hidden mt-8 flex-wrap gap-4 font-bold text-center text-gray-500 border-b border-gray-300">
                <li onClick={() => setActiveCategory(null)} className={activeCategory === null ? 'active' : ''}>
                    <a aria-current="page" className="inline-block catLink px-4 py-2 border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:bg-gray-50" data-discover="true">All</a>
                </li>
                {catData?.map(ele =>
                    <li key={ele.idCategory} className={activeCategory === ele.strCategory ? 'active' : ''} onClick={() => setActiveCategory(ele.strCategory)}>
                        <a aria-current="page" className="inline-block catLink px-4 py-2 border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:bg-gray-50" data-discover="true">{ele.strCategory}</a>
                    </li>
                )}
            </ul>
            {activeCategory != null ?
                <div className="flex flex-wrap">
                    {mealsByCat?.map(prod => <MealItem key={prod.idMeal} prod={prod}></MealItem>)}
                </div> :
                <div className="flex flex-wrap">
                    {allMealsData?.map(prod => <MealItem key={prod.idMeal} prod={prod}></MealItem>)}
                </div>
            }
        </>
    )
}
