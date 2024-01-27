// Order.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/styles.css'; // Import the order styles

const Order = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const handlePlaceOrder = () => {
    // Add your logic for placing the order, e.g., sending data to the server
    alert('Order placed successfully!');
  };

  return (
    <div className="order-container">
      <div className="order-box">
        <h2>Your Order</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in the cart.</p>
        )}
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Order;





