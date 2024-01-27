// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/icons8.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
        <Link to="/order" className="nav-link">
          Order
        </Link>
        <Link to="/form" className="nav-link">
          Form
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;


