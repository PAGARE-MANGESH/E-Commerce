import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
    { id: 1, title: 'High-Quality Audio', description: 'Experience the best sound quality with our range of headphones.', icon: '🎧' },
    { id: 2, title: 'Affordable Prices', description: 'Get premium headphones at unbeatable prices.', icon: '💰' },
    { id: 3, title: 'Fast Shipping', description: 'Receive your products quickly with our expedited shipping options.', icon: '🚚' },
    { id: 4, title: 'Excellent Support', description: 'Our support team is here to assist you 24/7.', icon: '📞' },
    { id: 5, title: 'Warranty Included', description: 'Enjoy peace of mind with our comprehensive product warranty.', icon: '🛡️' },
    { id: 6, title: 'Easy Returns', description: 'Hassle-free returns within 30 days of purchase.', icon: '🔄' },
];

const ServicesPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out' });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center p-4 md:p-6"
        >
            <div className="max-w-7xl w-full rounded-lg shadow-sm mb-6 bg-white p-6">
                {/* <h1 className="text-3xl font-bold mb-6 text-center text-orange-700" data-aos="fade-up">
                    Our Services
                </h1> */}
                <p className="mb-8 text-xl text-gray-500 text-center" data-aos="fade-down">
                    We are committed to providing exceptional services to enhance your shopping experience. Discover our range of services designed to meet your needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map(service => (
                        <div key={service.id} className="p-6 border rounded-lg shadow-sm text-center" data-aos="flip-left">
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ServicesPage;
