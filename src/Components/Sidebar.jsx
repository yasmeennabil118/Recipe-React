import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <button id='toggleBtn' data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="p-2 m-2 rounded-lg sm:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <svg className='h-6 w-6' aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                </svg>
            </button>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                    <Link to={'/'} className="flex items-center">
                        <img src={logo} className="w-full mb-6" alt="Logo" />
                    </Link>
                    <ul className="space-y-6 font-bold text-xl">
                        <li>
                            <Link to={'/'} className="flex items-center py-2 px-6 bg-[#F29724] shadow-orange-300 shadow-lg hover:shadow-none text-white rounded-xl group">
                                <i className="fa-solid fa-utensils" />
                                <span className="ms-3">Meals</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="flex items-center py-2 px-6 text-gray-900 rounded-xl border-2 border-gray-300 group">
                                <i className="fa-solid fa-utensils" />
                                <span className="ms-3">Ingredients</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center py-2 px-6 text-gray-900 rounded-xl border-2 border-gray-300 group">
                                <i className="fa-solid fa-utensils" />
                                <span className="ms-3">Area</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}
