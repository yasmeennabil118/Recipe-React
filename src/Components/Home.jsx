import React from 'react'
import Meals from './Meals'

export default function Home() {
  return (
    <div id='home' className="py-4 px-8 sm:ml-64">
      <h1 className='text-4xl font-bold'>Learn, Cook, Eat Your Food</h1>
      <Meals />
    </div>
  )
}
