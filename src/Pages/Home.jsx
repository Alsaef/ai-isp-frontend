import React from 'react';
import Hero from '../components/Hero';
import ServiceFeatures from '../components/ServiceFeatures';
import PricingPackages from '../components/PricingPackages';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ServiceFeatures></ServiceFeatures>
            <PricingPackages></PricingPackages>
        </div>
    );
};

export default Home;