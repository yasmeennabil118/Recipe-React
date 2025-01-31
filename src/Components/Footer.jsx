import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm z-[55] relative">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to={'/'} className="flex items-center mb-4 sm:mb-0 space-x-3">
            <img src={logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-bold whitespace-nowrap">Recipe</span>
          </Link>
          <span className="text-blue-700 font-bold text-2xl">Route</span>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2025 Nagy Osama™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
