

import React from 'react';
import ContactSvg from '../../assets/Contact.svg'

const Contact = () => {

    return (
        <div className="m-4 mb-8 text-center">
            <h2 className="mb-6 text-3xl font-bold text-orange-700">Contact Us</h2>

            {/* Grid Layout */}
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">

                {/* Map Section */}
                <div
                    className="mt-5 mb-5 sm:mt-0"
                    data-aos="fade-right"
                    data-aos-delay="200"
                >

                    <img src={ContactSvg} alt="svg" className='rounded-lg' />


                </div>
                {/* Form Section */}

                <div className="p-6 bg-white shadow-xl rounded-xl">
                    <form
                        className="grid grid-cols-1 gap-6 text-gray-800" data-aos="fade-up" data-aos-delay="800">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 transition duration-200 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 transition duration-200 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                className="w-full p-3 transition duration-200 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            onClick={(e) => e.preventDefault()}
                            className="w-full p-3 text-white transition duration-200 bg-orange-700 rounded-lg hover:bg-orange-600"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
