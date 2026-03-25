import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';

const HomePage = () => {
    return (
        <div className="page-wrapper">
            <Hero />
            <Products />
        </div>
    );
};

export default HomePage;
