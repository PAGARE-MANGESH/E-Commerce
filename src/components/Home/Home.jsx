
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import Home1 from '../../assets/HomeImg.svg';
import { NavLink } from 'react-router-dom'
import CartLogo from '../../assets/Shopping.svg'
import 'aos/dist/aos.css';
import AOS from 'aos';

const App = () => {

    const { user, isAuthenticated } = useAuth0()

    useEffect(() => {

        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });

    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 5,
            behavior: 'smooth', // Adds smooth scrolling animation
        });
    };

    return (
        <>
            <div className="grid items-center justify-center h-screen grid-cols-1 gap-4 mt-2 lg:grid-cols-2">
                {/* Left side (image) */}
                <div className="flex justify-center p-4 lg:justify-start">
                    <img
                        src={Home1}
                        alt="E-commerce"
                        className="rounded-lg drop-shadow-xl "
                        data-aos="fade-right"
                        data-aos-delay="500"
                    />
                </div>
                {/* Right side (text) */}
                <div className="p-4 mb-3 md:mb-44 ">
                    <h1 className="mb-10 text-3xl font-bold text-center text-orange-500 md:text-4xl lg:text-left " data-aos="fade-down" data-aos-delay="500">
                        Welcome To Our E-Commerce
                        {isAuthenticated && <p className="text-orange-600 hover:underline">{user.name}</p>}
                    </h1>
                    <p className="text-lg text-center lg:text-left" data-aos="fade-down" data-aos-delay="500">
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec justo vel libero vehicula maximus.<br /> */}
                        <span className="font-bold text-orange-500 underline">Discover the latest trends</span> and
                        <span className="font-bold text-orange-500 underline"> unbeatable deals</span>, tailored just for you.
                        <button>
                            <NavLink
                                to="/shopping"
                                onClick={handleScrollToTop}
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




