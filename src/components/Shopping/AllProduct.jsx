

import React, { useState, useEffect } from 'react';
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
                    <svg key={i} className="w-4 h-4 text-yellow-500 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.539 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.236 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
                    </svg>
                ))}

                {Array(emptyStars).fill().map((_, i) => (
                    <svg key={i + filledStars} className="w-4 h-4 text-gray-300 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.539 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.236 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
                    </svg>
                ))}

            </>
        );
    };

    const filteredProducts = selectedGender === 'all'
        ? products
        : selectedGender === 'shopping'
            ? shopping
            : products.filter(product => product.gender === selectedGender);

    return (
        <div className='container mx-auto p-4'>
            <div className="mb-4">
                <Carousel />
            </div>

            <div className="flex justify-center items-center flex-wrap gap-4 mb-6">
                <button
                    className={`px-4 py-2 rounded ${selectedGender === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleGenderChange('all')}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 rounded ${selectedGender === 'male' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleGenderChange('male')}
                >
                    Male
                </button>
                <button
                    className={`px-4 py-2 rounded ${selectedGender === 'female' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleGenderChange('female')}
                >
                    Female
                </button>
                <button
                    className={`px-4 py-2 rounded relative ${selectedGender === 'shopping' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
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




            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" onClick={() => setSelectedProduct(product)} className="group relative block">
                            <div className="w-full h-48 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    src={product.img}
                                    alt={product.Product}
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                        </a>

                        <div className="p-4 text-gray-500">
                            <a href="#" onClick={() => setSelectedProduct(product)} className="group">
                                <h5 className="text-xl font-bold mb-2">{product.Product}</h5>
                                <h5 className="text-2xl font-bold mb-2">${product.price}</h5>
                            </a>
                            <p className="text-gray-700 mb-2">Category: {product.category}</p>
                            <p className="text-gray-700 mb-2">Rating: {getStars(product.rating)}</p>
                            {shopping.some(p => p.id === product.id) && (
                                <div className="flex items-center mb-2">
                                    <strong className="mr-2">Quantity:</strong>
                                    <input
                                        type="number"
                                        className="w-16 px-2 py-1 border rounded text-center"
                                        min="1"
                                        max="5"
                                        value={shopping.find(p => p.id === product.id).quantity}
                                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                    />
                                </div>
                            )}
                            <button
                                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                onClick={() => toggleCart(product)}
                            >
                                {shopping.some(p => p.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>




            {selectedProduct && (
                <div className="fixed mt-6 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-lg">
                        <div className="p-6">
                            <h4 className="text-lg font-medium mb-2"> <span>{selectedProduct.Product} </span>  </h4>
                            <p className="text-sm text-gray-500 mb-1"><strong>Price:</strong> ${selectedProduct.price}</p>
                            <p className="text-sm text-gray-500 mb-1"><strong>Category:</strong> {selectedProduct.category}</p>
                            <p className="text-sm text-gray-500 mb-1"><strong>Rating:</strong> {getStars(selectedProduct.rating)}</p>
                            <p className="text-sm text-gray-500 mb-1"><strong>Gender:</strong> {selectedProduct.gender}</p>
                            <p className="text-sm text-gray-500 mb-4 "><strong>Description:</strong>{selectedProduct.description.substring(2)}</p>
                            {selectedProduct.images.map((image, index) => (
                                <img key={index} src={image} alt={selectedProduct.Product} className="w-20 h-24 object-cover inline-block mr-2" />
                            ))}
                        </div>
                        <div className="bg-gray-100 p-4 flex justify-end">
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
                                onClick={() => toggleCart(selectedProduct)}
                            >
                                {shopping.some(p => p.id === selectedProduct.id) ? 'Remove from Cart' : 'Add to Cart'}
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                                onClick={() => setSelectedProduct(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {selectedGender === 'shopping' && shopping.length > 0 && (
                <div className='mt-10 p-5'>
                    <h3 className="text-xl font-semibold mb-5">Shopping Cart</h3>
                    {shopping.map(item => (
                        <div key={item.id} className="flex justify-between items-center mb-2 border-b-2 pb-1">
                            <div>{item.Product}</div>
                            <div>{item.quantity} x ${item.price} = ${(item.quantity * item.price).toFixed(2)}</div>
                        </div>
                    ))}
                    <div className="mt-2 mb-4 text-lg font-semibold">
                        Total Amount: ${getTotalAmount()}
                    </div>
                    <div className="mt-4">
                        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => alert('Proceeding to buy')}>
                            Proceed to Buy
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DemoProduct;
