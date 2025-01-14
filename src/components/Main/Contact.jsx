

import React, { useState } from 'react';

import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactSvg from '../../assets/Contact.svg';

const Contact = () => {

    const [name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Message, setMessage] = useState('')



    function notify() {
        toast('I got your message, Thank you! 😇', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }



    const handelForm = (e) => {
        e.preventDefault()


        setTimeout(() => {
            notify()
            setName('')
            setEmail('')
            setMessage('')
        }, 2000);



        // alert("Sorry, we haven't integrated the backend yet. Thank you for your patience!");
    }

    return (

        <div className="w-full p-6 backdrop-blur-md">
            <span>
                <ToastContainer />
            </span>

            <div className="max-w-6xl mx-auto text-center">

                <h2 className="mb-6 text-4xl font-bold text-orange-700"> Contact Us </h2>

                <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">

                    {/* SVG Section */}

                    <div className=" md:block" >
                        <img src={ContactSvg} alt="Contact Illustration" className="rounded-lg" />

                    </div>


                    <div className="w-full p-8 shadow-lg rounded-xl backdrop-blur-lg" >
                        <form
                            onSubmit={handelForm}
                            classNsame="grid grid-cols-1 gap-6 text-orange-700 " >
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-orange-700">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="w-full p-3 text-gray-500 transition duration-200 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-orange-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email"
                                    className="w-full p-3 text-gray-500 transition duration-200 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-orange-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={Message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Your Message"
                                    className="w-full p-3 text-gray-500 transition duration-200 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"

                                className="w-full p-3 text-white transition duration-200 bg-orange-700 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Contact;




