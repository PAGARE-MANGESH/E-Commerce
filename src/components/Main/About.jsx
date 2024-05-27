
// import watch3 from '../../assets/ncp4.jpg';
import Home1 from '../../assets/HomeImg.svg';
import watch3 from '../../assets/ncp4.jpg';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';


import 'aos/dist/aos.css';
import AOS from 'aos';








const AboutPage = () => {

    // Animation 

    useEffect(() => {
        AOS.init({
            // Initialize AOS with options here if needed
            // duration: 1000,
            // easing: 'ease-in-out',
        });
    }, []);



    const teamMembers = [
        { id: 1, name: 'John Doe', role: 'CEO', image: watch3 },
        { id: 2, name: 'Jane Smith', role: 'COO', image: watch3 },
        { id: 3, name: 'Jane Smith', role: 'COO', image: watch3 },
        { id: 4, name: 'Jane Smith', role: 'COO', image: watch3 },
        { id: 5, name: 'Jane Smith', role: 'COO', image: watch3 },


        // Add more team members as needed
    ];

    const starRating = 5; // Assuming you have a star rating system

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen  flex justify-center items-center"
        >
            <div className="max-w-7xl mx-auto p-6  rounded-lg  shadow-sm mb-2">
                <h1 className="text-3xl font-bold mb-6 text-center text-orange-700" data-aos="fade-up" data-aos-delay="500">About Our E-Commerce Website</h1>
                <p className="m-14 text-xl text-gray-500 text-center" data-aos="fade-down" data-aos-delay="500">
                    Welcome to our E-commerce Headphone experience! Here, sound meets style, and every beat becomes a statement.
                    Dive into our world of immersive audio and cutting-edge technology. Discover your perfect pair of headphones,
                    where every detail is crafted to elevate your listening experience. Join us on this sonic journey and explore the future of sound.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center items-center">
                        <img
                            src={Home1}
                            alt="Hero Image"
                            className="w-full h-auto rounded-lg hover:shadow-md"
                        />

                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-bold mb-4 text-orange-700">Our Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="flex items-center space-x-2">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        data-aos="fade-up" data-aos-delay="500"
                                        className="w-14 h-14 rounded-full"
                                    />
                                    <p data-aos="fade-down" data-aos-delay="800">{member.name} - {member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* <div className="mt-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Our Achievements</h2>
                    <p className="text-lg mb-4">
                        We are proud to have received a {starRating}-star rating from thousands of satisfied customers.
                        Your trust and support have helped us grow and improve continuously.
                    </p>
                    <p className="text-lg">
                        Join us in our mission to redefine online shopping!
                    </p>
                </div> */}

                <div class="mt-8 text-center">
                    <h2 class="text-2xl font-bold mb-4 text-orange-700">Our Achievements</h2>
                    <p class="text-lg mb-4 " data-aos='fade-up' data-aos-deplay='500' >
                        We are honored to have earned a {starRating}-star rating from thousands of satisfied customers.
                        Your trust and support have been instrumental in our continuous growth and improvement.
                    </p>
                    <p class="text-lg " data-aos='fade-up' data-aos-deplay='500'>
                        Join us in our mission to redefine the online shopping experience!
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;




