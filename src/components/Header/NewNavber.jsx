




import React, { useState } from 'react'
import ToggleButton from './ToogleBtn'
import { Link, NavLink } from 'react-router-dom'


function Navber() {

    const [isOpen, setIsOpen] = useState(false)


    function toggleMenu() {

        setIsOpen(!isOpen)
    }


    return (

        <nav className=' md:hidden  text-gray-100 p-2 '>


            <div className='md:hidden'>
                <button onClick={toggleMenu} className='float-right  mr-1 ml-1'>

                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                                stroke="#c2410c"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                                stroke="#c2410c"

                            />
                        )}
                    </svg>

                </button>
            </div>

            {
            /* <a className='ml-5 mt-5'> LOGO </a> */}

            {

                isOpen && (

                    <div className='text-center  bg-white/40 rounded-2xl shadow-lg backdrop-blur-[8.1px] border border-white/30"  md:hidden absolute left-5 right-5 top-16'>

                        {/* <ul className='block text-black/100 mb-2  border-b '>
                            <li className='ml-5 mb-3 mt-3 hover:underline ' title='Home'> Home </li>
                            <li className='ml-5 mb-3 hover:underline ' title='About'> About </li>
                            <li className='ml-5 mb-3 hover:underline ' title='Services'> Services </li>
                            <li className='ml-5 mb-3 hover:underline  ' title='Conatct'> Contact </li>
                        </ul> */}



                        <ul className="block text-black/100 mb-2  border-b  font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-center ">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : ""}  lg:hover:bg-transparent hover:text-orange-700`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shopping"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : ""}  lg:hover:bg-transparent hover:text-orange-700`}


                                >
                                    Shopping
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : ""}  lg:hover:bg-transparent hover:text-orange-700`}


                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700  " : ""}  lg:hover:bg-transparent hover:text-orange-700`}


                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>




                        <ToggleButton />
                    </div>

                )

            }

        </nav>
    )
}

export default Navber


