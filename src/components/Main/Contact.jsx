




import React, { useState, useEffect } from 'react';

import 'aos/dist/aos.css';
import AOS from 'aos';



const ContactPage = () => {


    useEffect(() => {
        AOS.init({
            // Initialize AOS with options here if needed
            // duration: 1000,
            // easing: 'ease-in-out',
        });
    }, []);



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mb-5 mt-2">
            <h1 className="text-3xl font-bold mb-4 text-orange-700"> Contact </h1>
            <div className="max-w-6xl w-full p-6 bg-white shadow-xl rounded-lg grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Contact form */}
                <form className="space-y-4 text-center text-gray-500" onSubmit={handleFormSubmit} data-aos="fade-down" data-aos-delay="800">
                    {/* Name field */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700 mt-2" data-aos="fade-right" data-aos-delay="800">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className="input-field text-xl h-10 text-center border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-xl"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Email field */}
                    <div>
                        <label htmlFor="email" className="block text-lg h-10 font-medium text-gray-700 mt-2" data-aos="fade-right" data-aos-delay="800">Email</label>
                        <input

                            type="email"
                            id="email"
                            name="email"
                            placeholder="johndoe@example.com"
                            className="input-field text-lg text-center  h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-xl"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Address field */}
                    <div className="sm:col-span-2">
                        <label htmlFor="address" className="block text-lg   font-medium text-gray-700 mt-2" data-aos="fade-right" data-aos-delay="800">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Enter your address"
                            className="input-field text-lg text-center  h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-xl"
                            value={formData.address}
                            onChange={handleChange}
                        />

                    </div>

                    {/* Message field */}

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700 mt-2"  >Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Type your message here..."
                            className="input-field text-lg text-center border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-xl"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* Submit button */}

                    <div className="flex justify-end sm:col-span-2" >

                        <button type="submit" className="btn-primary text-white px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 text-lg" >
                            <a href="mailto:mangeshpagare8421@gmail.com">
                                Send
                            </a>

                        </button>

                    </div>
                </form>

                {/* Google Map */}

                <div className="mt-6 sm:mt-0" data-aos="fade-right" data-aos-delay="800">

                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142801.02799908794!2d75.16877348345594!3d19.859945636526735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713765646738!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                        className='shadow-xl'
                    ></iframe> */}

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
