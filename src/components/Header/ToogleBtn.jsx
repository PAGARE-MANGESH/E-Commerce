// ToggleButton.js
import React, { useState } from 'react';

import moon from '../../assets/moon.svg'

import sun from '../../assets/sun.svg'




const ToggleButton = () => {




    // const [isChecked, setIsChecked] = useState(false);



    const [isDarkMode, setIsDarkMode] = useState(false);


    const toggleMode = () => {

        setIsDarkMode(prevMode => !prevMode);

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

    const handleToggle = () => {

        setIsDarkMode(!isDarkMode);

    };



    return (

        <div className={`container ${isDarkMode ? 'dark' : 'light'} mt-2 p-2`}>

            <button

                className={`toggle ${isDarkMode ? 'dark' : 'light'}`}

                onClick={toggleMode}

            >
                {isDarkMode ? (

                    <div className="icon icon--moon">
                        {/* <svg
                            className="h-6 w-6 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"

                        >
                            <path
                                className="fill-current"
                                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"


                            ></path>
                        </svg> */}

                        {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#f97316"></path> </g></svg> */}

                        <img src={sun} className="h-6 w-6 text-yellow-500" />


                    </div>

                ) : (

                    <div className="icon icon--sun">


                        {/* <svg

                            className="h-6 w-6 text-gray-800"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >

                            <path
                                className="fill-current"
                                clipRule="evenodd"
                                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                fillRule="evenodd"
                            >
                            </path>

                        </svg> */}


                        <img src={moon} className="h-6 w-6 text-yellow-500" />



                    </div>
                )}
            </button>

        </div>
    );
};

export default ToggleButton;




