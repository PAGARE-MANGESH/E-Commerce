// ToggleButton.js
import React, { useState } from 'react';

import moon from '../../assets/moon.svg'

import sun from '../../assets/sun.svg'
// import { json } from 'react-router';


const ToggleButton = ({ Menu }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const [isOpen, setIsOpen] = useState(false)


    function toggleMenu() {
        setIsOpen(!isOpen)
    }


    const toggleMode = () => {
        setIsDarkMode(!isDarkMode)

        if (isDarkMode) {

            // If currently in dark mode, switch to light mode

            document.documentElement.classList.remove('dark');
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'


        } else {

            // If currently in light mode, switch to dark mode

            document.documentElement.classList.add('dark');

            document.body.style.backgroundColor = ' black'

            document.body.style.color = 'white'

        }


    }




    return (

        <div className={`container ${isDarkMode ? 'dark' : 'light'} mt-2 p-2`}>

            <button

                className={`toggle ${isDarkMode ? 'dark' : 'light'}`}

                onClick={() => {
                    toggleMode()
                    toggleMenu()
                    Menu()
                }}

            >
                {isDarkMode ? (

                    <div className="icon icon--moon">

                        <img src={sun} className="w-6 h-6 text-yellow-500" />


                    </div>

                ) : (

                    <div className="icon icon--sun">




                        <img src={moon} className="w-6 h-6 text-yellow-500" />



                    </div>
                )}
            </button>

        </div>
    );

};

export default ToggleButton;




