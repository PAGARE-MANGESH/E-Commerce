
import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import watch1 from '../../assets/ncp4.jpg';
import watch2 from '../../assets/ncp5.jpg';
import watch3 from '../../assets/ncp4.jpg';
// import CartPage from '../Shopping/CartPage'

import Carousel from './Carousel';

import 'aos/dist/aos.css';
import AOS from 'aos';


const ProductPage = () => {

    useEffect(() => {

        AOS.init({

            // Initialize AOS with options here if needed
            // duration: 1000,
            // easing: 'ease-in-out',

            duration: 800,
            easing: 'ease-in-out',
        });
    }, []);


    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    const [showCartSection, setShowCartSection] = useState(false);


    const products = [
        { id: 1, name: "Product 1", price: 10, imageUrl: watch1, gender: "men" },
        { id: 2, name: "Product 2", price: 20, imageUrl: watch2, gender: "women" },
        { id: 3, name: "Product 3", price: 30, imageUrl: watch3, gender: "men" },
        { id: 4, name: "Product 4", price: 40, imageUrl: watch3, gender: "women" },
        { id: 5, name: "Product 5", price: 50, imageUrl: watch3, gender: "men" },
        { id: 6, name: "Product 6", price: 60, imageUrl: watch3, gender: "women" },
        { id: 7, name: "Product 7", price: 70, imageUrl: watch3, gender: "men" },
        { id: 8, name: "Product 8", price: 80, imageUrl: watch3, gender: "women" },
        { id: 9, name: "Product 9", price: 90, imageUrl: watch3, gender: "men" },
        { id: 10, name: "Product 10", price: 100, imageUrl: watch3, gender: "women" },
    ];




    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1 && cart[existingProductIndex].quantity >= 3) {
            console.log("You can only add a maximum of 3 quantities for this product.");
            return;
        }

        const updatedCart = existingProductIndex !== -1 ? [...cart] : [...cart, { ...product, quantity: 0 }];
        updatedCart[existingProductIndex !== -1 ? existingProductIndex : updatedCart.length - 1].quantity++;

        setCart(updatedCart);
        setShowNotification(true);
    };


    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };


    const handleQuantityChange = (event, productId) => {
        const { value } = event.target;
        const updatedCart = cart.map(item =>
            item.id === productId ? { ...item, quantity: parseInt(value) || 1 } : item
        );
        setCart(updatedCart);
    };



    const handleShoppingClick = () => {
        setFilter('shopping');
        setShowCartSection(true);
        setShowNotification(false);
    };

    const calculateTotalAmount = () => {

        return cart.reduce((total, product) => total + product.price * product.quantity, 0);


    };


    const filteredProducts = filter === 'shopping' ? cart : (filter ? products.filter(product => product.gender === filter) : products);



    const handleBuyNow = () => {

        alert("Proceeding to buy items in cart!");

        setCart([]);
    };


    return (
        <div className="container mx-auto py-8 mb-5 relative">
            <h1 className="text-3xl font-bold font-semibold mb-4 text-center mb-5 text-orange-700" data-aos="fade-right" data-aos-delay="500">Products</h1>
            <div className="card mb-3 p-1">
                {/* <img src={watch1} className="object-cover h-64 w-full card-img-top" alt="..." /> */}
                {/* <div className="card-body">
                    <h5 className="card-title text-xl font-bold">Card title</h5>
                    <p className="card-text text-base">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-gray-500">Last updated 3 mins ago</small></p>
                </div> */}


                <Carousel />
            </div>

            <div className="flex flex-wrap justify-center mb-4" data-aos="fade-up" data-aos-delay="500" >
                <button
                    className={`mx-2 mb-2 sm:mb-0 w-full sm:w-auto ${filter === null ? 'text-orange-700 ' : ''} font-semibold py-2 px-4 rounded relative `}

                    onClick={() => {
                        setFilter(null);
                        setShowCartSection(false);
                    }}

                >
                    All
                </button>
                <button
                    className={`mx-2 mb-2 sm:mb-0 w-full sm:w-auto ${filter === 'men' ? 'text-orange-700 ' : ''} font-semibold py-2 px-4 rounded relative`}

                    onClick={() => {
                        setFilter('men');
                        setShowCartSection(false);
                    }}


                >
                    Men
                </button>
                <button
                    className={`mx-2 mb-2 sm:mb-0 w-full sm:w-auto ${filter === 'women' ? 'text-orange-700 ' : ''} font-semibold py-2 px-4 rounded relative`}

                    onClick={() => {
                        setFilter('women');
                        setShowCartSection(false);
                    }}
                >
                    Women
                </button>

                <button
                    className={`mx-2  mb-2 sm:mb-0 w-full sm:w-auto ${filter === 'shopping' ? 'text-orange-700 ' : ''} font-semibold py-2 px-4 rounded relative`}
                    onClick={handleShoppingClick}
                    data-tip="MyShopping Tooltip"
                >
                    MyShopping {' '}

                    {showNotification && !showCartSection && (

                        <span className={`ml-2 text-red-400 absolute top-1 right-5`}>

                            <FaBell />

                            {/* <TbBellRingingFilled /> */}

                        </span>
                    )}


                </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" data-aos="fade-up" data-aos-delay="500">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white p-4 shadow rounded-lg w-full sm:w-auto">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-auto mb-4 hover:" />
                        <h2 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        {filter !== 'shopping' && (
                            <div className="flex justify-center mt-4">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        )}
                        {filter === 'shopping' && (
                            <div className="flex justify-center mt-4 text-gray-800">
                                <input
                                    type="number"
                                    min={1}
                                    max={3}
                                    value={product.quantity || 1}
                                    onChange={(e) => handleQuantityChange(e, product.id)}
                                    onInput={(e) => e.target.value = e.target.value.slice(0, 1)}
                                    className="w-16 text-center border border-gray-300 rounded-md mr-2"
                                />

                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>



            {/* <div class="row row-cols-1 row-cols-md-2 g-4 mt-12">
                <div class="col">
                    <div class="card">
                        <img src={watch1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={watch1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={watch1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={watch1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div> */}

            {showCartSection && (
                <div className="mt-8 text-center border-4 p-5 rounded-5xl">
                    <h2 className="text-2xl font-semibold mb-4">My Shopping</h2>
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center mb-2 border-y-4 pb-1" >
                            <div>{item.name}</div>
                            <div>{item.quantity} x ${item.price} = ${item.quantity * item.price}</div>
                        </div>
                    ))}
                    <div className=" justify-between  items-center mt-4 ">
                        <div className='text-center'>Total: ${calculateTotalAmount()} </div>
                    </div>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-4"
                        onClick={handleBuyNow}
                    >
                        Buy Now
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
