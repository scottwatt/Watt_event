import React from 'react';
import './PricingInfo.css';

const PricingInfo = () => {
  return (
    <div className="pricing-info">
      <h2>Pricing Information</h2>
      <br></br>
      <p>For detailed pricing on our services and products, please contact us to request a personalized quote. We offer competitive rates and customized packages to suit your needs.</p>
      <br></br>
      <button onClick={() => window.location.href='/booking'}>Book a day</button>
    </div>
  );
}

export default PricingInfo;