import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, NavLink } from 'react-router-dom'
import Switch from './ToogleBtn';
import HomeLog from '../../assets/logo.png'


import NewNav from '../Header/NewNavber'

export default function Header() {

    const { loginWithRedirect, isAuthenticated, logout } = useAuth0()


    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds smooth scrolling animation
        });
    };

    return (

        <header className="sticky top-0 z-50 shadow">
            <nav className="px-4 pt-2 pb-2 text-center lg:px-6" id='Navber'>
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto text-center">
                    <Link to="/shopping" className="flex items-center ">

                        <img
                            src={HomeLog}
                            className="h-12 mr-3"
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex items-center lg:order-2">
                        {
                            isAuthenticated ? <Link
                                to="#"
                                onClick={(e) => logout()}
                                className="mr-4 text-orange-700 hover:text-orange-700"
                            >
                                Logout
                            </Link>

                                :
                                <Link
                                    to="#"
                                    onClick={() => {
                                        loginWithRedirect()
                                    }}

                                    className="hover:text-orange-700 focus:ring-1 focus:ring-gray-100 font-medium rounded-lg text-sm lg:px-5 py-2 lg:py-2.5 focus:outline-none mr-4"
                                >
                                    Login

                                </Link>

                        }

                        <div className='hidden md:block'>

                            <Switch />

                        </div>

                        <NewNav />
                    </div>
                    <div
                        className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 "
                        id="mobile-menu-2" >
                        <ul className="flex flex-col ml-24 font-medium text-center lg:flex-row lg:space-x-8 lg:mt-0 ">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={handleScrollToTop}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : ""}  lg:hover:bg-transparent hover:text-orange-700`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shopping"
                                    onClick={handleScrollToTop}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : ""}  lg:hover:bg-transparent hover:text-orange-700`}


                                >
                                    Shopping
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={handleScrollToTop}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 " : ""}  lg:hover:bg-transparent hover:text-orange-700`}


                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={handleScrollToTop}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700  " : ""}  lg:hover:bg-transparent hover:text-orange-700`}


                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>
        </header >
    );
}




// import React, { useEffect, useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { Link, NavLink } from 'react-router-dom';
// import Switch from './ToogleBtn';
// import HomeLog from '../../assets/logo.png';
// import NewNav from '../Header/NewNavber';

// export default function Header() {
//     const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
//     const [storedUser, setStoredUser] = useState(null);

//     // Load user info from localStorage on component mount
//     useEffect(() => {
//         const localStorageUser = localStorage.getItem('user');
//         if (localStorageUser) {
//             setStoredUser(JSON.parse(localStorageUser));
//         }
//     }, []);

//     // Update localStorage when authenticated
//     useEffect(() => {
//         if (isAuthenticated && user) {
//             localStorage.setItem('user', JSON.stringify(user));
//             setStoredUser(user);
//         }
//     }, [isAuthenticated, user]);

//     const handleScrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth', // Adds smooth scrolling animation
//         });
//     };

//     const handleLogout = () => {
//         logout();
//         localStorage.removeItem('user'); // Remove user from localStorage on logout
//         setStoredUser(null); // Clear state
//     };

//     return (
//         <header className="sticky top-0 z-50 shadow">
//             <nav className="px-4 pt-2 pb-2 text-center lg:px-6" id="Navber">
//                 <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto text-center">
//                     <Link to="/shopping" className="flex items-center ">
//                         <img src={HomeLog} className="h-12 mr-3" alt="Logo" />
//                     </Link>

//                     <div className="flex items-center lg:order-2">
//                         {storedUser ? (
//                             <>

//                                 <Link
//                                     to="#"
//                                     onClick={handleLogout}
//                                     className="mr-4 text-orange-700 hover:text-orange-700"
//                                 >
//                                     Logout
//                                 </Link>
//                             </>
//                         ) : (
//                             <Link
//                                 to="#"
//                                 onClick={async () => {
//                                     await loginWithRedirect();
//                                 }}
//                                 className="hover:text-orange-700 focus:ring-1 focus:ring-gray-100 font-medium rounded-lg text-sm lg:px-5 py-2 lg:py-2.5 focus:outline-none mr-4"
//                             >
//                                 Login
//                             </Link>
//                         )}

//                         <div className="hidden md:block">
//                             <Switch />
//                         </div>

//                         <NewNav />
//                     </div>

//                     <div
//                         className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col ml-24 font-medium text-center lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink
//                                     to="/"
//                                     onClick={handleScrollToTop}
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700 ' : ''
//                                         }  lg:hover:bg-transparent hover:text-orange-700`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/shopping"
//                                     onClick={handleScrollToTop}
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700 ' : ''
//                                         }  lg:hover:bg-transparent hover:text-orange-700`
//                                     }
//                                 >
//                                     Shopping
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/about"
//                                     onClick={handleScrollToTop}
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700 ' : ''
//                                         }  lg:hover:bg-transparent hover:text-orange-700`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/contact"
//                                     onClick={handleScrollToTop}
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700  ' : ''
//                                         }  lg:hover:bg-transparent hover:text-orange-700`
//                                     }
//                                 >
//                                     Contact
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }
