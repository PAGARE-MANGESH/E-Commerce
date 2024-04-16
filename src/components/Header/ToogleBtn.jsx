// ToggleButton.js
import React, { useState } from 'react';


const ToggleButton = () => {
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
    };

    return (
        <div className="flex items-center justify-center h-5">
            <button
                className={`w-20 h-8 rounded-full focus:outline-none ${isDarkMode ? 'bg-orange-500' : 'bg-orange-100'
                    }`}
                onClick={toggleMode}
            >
                <div
                    className={`w-8 h-18 ml-2 rounded-full transform transition-transform ${isDarkMode ? 'translate-x-full' : ''
                        }`}
                >
                    <div
                        className={`w-5 h-5 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform ${isDarkMode ? 'translate-x-3' : ''
                            }`}
                    ></div>
                </div>
            </button>
        </div>
    );
};

export default ToggleButton;
