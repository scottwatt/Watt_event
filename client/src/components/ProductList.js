import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      id: 1, 
      name: 'Poker', 
      price: '$10', 
      image: '/images/texashold.jpg',
      route: '/poker'
    },
    { 
      id: 2, 
      name: 'Blackjack', 
      price: '$20', 
      image: '/images/cards.jpg',
      route: '/blackjack'
    },
    { 
      id: 3, 
      name: 'Roulette', 
      price: '$30', 
      image: '/images/roulettetable.jpg',
      route: '/roulette'
    },
    { 
      id: 4, 
      name: 'Craps', 
      price: '$30', 
      image: '/images/craps.jpg',
      route: '/craps'
    },
  ];

  const handleProductClick = (product) => {
    setShowModal(true);
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleImageError = (e, productName) => {
    console.log(`Failed to load image for ${productName}`);
    e.target.onerror = null; // Prevents infinite loop if fallback also fails
    e.target.src = '/images/placeholder.jpg'; // Fallback image
  };

  return (
    <div className="product-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Link to={product.route} key={product.id}>
            <div className="product">
              <img 
                src={product.image} 
                alt={product.name}
                onError={(e) => handleImageError(e, product.name)}
              />
              <h2>{product.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;