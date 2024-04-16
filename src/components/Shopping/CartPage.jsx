import React from 'react';
// import './index.css';
import Product from './Product'; // Assuming correct import path
import watch1 from '../../assets/ncp4.jpg';

const products = [
    {
        id: 1,
        name: 'Product 1',
        imageUrl: watch1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        details: ['Free Shipping', '30-Day Return Policy', 'Secure Payment'],
    },
    // Add more product objects here
    // Repeat the structure for each additional product
];

function App() {
    // Check if products array is empty or undefined
    if (!products || products.length === 0) {
        return <div>No products available.</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-3xl font-bold text-gray-800">Product Page</h1>
                </div>
            </header>
            <main className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            description={product.description}
                            details={product.details}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
