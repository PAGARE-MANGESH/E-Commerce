




import React, { useState } from 'react'
import ToggleButton from './ToogleBtn'
import { NavLink } from 'react-router-dom'

function Navber() {

    const [isOpen, setIsOpen] = useState(false)



    const Menu = () => {
        setIsOpen(!isOpen)
        handleScrollToTop()
    };


    const handleScrollToTop = () => {
        window.scrollTo({
            top: 5,
            behavior: 'smooth', // Adds smooth scrolling animation
        });
    };


    return (

        <nav className='p-2 text-gray-100 md:hidden'>


            <div className='md:hidden' >
                <button onClick={() => {
                    Menu()
                }} className='float-right ml-1 mr-1'>

                    <svg
                        className="w-6 h-6"
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
                                onClick={() => setIsOpen(false)}


                            />
                        )}
                    </svg>

                </button>
            </div>

            {
            /* <a className='mt-5 ml-5'> LOGO </a> */}

            {

                isOpen && (

                    <div className='text-center  bg-white/40 rounded-2xl shadow-lg backdrop-blur-[8.1px] border border-white/30"  md:hidden absolute left-5 right-5 top-16'>




                        <ul className="block mb-2 font-medium text-center border-b text-black/100 lg:flex-row lg:space-x-8 lg:mt-0 ">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={() => setIsOpen(false)}

                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : ""}  lg:hover:bg-transparent hover:text-orange-700`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shopping"
                                    onClick={() => setIsOpen(false)}

                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : ""}  lg:hover:bg-transparent hover:text-orange-700`}


                                >
                                    Shopping
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : ""}  lg:hover:bg-transparent hover:text-orange-700`}


                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}

                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700  " : ""}  lg:hover:bg-transparent hover:text-orange-700`}

                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>








                        <ToggleButton Menu={Menu} />





                    </div>

                )

            }

        </nav>

    )
}

export default Navber


