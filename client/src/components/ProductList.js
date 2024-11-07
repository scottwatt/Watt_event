import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

import product1Image from './texashold.jpg';
import product2Image from './cards.jpg';
import product3Image from './roullettetable.jpg';
import product4Image from './craps.jpg';



class ProductPage extends React.Component {
  state = {
    products: [
      { 
        id: 1, 
        name: 'Poker', 
        price: '$10', 
        image: product1Image,
        route: 'Poker'
      },
      { 
        id: 2, 
        name: 'Blackjack', 
        price: '$20', 
        image: product2Image,
        route: 'Blackjack'
      },
      { 
        id: 3, 
        name: 'Roulette', 
        price: '$30', 
        image: product3Image,
        route: 'Roulette'
      },
      { 
        id: 4, 
        name: 'Craps', 
        price: '$30', 
        image: product4Image,
        route: 'Craps'
      },
    ],
  };

  handleProductClick = (product) => {
    this.setState({
      showModal: true,
      selectedProduct: product
    });
  }

  handleModalClose = () => {
    this.setState({
      showModal: false,
      selectedProduct: null
    });
  }

  render() {
    return (
      <div className="product-container">
        <h1>Our Products</h1>
        <div className="products-grid">
          {this.state.products.map((product) => (
            <Link to={product.route} key={product.id}>
              <div className="product">
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductPage;


