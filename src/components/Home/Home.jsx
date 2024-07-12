
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'

import Home1 from '../../assets/HomeImg.svg';
import { Link, NavLink } from 'react-router-dom'

import CartLogo from '../../assets/Shopping.svg'

import 'aos/dist/aos.css';
import AOS from 'aos';






const App = () => {

    const { user, isAuthenticated } = useAuth0()

    useEffect(() => {

        AOS.init({

            // Initialize AOS with options here if needed
            // duration: 1000,
            // easing: 'ease-in-out',
            duration: 800,
            easing: 'ease-in-out',

        });

    }, []);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center h-screen mt-2 gap-4">
                {/* Left side (image) */}
                <div className="p-4 flex justify-center lg:justify-start">
                    <img
                        src={Home1}
                        alt="E-commerce"
                        className="rounded-lg drop-shadow-xl "
                        data-aos="fade-right"
                        data-aos-delay="500"
                    />
                </div>
                {/* Right side (text) */}
                <div className="p-4 md:mb-44 mb-3 ">
                    <h1 className="text-3xl md:text-4xl  text-orange-700 font-bold text-center lg:text-left mb-10 " data-aos="fade-down" data-aos-delay="500">
                        Welcome To Our E-Commerce
                        {isAuthenticated && <p className="text-orange-700 hover:underline">{user.name}</p>}
                    </h1>
                    <p className="text-lg text-center lg:text-left" data-aos="fade-down" data-aos-delay="500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec justo vel libero vehicula maximus.<br />
                        <button>
                            <NavLink
                                to="/shopping"
                                className={({ isActive }) =>
                                    `flex duration-200  border-2 border-orange-500 ${isActive ? "text-orange-700" : ""} p-3 mt-4   rounded-2xl text-2xl text-orange-500  hover:text-orange-600  shadow-xl`
                                }
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                Explore Our Cart
                                <img src={CartLogo} className="w-10 h-10 ml-2" />
                            </NavLink>
                        </button>
                    </p>
                </div>
            </div>

            {/* <carousel /> */}
        </>
    );
};

export default App;







