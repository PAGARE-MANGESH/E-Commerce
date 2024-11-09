

import React, { useState, useEffect } from 'react';
import CartLogo from '../../assets/Shopping.svg'
import { FaBell } from 'react-icons/fa';
import Carousel from './Carousel';
import 'aos/dist/aos.css';
import AOS from 'aos';

function DemoProduct() {

    const [products, setProducts] = useState([]);
    const [selectedGender, setSelectedGender] = useState('all');
    const [shopping, setShopping] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showNotification, setShowNotification] = useState(false);




    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
        if (gender === 'shopping') {
            setShowNotification(false);
        }
    };


    const addToCart = (product, quantity = 1) => {
        const existingProduct = shopping.find(p => p.id === product.id);
        if (existingProduct) {
            const newQuantity = Math.min(existingProduct.quantity + quantity, 5);
            setShopping(shopping.map(p => p.id === product.id ? { ...p, quantity: newQuantity } : p));
        } else {
            setShopping([...shopping, { ...product, quantity: 1 }]);
            setShowNotification(true);
        }
    };


    const removeFromCart = (productId) => {
        const existingProduct = shopping.find(p => p.id === productId);
        if (existingProduct.quantity > 1) {
            setShopping(shopping.map(p => p.id === productId ? { ...p, quantity: p.quantity - 1 } : p));
        } else {
            setShopping(shopping.filter(product => product.id !== productId));
        }
    };


    const toggleCart = (product) => {
        if (shopping.some(p => p.id === product.id)) {
            setShopping(shopping.filter(p => p.id !== product.id));
        } else {
            addToCart(product);
        }
    };


    const handleQuantityChange = (productId, newQuantity) => {
        const quantity = Math.min(Math.max(newQuantity, 1), 5);
        setShopping(shopping.map(p => p.id === productId ? { ...p, quantity } : p));
        setShowNotification(true);
    };


    const getTotalAmount = () => {
        return shopping.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    };


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => {
                const fetchedProducts = data.map((product) => ({
                    id: product.id,
                    Product: product.title,
                    gender: product.title.toLowerCase().includes("women") ? 'female' : 'male',
                    img: product.image,
                    price: product.price,
                    category: product.category,
                    rating: product.rating.rate,
                    description: product.description,
                    images: [product.image]
                }));
                setProducts(fetchedProducts);
            });
    }, []);



    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });
    }, []);

    const getStars = (rating) => {
        const totalStars = 5;

        const filledStars = Math.round(rating);
        const emptyStars = totalStars - filledStars;
        return (
            <>
                {Array(filledStars).fill().map((_, i) => (
                    <svg key={i} className="inline w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.539 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.236 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
                    </svg>
                ))}

                {Array(emptyStars).fill().map((_, i) => (
                    <svg key={i + filledStars} className="inline w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.539 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.236 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
                    </svg>
                ))}

            </>
        );
    };


    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };




    const filteredProducts = selectedGender === 'all'
        ? products
        : selectedGender === 'shopping'
            ? shopping
            : products.filter(product => product.gender === selectedGender);

    return (

        <div className='container p-4 mx-auto'>

            <div className="mb-4">
                <Carousel />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-6 font-bold ">
                <button
                    className={`px-4 py-2 rounded hover:text-orange-700  ${selectedGender === 'all' ? ' text-orange-700' : 'text-gray-600'}`}
                    onClick={() => handleGenderChange('all')}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 rounded hover:text-orange-700  ${selectedGender === 'male' ? ' text-orange-700 ' : 'text-gray-600'}`}
                    onClick={() => handleGenderChange('male')}
                >
                    Male
                </button>
                <button
                    className={`px-4 py-2 rounded hover:text-orange-700  ${selectedGender === 'female' ? ' text-orange-700 ' : 'text-gray-600'}`}
                    onClick={() => handleGenderChange('female')}
                >
                    Female
                </button>
                <button
                    className={`px-4 py-2 rounded relative hover:text-orange-700  ${selectedGender === 'shopping' ? ' text-orange-700 ' : 'text-gray-600'}`}
                    onClick={() => handleGenderChange('shopping')}
                >
                    MyShopping
                    {showNotification && selectedGender !== 'shopping' && (
                        <span className="absolute top-0 right-0 mt-2 mr-2 text-red-500">
                            <FaBell />
                        </span>
                    )}
                </button>
            </div>



            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {filteredProducts.map((product) => (
                    <div key={product.id} className="overflow-hidden border border-gray-200 rounded-lg shadow-lg ">
                        <a href="#" onClick={() => setSelectedProduct(product)} className="relative block group">
                            <div className="w-full h-48 overflow-hidden">
                                <img
                                    className="object-contain w-full h-full transition-transform duration-300 ease-in-out transform bg-white group-hover:scale-105"
                                    src={product.img}
                                    alt={product.Product}
                                />
                            </div>
                            <div className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-black bg-opacity-25 opacity-0 group-hover:opacity-100"></div>
                        </a>

                        <div className="p-4 text-gray-500">
                            <a href="#" onClick={() => setSelectedProduct(product)} className="transition duration-100 ease-in-out delay-150 hover:text-orange-700 group">
                                <h5 className="mb-2 text-xl font-bold">{truncateText(product.Product.substring(-2), 20)}</h5>
                                <h5 className="mb-2 text-2xl font-bold">${product.price}</h5>
                            </a>
                            <p className="mb-2 text-gray-500">Category: {product.category}</p>
                            <div className='block md:flex '>
                                <p className="mb-2 text-gray-500">Rating: {getStars(product.rating)}</p>
                                {shopping.some(p => p.id === product.id) && (
                                    <div className="flex items-center justify-center mb-2 ml-10">
                                        <strong className="mr-2">Quantity:</strong>
                                        <input
                                            type="number"
                                            className="w-16 px-2 py-1 text-center border rounded"
                                            min="1"
                                            max="5"
                                            value={shopping.find(p => p.id === product.id).quantity}
                                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                        />
                                    </div>
                                )}
                            </div>


                            {/* <button
                                className="flex justify-center w-full px-4 py-3 mt-1 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 "
                                onClick={() => toggleCart(product)}
                            >

                                {shopping.some(p => p.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
                                <img src={CartLogo} className='absolute w-10 h-22 ml-36 ' />
                            </button> */}


                            <button

                                className="relative flex items-center justify-center w-full px-4 py-3 mt-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600"

                                onClick={() => toggleCart(product)}
                            >
                                {shopping.some(p => p.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}

                                {/* <img src={CartLogo} className='w-10 h-10 ml-4' /> */}

                            </button>


                        </div>
                    </div>
                ))}
            </div>



            {selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center mt-6 bg-black bg-opacity-50">
                    <div className="w-full max-w-lg overflow-hidden bg-gray-800 rounded-lg shadow-xl">
                        <div className="p-6 text-gray-200">
                            <h4 className="mb-2 text-lg font-medium ">
                                <span>{selectedProduct.Product}</span>
                            </h4>
                            <p className="mb-1 text-sm"><strong>Price:</strong> ${selectedProduct.price}</p>
                            <p className="mb-1 text-sm"><strong>Category:</strong> {selectedProduct.category}</p>
                            <p className="mb-1 text-sm"><strong>Rating:</strong> {getStars(selectedProduct.rating)}</p>
                            <p className="mb-1 text-sm"><strong>Gender:</strong> {selectedProduct.gender}</p>
                            <p className="mb-4 text-sm">
                                <strong>Description:</strong> {truncateText(selectedProduct.description.substring(-2), 250)}
                            </p>
                            {selectedProduct.images.map((image, index) => (
                                <img key={index} src={image} alt={selectedProduct.Product} className="inline-block object-contain w-20 h-24 mr-2" />
                            ))}
                        </div>
                        <div className="flex justify-end p-4 bg-gray-100">
                            <button
                                className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-lg"
                                onClick={() => toggleCart(selectedProduct)}
                            >
                                {shopping.some(p => p.id === selectedProduct.id) ? 'Remove from Cart' : 'Add to Cart'}
                            </button>
                            <button
                                className="px-4 py-2 text-white bg-gray-500 rounded-lg"
                                onClick={() => setSelectedProduct(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}



            {
                selectedGender === 'shopping' && shopping.length >= 0 && (
                    <div className='p-5 mt-10'>
                        <h3 className="mb-5 text-xl font-semibold text-orange-700">Shopping Cart</h3>
                        {shopping.map(item => (
                            <div key={item.id} className="flex items-center justify-between pb-1 mb-2 border-b-2">
                                <div>{item.Product}</div>
                                <div>{item.quantity} x ${item.price} = ${(item.quantity * item.price).toFixed(2)}</div>
                            </div>
                        ))}
                        <div className="mt-2 mb-4 text-lg font-semibold">
                            Total Amount: ${getTotalAmount()}
                        </div>
                        <div className="mt-4">
                            <button className="px-4 py-2 text-white bg-green-500 rounded" onClick={() => alert('Proceeding to buy')}>
                                Proceed to Buy
                            </button>
                        </div>
                    </div>
                )
            }




        </div >
    );
}

export default DemoProduct;
