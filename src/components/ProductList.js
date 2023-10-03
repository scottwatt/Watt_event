import React from 'react';
import './ProductList.css';

import product1Image from './texashold.jpg';
import product2Image from './cards.jpg';
import product3Image from './roullettetable.jpg';
import product4Image from './craps.jpg';

class ProductPage extends React.Component {
  state = {
    products: [
      { id: 1, name: 'Poker', price: '$10', image: product1Image },
      { id: 2, name: 'Blackjack', price: '$20', image: product2Image },
      { id: 3, name: 'Roullette', price: '$30', image: product3Image },
      { id: 4, name: 'Craps', price: '$30', image: product4Image },
    ],
  };

  render() {
    return (
      <div className="product-container">
        <h1>Our Products</h1>
        <div className="products-grid">
          {this.state.products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductPage;
