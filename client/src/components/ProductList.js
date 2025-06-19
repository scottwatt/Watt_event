// components/ProductList.js - Updated with OptimizedImage
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import './ProductList.css';
import cardsImage from './cards.jpg';
import rouletteTableImage from './roulettetable.jpg';
import texasholdImage from './texashold.jpg';

const ProductPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      id: 1, 
      name: 'Poker', 
      price: '$10', 
      image: texasholdImage,
      route: '/poker'
    },
    { 
      id: 2, 
      name: 'Blackjack', 
      price: '$20', 
      image: cardsImage,
      route: '/blackjack'
    },
    { 
      id: 3, 
      name: 'Roulette', 
      price: '$30', 
      image: rouletteTableImage,
      route: '/roulette'
    },
    { 
      id: 4, 
      name: 'Craps', 
      price: '$30', 
      image: '/images/craps1.jpg',
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

  return (
    <div className="product-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Link to={product.route} key={product.id}>
            <div className="product">
              <OptimizedImage
                src={product.image}
                alt={`${product.name} table rental in Bakersfield`}
                width={300}
                height={200}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
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