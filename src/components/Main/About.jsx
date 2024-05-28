

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import watch3 from '../../assets/member.png';
import Home1 from '../../assets/HomeImg.svg';

import ServicesPage from './Services';

const AboutPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out' });
    }, []);

    const teamMembers = [
        { id: 1, name: 'John Doe', role: 'CEO', image: watch3 },
        { id: 2, name: 'Jane Smith', role: 'COO', image: watch3 },
        { id: 3, name: 'Mike Johnson', role: 'CTO', image: watch3 },
        { id: 4, name: 'Emily Davis', role: 'CFO', image: watch3 },
    ];

    const services = [
        { id: 1, title: 'High-Quality Audio', description: 'Experience the best sound quality with our range of headphones.' },
        { id: 2, title: 'Affordable Prices', description: 'Get premium headphones at unbeatable prices.' },
        { id: 3, title: 'Fast Shipping', description: 'Receive your products quickly with our expedited shipping options.' },
        { id: 4, title: 'Excellent Support', description: 'Our support team is here to assist you 24/7.' },
    ];

    const testimonials = [
        { id: 1, name: 'Alice Brown', feedback: 'The best headphones I have ever used!' },
        { id: 2, name: 'David Wilson', feedback: 'Amazing sound quality and fast delivery.' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center p-4 md:p-6"
        >
            <div className="max-w-7xl w-full rounded-lg shadow-sm mb-6  p-6">
                <h1 className="text-3xl font-bold mb-6 text-center text-orange-700" data-aos="fade-up">
                    About Our E-Commerce Website
                </h1>
                <p className="mb-8 text-xl  text-center" data-aos="fade-down">
                    Welcome to our E-commerce Headphone experience! Here, sound meets style, and every beat becomes a statement.
                    Dive into our world of immersive audio and cutting-edge technology. Discover your perfect pair of headphones,
                    where every detail is crafted to elevate your listening experience. Join us on this sonic journey and explore the future of sound.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="flex flex-col items-center">
                        <img
                            src={Home1}
                            alt="Hero Image"
                            className="w-full h-auto rounded-lg hover:shadow-md"
                            data-aos="fade-right"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold mb-4 text-orange-700">Our Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-15">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="flex items-center space-x-2" data-aos="fade-up">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-14 h-14 rounded-full"
                                    />
                                    <p>{member.name} - {member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-orange-700">Our Achievements</h2>
                    <p className="text-lg mb-4" data-aos='fade-up'>
                        We are honored to have earned a 5-star rating from thousands of satisfied customers.
                        Your trust and support have been instrumental in our continuous growth and improvement.
                    </p>
                    <p className="text-lg" data-aos='fade-up'>
                        Join us in our mission to redefine the online shopping experience!
                    </p>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-orange-700">Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {services.map(service => (
                            <div key={service.id} className="p-4 border rounded-lg shadow-sm" data-aos="flip-left">
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <ServicesPage />
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-orange-700">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="p-4 border rounded-lg shadow-sm" data-aos="flip-right">
                                <p className="mb-2">"{testimonial.feedback}"</p>
                                <h4 className="font-semibold">- {testimonial.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
