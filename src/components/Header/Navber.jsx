import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { Link, NavLink } from 'react-router-dom'
import Switch from './ToogleBtn';
import HomeLog from '../../assets/Shopping.svg'

// import reactLogo from '../../assets/react.svg'

export default function Header() {

    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0()
    console.log(user)

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className=" px-4 lg:px-6 pb-2 text-center pt-2" id='Navber'>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl text-center">
                    <Link to="/shopping" className="flex items-center ">

                        <img
                            src={HomeLog}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex items-center lg:order-2">

                        {

                            isAuthenticated ? <Link
                                to="#"
                                onClick={(e) => logout()}
                                className="text-orange-700 hover:text-orange-700  border-b-2 border-transparent border-orange-700 focus:border-orange-700 transition-colors duration-300 ease-in-out mr-4"
                            >

                                Logout

                            </Link> :
                                <Link
                                    to="#"
                                    onClick={(e) => loginWithRedirect()}
                                    className=" hover:text-orange-700 focus:ring-1 focus:ring-gray-100 font-medium rounded-lg text-sm lg:px-5 py-2 lg:py-2.5 focus:outline-none mr-4"
                                >

                                    Login

                                </Link>

                        }


                        {/* <Link
                            to="#"
                            onClick={(e) => loginWithRedirect()}
                            className=" hover:bg-gray-500 focus:ring-1 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                        >

                            Login

                        </Link> */}


                        {/* <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                        </Link> */}


                        <Switch />

                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col  font-medium lg:flex-row lg:space-x-8 lg:mt-0  ml-24 text-center ">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 border-b-2 border-transparent border-orange-700 focus:border-orange-700 transition-colors duration-300 ease-in-out" : ""}  lg:hover:bg-transparent hover:text-orange-700`}
                                // }border-b border-gray-900 hover:bg-gray-50  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shopping"
                                    className={({ isActive }) =>
                                        // `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 border-b-2 border-transparent border-orange-700 focus:border-orange-700 transition-colors duration-300 ease-in-out" : ""} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 border-b-2 border-transparent border-orange-700 focus:border-orange-700 transition-colors duration-300 ease-in-out" : ""}  lg:hover:bg-transparent hover:text-orange-700`}


                                >
                                    Shopping
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        // `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 border-b-2 border-transparent border-orange-700 focus:border-orange-700 transition-colors duration-300 ease-in-out" : ""} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 border-b-2 border-transparent border-orange-700 focus:border-orange-700 transition-colors duration-300 ease-in-out" : ""}  lg:hover:bg-transparent hover:text-orange-700`}


                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        // `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 border-b-2 border-transparent border-orange-700 focus:border-orange-700 transition-colors duration-300 ease-in-out" : ""} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700  border-b-2 border-transparent border-orange-700 focus:border-orange-700 transition-colors duration-300 ease-in-out" : ""}  lg:hover:bg-transparent hover:text-orange-700`}


                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}









