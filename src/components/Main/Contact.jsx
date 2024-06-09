import React from 'react'

const Contact = () => {
    return (
        <div className="text-center mb-8 m-4">
            <h2 className="text-2xl font-bold mb-4 text-orange-700">Contact Us</h2>
            <div className="mt-5 mb-5 sm:mt-0" data-aos="fade-right" data-aos-delay="800">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142801.02799908794!2d75.16877348345594!3d19.859945636526735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713765646738!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                    className='shadow-xl rounded-xl'
                ></iframe>

            </div>
            <form className=" max-w-md mx-auto drop-shadow-md ">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 border rounded-lg text-center"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded-lg text-center"
                        required
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Message"
                        className="w-full p-2 border rounded-lg text-center"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-orange-700 text-white rounded-lg hover:bg-orange-600 "
                >
                    Send Message
                </button>
            </form>

        </div>
    )
}

export default Contact
