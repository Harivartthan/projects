// src/components/Contact.js
import React from 'react';
import '../styles/styles.css'; // Import the global styles

const Contact = () => {
  return (

    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! Feel free to reach out to us via email or through our social media channels.
        </p>
      </div>
      <div className="contact-icons">
        <a href="mailto:harivartthan3154@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/Email.png" alt="Gmail" className="contact-icon" />
        </a>
        <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
          <img src="/Instagram.png" alt="Instagram" className="contact-icon" />
        </a>
        <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Facebook" className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
