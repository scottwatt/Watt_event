import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import PricingInfo from '../PricingInfo';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <PricingInfo />
    </>
  );
}

export default Home;