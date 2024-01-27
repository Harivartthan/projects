// Menu.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Menu = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, name: 'Biriyani', price: 250, img: 'biriyani.jpg', description: 'Delicious biriyani with aromatic spices.' },
    { id: 2, name: 'Burger', price: 150, img: 'burger.jpg', description: 'Classic burger with juicy patty and fresh veggies.' },
    { id: 3, name: 'Pizza', price: 200, img: 'pizza.jpg', description: 'Italian-style pizza with a variety of toppings.' },
    { id: 4, name: 'Pasta', price: 180, img: 'pasta.jpg', description: 'Creamy pasta with your choice of sauce.' },
    { id: 5, name: 'Noodles', price: 120, img: 'noodles.jpg', description: 'Stir-fried noodles with colorful vegetables.' },
    { id: 6, name: 'Butter Naan', price: 50, img: 'butternaan.jpg', description: 'Soft and buttery naan bread.' },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    // Show an alert when the item is added to the cart
    alert(`${item.name} added to cart!`);
  };

  const handleClick = (item) => {
    addToCart(item);
  };

  const navigateToOrder = () => {
    navigate('/order', { state: { cart } });
  };

  return (
    <div className="menu-container">
      
      <h2>Menu</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={process.env.PUBLIC_URL + `/images/${item.img}`} alt={item.name} />
            <div className="item-details">
              <p className="item-name">{item.name}</p>
              <p className="item-description">{item.description}</p>
              <p className="item-price">₹{item.price}</p>
              <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-cart-button" onClick={navigateToOrder}>
        View Cart
      </button>
    </div>
  );
};

export default Menu;




